import { CheckCircle, Clock, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const OrderStatus = ({ orders }: any) => {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">New Orders</CardTitle>
          <Clock className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {orders.filter((order) => order.status === "pending").length}
          </div>
          <p className="text-xs text-muted-foreground">
            Waiting to be processed
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Processing</CardTitle>
          <Clock className="h-4 w-4 text-amber-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {
              orders.filter(
                (order) =>
                  order.status === "confirmed" || order.status === "preparing"
              ).length
            }
          </div>
          <p className="text-xs text-muted-foreground">
            Currently being prepared
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Completed Today</CardTitle>
          <CheckCircle className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {orders.filter((order) => order.status === "completed").length}
          </div>
          <p className="text-xs text-muted-foreground">
            Successfully fulfilled
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Cancelled</CardTitle>
          <XCircle className="h-4 w-4 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {orders.filter((order) => order.status === "cancelled").length}
          </div>
          <p className="text-xs text-muted-foreground">
            Orders that were cancelled
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderStatus;
