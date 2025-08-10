import { Clock } from "lucide-react";
import Rating from "../Rating";
import type z from "zod";
import type { createMenuSchema } from "@/schemas/CreateMenuSchema";

const PhotoMenuTemplate = ({
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
      className="p-0 rounded-lg overflow-hidden"
    >
      {/* Hero Header */}
      <div className="relative h-64 md:h-80 mb-6">
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            {restaurantName }
          </h1>
          <p className="text-xl mt-4 max-w-md text-center">{tagline}</p>
        </div>
      </div>

      {/* Menu Sections */}
      {menuSections.map((section,index) => (
        <div key={index} className="mb-12">
          <div
            className="relative h-24 mb-8 flex items-center justify-center"
            style={{ backgroundColor: customColors.primaryColor }}
          >
            <h2 className="text-3xl font-bold text-white uppercase tracking-widest">
              {section.sectionName}
            </h2>
          </div>

          {section.items.length > 0 ? (
            <div className="px-6">
              {section.items.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } mb-12`}
                >
                  <div className="md:w-1/2 relative h-64 md:h-auto">
                    <img
                      src={item.itemImage || "/placeholder.svg"}
                      alt={item.itemName}
                      className="object-cover"
                    />
                  </div>
                  <div
                    className="md:w-1/2 p-6 flex flex-col justify-center"
                    style={{
                      backgroundColor:
                        index % 2 === 0 ? "white" : customColors.accentColor,
                    }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3
                        className="text-2xl md:text-3xl font-bold"
                        style={{ color: customColors.secondaryColor }}
                      >
                        {item.itemName}
                      </h3>
                      {item.itemPrice && (
                        <div
                          className="text-2xl font-bold"
                          style={{ color: customColors.primaryColor }}
                        >
                          ${item.itemPrice}
                        </div>
                      )}
                    </div>

                    {item.itemRating && (
                      <div className="mb-3">{Rating(item.itemRating)}</div>
                    )}

                    <p
                      className="text-base mb-4"
                      style={{ color: customColors.textColor }}
                    >
                      {item.itemDescription}
                    </p>

                    {item.itemSizes && (
                      <div className="flex flex-wrap gap-3 mb-4">
                        {item.itemSizes.map((sizeOption, idx) => (
                          <div
                            key={idx}
                            className="px-4 py-2 rounded-full text-center"
                            style={{
                              backgroundColor: customColors.secondaryColor,
                              color: "white",
                            }}
                          >
                            {sizeOption.size} - ${sizeOption.price}
                          </div>
                        ))}
                      </div>
                    )}

                    {item.itemPrepTime && (
                      <div
                        className="flex items-center text-sm"
                        style={{ color: customColors.textColor }}
                      >
                        <Clock className="h-4 w-4 mr-2" />
                        Prep time: {item.itemPrepTime}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 mx-6 bg-white rounded-lg">
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

export default PhotoMenuTemplate;
