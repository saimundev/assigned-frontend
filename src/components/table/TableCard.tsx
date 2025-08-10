import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Download, Edit, QrCode, Trash2 } from "lucide-react";
import { Button } from "../ui/button";

const getStatusColor = (status: string) => {
  switch (status) {
    case "Available":
      return "bg-green-100 text-green-800 hover:bg-green-100";
    case "Occupied":
      return "bg-red-100 text-red-800 hover:bg-red-100";
    case "Reserved":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-100";
  }
};

const TableCard = ({
  table,
  updateData,
  handleDelete,
  handleOpenCreateModal,
  handleViewQrCode,
  handleEdit,
}: any) => {
  return (
    <Card
      key={table.id}
      className="shadow-sm hover:shadow-md transition-shadow"
    >
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-semibold text-gray-900">
              {table.name}
            </CardTitle>
            <p className="text-sm text-gray-500">{table.seats} seats</p>
          </div>
          <Badge className={getStatusColor(table.status)}>{table.status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          <div className="bg-gray-50 p-4 rounded-lg">
            <img
              src={table.qrCode || "/placeholder.svg"}
              alt={`QR Code for ${table.name}`}
              width={80}
              height={80}
              className="w-20 h-20"
            />
          </div>
        </div>

        {/* table action */}
        <div className="flex gap-2">
          <Button
            onClick={() => handleViewQrCode(table.id)}
            variant="outline"
            size="sm"
            className="flex-1 bg-transparent"
          >
            <QrCode className="w-4 h-4 mr-2" />
            View QR
          </Button>
          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={() => handleEdit(table)}
            variant="outline"
            size="sm"
            className="flex-1 bg-transparent"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </Button>
          <Button
            onClick={() => handleDelete(table.id)}
            variant="destructive"
            size="sm"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TableCard;
