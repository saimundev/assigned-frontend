import { ChefHat } from "lucide-react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 text-green-600 hover:text-green-700"
    >
      <ChefHat className="w-8 h-8" />
      <span className="text-3xl font-bold tracking-tight font-title">
        Restrowave
      </span>
    </Link>
  );
};

export default Logo;
