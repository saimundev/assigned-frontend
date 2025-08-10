import { Button } from "../ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const OrderModalContent = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Update Order Status</DialogTitle>
        <DialogDescription>
          Change the status of order {selectedOrder?.id}
        </DialogDescription>
      </DialogHeader>

      <div className="grid gap-4 py-4">
        <div className="grid gap-2">
          <Label>Current Status</Label>
          <div className="flex items-center h-10 px-3 rounded-md border">
            {selectedOrder && getStatusBadge(selectedOrder.status)}
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="new-status">New Status</Label>
          <Select
            value={newStatus}
            onValueChange={(value) => setNewStatus(value as OrderStatus)}
          >
            <SelectTrigger id="new-status">
              <SelectValue placeholder="Select new status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">New/Pending</SelectItem>
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="preparing">Preparing</SelectItem>
              <SelectItem value="ready">Ready</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="customer-message">
            Message to Customer (Optional)
          </Label>
          <Textarea
            id="customer-message"
            placeholder="Add a note that will be sent to the customer"
            value={customerMessage}
            onChange={(e) => setCustomerMessage(e.target.value)}
          />
        </div>
      </div>

      <DialogFooter>
        <Button variant="outline" onClick={() => setStatusUpdateDialog(false)}>
          Cancel
        </Button>
        <Button
          onClick={confirmStatusUpdate}
          disabled={isLoading}
          className="bg-rose-600 hover:bg-rose-700"
        >
          {isLoading ? "Updating..." : "Update Status"}
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default OrderModalContent;
