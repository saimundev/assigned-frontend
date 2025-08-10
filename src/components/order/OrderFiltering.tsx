import { Filter, Search } from "lucide-react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

const OrderFiltering = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search orders by ID, customer name, or phone..."
          className="pl-9"
        />
      </div>
      <Select defaultValue="today">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Time period" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="today">Today</SelectItem>
          <SelectItem value="yesterday">Yesterday</SelectItem>
          <SelectItem value="week">This Week</SelectItem>
          <SelectItem value="month">This Month</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="outline" className="sm:w-auto">
        <Filter className="mr-2 h-4 w-4" />
        Filter
      </Button>
    </div>
  );
};

export default OrderFiltering;
