import GenericInputField from "@/components/generic-form/GenericInputField";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, Palette, Plus, Trash2 } from "lucide-react";
import { useFieldArray, useFormContext, type Control } from "react-hook-form";
import MenuAddModalContent from "../MenuAddModalContent";
import type { CreateMenuFormValues } from "@/schemas/CreateMenuSchema";

const CreateMenuManagementPanel = ({ selectedSection, toggleSection }: any) => {
  const { control } = useFormContext<CreateMenuFormValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "sections",
  });

  return (
    <div className="space-y-4">
      <Button
        onClick={() =>
          append({
            sectionName: "",
            items: [
              {
                itemName: "",
                itemDescription: "",
                hasSize: false,
                itemPrice: 0,
                itemPrepTime: "",
                itemRating: 0,
                itemFeatured: false,
                itemImage: "",
                itemSizes: [],
              },
            ],
          })
        }
        variant="outline"
        size="sm"
        className="flex items-center gap-1"
      >
        <Palette className="h-4 w-4" />
        Add Section
      </Button>
      <div className="space-y-2">
        {fields.map((section, sectionIndex) => (
          <Card key={section.id} className="bg-muted/30">
            <CardContent className="p-3">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <GenericInputField
                    control={control}
                    name={`sections.${sectionIndex}.sectionName`}
                    placeholder="Section Name"
                    label="Section Name"
                    className="border-0 bg-transparent px-0 text-base font-medium focus-visible:ring-0"
                    type="text"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-rose-500 hover:bg-rose-50 hover:text-rose-600"
                    onClick={() => remove(sectionIndex)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleSection(section.id)}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        selectedSection === section.id ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </div>
              </div>
            </CardContent>

            {selectedSection === section.id && (
              <MenuItem control={control} sectionIndex={sectionIndex} />
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

const MenuItem = ({
  control,
  sectionIndex,
}: {
  control: Control<CreateMenuFormValues>;
  sectionIndex: number;
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `sections.${sectionIndex}.items`,
  });

  return (
    <div className="space-y-4 px-3">
      {fields.map((item, itemIndex) => (
        <MenuAddModalContent
          key={item.id}
          sectionIndex={sectionIndex}
          itemIndex={itemIndex}
          removeItem={() => remove(itemIndex)}
        />
      ))}
      <Button
        type="button"
        onClick={() =>
          append({
            itemName: "",
            itemDescription: "",
            hasSize: false,
            itemPrice: 0,
            itemPrepTime: "",
            itemRating: 0,
            itemFeatured: false,
            itemImage: "",
            itemSizes: [],
          })
        }
        variant="outline"
        size="sm"
        className="flex items-center gap-1"
      >
        <Plus className="h-4 w-4" />
        Add Item
      </Button>
    </div>
  );
};

export default CreateMenuManagementPanel;
