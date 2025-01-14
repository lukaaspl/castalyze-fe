import { apiClient } from "@/lib/api-client";
import { CreateInsight } from "@/types/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const createInsight = async (variables: CreateInsight) => {
  const response = await apiClient.POST("/api/insights/", { body: variables });

  if (response.error) {
    throw response.error;
  }

  return response.data;
};

export const useCreateInsightMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createInsight,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["insights-preview"] });

      toast.success("Folder has been added");
    },
    onError: () => {
      toast.error("Failed to add the folder");
    },
  });

  return mutation;
};
