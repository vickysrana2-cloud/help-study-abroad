"use client";

import { signIn } from "next-auth/react";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await signIn("credentials", {
      username,
      password,
      callbackUrl: "/dashboard/users",
    });
  };

  return (
    <>
      <TextField label="Username" onChange={(e) => setUsername(e.target.value)} />
      <TextField label="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleLogin}>Login</Button>
    </>
  );
}
