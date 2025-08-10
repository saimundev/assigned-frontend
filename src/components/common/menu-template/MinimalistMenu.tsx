import type { createMenuSchema } from "@/schemas/CreateMenuSchema";
import type z from "zod";

const MinimalistMenu = ({
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
      className="p-8 md:p-12 rounded-lg"
    >
      {/* Menu Header */}
      <div className="text-center mb-16">
        <h1
          className="text-3xl md:text-5xl font-light tracking-wide"
          style={{ color: customColors.primaryColor }}
        >
          {restaurantName}
        </h1>
        <p
          className="text-sm mt-3 uppercase tracking-widest"
          style={{ color: customColors.textColor }}
        >
          {tagline}
        </p>
        <div
          className="w-16 h-px mx-auto mt-6"
          style={{ backgroundColor: customColors.primaryColor }}
        ></div>
      </div>

      {/* Menu Sections */}
      <div className="max-w-3xl mx-auto">
        {menuSections.map((section, index) => (
          <div key={index} className="mb-16">
            <h2
              className="text-xl font-normal uppercase tracking-widest mb-8 pb-2 border-b"
              style={{
                borderColor: customColors.accentColor,
                color: customColors.secondaryColor,
              }}
            >
              {section.sectionName}
            </h2>

            {section.items.length > 0 ? (
              <div className="space-y-8">
                {section.items.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3
                        className="text-lg font-medium"
                        style={{ color: customColors.secondaryColor }}
                      >
                        {item.itemName}
                        {item.itemFeatured && (
                          <span
                            className="ml-2 text-xs py-0.5 px-1.5 rounded-sm"
                            style={{
                              backgroundColor: customColors.accentColor,
                              color: customColors.secondaryColor,
                            }}
                          >
                            Featured
                          </span>
                        )}
                      </h3>
                      <div className="flex items-center">
                        {item.itemPrice && (
                          <span
                            className="text-base font-medium"
                            style={{ color: customColors.primaryColor }}
                          >
                            ${item.itemPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <p
                      className="text-sm mb-2"
                      style={{ color: customColors.textColor }}
                    >
                      {item.itemDescription}
                    </p>

                    {item.itemSizes && (
                      <div
                        className="text-xs space-x-2"
                        style={{ color: customColors.secondaryColor }}
                      >
                        {item.itemSizes.map((sizeOption, idx) => (
                          <span key={idx}>
                            {sizeOption.size} ${sizeOption.price}
                            {idx < item.itemSizes!.length - 1 && " •"}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <p
                  className="text-sm italic"
                  style={{ color: customColors.textColor }}
                >
                  No items in this section yet
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div
        className="text-center mt-16 pt-8 border-t"
        style={{ borderColor: customColors.accentColor }}
      >
        <p
          className="text-xs uppercase tracking-wider"
          style={{ color: customColors.textColor }}
        >
          Thank you for dining with us
        </p>
      </div>
    </div>
  );
};

export default MinimalistMenu;
