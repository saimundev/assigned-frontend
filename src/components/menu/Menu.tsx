import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router";
import CommonHeader from "../common/CommonHeader";
import MenuFilter from "./MenuFilter";
import MenuNotFound from "./MenuNotFound";
import MenuList from "./MenuList";

const Menu = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <CommonHeader
          title="My Menus"
          description=" Manage all your restaurant menus in one place"
        />
        <Link to="/admin/create-menu">
          <Button className="bg-rose-600 hover:bg-rose-700">
            <Plus className="mr-2 h-4 w-4" />
            Create New Menu
          </Button>
        </Link>
      </div>

      {/* Search and filter */}
      <MenuFilter />

      {/* Menus list */}
      <MenuList />

      {/* {filteredMenus.length === 0 && <MenuNotFound />} */}
    </div>
  );
};

export default Menu;
