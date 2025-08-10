import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";

type CreateMenuCardHeaderProps = {
  selectOptions: string;
  setSelectOptions: React.Dispatch<React.SetStateAction<string>>;
};

const CreateMenuCardHeader = ({
  selectOptions,
  setSelectOptions,
}: CreateMenuCardHeaderProps) => {
  return (
    <div className="space-y-4 pb-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Menu Sections</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSelectOptions("menu-management")}
            className="flex items-center gap-1"
          >
            <Palette className="h-4 w-4" />
            Menu
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSelectOptions("choose-template")}
            className="flex items-center gap-1"
          >
            <Palette className="h-4 w-4" />
            Templates
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSelectOptions("customize-menu")}
            className="flex items-center gap-1"
          >
            <Palette className="h-4 w-4" />
            Customize
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateMenuCardHeader;
