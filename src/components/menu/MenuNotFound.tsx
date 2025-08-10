import { Plus, Search } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../ui/button";

const MenuNotFound = () => {
  const searchQuery = "";
  return (
    <div className="text-center py-12">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
        <Search className="h-8 w-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-medium">No menus found</h3>
      <p className="text-muted-foreground mt-1">
        {searchQuery
          ? `No results for "${searchQuery}"`
          : "You don't have any menus yet"}
      </p>
      <Link to="/dashboard/menus/create" className="mt-4 inline-block">
        <Button className="bg-rose-600 hover:bg-rose-700">
          <Plus className="mr-2 h-4 w-4" />
          Create New Menu
        </Button>
      </Link>
    </div>
  );
};

export default MenuNotFound;
