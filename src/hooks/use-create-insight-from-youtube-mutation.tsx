import { apiClient } from "@/lib/api-client";
import { CreateInsightFromYoutube } from "@/types/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const createInsightFromYoutube = async (
  variables: CreateInsightFromYoutube
) => {
  const response = await apiClient.POST("/api/insights/create/youtube", {
    body: variables,
  });

  if (response.error) {
    throw response.error;
  }

  return response.data;
};

export const useCreateInsightFromYoutubeMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createInsightFromYoutube,
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
