import type { OrderStatus } from "./interface/order.interface";
import OrderPaymentInfo from "./OrderPaymentInfo";
import OrderCustomerInfo from "./OrderCustomerInfo";
import OrderInfoStatus from "./OrderInfoStatus";
import OrderItem from "./OrderItem";

type OrderListDetailsProps = {
  order: any;
  updateOrderStatus: (order: any, newStatus: OrderStatus) => void;
  formatPrice: (price: number) => string;
};

const OrderListDetails = ({
  order,
  formatPrice,
  updateOrderStatus,
}: OrderListDetailsProps) => {
  return (
    <div className="border-t p-4">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium mb-2">Order Items</h4>
          <div className="space-y-3">
            {order.items.map((item: any, index: number) => (
              <OrderItem key={index} item={item} />
            ))}
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>{formatPrice(order.total * 0.909)}</p>{" "}
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <p>Tax (10%)</p>
                <p>{formatPrice(order.total * 0.091)}</p>{" "}
              </div>
              <div className="flex justify-between font-bold mt-1">
                <p>Total</p>
                <p>{formatPrice(order.total)}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* Customer Information */}
          <OrderCustomerInfo order={order} />

          {/* Payment Information */}
          {order.payment && <OrderPaymentInfo order={order} />}

          {/* Order Status */}
          <OrderInfoStatus
            order={order}
            updateOrderStatus={updateOrderStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderListDetails;
