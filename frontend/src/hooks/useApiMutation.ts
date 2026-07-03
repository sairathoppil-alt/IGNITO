import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';

export function useApiMutation<TData, TVariables>(path: string, options?: { invalidate?: string[][] }) {
  const queryClient = useQueryClient();

  return useMutation<TData, Error, TVariables>({
    mutationFn: (variables) => api.post<TData>(path, variables),
    onSuccess: () => {
      for (const invalidation of options?.invalidate ?? []) {
        queryClient.invalidateQueries({ queryKey: invalidation });
      }
    },
  });
}
