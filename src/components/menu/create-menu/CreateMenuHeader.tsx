import CommonHeader from "@/components/common/CommonHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

const CreateMenuHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-4">
      <Button onClick={() => navigate(-1)} variant="outline" size="icon">
        <ArrowLeft className="h-4 w-4" />
      </Button>

      <CommonHeader
        title="Create New Menu"
        description="Design a beautiful menu for your restaurant"
      />
    </div>
  );
};

export default CreateMenuHeader;
