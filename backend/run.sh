#!/bin/sh
PORT=${PORT:-8080}
uvicorn app.main:app --host 0.0.0.0 --port "$PORT" --reload
