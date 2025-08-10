import { Mail, Search } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const CustomerSearch = () => {
  return (
    <Card className="shadow-sm">
      <CardContent className="pt-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search customers by name, email, or phone..."
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Mail className="w-4 h-4 mr-2" />
            Send Offers
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomerSearch;
