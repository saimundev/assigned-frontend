import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Globe, Save } from "lucide-react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useState } from "react";
const SettingSelectLanguage = () => {
  const [language, setLanguage] = useState("en");
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="w-5 h-5" />
          Language & Region
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="language">Language</Label>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
              <SelectItem value="de">German</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="timezone">Timezone</Label>
          <Select defaultValue="est">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="est">Eastern Time (EST)</SelectItem>
              <SelectItem value="cst">Central Time (CST)</SelectItem>
              <SelectItem value="mst">Mountain Time (MST)</SelectItem>
              <SelectItem value="pst">Pacific Time (PST)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button variant="outline" className="w-full bg-transparent">
          <Save className="w-4 h-4 mr-2" />
          Save Preferences
        </Button>
      </CardContent>
    </Card>
  );
};

export default SettingSelectLanguage;
