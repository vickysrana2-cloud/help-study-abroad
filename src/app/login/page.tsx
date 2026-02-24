"use client";

import { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Alert,
  Divider,
} from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface LoginForm {
  username: string;
  password: string;
}

const demoUsers: LoginForm[] = [
  { username: "michaelw", password: "michaelwpass" },
  { username: "emilys", password: "emilyspass" },
];

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState<LoginForm>({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Autofill demo user
  const autofillDemo = (user: LoginForm) => {
    setFormData(user);
  };

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      username: formData.username,
      password: formData.password,
      redirect: false,
    });

    setLoading(false);

    if (result?.ok) {
      router.replace("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 10,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: "background.paper",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Admin Login
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <TextField
        label="Username"
        name="username"
        fullWidth
        margin="normal"
        value={formData.username}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <TextField
        label="Password"
        name="password"
        type="password"
        fullWidth
        margin="normal"
        value={formData.password}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 2 }}
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </Button>

      {/* Demo Accounts – DEV ONLY */}
      {process.env.NODE_ENV === "development" && (
        <Box
          sx={{
            mt: 3,
            p: 2,
            borderRadius: 1,
            bgcolor: "grey.100",
          }}
        >
          <Typography variant="caption" fontWeight={600}>
            Demo Accounts for Testing Purposes
          </Typography>

          <Divider sx={{ my: 1 }} />

          {demoUsers.map((user) => (
            <Box key={user.username} sx={{ mb: 1 }}>
              <Typography variant="caption" display="block">
                {user.username} / {user.password}
              </Typography>

              <Button size="small" onClick={() => autofillDemo(user)}>
                Use this account
              </Button>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
