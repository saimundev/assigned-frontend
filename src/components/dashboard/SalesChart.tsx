import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const salesData = [
  { day: "Mon", sales: 1200 },
  { day: "Tue", sales: 1900 },
  { day: "Wed", sales: 1600 },
  { day: "Thu", sales: 2100 },
  { day: "Fri", sales: 2800 },
  { day: "Sat", sales: 3200 },
  { day: "Sun", sales: 2400 },
];
const SalesChart = () => {
  return (
    <Card className="lg:col-span-2 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">
          Sales Last 7 Days
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
              />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#22c55e"
                strokeWidth={3}
                dot={{ fill: "#22c55e", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesChart;
