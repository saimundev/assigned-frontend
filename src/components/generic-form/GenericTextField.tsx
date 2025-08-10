import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
type GenericTextFieldProps<T extends FieldValues> = {
  placeholder: string;
  name: FieldPath<T>;
  control: Control<T, any>;
  label: string;
  className?: string;
};

const GenericTextField = <T extends FieldValues>({
  name,
  control,
  placeholder,
  className,
  label,
}: GenericTextFieldProps<T>) => {
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
            <Textarea
              {...field}
              className={className}
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

export default GenericTextField;
