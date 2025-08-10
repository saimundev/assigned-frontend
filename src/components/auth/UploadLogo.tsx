import { Upload, Utensils } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";

type UploadLogoProps = {
  onChange: (file: File | null) => void;
  value?: File | null;
  accept?: string;
  error?: string;
};

const UploadLogo: React.FC<UploadLogoProps> = ({ onChange, value, accept, error }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    onChange(file || null);
  };

  return (
    <div className="flex items-center gap-4">
      <Avatar className="w-20 h-20 border-2 border-gray-200">
        {value && !error ? (
          <img
            src={URL.createObjectURL(value)}
            alt="Preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <AvatarFallback className="bg-gray-100 text-gray-500">
            <Utensils className="w-10 h-10" />
          </AvatarFallback>
        )}
      </Avatar>

      <label
        htmlFor="uploadFile1"
        className="flex bg-transparent text-accent-foreground text-sm font-medium px-3  py-2 outline-none rounded w-max cursor-pointer border  shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
      >
        <Upload className="w-4 h-4 mr-2" />
        Upload Logo
        <input
          type="file"
          id="uploadFile1"
          className="hidden"
          accept={accept}
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default UploadLogo;
