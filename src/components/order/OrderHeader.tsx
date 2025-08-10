import { Printer, RefreshCw } from "lucide-react";
import CommonHeader from "../common/CommonHeader";
import { Button } from "../ui/button";

const OrderHeader = () => {
  let isLoading = false;
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <CommonHeader
        title="Orders"
        description="Manage and track customer orders"
      />
      <div className="flex gap-2">
        <Button variant="outline" className="flex items-center gap-2">
          <Printer className="h-4 w-4" />
          Print Orders
        </Button>
        <Button className="bg-rose-600 hover:bg-rose-700 flex items-center gap-2">
          <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </div>
    </div>
  );
};

export default OrderHeader;
