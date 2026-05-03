import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import './index.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFA500',
      contrastText: '#000',
    },
    secondary: {
      main: '#FF8C00',
    },
    background: {
      default: '#000',
      paper: '#111',
    },
    text: {
      primary: '#fff',
      secondary: '#f5f5f5',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          background: 'linear-gradient(135deg, #FFA500 0%, #FF8C00 100%)',
          color: '#000',
          boxShadow: '0 6px 18px rgba(255, 165, 0, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #FFB233 0%, #FFA500 100%)',
          },
        },
        outlined: {
          borderColor: '#FFA500',
          color: '#FFA500',
          '&:hover': {
            backgroundColor: 'rgba(255, 165, 0, 0.08)',
            borderColor: '#FF8C00',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#111',
          border: '1px solid #222',
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
