"use client";

import { useEffect, useState } from "react";
import { useUserStore } from "@/store/userStore";
import UserTable from "@/components/UserTable";
import {
  Button,
  TextField,
  CircularProgress,
  Box,
  Pagination,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function UsersPage() {
  const router = useRouter();

  const {
    users,
    total,
    page,
    limit,
    loading,
    fetchUsers,
    setPage,
    searchUsers,
  } = useUserStore();

  const [search, setSearch] = useState("");

 
  useEffect(() => {
    fetchUsers();
  }, [page, fetchUsers]);

 
  const handleSearch = () => {
    if (search.trim()) {
      searchUsers(search);
    } else {
      setPage(1);
      fetchUsers();
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        Users
      </Typography>

      {/* Search Bar */}
      <Box display="flex" gap={2} mb={3}>
        <TextField
          label="Search users"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Box>

      {/* Users Table */}
      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <UserTable
          users={users}
          onSelect={(id) => router.push(`/dashboard/users/${id}`)}
        />
      )}

      {/* Pagination */}
      {total > limit && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            count={Math.ceil(total / limit)}
            page={page}
            onChange={(_, value) => setPage(value)}
            color="primary"
            disabled={loading}
          />
        </Box>
      )}
    </Box>
  );
}
