import { menuTemplates } from "@/constants/TemplateMenu";
import { ScrollArea } from "../../ui/scroll-area";
import { useState } from "react";
import { Check } from "lucide-react";

const MenuTemplateChooseModalContent = ({ applyTemplate }: any) => {
  const [selectedTemplate, setSelectedTemplate] = useState("classic");
  return (
    <div>
      <ScrollArea className="h-screen pr-4">
        <div className="grid grid-cols-2 gap-4">
          {menuTemplates.map((template) => (
            <div
              key={template.id}
              className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                selectedTemplate === template.id
                  ? "border-blue-500 ring-2 ring-blue-500"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => applyTemplate(template.id)}
            >
              <div className="aspect-video relative">
                <img
                  src={template.preview || "/placeholder.svg"}
                  alt={template.name}
                  className="object-cover"
                />
              </div>
              <div className="p-2 bg-white">
                <h3 className="font-medium">{template.name}</h3>
                <p className="text-xs text-gray-500">{template.description}</p>
              </div>
              {selectedTemplate === template.id && (
                <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1">
                  <Check className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default MenuTemplateChooseModalContent;
