import React from 'react';
import { Typography, Link, Box } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome to Peach State Fabrication
      </Typography>
      <Typography paragraph>
        This demo app includes a FastAPI backend and a React frontend for managing projects, quotes, and payments.
      </Typography>
      <Typography>
        Use the navigation above to view projects, quotes, checkout, or login.
      </Typography>
      <Typography sx={{ mt: 2 }}>
        The API status endpoint is available at <Link href="/api">/api</Link>.
      </Typography>
    </Box>
  );
}
