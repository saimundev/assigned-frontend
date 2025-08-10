import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const QuickStatus = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">
          Quick Stats
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Average Order Value</span>
          <span className="font-semibold text-gray-900">$26.50</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Peak Hour</span>
          <span className="font-semibold text-gray-900">7:00 PM</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Most Popular Item</span>
          <span className="font-semibold text-gray-900">Margherita Pizza</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Customer Satisfaction</span>
          <span className="font-semibold text-green-600">4.8/5</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickStatus;
