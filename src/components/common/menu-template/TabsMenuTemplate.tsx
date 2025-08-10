import { Clock } from "lucide-react";
import Rating from "../Rating";
import type { createMenuSchema } from "@/schemas/CreateMenuSchema";
import type z from "zod";
import { useState } from "react";

const TabsMenuTemplate = ({
  customColors,
  menuSections = [],
  restaurantName,
  tagline,
}: {
  customColors: z.infer<typeof createMenuSchema>["customizationSchema"];
  menuSections: z.infer<typeof createMenuSchema>["sections"];
  restaurantName: string;
  tagline?: string;
}) => {
  const [activeTabSection, setActiveTabSection] = useState(0);
  return (
    <div
      style={{ backgroundColor: customColors.backgroundColor }}
      className="rounded-lg overflow-hidden"
    >
      {/* Menu Header */}
      <div
        className="py-8 px-6 text-center"
        style={{ backgroundColor: customColors.primaryColor }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          {restaurantName}
        </h1>
        <p className="text-white/80 mt-2">{tagline}</p>
      </div>

      {/* Tabs Navigation */}
      <div
        className="flex overflow-x-auto scrollbar-hide border-b"
        style={{ borderColor: customColors.accentColor }}
      >
        {menuSections.map((section, index) => (
          <button
            key={index}
            className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTabSection === index
                ? "border-b-2 -mb-px"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
            style={{
              borderColor:
                activeTabSection === index
                  ? customColors.primaryColor
                  : "transparent",
              color:
                activeTabSection === index
                  ? customColors.primaryColor
                  : undefined,
            }}
            onClick={() => setActiveTabSection(index)}
          >
            {/* {section.icon && <span className="mr-2">{section.icon}</span>} */}
            {section.sectionName}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {menuSections.map((section, index) => (
          <div
            key={index}
            className={activeTabSection === index ? "block" : "hidden"}
          >
            {section.items.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="relative h-48">
                      <img
                        src={item.itemImage || "/placeholder.svg"}
                        alt={item.itemName}
                        className="object-cover"
                      />
                      {item.itemPrice && (
                        <div
                          className="absolute top-3 right-3 px-3 py-1 rounded-full text-white font-bold"
                          style={{ backgroundColor: customColors.primaryColor }}
                        >
                          ${item.itemPrice}
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3
                        className="text-lg font-bold mb-2"
                        style={{ color: customColors.secondaryColor }}
                      >
                        {item.itemName}
                      </h3>
                      <p
                        className="text-sm mb-3"
                        style={{ color: customColors.textColor }}
                      >
                        {item.itemDescription}
                      </p>

                      <div className="flex justify-between items-center">
                        {item.itemRating && Rating(item.itemRating)}
                        {item.itemPrepTime && (
                          <div className="flex items-center text-xs text-gray-500">
                            <Clock className="h-3 w-3 mr-1" />
                            {item.itemPrepTime}
                          </div>
                        )}
                      </div>

                      {item.itemSizes && (
                        <div className="mt-3 grid grid-cols-3 gap-1">
                          {item.itemSizes.map((sizeOption, idx) => (
                            <div
                              key={idx}
                              className="text-center text-xs py-1 rounded"
                              style={{
                                backgroundColor: customColors.accentColor,
                                color: customColors.secondaryColor,
                              }}
                            >
                              {sizeOption.size}: ${sizeOption.price}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p style={{ color: customColors.textColor }}>
                  No items in this section yet
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsMenuTemplate;
