import { AuthWrapper } from "@/components/auth/AuthWrapper";
import useRegister from "@/components/auth/hooks/useRegister";
import LoadingButton from "@/components/common/LoadingButton";
import GenericInputField from "@/components/generic-form/GenericInputField";
import { type RegisterFormValues } from "@/schemas/RegisterSchema";
import { Link } from "react-router";

const RegisterPage = () => {
  const { handleSubmit, handleRegisterSubmit, control } = useRegister();
  return (
    <AuthWrapper>
      <form onSubmit={handleSubmit(handleRegisterSubmit)} className="space-y-6">
        <div className="space-y-2">
          <div className="">
            <GenericInputField<RegisterFormValues>
              control={control}
              name="name"
              label="Name"
              type="text"
              placeholder="John Doe"
            />
          </div>
        </div>
        <div className="space-y-2">
          <GenericInputField<RegisterFormValues>
            control={control}
            name="email"
            label="Email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="space-y-2">
          <GenericInputField<RegisterFormValues>
            control={control}
            name="password"
            label="Password"
            type="password"
            placeholder="••••••••"
          />
        </div>
        <div className="space-y-2">
          <GenericInputField<RegisterFormValues>
            control={control}
            name="confirmPassword"
            label="confirmPassword"
            type="password"
            placeholder="••••••••"
          />
        </div>
        <LoadingButton
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700"
          loading={false}
        >
          Create Account
        </LoadingButton>
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="font-medium text-green-600 hover:text-green-700"
          >
            Login
          </Link>
        </p>
      </form>
    </AuthWrapper>
  );
};

export default RegisterPage;
