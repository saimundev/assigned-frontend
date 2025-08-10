import CircleSpin from "@/assets/svg/CircleSpin";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type LoadingButtonProps = {
  children: React.ReactNode;
  loading: boolean;
  disabled?: boolean;
  size?: "default" | "sm" | "lg" | "icon";
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
};
const LoadingButton = ({
  children,
  loading,
  disabled,
  size = "default",
  variant = "default",
  type = "submit",
  className,
}: LoadingButtonProps) => {
  return (
    <Button
      type={type}
      size={size}
      disabled={loading || disabled}
      variant={variant}
      className={cn("w-full font-subtitle font-semibold bg-green-600 hover:bg-green-700", "disabled:cursor-not-allowed", className)}
    >
      {loading ? (
        <>
          <CircleSpin /> Loading...
        </>
      ) : (
        children
      )}
    </Button>
  );
};

export default LoadingButton;
