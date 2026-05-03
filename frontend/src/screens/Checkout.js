import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';
import api from '../services/api';

export default function Checkout() {
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCheckout = async () => {
    setError(null);
    try {
      const response = await api.post('/payments/', { amount: Number(amount) || 0 });
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.detail || 'Stripe payment failed');
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        p: 4,
        backgroundColor: '#111',
        border: '1px solid #333',
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ color: '#FFA500' }}>
        Checkout
      </Typography>
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
        fullWidth
        margin="normal"
        sx={{ backgroundColor: '#000', input: { color: '#fff' }, '& .MuiInputLabel-root': { color: '#FFA500' } }}
      />
      <Button
        variant="contained"
        onClick={handleCheckout}
        sx={{ mt: 2, backgroundColor: '#FFA500', color: '#000', '&:hover': { backgroundColor: '#ffb347' } }}
      >
        Create Payment
      </Button>
      {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
      {result && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" sx={{ color: '#FFA500' }}>Payment created</Typography>
          <Typography>Amount: ${result.amount}</Typography>
          <Typography>Client Secret: {result.client_secret}</Typography>
        </Box>
      )}
    </Box>
  );
}
