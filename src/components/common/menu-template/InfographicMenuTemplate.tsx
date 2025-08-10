import type { createMenuSchema } from "@/schemas/CreateMenuSchema";
import { Clock, DollarSign, Star } from "lucide-react";
import type z from "zod";

const InfographicMenuTemplate = ({
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
    <div
      style={{ backgroundColor: customColors.backgroundColor }}
      className="p-6 rounded-lg"
    >
      {/* Menu Header */}
      <div
        className="text-center py-8 px-4 rounded-lg mb-8"
        style={{ backgroundColor: customColors.primaryColor }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          {restaurantName}
        </h1>
        <p className="text-lg mt-2 text-white/90">{tagline}</p>
      </div>

      {/* Menu Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {menuSections.map((section, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden"
            style={{ backgroundColor: "white" }}
          >
            <div
              className="py-4 px-6 flex items-center"
              style={{ backgroundColor: customColors.secondaryColor }}
            >
              {/* <div className="text-4xl mr-3">{section.icon || "🍽️"}</div> */}
              <h2 className="text-xl font-bold text-white">
                {section.sectionName}
              </h2>
            </div>

            {section.items.length > 0 ? (
              <div className="p-4">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="mb-6 pb-6 border-b last:border-b-0"
                    style={{ borderColor: customColors.accentColor }}
                  >
                    <div className="flex gap-4">
                      <div
                        className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2"
                        style={{ borderColor: customColors.primaryColor }}
                      >
                        <img
                          src={item.itemImage || "/placeholder.svg"}
                          alt={item.itemName}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3
                            className="text-lg font-bold"
                            style={{ color: customColors.secondaryColor }}
                          >
                            {item.itemName}
                          </h3>
                          {item.itemPrice && (
                            <div
                              className="flex items-center px-3 py-1 rounded-full text-white"
                              style={{
                                backgroundColor: customColors.primaryColor,
                              }}
                            >
                              <DollarSign className="h-3 w-3 mr-1" />
                              {item.itemPrice}
                            </div>
                          )}
                        </div>

                        <p
                          className="text-sm mt-1"
                          style={{ color: customColors.textColor }}
                        >
                          {item.itemDescription}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                      {item.itemPrepTime && (
                        <div
                          className="flex items-center justify-center py-1 px-2 rounded"
                          style={{
                            backgroundColor: `${customColors.accentColor}50`,
                            color: customColors.secondaryColor,
                          }}
                        >
                          <Clock className="h-3 w-3 mr-1" />
                          {item.itemPrepTime}
                        </div>
                      )}

                      {item.itemRating && (
                        <div
                          className="flex items-center justify-center py-1 px-2 rounded"
                          style={{
                            backgroundColor: `${customColors.accentColor}50`,
                            color: customColors.secondaryColor,
                          }}
                        >
                          <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                          {item.itemRating}
                        </div>
                      )}

                      {item.itemFeatured && (
                        <div
                          className="flex items-center justify-center py-1 px-2 rounded"
                          style={{
                            backgroundColor: `${customColors.accentColor}50`,
                            color: customColors.secondaryColor,
                          }}
                        >
                          <span>⭐ Featured</span>
                        </div>
                      )}
                    </div>

                    {item.itemSizes && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {item.itemSizes.map((sizeOption, idx) => (
                          <div
                            key={idx}
                            className="text-xs px-2 py-1 rounded"
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
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
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

export default InfographicMenuTemplate;
