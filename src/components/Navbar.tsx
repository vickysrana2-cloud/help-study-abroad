"use client";

import { AppBar, Toolbar, Button } from "@mui/material";
import { useAuthStore } from "@/store/authStore";

export default function Navbar() {
  const logout = useAuthStore((s) => s.logout);

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" href="/dashboard/users">
          Users
        </Button>
        <Button color="inherit" href="/dashboard/products">
          Products
        </Button>
        <Button color="inherit" onClick={logout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
