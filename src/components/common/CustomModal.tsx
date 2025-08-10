import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type CustomDialogProps = {
  open?: boolean;
  onClose?: () => void;
  title: string;
  description?: string;
  children: ReactNode;
  titleClassName?: string;
  descriptionClassName?: string;
  contentClassName?: string;
};

export default function CustomModal({
  open = false,
  onClose,
  title,
  description,
  children,
  descriptionClassName,
  contentClassName,
}: CustomDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className={cn("w-full lg:max-w-lg", contentClassName)}
        onEscapeKeyDown={onClose}
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-title">{title}</DialogTitle>
          {description && (
            <DialogDescription className={descriptionClassName}>
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
}
