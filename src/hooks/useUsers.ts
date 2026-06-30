import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  active: boolean;
  companyId: string;
}

export function useUsers(companyId?: string) {
  return useQuery({
    queryKey: ["users", companyId],
    queryFn: () => api.get<User[]>(`/users${companyId ? `?companyId=${companyId}` : ""}`),
  });
}
