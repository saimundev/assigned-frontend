import { Card, CardContent } from "../ui/card";
import { ChefHat } from "lucide-react";

type StatusDataNotFoundProps = {
  title: string;
};

const StatusDataNotFound = ({ title }: StatusDataNotFoundProps) => {
  return (
    <Card className="shadow-sm">
      <CardContent className="text-center py-8">
        <ChefHat className="w-8 h-8 text-gray-400 mx-auto mb-2" />
        <p className="text-gray-500">{title}</p>
      </CardContent>
    </Card>
  );
};

export default StatusDataNotFound;
