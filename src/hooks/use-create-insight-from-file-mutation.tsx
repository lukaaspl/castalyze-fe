import { apiClient } from "@/lib/api-client";
import { CreateInsightFromFile } from "@/types/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const createInsightFromFile = async (file: File) => {
  const formData = new FormData();

  formData.append("file", file);

  const response = await apiClient.POST("/api/insights/create/file", {
    body: formData as unknown as CreateInsightFromFile,
  });

  if (response.error) {
    throw response.error;
  }

  return response.data;
};

export const useCreateInsightFromFile = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createInsightFromFile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["insights-preview"] });

      toast.success("Insight created successfully");
    },
    onError: () => {
      toast.error("Failed to create insight");
    },
  });

  return mutation;
};
