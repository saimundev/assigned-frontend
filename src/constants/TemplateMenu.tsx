import type { CreateMenuFormValues } from "@/schemas/CreateMenuSchema";

export const menuTemplates: CreateMenuFormValues[] = [
  {
    id: "classic",
    menuName: "Classic Menu",
    description:
      "Traditional layout with sections and items in a standard format.",
    restaurantName: "Classic Bites",
    tagLine: "Where Tradition Meets Taste",
    sections: [
      {
        sectionName: "Appetizers",
        items: [
          {
            itemName: "Caesar Salad",
            itemDescription:
              "Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese.",
            itemPrice: "7.50",
            itemImage: "/images/caesar-salad.jpg",
            itemSizes: [],
            itemFeatured: true,
            itemPrepTime: "8 mins",
            itemRating: 4.5,
          },
          {
            itemName: "French Onion Soup",
            itemDescription:
              "Rich beef broth with caramelized onions and melted cheese.",
            itemPrice: "6.00",
            itemImage: "/images/french-onion-soup.jpg",
            itemSizes: [],
            itemFeatured: false,
            itemPrepTime: "15 mins",
            itemRating: 4.2,
          },
        ],
      },
      {
        sectionName: "Mains",
        items: [
          {
            itemName: "Grilled Chicken",
            itemDescription:
              "Juicy grilled chicken breast with mashed potatoes and seasonal vegetables.",
            itemPrice: "15.00",
            itemImage: "/images/grilled-chicken.jpg",
            itemSizes: [],
            itemFeatured: true,
            itemPrepTime: "25 mins",
            itemRating: 4.7,
          },
        ],
      },
    ],
    customizationSchema: {
      primaryColor: "red",
      secondaryColor: "#166534",
      accentColor: "#fef3c7",
      textColor: "#333333",
      backgroundColor: "#fffbeb",
      spacing: 10,
      cornerRounded: 5,
    },
  },
  {
    id: "grid",
    menuName: "Grid Layout Menu",
    description: "Items displayed in a grid with equal-sized cards.",
    restaurantName: "Urban Eats",
    tagLine: "Fresh Flavors, Modern Style",
    sections: [
      {
        sectionName: "Specials",
        items: [
          {
            itemName: "Avocado Toast",
            itemDescription:
              "Sourdough topped with smashed avocado, cherry tomatoes, and feta.",
            itemPrice: "9.00",
            itemImage: "/images/avocado-toast.jpg",
            itemSizes: [],
            itemFeatured: true,
            itemPrepTime: "6 mins",
            itemRating: 4.6,
          },
          {
            itemName: "Smoothie Bowl",
            itemDescription:
              "Mixed berry smoothie topped with granola and fresh fruit.",
            itemPrice: "8.50",
            itemImage: "/images/smoothie-bowl.jpg",
            itemSizes: [],
            itemFeatured: false,
            itemPrepTime: "5 mins",
            itemRating: 4.4,
          },
        ],
      },
    ],
    customizationSchema: {
      primaryColor: "#0ea5e9",
      secondaryColor: "#0f172a",
      accentColor: "#f0f9ff",
      textColor: "#334155",
      backgroundColor: "#ffffff",
      spacing: 12,
      cornerRounded: 8,
    },
  },
  {
    id: "photo",
    menuName: "Photo-Centric Menu",
    description: "Large images with text overlay for a visual experience.",
    restaurantName: "Picto Plates",
    tagLine: "A Feast for the Eyes and Stomach",
    sections: [
      {
        sectionName: "Signature Dishes",
        items: [
          {
            itemName: "Steak and Fries",
            itemDescription: "Juicy sirloin steak with golden crispy fries.",
            itemPrice: "22.00",
            itemImage: "/images/steak-fries.jpg",
            itemSizes: [],
            itemFeatured: true,
            itemPrepTime: "30 mins",
            itemRating: 4.8,
          },
          {
            itemName: "Shrimp Tacos",
            itemDescription: "Grilled shrimp with spicy aioli and fresh slaw.",
            itemPrice: "14.50",
            itemImage: "/images/shrimp-tacos.jpg",
            itemSizes: [],
            itemFeatured: false,
            itemPrepTime: "15 mins",
            itemRating: 4.5,
          },
        ],
      },
    ],
    customizationSchema: {
      primaryColor: "#6d28d9",
      secondaryColor: "#4c1d95",
      accentColor: "#f5f3ff",
      textColor: "#1e1b4b",
      backgroundColor: "#ffffff",
      spacing: 14,
      cornerRounded: 10,
    },
  },
  {
    id: "minimalist",
    menuName: "Minimalist Menu",
    description: "Very clean with lots of whitespace and minimal decoration.",
    restaurantName: "Pure Plates",
    tagLine: "Less is More",
    sections: [
      {
        sectionName: "Light Meals",
        items: [
          {
            itemName: "Quinoa Salad",
            itemDescription:
              "Quinoa with cucumbers, tomatoes, and a lemon dressing.",
            itemPrice: "9.50",
            itemImage: "/images/quinoa-salad.jpg",
            itemSizes: [],
            itemFeatured: false,
            itemPrepTime: "8 mins",
            itemRating: 4.4,
          },
        ],
      },
    ],
    customizationSchema: {
      primaryColor: "#18181b",
      secondaryColor: "#3f3f46",
      accentColor: "#f4f4f5",
      textColor: "#52525b",
      backgroundColor: "#ffffff",
      spacing: 8,
      cornerRounded: 4,
    },
  },
  {
    id: "elegant",
    menuName: "Elegant Menu",
    description: "Decorative borders, fancy typography for upscale dining.",
    restaurantName: "Royal Feast",
    tagLine: "Dine in Elegance",
    sections: [
      {
        sectionName: "Chef's Picks",
        items: [
          {
            itemName: "Lobster Bisque",
            itemDescription: "Creamy soup with fresh lobster meat.",
            itemPrice: "18.00",
            itemImage: "/images/lobster-bisque.jpg",
            itemSizes: [],
            itemFeatured: true,
            itemPrepTime: "20 mins",
            itemRating: 4.9,
          },
        ],
      },
    ],
    customizationSchema: {
      primaryColor: "#854d0e",
      secondaryColor: "#422006",
      accentColor: "#fef3c7",
      textColor: "#78350f",
      backgroundColor: "#fffbeb",
      spacing: 15,
      cornerRounded: 6,
    },
  },
  {
    id: "cafe",
    menuName: "Cafe Style Menu",
    description: "Chalkboard-like design with handwritten fonts.",
    restaurantName: "Brew & Bite",
    tagLine: "Coffee, Comfort, and Conversations",
    sections: [
      {
        sectionName: "Coffee",
        items: [
          {
            itemName: "Cappuccino",
            itemDescription: "Espresso with steamed milk and foam.",
            itemPrice: "4.00",
            itemImage: "/images/cappuccino.jpg",
            itemSizes: [
              { size: "Small", price: "3.50" },
              { size: "Large", price: "4.50" },
            ],
            itemFeatured: true,
            itemPrepTime: "5 mins",
            itemRating: 4.7,
          },
        ],
      },
    ],
    customizationSchema: {
      primaryColor: "#2d2d2d",
      secondaryColor: "#f1c40f",
      accentColor: "#e0e0e0",
      textColor: "#e0e0e0",
      backgroundColor: "#2d2d2d",
      spacing: 10,
      cornerRounded: 0,
    },
  },
  {
    id: "tabs",
    menuName: "Modern Tabs Menu",
    description: "Section tabs at the top, content below for easy navigation.",
    restaurantName: "Tabby Kitchen",
    tagLine: "Swipe Through Taste",
    sections: [
      {
        sectionName: "Vegan Delights",
        items: [
          {
            itemName: "Vegan Burger",
            itemDescription:
              "Plant-based patty with lettuce, tomato, and vegan mayo.",
            itemPrice: "12.00",
            itemImage: "/images/vegan-burger.jpg",
            itemSizes: [],
            itemFeatured: false,
            itemPrepTime: "15 mins",
            itemRating: 4.5,
          },
        ],
      },
    ],
    customizationSchema: {
      primaryColor: "#0891b2",
      secondaryColor: "#164e63",
      accentColor: "#ecfeff",
      textColor: "#0e7490",
      backgroundColor: "#ffffff",
      spacing: 12,
      cornerRounded: 6,
    },
  },
  {
    id: "magazine",
    menuName: "Magazine Style Menu",
    description: "Multi-column newspaper-like layout with varied item sizes.",
    restaurantName: "Bistro Times",
    tagLine: "Your Daily Dose of Delicious",
    sections: [
      {
        sectionName: "Feature Articles",
        items: [
          {
            itemName: "Duck Confit",
            itemDescription: "Slow-cooked duck leg with crispy skin.",
            itemPrice: "21.00",
            itemImage: "/images/duck-confit.jpg",
            itemSizes: [],
            itemFeatured: true,
            itemPrepTime: "35 mins",
            itemRating: 4.8,
          },
        ],
      },
    ],
    customizationSchema: {
      primaryColor: "#b91c1c",
      secondaryColor: "#7f1d1d",
      accentColor: "#fee2e2",
      textColor: "#450a0a",
      backgroundColor: "#f9f9f9",
      spacing: 14,
      cornerRounded: 5,
    },
  },
  {
    id: "infographic",
    menuName: "Infographic Style Menu",
    description: "Visual icons and graphics for each item with info cards.",
    restaurantName: "InfoBites",
    tagLine: "Where Food Meets Facts",
    sections: [
      {
        sectionName: "Power Meals",
        items: [
          {
            itemName: "Protein Bowl",
            itemDescription: "Brown rice, chicken, eggs, and mixed vegetables.",
            itemPrice: "13.00",
            itemImage: "/images/protein-bowl.jpg",
            itemSizes: [],
            itemFeatured: false,
            itemPrepTime: "12 mins",
            itemRating: 4.6,
          },
        ],
      },
    ],
    customizationSchema: {
      primaryColor: "#059669",
      secondaryColor: "#065f46",
      accentColor: "#d1fae5",
      textColor: "#064e3b",
      backgroundColor: "#ecfdf5",
      spacing: 10,
      cornerRounded: 12,
    },
  },
  {
    id: "price-forward",
    menuName: "Price-Forward Menu",
    description:
      "Emphasizes pricing with large price displays for quick scanning.",
    restaurantName: "Fast & Fresh",
    tagLine: "See the Price, Love the Bite",
    sections: [
      {
        sectionName: "Quick Meals",
        items: [
          {
            itemName: "Chicken Wrap",
            itemDescription:
              "Grilled chicken with lettuce and mayo in a tortilla.",
            itemPrice: "6.99",
            itemImage: "/images/chicken-wrap.jpg",
            itemSizes: [],
            itemFeatured: true,
            itemPrepTime: "7 mins",
            itemRating: 4.4,
          },
        ],
      },
    ],
    customizationSchema: {
      primaryColor: "#d97706",
      secondaryColor: "#92400e",
      accentColor: "#fef3c7",
      textColor: "#78350f",
      backgroundColor: "#fffbeb",
      spacing: 8,
      cornerRounded: 4,
    },
  },
];
