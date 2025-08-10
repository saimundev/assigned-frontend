import type { RegisterFormValues } from "@/schemas/RegisterSchema";

export interface RegisterResponse {
    user: Omit<RegisterFormValues, "password" | "confirmPassword">;
    token: string;
  }