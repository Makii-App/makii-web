import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export interface Category {
  id: string;
  name: string;
  order: number;
}

export function useCategories(companyId?: string) {
  return useQuery({
    queryKey: ["categories", companyId],
    queryFn: () => api.get<Category[]>(`/categories${companyId ? `?companyId=${companyId}` : ""}`),
  });
}
