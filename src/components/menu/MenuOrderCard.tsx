import { useState } from "react";
import { Button } from "@/components/ui/button";
import { menuTemplates } from "@/constants/TemplateMenu";
import PhotoMenuTemplate from "../common/menu-template/PhotoMenuTemplate";
import ClassicMenu from "../common/menu-template/ClassicMenu";
import MinimalistMenu from "../common/menu-template/MinimalistMenu";
import GridMenu from "../common/menu-template/GridMenu";
import ElegantMenuTemplate from "../common/menu-template/ElegantMenuTemplate";
import CafeMenuTemplate from "../common/menu-template/CafeMenuTemplate";
import TabsMenuTemplate from "../common/menu-template/TabsMenuTemplate";
import MagazineMenuTemplate from "../common/menu-template/MagazineMenuTemplate";
import InfographicMenuTemplate from "../common/menu-template/InfographicMenuTemplate";
import PriceForwardMenuTemplate from "../common/menu-template/PriceForwardMenuTemplate";
import MenuTemplateChooseModalContent from "./create-menu/MenuTemplateChooseModalContent";
import CreateMenuCardCustomize from "./create-menu/CreateMenuCardCustomize";
import CreateMenuManagementPanel from "./create-menu/CreateMenuManagementPanel";
import CreateMenuCardHeader from "./create-menu/CreateMenuCardHeader";
import { cn } from "@/lib/utils";
import { useFormContext, useWatch } from "react-hook-form";
import type { CreateMenuFormValues } from "@/schemas/CreateMenuSchema";

type MenuOrderCardProps = {
  from: "preview" | "editor";
};

const MenuOrderCard = ({ from }: MenuOrderCardProps) => {
  const { control, reset } = useFormContext<CreateMenuFormValues>();
  const [selectedTemplate, setSelectedTemplate] = useState("classic");
  const [selectOptions, setSelectOptions] = useState("menu-management");

  // State for the currently selected section (for editing)
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  // Toggle section expansion
  const toggleSection = (sectionId: string) => {
    if (selectedSection === sectionId) {
      setSelectedSection(null);
    } else {
      setSelectedSection(sectionId);
    }
  };

  // Apply template
  const applyTemplate = (templateId: string) => {
    setSelectedTemplate(templateId);
    const template = menuTemplates.find((t) => t.id === "classic");
    if (template) {
      reset({
        ...template,
        id: template.id,
      });
    }
  };

  const customColors = useWatch({
    control,
    name: "customizationSchema",
  });
  const restaurantName = useWatch({
    control,
    name: "restaurantName",
  });

  const tagline = useWatch({
    control,
    name: "tagLine",
  });

  const menuSections = useWatch({
    control,
    name: "sections",
  });

  const renderMenu = () => {
    switch (selectedTemplate) {
      case "classic":
        return (
          <ClassicMenu
            customColors={customColors}
            menuSections={menuSections}
            restaurantName={restaurantName}
            tagline={tagline}
          />
        );
      case "grid":
        return (
          <GridMenu
            customColors={customColors}
            menuSections={menuSections}
            restaurantName={restaurantName}
            tagline={tagline}
          />
        );
      case "photo":
        return (
          <PhotoMenuTemplate
            customColors={customColors}
            menuSections={menuSections}
            restaurantName={restaurantName}
            tagline={tagline}
          />
        );
      case "minimalist":
        return (
          <MinimalistMenu
            customColors={customColors}
            menuSections={menuSections}
            restaurantName={restaurantName}
            tagline={tagline}
          />
        );
      case "elegant":
        return (
          <ElegantMenuTemplate
            customColors={customColors}
            menuSections={menuSections}
            restaurantName={restaurantName}
            tagline={tagline}
          />
        );
      case "cafe":
        return (
          <CafeMenuTemplate
            menuSections={menuSections}
            restaurantName={restaurantName}
            tagline={tagline}
          />
        );
      case "tabs":
        return (
          <TabsMenuTemplate
            customColors={customColors}
            menuSections={menuSections}
            restaurantName={restaurantName}
            tagline={tagline}
          />
        );
      case "magazine":
        return (
          <MagazineMenuTemplate
            customColors={customColors}
            menuSections={menuSections}
            restaurantName={restaurantName}
            tagline={tagline}
          />
        );
      case "infographic":
        return (
          <InfographicMenuTemplate
            customColors={customColors}
            menuSections={menuSections}
            restaurantName={restaurantName}
            tagline={tagline}
          />
        );
      case "price-forward":
        return (
          <PriceForwardMenuTemplate
            customColors={customColors}
            menuSections={menuSections}
            restaurantName={restaurantName}
            tagline={tagline}
          />
        );
      default:
        return (
          <ClassicMenu
            customColors={customColors}
            menuSections={menuSections}
            restaurantName={restaurantName}
            tagline={tagline}
          />
        );
    }
  };

  return (
    <div
      className={cn(
        from === "editor" ? "grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6" : ""
      )}
    >
      {/* Menu Management Panel */}
      {from === "editor" && (
        <div className="">
          {/* Header */}
          <CreateMenuCardHeader
            selectOptions={selectOptions}
            setSelectOptions={setSelectOptions}
          />

          {/* Menu Management Panel */}
          {selectOptions === "menu-management" && (
            <CreateMenuManagementPanel
              toggleSection={toggleSection}
              selectedSection={selectedSection}
            />
          )}

          {/* Customize Card */}
          {selectOptions === "customize-menu" && <CreateMenuCardCustomize />}

          {/*Choose Template Selection */}
          {selectOptions === "choose-template" && (
            <MenuTemplateChooseModalContent applyTemplate={applyTemplate} />
          )}
          <Button
            type="submit"
            className="mt-4 w-full bg-rose-600 hover:bg-rose-700 text-white"
          >
            Update Menu
          </Button>
        </div>
      )}

      {/* Menu Display */}
      {renderMenu()}
    </div>
  );
};

export default MenuOrderCard;
