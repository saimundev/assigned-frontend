import LoadingButton from "../common/LoadingButton";
import {
  createTableSchema,
  type CreateTableSchemaType,
} from "@/schemas/createTableSchema";
import GenericInputField from "../generic-form/GenericInputField";
import GenericSelectField from "../generic-form/GenericSelectField";
import {
  tableStatusOptions,
  type TableStatusType,
} from "@/constants/tableStatus";
import useCreateTable from "./hooks/useCreateTable";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type CreateUpdateModalContentProps = {
  mood: "CREATE" | "UPDATE";
};

const CreateUpdateModalContent = (mood: CreateUpdateModalContentProps) => {
  const { control, handleSubmit } = useForm<CreateTableSchemaType>({
    resolver: zodResolver(createTableSchema),
  });

  const handleTableSubmit = (data: CreateTableSchemaType) => {
    if (mood.mood === "CREATE") {
      console.log(data);
    } else {
      console.log(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleTableSubmit)}>
      <div className="grid gap-4">
        <div className="space-y-2">
          <GenericInputField<CreateTableSchemaType>
            control={control}
            name="tableName"
            type="text"
            label="Table Name"
            placeholder="e.g., T-01"
          />
        </div>
        <div className="space-y-2">
          <GenericInputField<CreateTableSchemaType>
            control={control}
            name="seats"
            type="number"
            label="Number of Seats"
            placeholder="e.g., 4"
          />
        </div>
        <div className="space-y-2">
          <GenericSelectField<CreateTableSchemaType, TableStatusType>
            control={control}
            name="status"
            label="Status"
            items={tableStatusOptions}
            placeholder="e.g., Available"
          />
        </div>
      </div>
      <div className="">
        <div className="pt-6 flex justify-end ">
          <div className="">
            <LoadingButton loading={false}>
              {mood.mood === "CREATE" ? "Create Table" : "Update Table"}
            </LoadingButton>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateUpdateModalContent;
