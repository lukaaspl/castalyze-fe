import { apiClient } from "@/lib/api-client";
import { CreateInsightManually } from "@/types/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const createInsightManually = async (variables: CreateInsightManually) => {
  const response = await apiClient.POST("/api/insights/create/manual", {
    body: variables,
  });

  if (response.error) {
    throw response.error;
  }

  return response.data;
};

export const useCreateInsightManuallyMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createInsightManually,
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
