import { Clock, ChefHat, CheckCircle } from "lucide-react";
import { kitchenOrders } from "@/data/KitchenData";
import StatusCard from "../common/StatusCard";
import KitchenOrderCard from "./KitchenOrderCard";
import StatusDataNotFound from "./StatusDataNotFound";
import CommonHeader from "../common/CommonHeader";

const Kitchen = () => {
  const pendingOrders = kitchenOrders.filter(
    (order) => order.status === "pending"
  );
  const preparingOrders = kitchenOrders.filter(
    (order) => order.status === "preparing"
  );
  const readyOrders = kitchenOrders.filter((order) => order.status === "ready");

  return (
    <div className="space-y-6">
      <CommonHeader
        title="Kitchen View"
        description="Real-time order management for kitchen staff"
      />

      {/* Kitchen Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatusCard title="Pending Orders" count={pendingOrders.length} />
        <StatusCard
          title="In Progress"
          count={preparingOrders.length}
          className="text-blue-600"
        />
        <StatusCard
          title="Ready Orders"
          count={readyOrders.length}
          className="text-green-600"
        />
        <StatusCard
          title="Avg. Prep Time"
          count={"12 min"}
          className="text-amber-600"
        />
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pending Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-orange-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              Pending ({pendingOrders.length})
            </h2>
          </div>
          <div className="space-y-4">
            {pendingOrders.map((order) => (
              <KitchenOrderCard key={order.id} order={order} />
            ))}
            {pendingOrders.length === 0 && (
              <StatusDataNotFound title="No pending orders" />
            )}
          </div>
        </div>

        {/* In Progress Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <ChefHat className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              In Progress ({preparingOrders.length})
            </h2>
          </div>
          <div className="space-y-4">
            {preparingOrders.map((order) => (
              <KitchenOrderCard key={order.id} order={order} />
            ))}
            {preparingOrders.length === 0 && (
              <StatusDataNotFound title="No orders in progress" />
            )}
          </div>
        </div>

        {/* Ready Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              Ready ({readyOrders.length})
            </h2>
          </div>
          <div className="space-y-4">
            {readyOrders.map((order) => (
              <KitchenOrderCard key={order.id} order={order} />
            ))}
            {readyOrders.length === 0 && (
              <StatusDataNotFound title="No ready orders" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
