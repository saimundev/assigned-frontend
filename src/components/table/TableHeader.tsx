import { Plus } from "lucide-react";
import CommonHeader from "../common/CommonHeader";
import { Button } from "../ui/button";

type TableHeaderProps = {
    handleOpenCreateModal: () => void;
};
const TableHeader = ({ handleOpenCreateModal }: TableHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <CommonHeader
        title="Table Management"
        description="Manage restaurant tables and QR codes"
      />
      <Button
        onClick={handleOpenCreateModal}
        className="bg-green-600 hover:bg-green-700"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add New Table
      </Button>
    </div>
  );
};

export default TableHeader;
