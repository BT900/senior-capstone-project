import os
from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session
import stripe
from ..auth import get_db
from ..models import Payment

router = APIRouter(prefix="/api/payments", tags=["payments"])

stripe.api_key = os.getenv("STRIPE_SECRET_KEY", "")

class PaymentCreate(BaseModel):
    amount: float

@router.post("/")
def create_payment(payment_in: PaymentCreate, db: Session = Depends(get_db)):
    if not stripe.api_key:
        raise HTTPException(status_code=500, detail="Stripe secret key is not configured")

    intent = stripe.PaymentIntent.create(
        amount=int(payment_in.amount * 100),
        currency="usd",
        payment_method_types=["card"],
    )

    payment = Payment(client_secret=intent.client_secret, amount=payment_in.amount)
    db.add(payment)
    db.commit()
    db.refresh(payment)
    return {
        "id": payment.id,
        "client_secret": payment.client_secret,
        "amount": payment.amount,
    }
