import {
  ChefHat,
  Home,
  Menu,
  Settings,
  ShoppingBag,
  Table,
  Users,
  Megaphone,
  FileText,
  MessageCircle,
  Archive,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router";
import { sidebarMenuItems } from "@/routes/navLink/sidebarMenuItems";

const AppSidebar = ({
  variant,
}: {
  variant?: "sidebar" | "floating" | "inset";
}) => {
  const pathname = useLocation();

  return (
    <Sidebar
      collapsible="none"
      variant={variant}
      className="border-r border-gray-200 w-64"
    >
      <SidebarHeader>
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-green-500 text-white">
            <ChefHat className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Restrowave</span>
            <span className="truncate text-xs text-gray-500">Admin Portal</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname.pathname === item.url}
                    tooltip={item.title}
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
