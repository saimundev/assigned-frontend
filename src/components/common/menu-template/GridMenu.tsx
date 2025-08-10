import { Clock } from "lucide-react";
import Rating from "../Rating";
import type { createMenuSchema } from "@/schemas/CreateMenuSchema";
import type z from "zod";

const GridMenu = ({
  customColors,
  menuSections=[],
  restaurantName,
  tagline,
}: {
  customColors: z.infer<typeof createMenuSchema>["customizationSchema"];
  menuSections: z.infer<typeof createMenuSchema>["sections"];
  restaurantName: string;
  tagline?: string;
}) => {
  return (
    <div
      style={{ backgroundColor: customColors.backgroundColor }}
      className="p-6 rounded-lg"
    >
      {/* Menu Header */}
      <div
        className="text-center py-6 mb-8 border-b-4"
        style={{ borderColor: customColors.primaryColor }}
      >
        <h1
          className="text-4xl font-bold"
          style={{ color: customColors.primaryColor }}
        >
          {restaurantName}
        </h1>
        <p
          className="text-lg mt-2"
          style={{ color: customColors.secondaryColor }}
        >
          {tagline}
        </p>
      </div>

      {/* Menu Sections */}
      {menuSections.map((section, index) => (
        <div key={index} className="mb-10">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gray-300 flex-grow"></div>
            <h2
              className="text-2xl font-bold mx-4 uppercase tracking-wider"
              style={{ color: customColors.secondaryColor }}
            >
              {/* {section. && <span className="mr-2">{section.icon}</span>} */}
              {section.sectionName}
            </h2>
            <div className="h-px bg-gray-300 flex-grow"></div>
          </div>

          {section.items.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
                  style={{ backgroundColor: "white" }}
                >
                  <div className="relative h-48">
                    <img
                      src={item.itemImage || "/placeholder.svg"}
                      alt={item.itemName}
                      className="object-cover"
                    />
                    {item.itemFeatured && (
                      <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                        FEATURED
                      </div>
                    )}
                    {item.itemPrice && (
                      <div
                        className="absolute bottom-2 right-2 text-white px-3 py-1 rounded-full text-lg font-bold"
                        style={{ backgroundColor: customColors.primaryColor }}
                      >
                        ${item.itemPrice}
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3
                      className="text-xl font-bold mb-2"
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
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          {item.itemPrepTime}
                        </div>
                      )}
                    </div>

                    {item.itemSizes && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {item.itemSizes.map((sizeOption, index) => (
                          <div key={index} className="text-sm">
                            <span className="font-medium">
                              {sizeOption.size}:
                            </span>{" "}
                            ${sizeOption.price}
                            {index < item.itemSizes!.length - 1 && " / "}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-white/50 rounded-lg border border-gray-200">
              <p style={{ color: customColors.textColor }}>
                No items in this section yet
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GridMenu;
