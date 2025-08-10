import { Edit, Eye, Share2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Link } from "react-router";
import { Button } from "../ui/button";
import MenuAction from "./MenuAction";

const MenuCard = ({ menu }: { menu: any }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-40">
        <img
          src={menu.image || "/placeholder.svg"}
          alt={menu.name}
          className="object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
          <div>
            <h3 className="font-bold text-white">{menu.name}</h3>
            <div className="flex items-center text-xs text-white/80 mt-1">
              <span>{menu.sections} sections</span>
              <span className="mx-1">•</span>
              <span>{menu.items} items</span>
            </div>
          </div>
          {menu.status === "draft" && (
            <Badge
              variant="outline"
              className="bg-white/20 text-white border-white/40"
            >
              Draft
            </Badge>
          )}
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-muted-foreground">
            <Eye className="h-4 w-4 mr-1" />
            <span>{menu.views} views</span>
          </div>
          <div className="flex gap-2">
            <Link to={`/dashboard/menus/${menu.id}`}>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Edit className="h-4 w-4" />
                <span className="sr-only">Edit</span>
              </Button>
            </Link>
            <Link to={`/dashboard/sharing?id=${menu.id}`}>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
            </Link>
            <MenuAction />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
