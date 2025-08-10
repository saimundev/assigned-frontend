import type { createMenuSchema } from "@/schemas/CreateMenuSchema";
import Rating from "../Rating";
import type z from "zod";

const ElegantMenuTemplate = ({
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
      style={{
        backgroundColor: customColors.backgroundColor,
        backgroundImage: `radial-gradient(${customColors.accentColor}20 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
      }}
      className="p-8 rounded-lg"
    >
      {/* Decorative Border */}
      <div
        className="border-8 border-double rounded-lg overflow-hidden"
        style={{ borderColor: customColors.primaryColor }}
      >
        {/* Menu Header */}
        <div
          className="text-center py-12 px-4"
          style={{ backgroundColor: customColors.primaryColor }}
        >
          <div className="inline-block px-8 py-2 border-2 border-white">
            <h1 className="text-4xl md:text-5xl font-serif text-white">
              {restaurantName}
            </h1>
          </div>
          <p className="text-lg mt-4 italic text-white">{tagline}</p>
        </div>

        <div className="bg-white p-8">
          {/* Menu Sections */}
          {menuSections.map((section, index) => (
            <div key={index} className="mb-12">
              <div className="text-center mb-8">
                <h2
                  className="inline-block text-2xl font-serif relative px-8"
                  style={{ color: customColors.secondaryColor }}
                >
                  <span className="relative z-10">{section.sectionName}</span>
                  <span
                    className="absolute bottom-2 left-0 right-0 h-2 -z-0"
                    style={{ backgroundColor: `${customColors.accentColor}80` }}
                  ></span>
                </h2>
              </div>

              {section.items.length > 0 ? (
                <div className="space-y-8">
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-6 p-4 border rounded-lg"
                      style={{ borderColor: `${customColors.accentColor}` }}
                    >
                      <div
                        className="hidden md:block flex-shrink-0 w-24 h-24 rounded-full overflow-hidden border-4"
                        style={{ borderColor: customColors.primaryColor }}
                      >
                        <img
                          src={item.itemImage || "/placeholder.svg"}
                          alt={item.itemName}
                          width={96}
                          height={96}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div
                          className="flex justify-between items-baseline border-b mb-2 pb-1"
                          style={{
                            borderColor: `${customColors.accentColor}60`,
                          }}
                        >
                          <h3
                            className="text-xl font-serif"
                            style={{ color: customColors.secondaryColor }}
                          >
                            {item.itemName}
                          </h3>
                          {item.itemPrice && (
                            <span
                              className="text-lg font-serif"
                              style={{ color: customColors.primaryColor }}
                            >
                              ${item.itemPrice}
                            </span>
                          )}
                        </div>

                        <p
                          className="text-sm italic"
                          style={{ color: customColors.textColor }}
                        >
                          {item.itemDescription}
                        </p>

                        {item.itemSizes && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {item.itemSizes.map((sizeOption, idx) => (
                              <div key={idx} className="flex items-center">
                                <span
                                  className="px-3 py-1 text-sm italic rounded-l-full"
                                  style={{
                                    backgroundColor: customColors.accentColor,
                                    color: customColors.secondaryColor,
                                  }}
                                >
                                  {sizeOption.size}
                                </span>
                                <span
                                  className="px-2 py-1 text-sm font-serif rounded-r-full"
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

                        {item.itemRating && (
                          <div className="mt-2">{Rating(item.itemRating)}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className="text-center py-6 italic"
                  style={{ color: customColors.textColor }}
                >
                  <p>No items in this section yet</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElegantMenuTemplate;
