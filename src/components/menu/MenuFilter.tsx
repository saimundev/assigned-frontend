import { Filter, Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";

const MenuFilter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search menus..."
          className="pl-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <Button variant="outline" className="sm:w-auto">
        <Filter className="mr-2 h-4 w-4" />
        Filter
      </Button>
    </div>
  );
};

export default MenuFilter;
