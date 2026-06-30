import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export interface Order {
  id: string;
  table: string;
  status: "pending" | "preparation" | "ready" | "delivered";
  time: string;
  urgent?: boolean;
  items: OrderItem[];
}

export interface OrderItem {
  qty: number;
  name: string;
  notes?: string;
}

export function useOrders() {
  return useQuery({
    queryKey: ["orders"],
    queryFn: () => api.get<Order[]>("/orders"),
  });
}

export function useKitchenOrders() {
  return useQuery({
    queryKey: ["kitchen-orders"],
    queryFn: () => api.get<{ pending: Order[]; preparation: Order[]; ready: Order[] }>("/kitchen/orders"),
    refetchInterval: 15_000,
  });
}
