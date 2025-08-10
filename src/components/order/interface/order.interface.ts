export type OrderStatus =
  | "pending"
  | "confirmed"
  | "preparing"
  | "ready"
  | "completed"
  | "cancelled";

// Payment method type
export type PaymentMethod =
  | "credit_card"
  | "paypal"
  | "cash"
  | "apple_pay"
  | "google_pay";

// Cart item type
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  options?: string[];
  notes?: string;
  prepTime?: number;
}

// Order type
export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  customer: {
    name: string;
    phone: string;
    email?: string;
    tableNumber?: string;
    specialRequests?: string;
  };
  payment?: {
    method: PaymentMethod;
    status: "pending" | "processing" | "completed" | "failed";
    transactionId?: string;
  };
  timestamp: string;
  estimatedReadyTime?: string;
  currentStep: number;
  totalSteps: number;
  restaurant: string;
  menuId: string;
}