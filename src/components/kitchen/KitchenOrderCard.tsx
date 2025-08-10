import { CheckCircle, ChefHat } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import type { kitchenOrders } from "@/data/KitchenData";

const KitchenOrderCard = ({ order }: { order: (typeof kitchenOrders)[0] }) => (
  <Card
    className={`shadow-sm hover:shadow-md transition-shadow ${
      order.priority === "high" ? "border-l-4 border-l-red-500" : ""
    }`}
  >
    <CardHeader className="pb-3">
      <div className="flex justify-between items-start">
        <div>
          <CardTitle className="text-lg font-semibold text-gray-900">
            {order.id}
          </CardTitle>
          <p className="text-sm text-gray-500">
            {order.table} • {order.orderTime}
          </p>
        </div>
        <div className="text-right">
          <Badge
            variant={order.priority === "high" ? "destructive" : "secondary"}
          >
            {order.priority === "high" ? "High Priority" : "Normal"}
          </Badge>
          <p className="text-xs text-gray-500 mt-1">{order.estimatedTime}</p>
        </div>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div>
        <h4 className="font-medium text-gray-900 mb-2">Items:</h4>
        <div className="space-y-2">
          {order.items.map((item, index) => (
            <div key={index} className="bg-gray-50 p-2 rounded">
              <div className="flex justify-between items-start">
                <span className="font-medium text-sm">
                  {item.quantity}x {item.name}
                </span>
              </div>
              {item.notes && (
                <p className="text-xs text-gray-600 mt-1 italic">
                  Note: {item.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        {order.status === "pending" && (
          <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
            <ChefHat className="w-4 h-4 mr-2" />
            Start Preparing
          </Button>
        )}
        {order.status === "preparing" && (
          <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
            <CheckCircle className="w-4 h-4 mr-2" />
            Mark Ready
          </Button>
        )}
        {order.status === "ready" && (
          <Button size="sm" className="flex-1 bg-transparent" variant="outline">
            <CheckCircle className="w-4 h-4 mr-2" />
            Order Ready
          </Button>
        )}
      </div>
    </CardContent>
  </Card>
);

export default KitchenOrderCard;
