export const kitchenOrders = [
    {
      id: "#001",
      table: "T-05",
      items: [
        { name: "Margherita Pizza", quantity: 1, notes: "Extra cheese" },
        { name: "Caesar Salad", quantity: 1, notes: "No croutons" },
      ],
      orderTime: "2:30 PM",
      status: "pending",
      priority: "normal",
      estimatedTime: "15 min",
    },
    {
      id: "#002",
      table: "T-12",
      items: [
        { name: "Grilled Steak", quantity: 1, notes: "Medium rare" },
        { name: "Mashed Potatoes", quantity: 1, notes: "" },
      ],
      orderTime: "2:45 PM",
      status: "preparing",
      priority: "high",
      estimatedTime: "20 min",
    },
    {
      id: "#003",
      table: "T-08",
      items: [
        { name: "Fish & Chips", quantity: 2, notes: "" },
        { name: "Coleslaw", quantity: 2, notes: "" },
      ],
      orderTime: "3:00 PM",
      status: "ready",
      priority: "normal",
      estimatedTime: "Ready",
    },
    {
      id: "#004",
      table: "T-15",
      items: [{ name: "Tomato Soup", quantity: 1, notes: "Extra hot" }],
      orderTime: "3:20 PM",
      status: "pending",
      priority: "normal",
      estimatedTime: "10 min",
    },
  ];