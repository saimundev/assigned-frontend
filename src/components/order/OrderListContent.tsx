import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import type { ReactNode } from "react";
import type { OrderStatus, PaymentMethod } from "./interface/order.interface";
import OrderCardAction from "./OrdercCardAction";
import OrderListDetails from "./OrderListDetails";

interface OrdersListProps {
  orders: any[];
  expandedOrder: string | null;
  toggleOrderExpansion: (orderId: string) => void;
  updateOrderStatus: (order: any, newStatus: OrderStatus) => void;
  formatPrice: (price: number) => string;
  formatDate: (dateString: string) => string;
  getStatusBadge: (status: string) => ReactNode;
  getPaymentStatusBadge: (status: string) => ReactNode;
  getPaymentMethodIcon: (method: PaymentMethod) => ReactNode;
}

const OrderListContent = ({
  orders,
  expandedOrder,
  toggleOrderExpansion,
  updateOrderStatus,
  formatPrice,
  formatDate,
  getStatusBadge,
}: OrdersListProps) => {
  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <Card
          key={order.id}
          className={order.status === "pending" ? "border-blue-300" : ""}
        >
          <CardContent className="p-0">
            <div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div>
                  <p className="font-medium">{order.id}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(order.timestamp)}
                  </p>
                </div>
                <div className="md:ml-6">
                  <p className="font-medium">{order.customer.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {order.customer.phone}
                  </p>
                </div>
                {order.customer.tableNumber && (
                  <div className="md:ml-6">
                    <p className="text-sm">
                      Table:{" "}
                      <span className="font-medium">
                        {order.customer.tableNumber}
                      </span>
                    </p>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-medium">{formatPrice(order.total)}</p>
                  <p className="text-sm text-muted-foreground">
                    {order.items.reduce((sum, item) => sum + item.quantity, 0)}{" "}
                    items
                  </p>
                </div>
                <div>{getStatusBadge(order.status)}</div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleOrderExpansion(order.id)}
                  >
                    {expandedOrder === order.id ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                  <OrderCardAction
                    updateOrderStatus={updateOrderStatus}
                    order={order}
                  />
                </div>
              </div>
            </div>

            {expandedOrder === order.id && (
              <OrderListDetails
                order={order}
                formatPrice={formatPrice}
                updateOrderStatus={updateOrderStatus}
              />
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default OrderListContent;
