import { Save, Upload, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const SettingProfileInfo = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="w-5 h-5" />
          Profile Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center gap-6">
          <Avatar className="w-20 h-20">
            <AvatarImage src="/placeholder.svg?height=80&width=80" />
            <AvatarFallback className="bg-green-100 text-green-700 text-xl">
              SJ
            </AvatarFallback>
          </Avatar>
          <div>
            <Button variant="outline" size="sm">
              <Upload className="w-4 h-4 mr-2" />
              Change Photo
            </Button>
            <p className="text-sm text-gray-500 mt-2">
              JPG, PNG or GIF. Max size 2MB.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" defaultValue="Sarah" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" defaultValue="Johnson" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            defaultValue="sarah.johnson@restaurant.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="position">Position</Label>
          <Input id="position" defaultValue="Branch Manager" disabled />
        </div>

        <Button className="bg-green-600 hover:bg-green-700">
          <Save className="w-4 h-4 mr-2" />
          Save Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default SettingProfileInfo;
