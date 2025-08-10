import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";

type ConfirmModalProps = {
  open: boolean;
  onConfirm: () => void;
  onClose?: () => void;
  loading?: boolean;
};

const ConfirmModal = ({
  open,
  onClose,
  onConfirm,
  loading,
}: ConfirmModalProps) => {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="w-[350px]">
        <Trash2 className="mx-auto text-destructive" size={45} />
        <AlertDialogHeader className="py-4">
          <AlertDialogTitle className="text-center">
            Are you sure you want to delete this item?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <Button
            variant={"destructive"}
            disabled={loading}
            onClick={onConfirm}
          >
            Continue
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmModal;
