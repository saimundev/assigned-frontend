import CommonHeader from "../common/CommonHeader";
import QuickStatus from "./QuickStatus";
import RecentOrder from "./RecentOrder";
import SalesChart from "./SalesChart";
import StatusCard from "./StatusCard";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <CommonHeader
        title="Dashboard"
        description="Welcome back! Here's what's happening at your restaurant today."
      />

      {/* Stats Cards */}
      <StatusCard />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <SalesChart />

        {/* Quick Stats */}
        <QuickStatus />
      </div>

      {/* Recent Orders */}
      <RecentOrder />
    </div>
  );
};

export default Dashboard;
