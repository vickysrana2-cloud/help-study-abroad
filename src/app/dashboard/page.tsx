
"use client";

import { useEffect } from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  Stack,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useDashboardStore } from "@/store/dashboardStore";

export default function DashboardPage() {
  const router = useRouter();

  const {
    totalUsers,
    totalProducts,
    totalCategories,
    fetchDashboardStats,
  } = useDashboardStore();

  useEffect(() => {
    fetchDashboardStats();
  }, [fetchDashboardStats]);

  return (
    <Container maxWidth="lg">
      {/* Header */}
      <Stack spacing={1} sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4">Admin Dashboard</Typography>
        <Typography variant="body1" color="text.secondary">
          High-level overview of the system with quick access to
          user and product management.
        </Typography>
      </Stack>

      {/* Summary Cards */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          mb: 4,
        }}
      >
        <Paper sx={{ p: 3, flex: 1, minWidth: 220 }}>
          <Typography variant="h6">Total Users</Typography>
          <Typography variant="h4">{totalUsers}</Typography>
        </Paper>

        <Paper sx={{ p: 3, flex: 1, minWidth: 220 }}>
          <Typography variant="h6">Total Products</Typography>
          <Typography variant="h4">{totalProducts}</Typography>
        </Paper>

        <Paper sx={{ p: 3, flex: 1, minWidth: 220 }}>
          <Typography variant="h6">Categories</Typography>
          <Typography variant="h4">{totalCategories}</Typography>
        </Paper>
      </Box>

      {/* Management Sections */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        <Paper
          sx={{
            p: 3,
            flex: 1,
            minWidth: 300,
            cursor: "pointer",
          }}
          onClick={() => router.push("/dashboard/users")}
        >
          <Typography variant="h6" gutterBottom>
            User Management
          </Typography>
          <Typography variant="body2" color="text.secondary">
            View registered users, search records, and inspect
            detailed user profiles.
          </Typography>
        </Paper>

        <Paper
          sx={{
            p: 3,
            flex: 1,
            minWidth: 300,
            cursor: "pointer",
          }}
          onClick={() => router.push("/dashboard/products")}
        >
          <Typography variant="h6" gutterBottom>
            Product Management
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Browse products, filter by category, search items,
            and view detailed product information.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}
