import AppSidebar from "@/components/common/AppSidebar";
import { TopBar } from "@/components/common/Topbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
const AdminLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar variant="inset" />
        <div className="flex-1 w-full">
          <TopBar />
          <div className="flex flex-col p-4 overflow-hidden">
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
