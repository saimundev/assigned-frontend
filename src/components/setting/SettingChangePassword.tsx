import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const SettingChangePassword = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Security</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="currentPassword">Current Password</Label>
          <Input id="currentPassword" type="password" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="newPassword">New Password</Label>
          <Input id="newPassword" type="password" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm New Password</Label>
          <Input id="confirmPassword" type="password" />
        </div>

        <Button variant="outline">Update Password</Button>
      </CardContent>
    </Card>
  );
};

export default SettingChangePassword;
