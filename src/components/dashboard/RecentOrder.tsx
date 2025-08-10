import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const recentOrders = [
  {
    id: "#001",
    table: "T-05",
    items: "Pasta, Salad",
    status: "Served",
    time: "2:30 PM",
    total: "$28.50",
  },
  {
    id: "#002",
    table: "T-12",
    items: "Pizza, Coke",
    status: "In Progress",
    time: "2:45 PM",
    total: "$22.00",
  },
  {
    id: "#003",
    table: "T-08",
    items: "Burger, Fries",
    status: "Pending",
    time: "3:00 PM",
    total: "$18.75",
  },
  {
    id: "#004",
    table: "T-03",
    items: "Steak, Wine",
    status: "Served",
    time: "3:15 PM",
    total: "$45.00",
  },
  {
    id: "#005",
    table: "T-15",
    items: "Soup, Bread",
    status: "In Progress",
    time: "3:20 PM",
    total: "$12.50",
  },
];

const RecentOrder = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">
          Recent Orders
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Table</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Time</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.table}</TableCell>
                <TableCell className="max-w-[200px] truncate">
                  {order.items}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      order.status === "Served"
                        ? "default"
                        : order.status === "In Progress"
                        ? "secondary"
                        : "destructive"
                    }
                    className={
                      order.status === "Served"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : order.status === "In Progress"
                        ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                        : "bg-orange-100 text-orange-800 hover:bg-orange-100"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>{order.time}</TableCell>
                <TableCell className="text-right font-medium">
                  {order.total}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentOrder;
