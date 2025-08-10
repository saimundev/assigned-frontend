import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/lib/utils";

type Item<V extends string> = {
  value: V;
  label: string;
};

type GenericInputFieldProps<T extends FieldValues, V extends string> = {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
  items: Item<V>[];
};
const GenericSelectField = <T extends FieldValues, V extends string>({
  control,
  name,
  label,
  placeholder,
  className,
  items=[],
}: GenericInputFieldProps<T, V>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange },
        fieldState: { error, invalid },
      }) => (
        <>
          <Label error={invalid}>{label}</Label>
          <Select value={value} onValueChange={onChange}>
            <SelectTrigger
              id="restaurant-type"
              className={cn("w-full", className)}
              aria-invalid={invalid ? "true" : "false"}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="w-full">
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span className="text-red-500 text-sm">{error?.message}</span>
        </>
      )}
    />
  );
};

export default GenericSelectField;
