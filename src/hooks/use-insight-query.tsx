import { apiClient } from "@/lib/api-client";
import { useQuery } from "@tanstack/react-query";

const fetchInsight = async (id: string) => {
  const response = await apiClient.GET("/api/insights/{id}", {
    params: { path: { id } },
  });

  if (!response.data) {
    throw response.error;
  }

  return response.data;
};

export const useInsightQuery = (id: string) => {
  const query = useQuery({
    queryKey: ["insights", id],
    queryFn: () => fetchInsight(id),
  });

  return query;
};
