import { Card, CardContent } from "../ui/card";

const tables = [
  {
    id: 1,
    name: "T-01",
    seats: 4,
    status: "Available",
    qrCode: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "T-02",
    seats: 2,
    status: "Occupied",
    qrCode: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "T-03",
    seats: 6,
    status: "Available",
    qrCode: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "T-04",
    seats: 4,
    status: "Reserved",
    qrCode: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "T-05",
    seats: 8,
    status: "Occupied",
    qrCode: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 6,
    name: "T-06",
    seats: 2,
    status: "Available",
    qrCode: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 7,
    name: "T-07",
    seats: 4,
    status: "Available",
    qrCode: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 8,
    name: "T-08",
    seats: 6,
    status: "Reserved",
    qrCode: "/placeholder.svg?height=100&width=100",
  },
];

const TableStatusCard = () => {
  const availableTables = tables.filter(
    (table) => table.status === "Available"
  ).length;
  const occupiedTables = tables.filter(
    (table) => table.status === "Occupied"
  ).length;
  const reservedTables = tables.filter(
    (table) => table.status === "Reserved"
  ).length;
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {tables.length}
            </div>
            <p className="text-sm text-gray-600">Total Tables</p>
          </div>
        </CardContent>
      </Card>
      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {availableTables}
            </div>
            <p className="text-sm text-gray-600">Available</p>
          </div>
        </CardContent>
      </Card>
      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">
              {occupiedTables}
            </div>
            <p className="text-sm text-gray-600">Occupied</p>
          </div>
        </CardContent>
      </Card>
      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {reservedTables}
            </div>
            <p className="text-sm text-gray-600">Reserved</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TableStatusCard;
