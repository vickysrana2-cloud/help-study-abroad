"use client";

import { useEffect } from "react";
import { useUserStore } from "@/store/userStore";
import { useParams, useRouter } from "next/navigation";
import { Button, CircularProgress } from "@mui/material";

export default function UserDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { selectedUser, loading, fetchUserById } = useUserStore();

  useEffect(() => {
    fetchUserById(id as string);
  }, [id, fetchUserById]);

  if (loading || !selectedUser) return <CircularProgress />;

  return (
    <>
      <Button onClick={() => router.push("/dashboard/users")}>
        Back to Users
      </Button>

      <h2>
        {selectedUser.firstName} {selectedUser.lastName}
      </h2>
      <p>Email: {selectedUser.email}</p>
      <p>Phone: {selectedUser.phone}</p>
      <p>Gender: {selectedUser.gender}</p>
      <p>Company: {selectedUser.company?.name}</p>
    </>
  );
}
