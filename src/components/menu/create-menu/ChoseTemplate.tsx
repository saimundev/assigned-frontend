import { menuTemplates } from "@/constants/TemplateMenu";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import type { CreateMenuFormValues } from "@/schemas/CreateMenuSchema";

type ChoseTemplateProps = {
  handleNextStep: () => void;
  handlePrevStep: () => void;
};
const ChoseTemplate = ({
  handleNextStep,
  handlePrevStep,
}: ChoseTemplateProps) => {
  const { reset } = useFormContext<CreateMenuFormValues>();
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const handleSelectTemplate = (templateId: string) => {
    const template = menuTemplates.find((t) => t.id === templateId);

    if (template) {
      reset(template);
    }

    setSelectedTemplate(templateId);
  };
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Choose a Template</h2>
            <p className="text-muted-foreground">
              Select a template that best fits your restaurant's style. You can
              customize colors and layout later.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuTemplates.map((template) => (
                <div
                  key={template.id}
                  className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all hover:shadow-md ${
                    selectedTemplate === template.id
                      ? "border-rose-500 ring-2 ring-rose-500"
                      : "border-gray-200"
                  }`}
                  onClick={() => handleSelectTemplate(template.id)}
                >
                  <div className="aspect-video relative">
                    <img
                      src={template.preview || "/placeholder.svg"}
                      alt={template.name}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 bg-white">
                    <h3 className="font-medium">{template.name}</h3>
                    <p className="text-xs text-gray-500">
                      {template.description}
                    </p>
                  </div>
                  {selectedTemplate === template.id && (
                    <div className="absolute top-2 right-2 bg-rose-500 text-white rounded-full p-1">
                      <Check className="h-4 w-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={handlePrevStep}>
              Back
            </Button>
            <Button
              onClick={handleNextStep}
              className="bg-rose-600 hover:bg-rose-700"
              //   disabled={!selectedTemplate}
            >
              Next Step
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChoseTemplate;
