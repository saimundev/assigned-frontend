import Chef from "@/assets/svg/chef.svg";
import Logo from "../common/Logo";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthWrapper({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex w-1/2 bg-green-50 items-center justify-center p-8">
        <div className="flex flex-col justify-center items-center text-center px-6 py-12 bg-[#f0fff4] h-full w-full">
          <div className="flex flex-col items-center space-y-2">
            <Logo />
            <h2 className="text-2xl font-bold text-center text-gray-900 font-subtitle">
              Welcome to Restrowave
            </h2>
            <p className="text-sm text-center text-gray-700 font-subtitle">
              Your all-in-one restaurant management solution.
            </p>
          </div>

          <img
            src={Chef}
            alt="Restaurant Illustration"
            className="w-60 mt-6 "
          />

          <p className="text-xs text-gray-500 mt-6">
            Trusted by 100+ restaurants
          </p>
        </div>
      </div>

      {/* Right side: Form */}
      <div className="flex flex-1 items-center justify-center p-6 lg:p-12 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col items-center space-y-2">
            <Logo />
            <h2 className="text-2xl font-bold text-center text-gray-900 font-subtitle">
              Create an Account
            </h2>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
