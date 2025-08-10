import { useFieldArray, useFormContext, Controller } from "react-hook-form";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Slider } from "../ui/slider";
import { ImageIcon } from "lucide-react";
import { Button } from "../ui/button";
import type { CreateMenuFormValues } from "@/schemas/CreateMenuSchema";
import GenericInputField from "../generic-form/GenericInputField";
import GenericTextField from "../generic-form/GenericTextField";
import { useEffect } from "react";

const MenuAddModalContent = ({
  sectionIndex,
  itemIndex,
  removeItem,
}: {
  sectionIndex: number;
  itemIndex: number;
  removeItem: () => void;
}) => {
  const { control, watch, setValue } = useFormContext<CreateMenuFormValues>();
  const fieldPath = `sections.${sectionIndex}.items.${itemIndex}` as const;
  const hasSizes = watch(`${fieldPath}.hasSize`);

  const { fields: sizes, append: appendSize } =
    useFieldArray<CreateMenuFormValues>({
      control,
      name: `${fieldPath}.itemSizes`,
    });

  useEffect(() => {
    if (hasSizes && sizes.length === 0) {
      appendSize({
        size: "",
        price: 0,
      });
    }
  }, [hasSizes]);

  return (
    <div className="grid gap-4 py-4 border-b pb-6">
      <div className="grid gap-2">
        <GenericInputField<CreateMenuFormValues>
          control={control}
          name={`${fieldPath}.itemName`}
          label="Item Name"
          placeholder="e.g. Margherita Pizza"
        />
      </div>

      <div className="grid gap-2">
        <GenericTextField<CreateMenuFormValues>
          control={control}
          name={`${fieldPath}.itemDescription`}
          label="Description"
          placeholder="Describe your menu item"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Controller
          control={control}
          name={`${fieldPath}.hasSize`}
          render={({ field }) => (
            <Switch checked={field.value} onCheckedChange={field.onChange} />
          )}
        />
        <Label>This item has multiple sizes/variants</Label>
      </div>

      {hasSizes ? (
        <div className="space-y-3">
          <Label>Size Options</Label>
          {sizes.map((size, sizeIndex) => (
            <div key={size.id} className="grid grid-cols-2 gap-2">
              <GenericInputField<CreateMenuFormValues>
                control={control}
                name={`${fieldPath}.itemSizes.${sizeIndex}.size`}
                placeholder="e.g. Small, Medium, Large"
                label="Size"
              />
              <div className="relative">
                <span className="absolute text-sm left-3 top-1/2 -translate-y-1/2 text-muted-foreground pt-4">
                  $
                </span>
                <GenericInputField<CreateMenuFormValues>
                  control={control}
                  name={`${fieldPath}.itemSizes.${sizeIndex}.price`}
                  placeholder="0.00"
                  type="number"
                  label="Price"
                  className="pl-6 "
                />
              </div>
            </div>
          ))}
          <Button
            onClick={() => appendSize({ size: "", price: 0 })}
            type="button"
            size="sm"
            variant="outline"
          >
            <ImageIcon className="mr-2 h-4 w-4" />
            Add Size
          </Button>
        </div>
      ) : (
        <GenericInputField<CreateMenuFormValues>
          control={control}
          name={`${fieldPath}.itemPrice`}
          placeholder="0.00"
          label="Price"
        />
      )}

      <div className="flex items-center space-x-2">
        <Controller
          control={control}
          name={`${fieldPath}.itemFeatured`}
          render={({ field }) => (
            <Switch checked={field.value} onCheckedChange={field.onChange} />
          )}
        />
        <Label>Mark as featured item</Label>
      </div>

      <div className="grid gap-2">
        <GenericInputField<CreateMenuFormValues>
          control={control}
          name={`${fieldPath}.itemPrepTime`}
          label="Preparation Time"
          placeholder="e.g. 10 minutes"
          type="number"
        />
      </div>

      <div className="grid gap-2">
        <Label>Rating</Label>
        <Controller
          control={control}
          name={`${fieldPath}.itemRating`}
          render={({ field }) => (
            <div className="flex items-center">
              <Slider
                min={0}
                max={5}
                step={0.5}
                value={[field.value]}
                onValueChange={(value) => field.onChange(value[0])}
                className="w-full"
              />
              <span className="ml-2 min-w-[40px] text-center">
                {field.value}
              </span>
            </div>
          )}
        />
      </div>

      <div className="grid gap-2">
        <Label>Image</Label>
        <div className="border-2 border-dashed rounded-md p-4 text-center">
          <div className="flex justify-center mb-2">
            <ImageIcon className="h-8 w-8 text-muted-foreground" />

            <Controller
              control={control}
              name={`${fieldPath}.itemImage`}
              render={({ field }) => (
                <div className="flex items-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0] ?? null;
                      if (file) {
                        const url = URL.createObjectURL(file);
                        field.onChange(url);
                      }
                    }}
                  />
                </div>
              )}
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Image upload would be implemented here
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Using placeholder image for now
          </p>
        </div>
      </div>

      <div className="text-right">
        <Button variant="destructive" type="button" onClick={removeItem}>
          Remove Item
        </Button>
      </div>
    </div>
  );
};

export default MenuAddModalContent;
