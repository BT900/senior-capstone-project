// frontend/src/screens/Dashboard.js
import React, { useEffect, useState } from "react";
import { Container, Typography, TextField, Button, Box, List, ListItem } from "@mui/material";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { token } = useAuth();
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState("");
  const channelId = 1; // example default channel

  const loadMessages = async () => {
    const res = await api.get(`/messages/${channelId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setMessages(res.data);
  };

  const sendMessage = async () => {
    await api.post(
      `/messages/${channelId}`,
      { content },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setContent("");
    loadMessages();
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h4">Secure Messaging</Typography>
      <Box sx={{ mt: 2 }}>
        <TextField
          label="Message"
          fullWidth
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button sx={{ mt: 1 }} variant="contained" onClick={sendMessage}>
          Send
        </Button>
      </Box>

      <List sx={{ mt: 3 }}>
        {messages.map((m) => (
          <ListItem key={m.id}>{m.content}</ListItem>
        ))}
      </List>
    </Container>
  );
}