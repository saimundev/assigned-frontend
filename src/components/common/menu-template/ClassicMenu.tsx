import { cn } from "@/lib/utils";
import type { createMenuSchema } from "@/schemas/CreateMenuSchema";
import type z from "zod";

const ClassicMenu = ({
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
  const setRoundedCorners = (count: number) => {
    const roundedCorners: Record<number, number> = {
      0: 0,
      1: 4,
      2: 8,
      3: 12,
      4: 16,
      5: 20,
    };

    return roundedCorners[count] || roundedCorners[0];
  };

  console.log("customColors.spacing", customColors.spacing);
  return (
    <div
      style={{
        backgroundColor: customColors?.backgroundColor,
        borderRadius: setRoundedCorners(customColors.cornerRounded || 0),
      }}
      className="p-6 rounded-lg border border-amber-200"
    >
      {/* Menu Header */}
      <div
        style={{
          backgroundColor: customColors.primaryColor,
        }}
        className="text-white text-center py-8 px-4 rounded-lg mb-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold">{restaurantName}</h1>
        <p className="text-lg mt-2">{tagline}</p>
      </div>

      {/* Menu Sections */}
      {menuSections.map((section, index) => (
        <div key={index}>
          <div
            style={{ backgroundColor: customColors.secondaryColor }}
            className="text-white inline-block px-6 py-2 rounded-lg mb-4"
          >
            <h2 className="text-xl font-bold">{section.sectionName}</h2>
          </div>

          {section.items.length > 0 ? (
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-${
                customColors.spacing || 4
              }`}
            >
              {section.items.map((item, index) => (
                <div
                  key={index}
                  style={{
                    borderColor: customColors.accentColor,
                    borderStyle: "dashed",
                    borderWidth: "2px",
                    borderRadius: "0.5rem",
                  }}
                  className="p-4 flex flex-col md:flex-row gap-4"
                >
                  <div className="flex-shrink-0">
                    <div
                      className="rounded-lg overflow-hidden border-2"
                      style={{ borderColor: customColors.primaryColor }}
                    >
                      <img
                        src={item.itemImage}
                        alt={item.itemName}
                        width={120}
                        height={120}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3
                        className="text-xl font-bold"
                        style={{ color: customColors.secondaryColor }}
                      >
                        {item.itemName}
                      </h3>
                      {item.itemPrice && (
                        <span
                          style={{ backgroundColor: customColors.primaryColor }}
                          className="text-white px-2 py-1 rounded-md text-sm font-bold"
                        >
                          ${item.itemPrice}/-
                        </span>
                      )}
                    </div>
                    <p
                      className="text-sm mt-1"
                      style={{ color: customColors.textColor }}
                    >
                      {item.itemDescription}
                    </p>

                    {item.itemSizes && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.itemSizes.map((sizeOption, index) => (
                          <div key={index} className="flex items-center">
                            <span
                              style={{
                                backgroundColor: customColors.accentColor,
                                color: customColors.secondaryColor,
                              }}
                              className="px-3 py-1 rounded-full text-sm border"
                            >
                              {sizeOption.size}
                            </span>
                            <span
                              style={{
                                backgroundColor: customColors.primaryColor,
                              }}
                              className="text-white px-2 py-1 rounded-md text-sm font-bold ml-1"
                            >
                              ${sizeOption.price}/-
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className="text-center py-8 bg-white/50 rounded-lg border"
              style={{ borderColor: customColors.accentColor }}
            >
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

export default ClassicMenu;
