import { Route, Routes } from "react-router";
import PublicRoute from "./PublicRoute";
import LoginPage from "@/pages/LoginPage";
import ProtectedRoute from "./PrivateRoute";
import RegisterPage from "@/pages/RegisterPage";
import SubscriptionPlanPage from "@/pages/SubscriptionPlanPage";
import OnboardPage from "@/pages/RestaurantSetup";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage";
import DashboardPage from "@/pages/DashboardPage";
import OrderPage from "@/pages/OrderPage";
import KitchenPage from "@/pages/KitchenPage";
import SettingPage from "@/pages/SettingPage";
import CampaignPage from "@/pages/CampaignPage";
import MenuPage from "@/pages/MenuPage";
import TablePage from "@/pages/TablePage";
import CustomerPage from "@/pages/CustomerPage";
import ChatPage from "@/pages/ChatPage";
import SafeSuspense from "@/routes/fallback/SafeSuspense";
import AdminLayout from "./layout/AdmainLayout";
import ManagerLayout from "./layout/ManagerLayout";
import ContentManagerPage from "@/pages/ContentManagerPage";
import ArchivedChatPage from "@/pages/ArchiveChatPage";
import CreateMenuPage from "@/pages/CreateMenuPage";
import PublicPage from "@/pages/PublicPage";
import CreateTablePage from "@/pages/CreateTablePage";

const RouterIndex = () => {
  return (
    <SafeSuspense>
      <Routes>
        {/*  Public Routes */}
        <Route path="/auth" element={<PublicRoute />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="subscription-plan" element={<SubscriptionPlanPage />} />
          <Route path="setup" element={<OnboardPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
        </Route>

        {/* Private Routes */}
        <Route element={<AdminLayout />}>
          <Route
            path="/admin"
            element={<ProtectedRoute allowedRoles={["admin"]} />}
          >
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="order" element={<OrderPage />} />
            <Route path="kitchen" element={<KitchenPage />} />
            <Route path="settings" element={<SettingPage />} />
            <Route path="campaign" element={<CampaignPage />} />
            <Route path="content-manager" element={<ContentManagerPage />} />
            <Route path="menu-card" element={<MenuPage />} />
            <Route path="create-menu" element={<CreateMenuPage />} />
            <Route path="table" element={<TablePage />} />
            <Route path="create-table" element={<CreateTablePage />} />
            <Route path="customer" element={<CustomerPage />} />
            <Route path="chat" element={<ChatPage />} />
            <Route path="chat/archive" element={<ArchivedChatPage />} />
            <Route path="public" element={<PublicPage />} />
          </Route>
          <Route />

          <Route element={<ManagerLayout />} />
          <Route
            path="/manager"
            element={<ProtectedRoute allowedRoles={["manager"]} />}
          >
            <Route path="dashboard" element={<div>manager Dashboard</div>} />
            <Route path="settings" element={<div>Admin Settings</div>} />
          </Route>
        </Route>

        {/* Common Routes */}
        <Route path="unauthorized" element={<div>Unauthorized</div>} />
        <Route path="*" element={<div>Path not found</div>} />
      </Routes>
    </SafeSuspense>
  );
};

export default RouterIndex;
