import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";

type StatusCardProps = {
  title: string;
  count: number | string;
  className?: string;
};
const StatusCard = ({ title, count, className }: StatusCardProps) => {
  return (
    <Card className="shadow-sm">
      <CardContent className="pt-6">
        <div className="text-center">
          <div className={cn("text-2xl font-bold text-orange-600", className)}>
            {count}
          </div>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusCard;
