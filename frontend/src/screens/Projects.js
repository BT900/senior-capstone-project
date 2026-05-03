import React, { useEffect, useState } from 'react';
import { Typography, Box, Card, CardContent, Grid, Button } from '@mui/material';
import api from '../services/api';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects/')
      .then((response) => setProjects(response.data))
      .catch(() => setProjects([]));
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ color: '#FFA500' }}>
        Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.length === 0 ? (
          <Typography>No projects found yet.</Typography>
        ) : (
          projects.map((project) => (
            <Grid item xs={12} md={6} key={project.id}>
              <Card sx={{ backgroundColor: '#111', border: '1px solid #333' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#FFA500' }}>{project.name}</Typography>
                  <Typography>{project.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
      <Button
        sx={{ mt: 3, backgroundColor: '#FFA500', color: '#000', '&:hover': { backgroundColor: '#ffb347' } }}
        variant="contained"
        href="/"
      >
        Back to Home
      </Button>
    </Box>
  );
}
