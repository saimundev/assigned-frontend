import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SettingRestaurantInfo = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Restaurant Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Restaurant Name</Label>
          <Input value="The Green Garden" disabled />
        </div>

        <div className="space-y-2">
          <Label>Branch Name</Label>
          <Input value="Downtown Branch" disabled />
        </div>

        <div className="space-y-2">
          <Label>Branch ID</Label>
          <Input value="BR-001" disabled />
        </div>

        <p className="text-sm text-gray-500">
          Contact your administrator to update restaurant information.
        </p>
      </CardContent>
    </Card>
  );
};

export default SettingRestaurantInfo;
