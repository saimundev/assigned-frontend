import { formatPrice } from "./order.utils";

type OrderItemProps = {
  item: any;
};

const OrderItem = ({ item }: OrderItemProps) => {
  return (
    <div className="flex justify-between">
      <div>
        <p className="font-medium">
          {item.quantity}x {item.name}
        </p>
        {item.options && (
          <p className="text-sm text-muted-foreground">
            {item.options.join(", ")}
          </p>
        )}
        {item.notes && (
          <p className="text-xs italic text-muted-foreground">
            Note: {item.notes}
          </p>
        )}
      </div>
      <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
    </div>
  );
};

export default OrderItem;
