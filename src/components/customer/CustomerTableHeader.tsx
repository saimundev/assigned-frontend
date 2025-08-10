import { TableHead, TableHeader, TableRow } from "../ui/table";

const CustomerTableHeader = () => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead>Customer</TableHead>
        <TableHead>Contact</TableHead>
        <TableHead>Orders</TableHead>
        <TableHead>Total Spent</TableHead>
        <TableHead>Rating</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Last Visit</TableHead>
        <TableHead className="text-right">Actions</TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default CustomerTableHeader;
