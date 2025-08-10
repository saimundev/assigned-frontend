import { Bell, Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { useState } from "react";

const SettingNotification = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [orderAlerts, setOrderAlerts] = useState(true);
  return (
    <div className="space-y-6">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label
                htmlFor="emailNotifications"
                className="text-sm font-medium"
              >
                Email Notifications
              </Label>
              <p className="text-sm text-gray-500">
                Receive notifications via email
              </p>
            </div>
            <Switch
              id="emailNotifications"
              checked={emailNotifications}
              onCheckedChange={setEmailNotifications}
              className="data-[state=checked]:bg-green-600"
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <Label
                htmlFor="pushNotifications"
                className="text-sm font-medium"
              >
                Push Notifications
              </Label>
              <p className="text-sm text-gray-500">
                Receive push notifications
              </p>
            </div>
            <Switch
              id="pushNotifications"
              checked={pushNotifications}
              onCheckedChange={setPushNotifications}
              className="data-[state=checked]:bg-green-600"
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="orderAlerts" className="text-sm font-medium">
                Order Alerts
              </Label>
              <p className="text-sm text-gray-500">
                Get notified of new orders
              </p>
            </div>
            <Switch
              id="orderAlerts"
              checked={orderAlerts}
              onCheckedChange={setOrderAlerts}
              className="data-[state=checked]:bg-green-600"
            />
          </div>

          <Button variant="outline" className="w-full bg-transparent">
            <Save className="w-4 h-4 mr-2" />
            Save Notifications
          </Button>
        </CardContent>
      </Card>

     
    </div>
  );
};

export default SettingNotification;
