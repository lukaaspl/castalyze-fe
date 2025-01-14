import { apiClient } from "@/lib/api-client";
import { useQuery } from "@tanstack/react-query";

const fetchInsightsPreview = async () => {
  const response = await apiClient.GET("/api/insights/");

  if (!response.data) {
    throw response.error;
  }

  return response.data;
};

export const useInsightsPreviewQuery = () => {
  const query = useQuery({
    queryKey: ["insights-preview"],
    queryFn: fetchInsightsPreview,
  });

  return query;
};
