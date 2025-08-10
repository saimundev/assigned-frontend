import { useState } from "react";
import OrderStatus from "@/components/order/OrderStatus";
import OrderFiltering from "@/components/order/OrderFiltering";
import OrderHeader from "@/components/order/OrderHeader";
import OrderList from "@/components/order/OrderList";
import CustomModal from "@/components/common/CustomModal";
import OrderModalContent from "@/components/order/OrderModalContent";
import { sampleOrders } from "@/data/orderData";
import type { Order } from "./interface/order.interface";


const Order = () => {
  const [orders, setOrders] = useState<Order[]>(sampleOrders);
  const [statusUpdateDialog, setStatusUpdateDialog] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <OrderHeader />

      {/* Stats overview */}
      <OrderStatus orders={orders} />
      
      {/* Search and filter */}
      <OrderFiltering />

      {/* Tabs */}
      <OrderList />

      {/* Status Update Dialog */}
      <CustomModal
        title="Update Status"
        open={statusUpdateDialog}
        onClose={() => setStatusUpdateDialog(false)}
      >
        <OrderModalContent />
      </CustomModal>
    </div>
  );
};

export default Order;
