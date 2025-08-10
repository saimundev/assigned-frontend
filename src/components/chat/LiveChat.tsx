import { useState, useEffect, useRef } from "react";
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
  MessageCircle,
  Send,
  Clock,
  CheckCheck,
  User,
  ChefHat,
} from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";

interface ChatMessage {
  id: string;
  orderId: string;
  senderId: string;
  senderType: "customer" | "manager";
  senderName: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: "text" | "image";
  imageUrl?: string;
}

interface ChatSession {
  orderId: string;
  customerId: string;
  customerName: string;
  tableNumber: string;
  status: "active" | "completed" | "archived";
  lastMessage?: ChatMessage;
  unreadCount: number;
  messages: ChatMessage[];
}

const mockChatSessions: ChatSession[] = [
  {
    orderId: "#001",
    customerId: "CUST-001",
    customerName: "John Doe",
    tableNumber: "T-05",
    status: "active",
    unreadCount: 2,
    messages: [
      {
        id: "msg-1",
        orderId: "#001",
        senderId: "CUST-001",
        senderType: "customer",
        senderName: "John Doe",
        message:
          "Hi! Could you please let me know how long the pizza will take?",
        timestamp: "2024-01-15T14:30:00Z",
        read: true,
        type: "text",
      },
      {
        id: "msg-2",
        orderId: "#001",
        senderId: "MGR-001",
        senderType: "manager",
        senderName: "Sarah Johnson",
        message:
          "Hello John! Your Margherita pizza is currently being prepared. It should be ready in about 10-12 minutes.",
        timestamp: "2024-01-15T14:32:00Z",
        read: true,
        type: "text",
      },
      {
        id: "msg-3",
        orderId: "#001",
        senderId: "CUST-001",
        senderType: "customer",
        senderName: "John Doe",
        message:
          "Perfect, thank you! Also, could I get some extra parmesan cheese on the side?",
        timestamp: "2024-01-15T14:35:00Z",
        read: false,
        type: "text",
      },
      {
        id: "msg-4",
        orderId: "#001",
        senderId: "CUST-001",
        senderType: "customer",
        senderName: "John Doe",
        message: "And maybe some chili flakes too if you have them?",
        timestamp: "2024-01-15T14:36:00Z",
        read: false,
        type: "text",
      },
    ],
  },
  {
    orderId: "#003",
    customerId: "CUST-003",
    customerName: "Mike Johnson",
    tableNumber: "T-08",
    status: "active",
    unreadCount: 1,
    messages: [
      {
        id: "msg-5",
        orderId: "#003",
        senderId: "CUST-003",
        senderType: "customer",
        senderName: "Mike Johnson",
        message: "Is it possible to change my burger from medium to well-done?",
        timestamp: "2024-01-15T15:10:00Z",
        read: false,
        type: "text",
      },
    ],
  },
];

// Quick reply templates for managers
const quickReplies = [
  "Your order is being prepared and will be ready shortly.",
  "I'll check with the kitchen and get back to you.",
  "I'll make sure to add that to your order.",
  "Thank you for your patience. Your food will be out in 5-10 minutes.",
  "Is there anything else I can help you with?",
  "Your order is ready for pickup!",
];

interface LiveChatProps {
  orderId?: string;
  isCustomerView?: boolean;
  isMinimized?: boolean;
  onToggleMinimize?: () => void;
}

export function LiveChat({
  orderId,
  isCustomerView = false,
  isMinimized = false,
  onToggleMinimize,
}: LiveChatProps) {
  const [chatSessions, setChatSessions] =
    useState<ChatSession[]>(mockChatSessions);
  const [selectedChat, setSelectedChat] = useState<ChatSession | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedChat?.messages]);

  // If orderId is provided, auto-select that chat
  useEffect(() => {
    if (orderId) {
      const chat = chatSessions.find((session) => session.orderId === orderId);
      if (chat) {
        setSelectedChat(chat);
      }
    }
  }, [orderId, chatSessions]);

  const sendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;

    const message: ChatMessage = {
      id: `msg-${Date.now()}`,
      orderId: selectedChat.orderId,
      senderId: isCustomerView ? selectedChat.customerId : "MGR-001",
      senderType: isCustomerView ? "customer" : "manager",
      senderName: isCustomerView ? selectedChat.customerName : "Sarah Johnson",
      message: newMessage,
      timestamp: new Date().toISOString(),
      read: false,
      type: "text",
    };

    setChatSessions((prev) =>
      prev.map((session) =>
        session.orderId === selectedChat.orderId
          ? {
              ...session,
              messages: [...session.messages, message],
              lastMessage: message,
              unreadCount: isCustomerView
                ? session.unreadCount
                : session.unreadCount + 1,
            }
          : session
      )
    );

    setSelectedChat((prev) =>
      prev
        ? {
            ...prev,
            messages: [...prev.messages, message],
            lastMessage: message,
          }
        : null
    );

    setNewMessage("");

    // Show notification
    toast(`${isCustomerView ? "You" : "Manager"}: ${newMessage}`, {
      duration: 3000,
      position: "bottom-right",
      style: {
        background: isCustomerView ? "#f0fff4" : "#f0f4ff",
        color: isCustomerView ? "#065f46" : "#1e3a8a",
      },
      icon: isCustomerView ? (
        <MessageCircle className="text-green-600" />
      ) : (
        <ChefHat className="text-blue-600" />
      ),
    });
  };

  const sendQuickReply = (reply: string) => {
    setNewMessage(reply);
    setShowQuickReplies(false);
  };

  const markAsRead = (chatId: string) => {
    setChatSessions((prev) =>
      prev.map((session) =>
        session.orderId === chatId
          ? {
              ...session,
              unreadCount: 0,
              messages: session.messages.map((msg) => ({ ...msg, read: true })),
            }
          : session
      )
    );
  };

  // Customer view - floating chat button and modal
  if (isCustomerView && orderId) {
    const currentChat = chatSessions.find(
      (session) => session.orderId === orderId
    );

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg z-50"
            onClick={() => currentChat && markAsRead(currentChat.orderId)}
          >
            <MessageCircle className="w-6 h-6 text-white" />
            {currentChat && currentChat.unreadCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                {currentChat.unreadCount}
              </Badge>
            )}
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md h-[600px] p-0">
          <DialogHeader className="p-4 border-b bg-green-50">
            <DialogTitle className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <ChefHat className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Chat with Manager</p>
                <p className="text-sm text-gray-600">
                  Order {orderId} • Table {currentChat?.tableNumber}
                </p>
              </div>
            </DialogTitle>
          </DialogHeader>

          {currentChat ? (
            <div className="flex flex-col h-full">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {currentChat.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.senderType === "customer"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.senderType === "customer"
                          ? "bg-green-600 text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="text-sm">{message.message}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <p className="text-xs opacity-70">
                          {format(new Date(message.timestamp), "HH:mm")}
                        </p>
                        {message.senderType === "customer" && (
                          <CheckCheck
                            className={`w-3 h-3 ${
                              message.read ? "text-blue-300" : "text-gray-300"
                            }`}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                    className="flex-1"
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={!newMessage.trim()}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">No chat available for this order</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    );
  }

  // Manager view - full chat interface
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
      {/* Chat Sessions List */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-green-600" />
            Active Chats
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-1">
            {chatSessions
              .filter((session) => session.status === "active")
              .map((session) => (
                <button
                  key={session.orderId}
                  onClick={() => {
                    setSelectedChat(session);
                    markAsRead(session.orderId);
                  }}
                  className={`w-full text-left p-4 hover:bg-gray-50 border-b transition-colors ${
                    selectedChat?.orderId === session.orderId
                      ? "bg-green-50 border-l-4 border-l-green-600"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gray-100 text-gray-600">
                          <User className="w-5 h-5" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900">
                          {session.customerName}
                        </p>
                        <p className="text-sm text-gray-500">
                          {session.orderId} • {session.tableNumber}
                        </p>
                      </div>
                    </div>
                    {session.unreadCount > 0 && (
                      <Badge className="bg-red-500 text-white h-5 w-5 rounded-full text-xs flex items-center justify-center">
                        {session.unreadCount}
                      </Badge>
                    )}
                  </div>
                  {session.lastMessage && (
                    <p className="text-sm text-gray-600 mt-2 truncate">
                      {session.lastMessage.senderType === "manager"
                        ? "You: "
                        : ""}
                      {session.lastMessage.message}
                    </p>
                  )}
                </button>
              ))}
          </div>

          {chatSessions.filter((session) => session.status === "active")
            .length === 0 && (
            <div className="text-center py-8">
              <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No active chats</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Chat Window */}
      <Card className="lg:col-span-2 shadow-sm">
        {selectedChat ? (
          <div className="flex flex-col h-full">
            {/* Chat Header */}
            <CardHeader className="pb-3 border-b bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-green-100 text-green-600">
                      <User className="w-5 h-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {selectedChat.customerName}
                    </p>
                    <p className="text-sm text-gray-500">
                      Order {selectedChat.orderId} • Table{" "}
                      {selectedChat.tableNumber}
                    </p>
                  </div>
                </div>
                <Badge
                  className={
                    selectedChat.status === "active"
                      ? "bg-green-100 text-green-800 hover:bg-green-100"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                  }
                >
                  {selectedChat.status}
                </Badge>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {selectedChat.messages.map((message) => (
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
                          {format(new Date(message.timestamp), "HH:mm")}
                        </p>
                        {message.senderType === "manager" && (
                          <CheckCheck
                            className={`w-3 h-3 ${
                              message.read ? "text-blue-300" : "text-gray-300"
                            }`}
                          />
                        )}
                      </div>
                    </div>
                    {message.senderType === "manager" && (
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-green-100 text-green-600 text-xs">
                          <ChefHat className="w-4 h-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </CardContent>

            {/* Quick Replies */}
            {showQuickReplies && (
              <div className="border-t border-b p-3 bg-gray-50">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Quick Replies:
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => sendQuickReply(reply)}
                      className="text-left text-sm p-2 bg-white border rounded hover:bg-gray-50 transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowQuickReplies(!showQuickReplies)}
                  className="bg-transparent"
                >
                  Quick
                </Button>
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1"
                />
                <Button
                  onClick={sendMessage}
                  disabled={!newMessage.trim()}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Select a chat to start messaging</p>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
