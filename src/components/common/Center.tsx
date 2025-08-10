import { cn } from "@/lib/utils";

type CenterProps = {
  children: React.ReactNode;
  className?: string;
};
const Center = ({ children, className }: CenterProps) => {
  return (
    <div className={cn("flex justify-center items-center h-screen", className)}>
      {children}
    </div>
  );
};

export default Center;
