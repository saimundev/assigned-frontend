import { RESTAURANT_TYPES } from "@/constants/restaurantTypes";
import z from "zod";

export const restaurantSetupSchema = z.object({
  restaurantName: z
    .string({ error: "Restaurant name is required" })
    .nonempty({ error: "Restaurant name is required" })
    .min(3, "Restaurant name must be at least 3 characters")
    .max(100, "Restaurant name must be less than 100 characters"),
  restaurantType: z.enum(RESTAURANT_TYPES, {
    error:
      "Expected restaurant type to be one of: " + RESTAURANT_TYPES.join(", "),
  }),
  restaurantLogo: z
    .instanceof(File, { error: "Restaurant logo is required" })
    .refine((file) => file.type.startsWith("image/"), {
      message: "Logo must be an image file",
    })
    .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
      message: "Logo must be a JPEG or PNG file",
    })
    .refine((file) => file.size <= 2 * 1024 * 1024, {
      message: "Logo must be less than 2MB",
    }),
});

export type RestaurantSetupValues = z.infer<typeof restaurantSetupSchema>;
