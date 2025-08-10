import { useFormContext, Controller, useWatch } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import type { CreateMenuFormValues } from "@/schemas/CreateMenuSchema";
import GenericInputField from "@/components/generic-form/GenericInputField";
import {
  customImageSizeOptions,
  customizeColor,
  type ImageType,
} from "@/constants/menuData";
import GenericSelectField from "@/components/generic-form/GenericSelectField";

const CreateMenuCardCustomize = () => {
  const { control } = useFormContext<CreateMenuFormValues>();

  const customColors = useWatch({
    control,
    name: "customizationSchema",
  });

  return (
    <ScrollArea className="h-[calc(100vh-400px)] pr-4">
      <div className="mt-4 space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium">Restaurant Information</h3>
          <div className="grid gap-3">
            <div className="grid gap-2">
              <GenericInputField<CreateMenuFormValues>
                control={control}
                name="restaurantName"
                label="Restaurant Name"
                placeholder="Your restaurant name"
              />
            </div>
            <GenericInputField<CreateMenuFormValues>
              control={control}
              name="tagLine"
              label="Tagline"
              placeholder="Restaurant tagline"
            />
          </div>
        </div>
      </div>

      {/* Colors */}
      <div className="space-y-4">
        <h3 className="font-medium">Colors</h3>
        {customizeColor.map(({ label, key }) => (
          <div key={key} className="grid gap-2">
            <div className="flex justify-between">
              <Label htmlFor={key}>{label}</Label>
              <div
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: customColors?.[key] || "#000" }}
              />
            </div>
            <Controller
              control={control}
              name={`customizationSchema.${key}` as keyof CreateMenuFormValues}
              render={({ field }) => (
                <Input
                  id={key}
                  type="color"
                  value={field.value as string}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
          </div>
        ))}
      </div>

      {/* Layout */}
      <div className="space-y-4">
        <h3 className="font-medium">Layout</h3>
        <div className="grid gap-3">
          <div className="grid gap-2">
            <div className="flex justify-between">
              <Label htmlFor="spacing">Section Spacing</Label>
              <span className="text-sm">
                {customColors?.sectionSpacing ?? 3}
              </span>
            </div>
            <Controller
              control={control}
              name="customizationSchema.sectionSpacing"
              render={({ field }) => (
                <Slider
                  min={1}
                  max={10}
                  step={1}
                  value={[field.value || 3]}
                  onValueChange={(val) => field.onChange(val[0])}
                />
              )}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex justify-between">
              <Label htmlFor="spacing">Item Spacing</Label>
              <span className="text-sm">{customColors?.itemSpacing ?? 3}</span>
            </div>
            <Controller
              control={control}
              name="customizationSchema.itemSpacing"
              render={({ field }) => (
                <Slider
                  min={1}
                  max={10}
                  step={1}
                  value={[field.value || 3]}
                  onValueChange={(val) => field.onChange(val[0])}
                />
              )}
            />
          </div>

          <div className="grid gap-2">
            <div className="flex justify-between">
              <Label htmlFor="cornerRounded">Menu Rounded</Label>
              <span className="text-sm">{customColors?.menuRounded ?? 3}</span>
            </div>
            <Controller
              control={control}
              name="customizationSchema.menuRounded"
              render={({ field }) => (
                <Slider
                  min={1}
                  max={10}
                  step={1}
                  value={[field.value || 3]}
                  onValueChange={(val) => field.onChange(val[0])}
                />
              )}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex justify-between">
              <Label htmlFor="cornerRounded">Box Rounded</Label>
              <span className="text-sm">{customColors?.boxRounded ?? 3}</span>
            </div>
            <Controller
              control={control}
              name="customizationSchema.boxRounded"
              render={({ field }) => (
                <Slider
                  min={1}
                  max={10}
                  step={1}
                  value={[field.value || 3]}
                  onValueChange={(val) => field.onChange(val[0])}
                />
              )}
            />
          </div>
          <div className="grid gap-2">
            <GenericSelectField<CreateMenuFormValues, ImageType>
              control={control}
              name="customizationSchema.imageRounded"
              label="Image Rounded"
              items={customImageSizeOptions}
            />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default CreateMenuCardCustomize;
