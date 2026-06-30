import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export interface Zone {
  id: string;
  name: string;
  companyId: string;
  order: number;
}

export function useZones(companyId?: string) {
  return useQuery({
    queryKey: ["zones", companyId],
    queryFn: () => api.get<Zone[]>(`/zones${companyId ? `?companyId=${companyId}` : ""}`),
  });
}
