import {
  createTableSchema,
  type CreateTableSchemaType,
} from "@/schemas/createTableSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

const useUpdateTable = () => {
  const [updateTableOpen, setUpdateTableOpen] = useState(false);

  const { control, handleSubmit } = useForm<CreateTableSchemaType>({
    resolver: zodResolver(createTableSchema),
  });
  const handleOpenUpdateModal = () => {
    setUpdateTableOpen(true);
  };
  const handleCloseUpdateModal = () => {
    setUpdateTableOpen(false);
  };

  const handleTableSubmit = (data: CreateTableSchemaType) => {
    console.log(data);
  };

  return {
    updateTableOpen,
    handleOpenUpdateModal,
    handleCloseUpdateModal,
    control,
    handleSubmit,
    handleTableSubmit,
  };
};

export default useUpdateTable;
