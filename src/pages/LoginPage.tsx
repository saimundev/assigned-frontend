import GenericInputField from "@/components/generic-form/GenericInputField";
import { Link } from "react-router";
import { type LoginFormValues } from "@/schemas/loginSchema";
import LoadingButton from "@/components/common/LoadingButton";
import Center from "@/components/common/Center";
import Logo from "@/components/common/Logo";
import useLogin from "@/components/auth/hooks/useLogin";

const LoginPage = () => {
  const { control,isPending, handleSubmit, onLoginSubmit } = useLogin();
  return (
    <Center>
      <div className="w-full max-w-md ">
        <div className="flex justify-center flex-col space-y-4">
          <div className="flex justify-center">
            <Logo />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-900 font-subtitle">
            Login to Your Account
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(onLoginSubmit)}
          className="space-y-6 pt-10"
        >
          <div className="space-y-2">
            <GenericInputField<LoginFormValues>
              label="Email"
              name="email"
              control={control}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="space-y-2">
            <GenericInputField<LoginFormValues>
              label="Password"
              name="password"
              control={control}
              type="password"
              placeholder="Password"
            />
          </div>
          <LoadingButton
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700"
            loading={isPending}
          >
            Login
          </LoadingButton>
          <div className="text-center text-sm">
            <Link
              to="/auth/forgot-password"
              className="font-medium text-gray-600 hover:text-gray-700"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </Center>
  );
};

export default LoginPage;
