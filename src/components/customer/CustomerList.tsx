import { Mail, Phone, Star } from "lucide-react";
import { TableCell, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { getStatusColor } from "./Customer.utils";

type CustomerListProps = {
    customer: {
    id: number;
    name: string;
    email: string;
    phone: string;
    orderCount: number;
    totalSpent: number;
    status: string;
    rating: number;
    lastVisit: string;
  };
};

export const CustomerList = ({ customer }: CustomerListProps) => {
  return (
    <TableRow>
      <TableCell>
        <div>
          <div className="font-medium text-gray-900">{customer.name}</div>
          <div className="text-sm text-gray-500">
            ID: #{customer.id.toString().padStart(3, "0")}
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className="space-y-1">
          <div className="flex items-center text-sm text-gray-600">
            <Mail className="w-3 h-3 mr-1" />
            {customer.email}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Phone className="w-3 h-3 mr-1" />
            {customer.phone}
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className="font-medium text-gray-900">{customer.orderCount}</div>
        <div className="text-sm text-gray-500">orders</div>
      </TableCell>
      <TableCell>
        <div className="font-medium text-gray-900">
          ${customer.totalSpent.toFixed(2)}
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 mr-1" />
          <span className="font-medium text-gray-900">{customer.rating}</span>
        </div>
      </TableCell>
      <TableCell>
        <Badge className={getStatusColor(customer.status)}>
          {customer.status}
        </Badge>
      </TableCell>
      <TableCell>
        <div className="text-sm text-gray-600">{customer.lastVisit}</div>
      </TableCell>
      <TableCell className="text-right">
        <Button variant="outline" size="sm">
          <Mail className="w-4 h-4 mr-2" />
          Send Offer
        </Button>
      </TableCell>
    </TableRow>
  );
};
