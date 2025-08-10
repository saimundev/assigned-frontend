import {
  Archive,
  ChefHat,
  FileText,
  Home,
  Megaphone,
  Menu,
  MessageCircle,
  Settings,
  ShoppingBag,
  Table,
  Users,
} from "lucide-react";

export const sidebarMenuItems = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: Home,
  },
  {
    title: "Orders",
    url: "/admin/order",
    icon: ShoppingBag,
  },
  {
    title: "Menu",
    url: "/admin/menu-card",
    icon: Menu,
  },
  {
    title: "Tables",
    url: "/admin/table",
    icon: Table,
  },
  {
    title: "Kitchen View",
    url: "/admin/kitchen",
    icon: ChefHat,
  },
  {
    title: "Customers",
    url: "/admin/customer",
    icon: Users,
  },
  // {
  //   title: "Campaigns",
  //   url: "/admin/campaign",
  //   icon: Megaphone,
  // },
  // {
  //   title: "UGC Content",
  //   url: "/admin/content-manager",
  //   icon: FileText,
  // },
  // {
  //   title: "Live Chat",
  //   url: "/admin/chat",
  //   icon: MessageCircle,
  // },
  // {
  //   title: "Archived Chats",
  //   url: "/admin/chat/archive",
  //   icon: Archive,
  // },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings,
  },
  {
    title: "public page",
    url: "/admin/public",
    icon: Settings,
  },
];
