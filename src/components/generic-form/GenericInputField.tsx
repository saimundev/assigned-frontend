import { Input } from "../ui/input";
import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import { Label } from "../ui/label";
type GenericInputFieldProps<T extends FieldValues> = {
  type?: string;
  placeholder: string;
  name: FieldPath<T>;
  control: Control<T, any>;
  label: string;
  className?: string;
};

const GenericInputField = <T extends FieldValues>({
  name,
  control,
  type="text",
  placeholder,
  className,
  label,
}: GenericInputFieldProps<T>) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error, invalid } }) => (
          <>
            <Label htmlFor={name} className="mb-1" error={invalid}>
              {label}
            </Label>
            <Input
              {...field}
              
              className={className}
              type={type}
              placeholder={placeholder}
              aria-invalid={invalid ? "true" : "false"}
            />
            <span className="text-red-500 text-sm">{error?.message}</span>
          </>
        )}
      />
    </div>
  );
};

export default GenericInputField;
