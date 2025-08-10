import type { PaymentMethod } from "@/pages/OrderPage";
import {  CreditCard, DollarSign } from "lucide-react";
import { Badge } from "../ui/badge";

export const formatPrice = (price: number) => {
  return `$${(price / 100).toFixed(2)}`;
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString();
};

export const getStatusBadge = (status: string) => {
  switch (status) {
    case "pending":
    case "new":
      return <Badge className="bg-blue-500">New</Badge>;
    case "confirmed":
      return <Badge className="bg-indigo-500">Confirmed</Badge>;
    case "processing":
    case "preparing":
      return <Badge className="bg-amber-500">Processing</Badge>;
    case "ready":
      return <Badge className="bg-green-500">Ready</Badge>;
    case "completed":
      return <Badge className="bg-green-700">Completed</Badge>;
    case "cancelled":
      return <Badge className="bg-red-500">Cancelled</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

export const getPaymentStatusBadge = (status: string) => {
  switch (status) {
    case "pending":
      return <Badge className="bg-yellow-500">Pending</Badge>;
    case "processing":
      return <Badge className="bg-blue-500">Processing</Badge>;
    case "completed":
      return <Badge className="bg-green-500">Completed</Badge>;
    case "failed":
      return <Badge className="bg-red-500">Failed</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

export const getPaymentMethodIcon = (method: PaymentMethod) => {
  switch (method) {
    case "credit_card":
      return <CreditCard className="h-4 w-4 mr-1" />;
    case "paypal":
      return <DollarSign className="h-4 w-4 mr-1" />;
    case "cash":
      return <DollarSign className="h-4 w-4 mr-1" />;
    case "apple_pay":
    case "google_pay":
      return <CreditCard className="h-4 w-4 mr-1" />;
    default:
      return <CreditCard className="h-4 w-4 mr-1" />;
  }
};
