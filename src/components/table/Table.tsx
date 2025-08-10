import { useState } from "react";
import TableStatusCard from "@/components/table/TableStatusCard";
import TableCard from "@/components/table/TableCard";
import TableModal from "./TableModal";
import TableHeader from "./TableHeader";

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

const Table = () => {
  const [createTableOpen, setCreateTableOpen] = useState(false);
  const [qrCodeData, setQRCodeData] = useState({
    tableId: "",
    isOpen: false,
  });
  const [tableDeleteData, setTableDeleteData] = useState({
    tableId: "",
    isOpen: false,
  });

  const [tableEditData, setTableEditData] = useState({
    editData: "",
    isOpen: false,
  });

  const handleViewQrCode = (tableId: string) => {
    setQRCodeData({
      tableId: tableId,
      isOpen: true,
    });
  };

  const handleDelete = (tableId: string) => {
    setTableDeleteData({
      tableId: tableId,
      isOpen: true,
    });
  };

  const handleEdit = (data: any) => {
    setTableEditData({
      editData: data,
      isOpen: true,
    });
  };

  const deleteConfirm = () => {};

  return (
    <div className="space-y-6">
      <TableHeader handleOpenCreateModal={() => setCreateTableOpen(true)} />

      {/* Table Stats */}
      <TableStatusCard />

      {/* Tables List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tables.map((table) => (
          <TableCard
            table={table}
            key={table.id}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleViewQrCode={handleViewQrCode}
          />
        ))}
      </div>

      {/* Create/Update/Delete/QR Code Table Modal */}
      <TableModal
        createTableOpen={createTableOpen}
        handleCloseCreateModal={() => setCreateTableOpen(false)}
        qrCodeOpen={qrCodeData.isOpen}
        qrCodeClose={() => setQRCodeData({ tableId: "", isOpen: false })}
        qrCodeData={qrCodeData.tableId}
        openDeleteModal={tableDeleteData.isOpen}
        closeDeleteModal={() =>
          setTableDeleteData({ tableId: "", isOpen: false })
        }
        tableDeleteData={tableDeleteData.tableId}
        openEditModal={tableEditData.isOpen}
        closeEditModal={() => setTableEditData({ editData: "", isOpen: false })}
        tableEditData={tableEditData.editData}
        deleteConfirm={deleteConfirm}
      />
    </div>
  );
};

export default Table;
