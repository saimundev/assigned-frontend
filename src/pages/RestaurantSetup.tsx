import useSetup from "@/components/auth/hooks/useSetup";
import UploadLogo from "@/components/auth/UploadLogo";
import LoadingButton from "@/components/common/LoadingButton";
import GenericFileField from "@/components/generic-form/GenericFileField";
import GenericInputField from "@/components/generic-form/GenericInputField";
import GenericSelectField from "@/components/generic-form/GenericSelectField";
import { Card, CardContent } from "@/components/ui/card";
import {
  restaurantTypeOptions,
  type RestaurantType,
} from "@/constants/restaurantTypes";
import type { RestaurantSetupValues } from "@/schemas/RestaurantSetupSchema";

const RestaurantSetup = () => {
  const { handleSubmit, control, handleSetupSubmit, isPending } = useSetup();
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-2xl shadow border-none">
        <CardContent>
          <div className=" space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 font-title">
                Restaurant Setup
              </h2>
              <p className="text-gray-600 mt-2 font-subtitle">
                Tell us a bit about your restaurant to get started.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(handleSetupSubmit)}
              className="space-y-6"
            >
              <div className="space-y-2">
                <GenericInputField<RestaurantSetupValues>
                  control={control}
                  name="restaurantName"
                  label="Restaurant Name *"
                  type="text"
                  placeholder="Enter your restaurant name"
                />
              </div>

              <div className="space-y-2">
                <GenericSelectField<RestaurantSetupValues, RestaurantType>
                  control={control}
                  name="restaurantType"
                  label="Restaurant Type *"
                  items={restaurantTypeOptions}
                  placeholder="Select restaurant type"
                />
              </div>

              <div className="space-y-2">
                <GenericFileField<RestaurantSetupValues>
                  control={control}
                  name="restaurantLogo"
                  label="Restaurant Logo *"
                  accept="image/*"
                  Component={UploadLogo}
                />

                <p className="text-sm text-gray-500">
                  Max file size 2MB. JPG, PNG, or SVG.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <LoadingButton type="submit" loading={isPending}>
                  Finish Setup
                </LoadingButton>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RestaurantSetup;
