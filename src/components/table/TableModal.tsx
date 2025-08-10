import { Fragment } from "react/jsx-runtime";
import CustomModal from "../common/CustomModal";
import CreateUpdateModalContent from "./CreateUpdateModalContent";
import ConfirmModal from "../common/ConfirmModal";
import TableQRCodeModalContent from "./TableQRCodeModalContent";

type TableModalProps = {
  createTableOpen: boolean;
  handleCloseCreateModal: () => void;
  qrCodeOpen: boolean;
  qrCodeClose: () => void;
  qrCodeData: string;
  openDeleteModal: boolean;
  closeDeleteModal: () => void;
  tableDeleteData: string;
  openEditModal: boolean;
  closeEditModal: () => void;
  tableEditData: any;
  deleteConfirm: () => void;
};

const TableModal = ({
  createTableOpen,
  handleCloseCreateModal,
  qrCodeOpen,
  qrCodeClose,
  qrCodeData,
  openDeleteModal,
  closeDeleteModal,
  tableDeleteData,
  openEditModal,
  closeEditModal,
  tableEditData,
  deleteConfirm,
}: TableModalProps) => {
  return (
    <Fragment>
      <CustomModal
        open={createTableOpen}
        onClose={handleCloseCreateModal}
        title="Add New Table"
      >
        <CreateUpdateModalContent mood="CREATE" />
      </CustomModal>

      <CustomModal
        open={openEditModal}
        onClose={closeEditModal}
        title="Update Table"
      >
        <CreateUpdateModalContent mood="UPDATE" />
      </CustomModal>

      <CustomModal
        open={qrCodeOpen}
        onClose={qrCodeClose}
        title="Add New Table"
      >
        <TableQRCodeModalContent />
      </CustomModal>

      <ConfirmModal
        open={openDeleteModal}
        onClose={closeDeleteModal}
        onConfirm={deleteConfirm}
      />
    </Fragment>
  );
};

export default TableModal;
