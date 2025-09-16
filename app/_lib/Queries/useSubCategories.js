import { useQuery } from "@tanstack/react-query";
import { getSubCategories } from "../data-server";

export function useSubCategories() {
  const { data: subCategories, isLoading } = useQuery({
    queryKey: ["subCategories"],
    queryFn: () => getSubCategories(),
  });
  return { subCategories, isLoading };
}
