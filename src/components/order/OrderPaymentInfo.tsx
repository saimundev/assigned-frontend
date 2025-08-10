import { getPaymentMethodIcon, getPaymentStatusBadge } from "./order.utils";

type OrderPaymentInfoProps = {
  order: any;
};

const OrderPaymentInfo = ({ order }: OrderPaymentInfoProps) => {
  return (
    <div className="mt-4">
      <h5 className="text-sm font-medium mb-1">Payment Information:</h5>
      <div className="p-2 bg-gray-50 rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {getPaymentMethodIcon(order.payment.method)}
            <span className="capitalize">
              {order.payment.method.replace("_", " ")}
            </span>
          </div>
          {getPaymentStatusBadge(order.payment.status)}
        </div>
        {order.payment.transactionId && (
          <p className="text-xs text-muted-foreground mt-1">
            Transaction ID: {order.payment.transactionId}
          </p>
        )}
      </div>
    </div>
  );
};

export default OrderPaymentInfo;
