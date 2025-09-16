import { notFound } from "next/navigation";
import { getMenuByslug } from "@/app/_lib/data-server";
import MenuDisplay from "./MenuDisplay";

export default async function MenuPage({ params }) {
  const { slug } = params;

  const menuData = await getMenuByslug(slug);

  if (!menuData) {
    notFound();
  }

  return <MenuDisplay menuData={menuData} />;
}
