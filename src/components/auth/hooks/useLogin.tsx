import { useAppMutation } from "@/hooks/useAppMutation";
import { loginSchema, type LoginFormValues } from "@/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { LoginRequest, LoginResponse } from "../interface/login.interface";

const useLogin = () => {
  const { control, handleSubmit } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, data, isPending, error, isSuccess } = useAppMutation<
    LoginResponse,
    Error,
    LoginRequest
  >({
    url: "/auth/login",
    method: "post",
  });

  const onLoginSubmit = (data: LoginFormValues) => {
    mutate(data);
  };

  return {
    control,
    handleSubmit,
    onLoginSubmit,
    mutate,
    data,
    isPending,
    error,
    isSuccess,
  };
};

export default useLogin;
