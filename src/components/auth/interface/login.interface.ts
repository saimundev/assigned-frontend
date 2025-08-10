import type { LoginFormValues } from "@/schemas/loginSchema";

export interface LoginResponse {
  id: string;
  user: Omit<LoginFormValues, "password" | "confirmPassword">;
  token: string;
}

export interface LoginRequest extends LoginFormValues {}
