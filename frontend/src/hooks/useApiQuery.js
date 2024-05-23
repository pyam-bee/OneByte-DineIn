import { useQuery } from "react-query";

export default function useApiQuery({ queryKey, queryFn, enabled = true }) {
  const query = useQuery({
    queryKey,
    queryFn,
    enabled,
  });
  return query;
}
