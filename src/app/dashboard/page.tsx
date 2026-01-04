import { Box, Typography } from "@mui/material";

export default function DashboardPage() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Typography variant="body1">
        Welcome to the Admin Dashboard.
        Use the navigation bar to manage Users and Products.
      </Typography>
    </Box>
  );
}
