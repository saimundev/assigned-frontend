import { Check } from "lucide-react";
type CreateMenuSteperProps = {
  step: number;
};

const CreateMenuSteper = ({ step }: CreateMenuSteperProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div  
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step >= 1 ? "bg-rose-600 text-white" : "bg-gray-200"
          }`}
        >
          {step > 1 ? <Check className="h-4 w-4" /> : "1"}
        </div>
        <span className={step >= 1 ? "font-medium" : "text-muted-foreground"}>
          Menu Info
        </span>
      </div>
      <div className="h-px w-12 bg-gray-200"></div>
      <div className="flex items-center gap-2">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step >= 2 ? "bg-rose-600 text-white" : "bg-gray-200"
          }`}
        >
          {step > 2 ? <Check className="h-4 w-4" /> : "2"}
        </div>
        <span className={step >= 2 ? "font-medium" : "text-muted-foreground"}>
          Choose Template
        </span>
      </div>
      <div className="h-px w-12 bg-gray-200"></div>
      <div className="flex items-center gap-2">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step >= 3 ? "bg-rose-600 text-white" : "bg-gray-200"
          }`}
        >
          {step > 3 ? <Check className="h-4 w-4" /> : "3"}
        </div>
        <span className={step >= 3 ? "font-medium" : "text-muted-foreground"}>
          Add Items
        </span>
      </div>
    </div>
  );
};

export default CreateMenuSteper;
