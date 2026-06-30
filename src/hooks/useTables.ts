import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export interface RestaurantTable {
  id: string;
  number: string;
  capacity: number;
  zoneId: string;
  status: "available" | "occupied" | "reserved";
}

export function useTables(companyId?: string) {
  return useQuery({
    queryKey: ["tables", companyId],
    queryFn: () => api.get<RestaurantTable[]>(`/tables${companyId ? `?companyId=${companyId}` : ""}`),
    refetchInterval: 30_000,
  });
}
