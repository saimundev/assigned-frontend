import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

type FileComponentProps = {
  onChange: (file: File | null) => void;
  value?: File | null;
  accept?: string;
  error?: string;
};

type GenericFileFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  className?: string;
  accept?: string;
  maxSize?: number;
  setError?: (name: FieldPath<T>, message: string) => void;
  Component: React.ComponentType<FileComponentProps>;
};

const GenericFileField = <T extends FieldValues>({
  control,
  name,
  label,
  className,
  accept = "image/*",
  Component,
}: GenericFileFieldProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange },
        fieldState: { error, invalid },
      }) => {
        const handleFileChange = (file: File | null) => {
          onChange(file);
        };

        return (
          <div className={className}>
            <label className={`block mb-2 ${invalid ? "text-red-500" : ""}`}>
              {label}
            </label>
            <Component
              onChange={handleFileChange}
              value={value}
              accept={accept}
              error={error ? error.message : undefined}
            />
            {error && (
              <span className="text-red-500 text-sm">{error.message}</span>
            )}
          </div>
        );
      }}
    />
  );
};

export default GenericFileField;
