import {
  registerSchema,
  type RegisterFormValues,
} from "@/schemas/RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { RegisterResponse } from "../interface/register.interface";
import { toast } from "sonner";
import { useAppMutation } from "@/hooks/useAppMutation";

const useRegister = () => {
  const { control, handleSubmit } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const { mutate, isPending } = useAppMutation<
    RegisterResponse,
    Error,
    RegisterFormValues
  >({
    url: "/auth/register",
    method: "post",
  });

  const handleRegisterSubmit = (data: RegisterFormValues) => {
    toast.loading("Creating account...");

    setTimeout(() => {
      toast.dismiss();
    }, 5000);
    mutate(data);
  };

  return {
    control,
    handleSubmit,
    handleRegisterSubmit,
    isPending,
  };
};

export default useRegister;
