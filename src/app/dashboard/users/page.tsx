"use client";

import { useEffect, useState } from "react";
import { useUserStore } from "@/store/userStore";
import UserTable from "@/components/UserTable";
import { Button, TextField, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";

export default function UsersPage() {
  const router = useRouter();
  const { users, loading, fetchUsers, searchUsers } = useUserStore();
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers(10, 0);
  }, [fetchUsers]);

  const handleSearch = () => {
    if (search.trim()) {
      searchUsers(search);
    } else {
      fetchUsers(10, 0);
    }
  };

  return (
    <>
      <h2>Users</h2>

      <TextField
        label="Search users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>

      {loading ? (
        <CircularProgress />
      ) : (
        <UserTable
          users={users}
          onSelect={(id) => router.push(`/dashboard/users/${id}`)}
        />
      )}
    </>
  );
}
