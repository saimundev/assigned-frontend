import { IMAGE_TYPE } from "@/constants/menuData";
import { z } from "zod";

const sizeSchema = z.object({
  size: z.string().min(1, "Size is required"),
  price: z.preprocess(
    (val) => {
      if (val === "" || val === null || val === undefined) return undefined;
      return Number(val);
    },
    z
      .number({
        error: "Price is required",
      })
      .min(1, "Price must be greater than 0")
  ),
});

const itemSchema = z.object({
  itemName: z.string().min(1, "Item name is required"),
  itemDescription: z.string().min(1, "Description is required"),
  itemPrice: z
    .preprocess(
      (val) => {
        if (val === "" || val === null || val === undefined) return undefined;
        return Number(val);
      },
      z
        .number({
          error: "Price is required",
        })
        .min(1, "Price must be greater than 0")
    )
    .optional(),
  itemImage: z.string(),
  hasSize: z.boolean().default(false),
  itemSizes: z.array(sizeSchema).optional(),
  itemFeatured: z.boolean(),
  itemPrepTime: z.string().min(1, "Preparation time is required"),
  itemRating: z.number().min(0).max(5),
});

const customizationSchema = z.object({
  primaryColor: z.string().min(1, "Primary color is required"),
  secondaryColor: z.string().min(1, "Secondary color is required"),
  accentColor: z.string().min(1, "Accent color is required"),
  textColor: z.string().min(1, "Text color is required"),
  backgroundColor: z.string().min(1, "Background color is required"),
  sectionSpacing: z.number().optional(),
  itemSpacing: z.number().optional(),
  menuRounded: z.number().optional(),
  boxRounded: z.number().optional(),
  imageRounded:z.enum(IMAGE_TYPE,{
    error: "Expected image type to be one of: " + IMAGE_TYPE.join(", "),
  })
});

const sectionSchema = z.object({
  sectionName: z.string().min(1, "Section name is required"),
  items: z.array(itemSchema),
});

export const createMenuSchema = z.object({
  id: z.string().min(1, "Menu ID is required"),
  menuName: z.string().min(1, "Menu name is required"),
  description: z.string().min(5, "Must be at least 5 characters").optional(),
  restaurantName: z.string().min(1, "Restaurant name is required"),
  tagLine: z.string().min(1, "Tagline is required").optional(),
  prevImage: z.string().optional(),
  sections: z.array(sectionSchema),
  customizationSchema: customizationSchema,
});

export type CreateMenuFormValues = z.infer<typeof createMenuSchema>;
