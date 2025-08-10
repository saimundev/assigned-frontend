import api from "@/lib/client";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

type HttpMethod = "post" | "put" | "delete";

interface UseAppMutationOptions<TData, TError, TVariables>
  extends UseMutationOptions<TData, TError, TVariables> {
  url: string;
  method?: HttpMethod;
}

export function useAppMutation<TData, TError = Error, TVariables = unknown>(
  options: UseAppMutationOptions<TData, TError, TVariables>
) {
  const { url, method = "post", ...restOptions } = options;

  return useMutation<TData, TError, TVariables>({
    mutationFn: (variables: TVariables) => {
      return api[method]<TData>(url, variables).then((res) => res.data);
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
    ...restOptions,
  });
}
