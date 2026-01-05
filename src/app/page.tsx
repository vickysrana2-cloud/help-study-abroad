"use client";

import { Container, Typography, Button, Box } from "@mui/material";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <Typography variant="h3" gutterBottom>
          Admin Dashboard System
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          This project is a modern admin dashboard built using Next.js,
          Material UI, Zustand for state management, and NextAuth for
          authentication. It demonstrates secure access, user management,
          and product handling using a clean and scalable architecture.
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => router.push("/dashboard")}
        >
          Go to Dashboard
        </Button>
      </Box>
    </Container>
  );
}

