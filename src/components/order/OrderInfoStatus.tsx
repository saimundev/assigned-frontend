import { Printer } from "lucide-react";
import { Button } from "../ui/button";
import type { Order, OrderStatus } from "./interface/order.interface";

type OrderInfoStatusProps = {
  order: Order;
  updateOrderStatus: (order: Order, status: OrderStatus) => void;
};
const OrderInfoStatus = ({
  order,
  updateOrderStatus,
}: OrderInfoStatusProps) => {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {order.status === "pending" && (
        <Button
          className="bg-blue-500 hover:bg-blue-600"
          onClick={() => updateOrderStatus(order, "confirmed")}
        >
          Confirm Order
        </Button>
      )}
      {order.status === "confirmed" && (
        <Button
          className="bg-amber-500 hover:bg-amber-600"
          onClick={() => updateOrderStatus(order, "preparing")}
        >
          Mark as Preparing
        </Button>
      )}
      {order.status === "preparing" && (
        <Button
          className="bg-green-500 hover:bg-green-600"
          onClick={() => updateOrderStatus(order, "ready")}
        >
          Mark as Ready
        </Button>
      )}
      {order.status === "ready" && (
        <Button
          className="bg-green-700 hover:bg-green-800"
          onClick={() => updateOrderStatus(order, "completed")}
        >
          Mark as Completed
        </Button>
      )}
      {(order.status === "pending" ||
        order.status === "confirmed" ||
        order.status === "preparing") && (
        <Button
          variant="outline"
          className="text-red-500 border-red-200 hover:bg-red-50"
          onClick={() => updateOrderStatus(order, "cancelled")}
        >
          Cancel Order
        </Button>
      )}
      <Button variant="outline">
        <Printer className="h-4 w-4 mr-2" />
        Print Receipt
      </Button>
    </div>
  );
};

export default OrderInfoStatus;
