import { useAppMutation } from "@/hooks/useAppMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  restaurantSetupSchema,
  type RestaurantSetupValues,
} from "@/schemas/RestaurantSetupSchema";
import type {
  RestaurantSetupRequest,
  RestaurantSetupResponse,
} from "../interface/resturantSetup.interface";

const useSetup = () => {
  const { control, handleSubmit } = useForm<RestaurantSetupValues>({
    resolver: zodResolver(restaurantSetupSchema),
  });

  const { mutate, data, isPending, error, isSuccess } = useAppMutation<
    RestaurantSetupResponse,
    Error,
    RestaurantSetupRequest
  >({
    url: "/restaurant/setup",
    method: "post",
  });

  const handleSetupSubmit = (data: RestaurantSetupValues) => {
    console.log("new",data)
    mutate(data);
  };

  return {
    control,
    handleSubmit,
    handleSetupSubmit,
    mutate,
    data,
    isPending,
    error,
    isSuccess,
  };
};

export default useSetup;
