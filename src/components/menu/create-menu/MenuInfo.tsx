import GenericInputField from "@/components/generic-form/GenericInputField";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import type { CreateMenuFormValues } from "@/schemas/CreateMenuSchema";
import GenericTextField from "@/components/generic-form/GenericTextField";

type MenuInfoProps = {
  handleNextStep: () => void;
};
const MenuInfo = ({ handleNextStep }: MenuInfoProps) => {
  const { control } = useFormContext<CreateMenuFormValues>();

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <GenericInputField<CreateMenuFormValues>
              control={control}
              name="menuName"
              label="Menu Name"
              placeholder="e.g. Summer Special, Weekend Brunch"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <GenericTextField<CreateMenuFormValues>
              name={"description"}
              control={control}
              label="Description"
              placeholder="Description"
            />
          </div>
          <div className="space-y-2">
            <GenericInputField<CreateMenuFormValues>
              control={control}
              name="restaurantName"
              label="Restaurant Name"
              placeholder="Your restaurant name"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <GenericInputField<CreateMenuFormValues>
              control={control}
              name="tagLine"
              label="Tagline"
              placeholder="e.g. Serving fresh food since 1995"
            />
          </div>
          <div className="flex justify-end">
            <Button
              onClick={handleNextStep}
              className="bg-rose-600 hover:bg-rose-700"
            >
              Next Step
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuInfo;
