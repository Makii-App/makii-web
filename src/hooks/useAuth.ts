import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import { setToken, setRefreshToken, clearAuth } from "@/lib/auth";
import { useAuthStore } from "@/store/useAuthStore";
import type { AuthResponse, LoginDto, UserProfile } from "@/types/auth";

export function useLoginMutation() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (dto: LoginDto) => {
      const data = await api.post<AuthResponse>("/auth/login", {
        email: dto.email,
        password: dto.password,
      });
      setToken(data.access_token);
      setRefreshToken(data.refresh_token);
      return data;
    },
    onSuccess: () => {
      router.push("/admin/");
    },
  });
}

export function useGoogleLogin() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (payload: { idToken: string; email: string; name?: string; picture?: string }) => {
      const data = await api.post<AuthResponse>("/auth/google", payload);
      setToken(data.access_token);
      setRefreshToken(data.refresh_token);
      return data;
    },
    onSuccess: () => {
      router.push("/admin/");
    },
  });
}

export function useLogoutMutation() {
  const logout = useAuthStore((s) => s.logout);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      try {
        await api.post("/auth/logout");
      } catch {
        // ignore network errors on logout
      }
    },
    onSettled: () => {
      clearAuth();
      queryClient.clear();
      logout();
      if (typeof window !== "undefined") {
        window.location.href = "/login/";
      }
    },
  });
}

export function useProfileQuery() {
  const setUser = useAuthStore((s) => s.setUser);

  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const data = await api.get<UserProfile>("/auth/profile");
      setUser(data);
      return data;
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
