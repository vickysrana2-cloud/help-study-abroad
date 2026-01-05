
"use client";

import { Button, TextField, Box, Typography } from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const result = await signIn("credentials", {
      username,
      password,
      redirect: false, // IMPORTANT
    });

    if (result?.ok) {
      router.replace("/dashboard"); // ✅ THIS IS THE FIX
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 10 }}>
      <Typography variant="h5" gutterBottom>
        Admin Login
      </Typography>

      <TextField
        label="Username"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 2 }}
        onClick={handleLogin}
      >
        Login
      </Button>
    </Box>
  );
}
