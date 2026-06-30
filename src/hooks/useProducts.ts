import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  categoryId: string;
  available: boolean;
  imageUrl?: string;
}

export function useProducts(companyId?: string) {
  return useQuery({
    queryKey: ["products", companyId],
    queryFn: () => api.get<Product[]>(`/products${companyId ? `?companyId=${companyId}` : ""}`),
    enabled: typeof window !== "undefined",
  });
}
