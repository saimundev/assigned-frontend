import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  BarChart3,
  DollarSign,
  ShoppingBag,
  TableIcon,
  TrendingUp,
} from "lucide-react";

const StatusCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            Today's Orders
          </CardTitle>
          <ShoppingBag className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">47</div>
          <p className="text-xs text-green-600 flex items-center mt-1">
            <TrendingUp className="w-3 h-3 mr-1" />
            +12% from yesterday
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            Total Sales
          </CardTitle>
          <DollarSign className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">$1,247</div>
          <p className="text-xs text-green-600 flex items-center mt-1">
            <TrendingUp className="w-3 h-3 mr-1" />
            +8% from yesterday
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            Pending Orders
          </CardTitle>
          <BarChart3 className="h-4 w-4 text-orange-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">8</div>
          <p className="text-xs text-gray-500 mt-1">2 in kitchen queue</p>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            Active Tables
          </CardTitle>
          <TableIcon className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">12/20</div>
          <p className="text-xs text-gray-500 mt-1">60% occupancy</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatusCard;
