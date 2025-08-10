import { useState } from "react";
import { useNavigate } from "react-router";
import CreateMenuHeader from "./CreateMenuHeader";
import CreateMenuSteper from "./CreateMenuSteper";
import MenuInfo from "./MenuInfo";
import AddItem from "./AddItem";
import ChoseTemplate from "./ChoseTemplate";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createMenuSchema,
  type CreateMenuFormValues,
} from "@/schemas/CreateMenuSchema";

const CreateMenu = () => {
  const form = useForm<CreateMenuFormValues>({
    resolver: zodResolver(createMenuSchema),
  });
  const router = useNavigate();
  const [step, setStep] = useState(1);
  const handleNextStep = async () => {
    const isValid = await form.trigger([
      "menuName",
      "description",
      "restaurantName",
      "tagLine",
    ]);

    if (isValid) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSaveMenu = (data: CreateMenuFormValues) => {
    console.log("first=====>", data);
  };

  return (
    <div className="space-y-6">
      <CreateMenuHeader />

      {/* Progress steps */}
      <CreateMenuSteper step={step} />

      {/* Form */}
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(handleSaveMenu)}>
          {/* Step 1: Menu Info */}
          {step === 1 && <MenuInfo handleNextStep={handleNextStep} />}

          {/* Step 2: Choose Template */}
          {step === 2 && (
            <ChoseTemplate
              handleNextStep={handleNextStep}
              handlePrevStep={handlePrevStep}
            />
          )}

          {/* Step 3: Add Items */}
          {step === 3 && <AddItem handlePrevStep={handlePrevStep} />}
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateMenu;
