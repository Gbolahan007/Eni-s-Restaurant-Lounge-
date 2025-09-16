import { supabase } from "./supabase";

export const getCategories = async function () {
  const { data, error } = await supabase.from("categories").select("*");

  if (error) {
    console.error(error);
    throw new Error("categories could not be loaded");
  }
  return data;
};

export const getSubCategories = async function () {
  const { data, error } = await supabase.from("subcategories").select("*");

  if (error) {
    console.error(error);
    throw new Error("subCategories could not be loaded");
  }
  return data;
};

export const getMenuItems = async function () {
  const { data, error } = await supabase.from("menuitems").select("*");

  if (error) {
    console.error(error);
    throw new Error("menuItems could not be loaded");
  }
  return data;
};

export async function getMenuByslug(slug) {
  const { data: product, error } = await supabase
    .from("menuitems")
    .select(
      `
      id,
      name,
      description,
      price,
      slug,
      image,
      subCategory:subcategories(name)
    `
    )
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Product fetch error:", error);
    throw new Error("Failed to fetch menu item");
  }

  if (!product) {
    throw new Error("Menu item not found");
  }

  return product;
}
