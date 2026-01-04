import { Table, TableBody, TableCell, TableRow } from "@mui/material";

export default function UserTable({
  users,
  onSelect,
}: {
  users: any[];
  onSelect: (id: number) => void;
}) {
  return (
    <Table>
      <TableBody>
        {users.map((user) => (
          <TableRow hover sx={{ cursor: "pointer" }} key={user.id} onClick={() => onSelect(user.id)}>
            <TableCell>{user.firstName}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.company?.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
