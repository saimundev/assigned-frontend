import { TABLE_STATUS } from "@/constants/tableStatus";
import z from "zod";

export const createTableSchema = z.object({
  tableName: z.string({error: "Table name is required"}).nonempty({ error: "Table name is required" }).min(3, {
    message: "Table name must be at least 3 characters",
  }),
  seats: z
    .string({error:"Seats is required"})
    .refine((val) => val !== "" && !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Seats must be a non-negative number",
    }),
  status: z.enum(TABLE_STATUS, {
    error: "Expected status to be one of: " + TABLE_STATUS.join(", "),
  }),
});

export type CreateTableSchemaType = z.infer<typeof createTableSchema>;
