import { MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import type { OrderStatus } from "./interface/order.interface";

type OrderCardActionProps = {
  order: any;
  updateOrderStatus: (order: any, status: OrderStatus) => void;
};

const OrderCardAction = ({
  order,
  updateOrderStatus,
}: OrderCardActionProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {order.status === "pending" && (
          <DropdownMenuItem
            onClick={() => updateOrderStatus(order, "confirmed")}
          >
            Mark as Confirmed
          </DropdownMenuItem>
        )}
        {order.status === "confirmed" && (
          <DropdownMenuItem
            onClick={() => updateOrderStatus(order, "preparing")}
          >
            Mark as Preparing
          </DropdownMenuItem>
        )}
        {order.status === "preparing" && (
          <DropdownMenuItem onClick={() => updateOrderStatus(order, "ready")}>
            Mark as Ready
          </DropdownMenuItem>
        )}
        {order.status === "ready" && (
          <DropdownMenuItem
            onClick={() => updateOrderStatus(order, "completed")}
          >
            Mark as Completed
          </DropdownMenuItem>
        )}
        {(order.status === "pending" ||
          order.status === "confirmed" ||
          order.status === "preparing") && (
          <DropdownMenuItem
            onClick={() => updateOrderStatus(order, "cancelled")}
          >
            Cancel Order
          </DropdownMenuItem>
        )}
        <DropdownMenuItem>Print Receipt</DropdownMenuItem>
        <DropdownMenuItem>Contact Customer</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default OrderCardAction;
