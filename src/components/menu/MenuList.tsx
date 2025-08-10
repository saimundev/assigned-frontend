import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { sampleMenus } from "@/data/menuData";
import { menu } from "@/constants/menuData";
import MenuCard from "./MenuCard";

const MenuList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredMenus = sampleMenus.filter((menu) => {
    const matchesSearch = menu.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "published" && menu.status === "published") ||
      (activeTab === "drafts" && menu.status === "draft");

    return matchesSearch && matchesTab;
  });
  return (
    <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        {menu.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {menu.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredMenus.map((menu) => (
              <MenuCard key={menu.id} menu={menu} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default MenuList;
