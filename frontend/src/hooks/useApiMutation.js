import { useMutation, useQueryClient } from "react-query";

export default function useApiMutation({
  mutationKey,
  mutationFn,
  onSuccess,
  onError,
  invalidate,
}) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey,
    mutationFn,
    onSuccess,
    onError,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: invalidate });
    },
  });
  return mutation;
}
