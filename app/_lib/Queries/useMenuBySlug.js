import { useQuery } from "@tanstack/react-query";
import { getMenuByslug } from "../data-server";

export function useMenuBySlug(slug) {
  const { data: MenuBySlug, isLoading } = useQuery({
    queryKey: ["menuitems", slug],
    queryFn: () => getMenuByslug(slug),
  });
  return { MenuBySlug, isLoading };
}
