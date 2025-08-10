import { LiveChat } from "@/components/chat/LiveChat";

const ChatPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Live Chat Management
        </h1>
        <p className="text-gray-600">
          Manage real-time conversations with customers
        </p>
      </div>

      <LiveChat />
    </div>
  );
};

export default ChatPage;
