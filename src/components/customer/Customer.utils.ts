 export const getStatusColor = (status: string) => {
    switch (status) {
      case "VIP":
        return "bg-purple-100 text-purple-800 hover:bg-purple-100";
      case "Regular":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "New":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };
