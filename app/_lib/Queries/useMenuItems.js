import { useQuery } from "@tanstack/react-query";
import { getMenuItems, getSubCategories } from "../data-server";

export function useMenuItems() {
  const { data: menuItems, isLoading } = useQuery({
    queryKey: ["menuitems"],
    queryFn: () => getMenuItems(),
  });
  return { menuItems, isLoading };
}
