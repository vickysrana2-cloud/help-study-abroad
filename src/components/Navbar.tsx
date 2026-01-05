"use client";

import { AppBar, Toolbar, Button } from "@mui/material";
import { signOut } from "next-auth/react";
import { useAuthStore } from "@/store/authStore";

export default function Navbar() {
  const clearAuth = useAuthStore((s) => s.logout);

  const handleLogout = async () => {
    clearAuth(); 
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" href="/dashboard/users">
          Users
        </Button>

        <Button color="inherit" href="/dashboard/products">
          Products
        </Button>

        <Button color="inherit" href="/dashboard">
          Dashboard
        </Button>

        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
