import { Clock } from "lucide-react";
import Rating from "../Rating";
import type { createMenuSchema } from "@/schemas/CreateMenuSchema";
import type z from "zod";

const MagazineMenuTemplate = ({
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
  return (
    <div style={{ backgroundColor: customColors.backgroundColor }} className="p-6 rounded-lg">
      {/* Menu Header */}
      <div
        className="text-center mb-8 pb-4 border-b"
        style={{ borderColor: customColors.accentColor }}
      >
        <h1
          className="text-5xl md:text-6xl font-bold uppercase tracking-tight"
          style={{ color: customColors.primaryColor }}
        >
          {restaurantName}
        </h1>
        <p
          className="text-lg mt-2 italic"
          style={{ color: customColors.secondaryColor }}
        >
          {tagline}
        </p>
      </div>

      {/* Menu Sections */}
      {menuSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-12">
          <div className="flex items-center mb-6">
            <div
              className="text-2xl font-bold uppercase tracking-wide"
              style={{ color: customColors.secondaryColor }}
            >
              {section.sectionName}
            </div>
            <div
              className="ml-4 flex-grow h-px"
              style={{ backgroundColor: customColors.secondaryColor }}
            ></div>
          </div>

          {section.items.length > 0 ? (
            <div
              className={`${sectionIndex % 2 === 0 ? "md:ml-12" : "md:mr-12"}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {section.items.map((item, itemIndex) => {
                  // Alternate between different layouts
                  const isFullWidth = itemIndex % 3 === 0;
                  const isImageLeft = itemIndex % 2 === 0;

                  return isFullWidth ? (
                    // Full width item
                    <div
                      key={itemIndex}
                      className="col-span-12 grid md:grid-cols-12 gap-4 mb-8"
                    >
                      <div className="md:col-span-5 relative h-64 md:h-auto">
                        <img
                          src={item.itemImage || "/placeholder.svg"}
                          alt={item.itemName}
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-7 p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3
                            className="text-2xl font-bold"
                            style={{ color: customColors.secondaryColor }}
                          >
                            {item.itemName}
                          </h3>
                          {item.itemPrice && (
                            <div
                              className="text-xl font-bold"
                              style={{ color: customColors.primaryColor }}
                            >
                              ${item.itemPrice}
                            </div>
                          )}
                        </div>

                        <p
                          className="text-base mb-3"
                          style={{ color: customColors.textColor }}
                        >
                          {item.itemDescription}
                        </p>

                        <div className="flex justify-between items-center">
                          {item.itemRating && Rating(item.itemRating)}
                          {item.itemPrepTime && (
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              {item.itemPrepTime}
                            </div>
                          )}
                        </div>

                        {item.itemSizes && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {item.itemSizes.map((sizeOption, idx) => (
                              <div
                                key={idx}
                                className="px-3 py-1 rounded-full text-sm"
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
                  ) : (
                    // Half width item
                    <div
                      key={itemIndex}
                      className="col-span-12 md:col-span-6 flex flex-col"
                    >
                      <div className="relative h-48">
                        <img
                          src={item.itemImage || "/placeholder.svg"}
                          alt={item.itemName}
                          className="object-cover"
                        />
                        {item.itemFeatured && (
                          <div
                            className="absolute top-2 right-2 px-2 py-1 text-xs font-bold"
                            style={{
                              backgroundColor: customColors.primaryColor,
                              color: "white",
                            }}
                          >
                            FEATURED
                          </div>
                        )}
                      </div>
                      <div
                        className="p-4 flex-grow border-l border-r border-b"
                        style={{ borderColor: customColors.accentColor }}
                      >
                        <div className="flex justify-between items-start">
                          <h3
                            className="text-lg font-bold"
                            style={{ color: customColors.secondaryColor }}
                          >
                            {item.itemName}
                          </h3>
                          {item.itemPrice && (
                            <div
                              className="text-lg font-bold"
                              style={{ color: customColors.primaryColor }}
                            >
                              ${item.itemPrice}
                            </div>
                          )}
                        </div>

                        <p
                          className="text-sm mt-2"
                          style={{ color: customColors.textColor }}
                        >
                          {item.itemDescription}
                        </p>

                        {item.itemSizes && (
                          <div
                            className="mt-2 text-sm"
                            style={{ color: customColors.secondaryColor }}
                          >
                            {item.itemSizes.map((sizeOption, idx) => (
                              <span key={idx} className="mr-2">
                                {sizeOption.size}: ${sizeOption.price}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="text-center py-8 bg-white rounded-lg">
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

export default MagazineMenuTemplate;
