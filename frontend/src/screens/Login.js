import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';
import AuthContext from '../context/AuthContext';

export default function Login() {
  const { login, error } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setLoginError(err.response?.data?.detail || 'Unable to login');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        mx: 'auto',
        p: 4,
        borderRadius: 2,
        backgroundColor: '#111',
        border: '1px solid #333',
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ color: '#FFA500' }}>
        Login
      </Typography>
      {(loginError || error) && <Alert severity="error">{loginError || error}</Alert>}
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
        sx={{ backgroundColor: '#000', input: { color: '#fff' }, '& .MuiInputLabel-root': { color: '#FFA500' } }}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
        sx={{ backgroundColor: '#000', input: { color: '#fff' }, '& .MuiInputLabel-root': { color: '#FFA500' } }}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 2, backgroundColor: '#FFA500', color: '#000', '&:hover': { backgroundColor: '#ffb347' } }}
      >
        Login
      </Button>
    </Box>
  );
}
