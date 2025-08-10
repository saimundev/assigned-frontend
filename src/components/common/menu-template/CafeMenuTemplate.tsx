import type { createMenuSchema } from "@/schemas/CreateMenuSchema";
import type z from "zod";

const CafeMenuTemplate = ({
  menuSections = [],
  restaurantName,
  tagline,
}: {
  menuSections: z.infer<typeof createMenuSchema>["sections"];
  restaurantName: string;
  tagline?: string;
}) => {
  return (
    <div
      style={{
        backgroundColor: "#2d2d2d",
        color: "white",
        fontFamily: "'Caveat', cursive, system-ui, sans-serif",
      }}
      className="p-6 rounded-lg"
    >
      {/* Menu Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl md:text-6xl mb-2" style={{ color: "#f1c40f" }}>
          {restaurantName}
        </h1>
        <p className="text-xl" style={{ color: "#e0e0e0" }}>
          {tagline}
        </p>
        <div className="flex items-center justify-center mt-4">
          <div className="h-px w-16 bg-white/30"></div>
          <div className="mx-4">☕</div>
          <div className="h-px w-16 bg-white/30"></div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {menuSections.map((section,index) => (
          <div key={index} className="mb-8">
            <div
              className="text-center mb-6 pb-2 border-b-2"
              style={{ borderColor: "#f1c40f" }}
            >
              <h2 className="text-3xl" style={{ color: "#f1c40f" }}>
                {/* {section.icon && <span className="mr-2">{section.icon}</span>} */}
                {section.sectionName}
              </h2>
            </div>

            {section.items.length > 0 ? (
              <div className="space-y-6">
                {section.items.map((item,index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between">
                      <h3 className="text-2xl" style={{ color: "white" }}>
                        {item.itemName}
                      </h3>
                      {item.itemPrice && (
                        <div className="flex items-center">
                          <span
                            className="text-2xl"
                            style={{ color: "#f1c40f" }}
                          >
                            ${item.itemPrice}
                          </span>
                        </div>
                      )}
                    </div>

                    <p className="text-lg mt-1" style={{ color: "#e0e0e0" }}>
                      {item.itemDescription}
                    </p>

                    {item.itemSizes && (
                      <div
                        className="mt-2 text-lg"
                        style={{ color: "#f1c40f" }}
                      >
                        {item.itemSizes.map((sizeOption, idx) => (
                          <span key={idx} className="mr-4">
                            {sizeOption.size}: ${sizeOption.price}
                          </span>
                        ))}
                      </div>
                    )}

                    {item.itemFeatured && (
                      <div
                        className="mt-2 inline-block px-3 py-1 text-sm rounded-full"
                        style={{
                          backgroundColor: "#f1c40f",
                          color: "#2d2d2d",
                        }}
                      >
                        Staff Pick!
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-lg italic" style={{ color: "#e0e0e0" }}>
                  Coming soon...
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CafeMenuTemplate;
