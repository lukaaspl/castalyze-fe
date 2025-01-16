import { apiClient } from "@/lib/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const deleteInsight = async (id: string) => {
  const response = await apiClient.DELETE("/api/insights/{id}", {
    params: { path: { id } },
  });

  if (response.error) {
    throw response.error;
  }

  return response.data;
};

export const useDeleteInsightMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteInsight,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["insights-preview"] });

      toast.success("Insight deleted successfully");
    },
    onError: () => {
      toast.error("Failed to delete insight");
    },
  });

  return mutation;
};
