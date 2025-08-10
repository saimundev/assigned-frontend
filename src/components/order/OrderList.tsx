import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import OrderListContent from "./OrderListContent";
import { tabs } from "@/constants/tabData";
import {
  formatDate,
  formatPrice,
  getPaymentMethodIcon,
  getPaymentStatusBadge,
  getStatusBadge,
} from "./order.utils";
import { sampleOrders } from "@/data/orderData";
import type { Order, OrderStatus } from "./interface/order.interface";

const OrderList = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const [orders, setOrders] = useState<Order[]>(sampleOrders);

  const filteredOrders = orders.filter((order) => {
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "new" && order.status === "pending") ||
      (activeTab === "processing" &&
        (order.status === "confirmed" || order.status === "preparing")) ||
      (activeTab === "completed" && order.status === "completed") ||
      (activeTab === "cancelled" && order.status === "cancelled") ||
      (activeTab === "ready" && order.status === "ready");

    return matchesTab;
  });

  const toggleOrderExpansion = (orderId: string) => {
    if (expandedOrder === orderId) {
      setExpandedOrder(null);
    } else {
      setExpandedOrder(orderId);
    }
  };

  const updateOrderStatus = (order: Order, newStatus: OrderStatus) => {};

  return (
    <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="mt-6">
          <OrderListContent
            orders={filteredOrders}
            expandedOrder={expandedOrder}
            toggleOrderExpansion={toggleOrderExpansion}
            updateOrderStatus={updateOrderStatus}
            formatPrice={formatPrice}
            formatDate={formatDate}
            getStatusBadge={getStatusBadge}
            getPaymentStatusBadge={getPaymentStatusBadge}
            getPaymentMethodIcon={getPaymentMethodIcon}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default OrderList;
