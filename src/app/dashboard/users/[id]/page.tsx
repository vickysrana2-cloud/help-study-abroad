"use client";

import { useEffect } from "react";
import { useUserStore } from "@/store/userStore";
import { useParams, useRouter } from "next/navigation";
import {
  Button,
  CircularProgress,
  Box,
  Typography,
  Avatar,
  Paper,
} from "@mui/material";

export default function UserDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { selectedUser, loading, fetchUserById } = useUserStore();

  useEffect(() => {
    if (id) {
      fetchUserById(id as string);
    }
  }, [id, fetchUserById]);

  if (loading || !selectedUser) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box p={4} minHeight="100vh">
      {/* Back Button */}
      <Button
        variant="outlined"
        onClick={() => router.push("/dashboard/users")}
        sx={{ mb: 3 }}
      >
        ← Back to Users
      </Button>

      {/* Full-width Card */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: "100%",
          minHeight: "70vh",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "300px 1fr" },
            gap: 4,
            height: "100%",
          }}
        >
          {/* Left Section */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Avatar
              src={selectedUser.image}
              alt={selectedUser.firstName}
              sx={{ width: 140, height: 140, mb: 2 }}
            />

            <Typography variant="h5" fontWeight="bold">
              {selectedUser.firstName} {selectedUser.lastName}
            </Typography>

            <Typography color="text.secondary">
              {selectedUser.company?.name}
            </Typography>
          </Box>

          {/* Right Section */}
          <Box>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>

            <Typography>
              <strong>Email:</strong> {selectedUser.email}
            </Typography>
            <Typography>
              <strong>Phone:</strong> {selectedUser.phone}
            </Typography>
            <Typography>
              <strong>Gender:</strong> {selectedUser.gender}
            </Typography>

            <Box mt={3}>
              <Typography variant="h6" gutterBottom>
                Company
              </Typography>
              <Typography>{selectedUser.company?.name}</Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
