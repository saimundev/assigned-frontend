import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Search,
  Archive,
  MessageCircle,
  User,
  Clock,
  CheckCircle,
  XCircle,
  RefreshCcw,
  ArrowLeft,
  Utensils,
} from "lucide-react";
import { format, parseISO } from "date-fns";
import { Link } from "react-router";

interface ArchivedChatMessage {
  id: string;
  senderId: string;
  senderType: "customer" | "manager";
  senderName: string;
  message: string;
  timestamp: string;
}

interface ArchivedChatSession {
  orderId: string;
  customerId: string;
  customerName: string;
  tableNumber: string;
  status: "completed" | "no-response";
  lastMessageTime: string;
  archivedDuration: string;
  messages: ArchivedChatMessage[];
}

const mockArchivedChatSessions: ArchivedChatSession[] = [
  {
    orderId: "#001",
    customerId: "CUST-001",
    customerName: "John Doe",
    tableNumber: "T-05",
    status: "completed",
    lastMessageTime: "2024-01-15T14:45:00Z",
    archivedDuration: "Auto-archived after 30 mins",
    messages: [
      {
        id: "msg-1",
        senderId: "CUST-001",
        senderType: "customer",
        senderName: "John Doe",
        message:
          "Hi! Could you please let me know how long the pizza will take?",
        timestamp: "2024-01-15T14:30:00Z",
      },
      {
        id: "msg-2",
        senderId: "MGR-001",
        senderType: "manager",
        senderName: "Sarah Johnson",
        message:
          "Hello John! Your Margherita pizza is currently being prepared. It should be ready in about 10-12 minutes.",
        timestamp: "2024-01-15T14:32:00Z",
      },
      {
        id: "msg-3",
        senderId: "CUST-001",
        senderType: "customer",
        senderName: "John Doe",
        message:
          "Perfect, thank you! Also, could I get some extra parmesan cheese on the side?",
        timestamp: "2024-01-15T14:35:00Z",
      },
      {
        id: "msg-4",
        senderId: "MGR-001",
        senderType: "manager",
        senderName: "Sarah Johnson",
        message: "Sure, I'll add that to your order. Enjoy your meal!",
        timestamp: "2024-01-15T14:40:00Z",
      },
      {
        id: "msg-5",
        senderId: "CUST-001",
        senderType: "customer",
        senderName: "John Doe",
        message: "Thanks!",
        timestamp: "2024-01-15T14:45:00Z",
      },
    ],
  },
  {
    orderId: "#003",
    customerId: "CUST-003",
    customerName: "Mike Johnson",
    tableNumber: "T-08",
    status: "no-response",
    lastMessageTime: "2024-01-15T15:10:00Z",
    archivedDuration: "Auto-archived after 30 mins",
    messages: [
      {
        id: "msg-6",
        senderId: "CUST-003",
        senderType: "customer",
        senderName: "Mike Johnson",
        message: "Is it possible to change my burger from medium to well-done?",
        timestamp: "2024-01-15T15:00:00Z",
      },
      {
        id: "msg-7",
        senderId: "MGR-001",
        senderType: "manager",
        senderName: "Sarah Johnson",
        message: "Checking on that for you now, Mike!",
        timestamp: "2024-01-15T15:10:00Z",
      },
    ],
  },
  {
    orderId: "#005",
    customerId: "CUST-005",
    customerName: "Emily White",
    tableNumber: "T-10",
    status: "completed",
    lastMessageTime: "2024-01-14T10:00:00Z",
    archivedDuration: "Auto-archived after 30 mins",
    messages: [
      {
        id: "msg-8",
        senderId: "CUST-005",
        senderType: "customer",
        senderName: "Emily White",
        message: "Can I get the wifi password?",
        timestamp: "2024-01-14T09:50:00Z",
      },
      {
        id: "msg-9",
        senderId: "MGR-001",
        senderType: "manager",
        senderName: "Sarah Johnson",
        message: "The Wi-Fi password is 'GreenGardenGuest'. Enjoy your stay!",
        timestamp: "2024-01-14T09:52:00Z",
      },
    ],
  },
];

const ArchivedChatPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArchivedChat, setSelectedArchivedChat] =
    useState<ArchivedChatSession | null>(null);

  const filteredChats = mockArchivedChatSessions.filter((chat) => {
    const matchesSearch =
      chat.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chat.tableNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chat.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      format(parseISO(chat.lastMessageTime), "PPP")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-800 hover:bg-green-100 opacity-70"
          >
            <CheckCircle className="w-3 h-3 mr-1" />
            Completed
          </Badge>
        );
      case "no-response":
        return (
          <Badge
            variant="secondary"
            className="bg-red-100 text-red-800 hover:bg-red-100 opacity-70"
          >
            <XCircle className="w-3 h-3 mr-1" />
            No Response
          </Badge>
        );
      default:
        return (
          <Badge
            variant="secondary"
            className="bg-gray-100 text-gray-600 hover:bg-gray-100 opacity-70"
          >
            Archived
          </Badge>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/chat">
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Live Chat
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Archived Chats</h1>
          <p className="text-gray-600">Review past customer conversations</p>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search archived chats by customer, table, order ID, or date..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Archived Chats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChats.map((chat) => (
          <Card
            key={chat.orderId}
            className="shadow-sm hover:shadow-md transition-shadow"
          >
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {chat.customerName}
                  </CardTitle>
                  <p className="text-sm text-gray-500">
                    {chat.tableNumber} • Order {chat.orderId}
                  </p>
                </div>
                {getStatusBadge(chat.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>
                  Last message:{" "}
                  {format(parseISO(chat.lastMessageTime), "MMM dd, yyyy HH:mm")}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 italic">
                <Archive className="w-4 h-4" />
                <span>{chat.archivedDuration}</span>
              </div>

              <div className="flex gap-2 pt-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                      onClick={() => setSelectedArchivedChat(chat)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      View Chat
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl h-[600px] flex flex-col p-0">
                    <DialogHeader className="p-4 border-b bg-gray-50">
                      <DialogTitle className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-green-100 text-green-600">
                            <User className="w-5 h-5" />
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {selectedArchivedChat?.customerName}
                          </p>
                          <p className="text-sm text-gray-600">
                            Order {selectedArchivedChat?.orderId} • Table{" "}
                            {selectedArchivedChat?.tableNumber}
                          </p>
                          <p className="text-xs text-gray-500">
                            Order Time:{" "}
                            {format(
                              parseISO(
                                selectedArchivedChat?.messages[0]?.timestamp ||
                                  new Date().toISOString()
                              ),
                              "MMM dd, yyyy HH:mm"
                            )}
                          </p>
                        </div>
                      </DialogTitle>
                    </DialogHeader>

                    {selectedArchivedChat && (
                      <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {selectedArchivedChat.messages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${
                              message.senderType === "manager"
                                ? "justify-end"
                                : "justify-start"
                            }`}
                          >
                            <div className="flex items-start gap-2 max-w-[80%]">
                              {message.senderType === "customer" && (
                                <Avatar className="w-8 h-8">
                                  <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">
                                    <User className="w-4 h-4" />
                                  </AvatarFallback>
                                </Avatar>
                              )}
                              <div
                                className={`rounded-lg p-3 ${
                                  message.senderType === "manager"
                                    ? "bg-green-600 text-white"
                                    : "bg-gray-100 text-gray-900"
                                }`}
                              >
                                <p className="text-sm">{message.message}</p>
                                <div className="flex items-center gap-1 mt-1">
                                  <Clock className="w-3 h-3 opacity-70" />
                                  <p className="text-xs opacity-70">
                                    {format(
                                      parseISO(message.timestamp),
                                      "HH:mm"
                                    )}
                                  </p>
                                </div>
                              </div>
                              {message.senderType === "manager" && (
                                <Avatar className="w-8 h-8">
                                  <AvatarFallback className="bg-green-100 text-green-600 text-xs">
                                    <Utensils className="w-4 h-4" />
                                  </AvatarFallback>
                                </Avatar>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="border-t p-4 flex justify-end">
                      <Button className="bg-green-600 hover:bg-green-700">
                        <RefreshCcw className="w-4 h-4 mr-2" />
                        Restore Chat
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredChats.length === 0 && (
        <Card className="shadow-sm">
          <CardContent className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Archive className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No archived chats found
            </h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ArchivedChatPage;
