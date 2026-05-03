import React, { useContext, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Typography, Box } from '@mui/material';
import Home from './screens/Home';
import Login from './screens/Login';
import Projects from './screens/Projects';
import Quotes from './screens/Quotes';
import Checkout from './screens/Checkout';
import Dashboard from './screens/Dashboard';
import AuthContext from './context/AuthContext';

function App() {
  const { token, logout } = useContext(AuthContext);
  const [menuOpen] = useState(false);

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default', color: 'text.primary' }}>
      <AppBar position="static" sx={{ backgroundColor: '#000', borderBottom: '1px solid #333' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#FFA500' }}>
            Peach State Fabrication
          </Typography>
          <Button sx={{ color: '#FFA500' }} component={Link} to="/">
            Home
          </Button>
          <Button sx={{ color: '#FFA500' }} component={Link} to="/projects">
            Projects
          </Button>
          <Button sx={{ color: '#FFA500' }} component={Link} to="/quotes">
            Quotes
          </Button>
          <Button sx={{ color: '#FFA500' }} component={Link} to="/checkout">
            Checkout
          </Button>
          {token && (
            <Button sx={{ color: '#FFA500' }} component={Link} to="/dashboard">
              Dashboard
            </Button>
          )}
          {token ? (
            <Button sx={{ color: '#FFA500' }} onClick={logout}>
              Logout
            </Button>
          ) : (
            <Button sx={{ color: '#FFA500' }} component={Link} to="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: 4, paddingBottom: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Box>
  );
}

function NotFound() {
  return (
    <Container sx={{ marginTop: 8, textAlign: 'center', py: 6 }}>
      <Box
        sx={{
          display: 'inline-block',
          px: 5,
          py: 4,
          border: '2px solid #FFA500',
          borderRadius: 3,
          backgroundColor: '#111',
        }}
      >
        <Typography
          variant="h1"
          component="div"
          sx={{
            fontSize: { xs: '4rem', md: '5.5rem' },
            fontWeight: 800,
            color: '#FFA500',
            lineHeight: 1,
          }}
        >
          404
        </Typography>
        <Typography variant="h4" sx={{ color: '#fff', mb: 2 }}>
          Page Not Found
        </Typography>
        <Typography sx={{ color: '#ccc', mb: 3 }}>
          The page you are looking for does not exist. Use the navigation below to continue.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{
            backgroundColor: '#FFA500',
            color: '#000',
            '&:hover': { backgroundColor: '#ffb347' },
          }}
        >
          Return Home
        </Button>
      </Box>
    </Container>
  );
}

export default App;
