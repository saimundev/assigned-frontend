import { Mail, MapPin, Phone } from "lucide-react";

type OrderCustomerInfoProps = {
  order: any;
};

const OrderCustomerInfo = ({ order }: OrderCustomerInfoProps) => {
  return (
    <div>
      <h4 className="font-medium mb-2">Customer Information</h4>
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
          <p>{order.customer.phone}</p>
        </div>
        {order.customer.email && (
          <div className="flex items-start gap-2">
            <Mail className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p>{order.customer.email}</p>
          </div>
        )}
        {order.customer.tableNumber && (
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p>Table {order.customer.tableNumber}</p>
          </div>
        )}
        {order.customer.specialRequests && (
          <div className="mt-4">
            <h5 className="text-sm font-medium mb-1">Special Requests:</h5>
            <p className="text-sm p-2 bg-gray-50 rounded-md">
              {order.customer.specialRequests}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderCustomerInfo;
