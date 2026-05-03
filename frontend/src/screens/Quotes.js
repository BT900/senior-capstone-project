import React, { useEffect, useState } from 'react';
import { Typography, Box, Card, CardContent, Grid } from '@mui/material';
import api from '../services/api';

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    api.get('/quotes/')
      .then((response) => setQuotes(response.data))
      .catch(() => setQuotes([]));
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ color: '#FFA500' }}>
        Quotes
      </Typography>
      <Grid container spacing={2}>
        {quotes.length === 0 ? (
          <Typography>No quotes available.</Typography>
        ) : (
          quotes.map((quote) => (
            <Grid item xs={12} md={6} key={quote.id}>
              <Card sx={{ backgroundColor: '#111', border: '1px solid #333' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#FFA500' }}>{quote.name}</Typography>
                  <Typography>{quote.details}</Typography>
                  <Typography>Status: {quote.status}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}
