import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';

export function useApiQuery<T>(key: string | string[], path: string, options?: { enabled?: boolean }) {
  return useQuery<T>({
    queryKey: Array.isArray(key) ? key : [key],
    queryFn: () => api.get<T>(path),
    retry: 2,
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 4000),
    enabled: options?.enabled ?? true,
  });
}
