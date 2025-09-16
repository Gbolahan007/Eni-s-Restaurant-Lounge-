import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../data-server";

export function useCategories() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });
  return { categories, isLoading };
}
