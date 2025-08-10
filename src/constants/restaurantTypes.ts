export const RESTAURANT_TYPES = [
  "fast-food",
  "fine-dining",
  "cafe",
  "bar",
  "bakery",
  "other",
] as const;

export type RestaurantType = (typeof RESTAURANT_TYPES)[number];

export const restaurantTypeOptions: { value: RestaurantType; label: string }[] =
  [
    { value: "fast-food", label: "Fast Food" },
    { value: "fine-dining", label: "Fine Dining" },
    { value: "cafe", label: "Cafe" },
    { value: "bar", label: "Bar" },
    { value: "bakery", label: "Bakery" },
    { value: "other", label: "Other" },
  ];
