import type { createMenuSchema } from "@/schemas/CreateMenuSchema";
import type z from "zod";

const PriceForwardMenuTemplate = ({
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
      <div className="text-center mb-10">
        <h1
          className="text-4xl md:text-5xl font-bold"
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
        <div key={index} className="mb-12">
          <div
            className="inline-block px-6 py-2 rounded-t-lg"
            style={{ backgroundColor: customColors.secondaryColor }}
          >
            <h2 className="text-xl font-bold text-white">
              {section.sectionName}
            </h2>
          </div>

          <div
            className="p-4 rounded-tr-lg rounded-b-lg"
            style={{
              backgroundColor: "white",
              borderTop: `4px solid ${customColors.secondaryColor}`,
            }}
          >
            {section.items.length > 0 ? (
              <div className="space-y-4">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg transition-colors hover:bg-gray-50"
                  >
                    {/* Price Circle */}
                    <div
                      className="w-16 h-16 flex-shrink-0 rounded-full flex items-center justify-center text-white font-bold text-xl"
                      style={{ backgroundColor: customColors.primaryColor }}
                    >
                      {item.itemPrice ? (
                        <>${item.itemPrice}</>
                      ) : (
                        <span className="text-xs text-center">See Sizes</span>
                      )}
                    </div>

                    {/* Item Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3
                          className="text-lg font-bold"
                          style={{ color: customColors.secondaryColor }}
                        >
                          {item.itemName}
                          {item.itemFeatured && (
                            <span
                              className="ml-2 text-xs px-1 py-0.5 rounded"
                              style={{
                                backgroundColor: customColors.accentColor,
                                color: customColors.secondaryColor,
                              }}
                            >
                              Popular
                            </span>
                          )}
                        </h3>
                      </div>

                      <p
                        className="text-sm"
                        style={{ color: customColors.textColor }}
                      >
                        {item.itemDescription}
                      </p>

                      {item.itemSizes && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {item.itemSizes.map((sizeOption, idx) => (
                            <div key={idx} className="flex items-center">
                              <span
                                className="px-2 py-0.5 text-xs rounded-l"
                                style={{
                                  backgroundColor: customColors.accentColor,
                                  color: customColors.secondaryColor,
                                }}
                              >
                                {sizeOption.size}
                              </span>
                              <span
                                className="px-2 py-0.5 text-xs font-bold rounded-r"
                                style={{
                                  backgroundColor: customColors.primaryColor,
                                  color: "white",
                                }}
                              >
                                ${sizeOption.price}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Item Image */}
                    <div
                      className="hidden sm:block w-12 h-12 flex-shrink-0 rounded-full overflow-hidden border"
                      style={{ borderColor: customColors.accentColor }}
                    >
                      <img
                        src={item.itemImage || "/placeholder.svg"}
                        alt={item.itemName}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <p style={{ color: customColors.textColor }}>
                  No items in this section yet
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PriceForwardMenuTemplate;
