import type { RestaurantSetupValues } from "@/schemas/RestaurantSetupSchema";

export interface RestaurantSetupResponse {
  data: RestaurantSetupValues;
}

export interface RestaurantSetupRequest extends RestaurantSetupValues {}
