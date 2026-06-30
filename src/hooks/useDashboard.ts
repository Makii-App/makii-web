import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export interface DashboardStats {
  totalOrders: number;
  revenue: number;
  activeTables: number;
  topProducts: { id: string; name: string; sold: number }[];
}

export function useDashboard(companyId?: string) {
  return useQuery({
    queryKey: ["dashboard", companyId],
    queryFn: () => api.get<DashboardStats>(`/dashboard${companyId ? `?companyId=${companyId}` : ""}`),
    refetchInterval: 60_000,
  });
}
