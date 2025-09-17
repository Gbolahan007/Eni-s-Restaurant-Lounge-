"use client";

import Link from "next/link";
import { useState } from "react";
import { useCategories } from "../_lib/Queries/useCategories";
import { useMenuItems } from "../_lib/Queries/useMenuItems";
import { useSubCategories } from "../_lib/Queries/useSubCategories";
import Image from "next/image";

const Menu = () => {
  const { categories } = useCategories();
  const { subCategories } = useSubCategories();
  const { menuItems: items } = useMenuItems();
  const [activeTab, setActiveTab] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter subcategories by active category
  const filteredSubCategories = subCategories?.filter(
    (sub) => sub.categoryId === activeTab
  );

  // Filter menu items by category + subcategory
  const filteredItems =
    items?.filter((item) => {
      const matchesCategory = activeTab
        ? filteredSubCategories?.some((sub) => sub.id === item.subCategoryId)
        : true;

      const matchesSubCategory =
        activeFilter === "All"
          ? true
          : filteredSubCategories?.some(
              (sub) =>
                sub.name === activeFilter && sub.id === item.subCategoryId
            );

      return matchesCategory && matchesSubCategory;
    }) ?? [];

  const activeSubCategory =
    activeFilter !== "All"
      ? filteredSubCategories?.find((sub) => sub.name === activeFilter)
      : null;

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div
        className="relative overflow-hidden text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, #673d2b 0%, #844628 100%), url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M20 20.5V18H4v-2h16V4.5L26 12l-6 7.5z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Delicious Menu</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest
            ingredients and authentic flavors that will tantalize your taste
            buds.
          </p>
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              className="w-full h-12 fill-current text-black"
              viewBox="0 0 1440 48"
            >
              <path d="M0,32L48,37.3C96,43,192,53,288,48C384,43,480,21,576,21.3C672,21,768,43,864,48C960,53,1056,43,1152,37.3C1248,32,1344,32,1392,32L1440,32L1440,48L1392,48C1344,48,1248,48,1152,48C1056,48,960,48,864,48C768,48,672,48,576,48C480,48,384,48,288,48C192,48,96,48,48,48L0,48Z" />
            </svg>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23111111' fill-opacity='0.3'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundColor: "#0a0a0a",
        }}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        {/* CATEGORY NAVIGATION */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 ">
          {categories?.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                setActiveFilter("All");
              }}
              className={`px-6 py-3 uppercase rounded-full border-2 text-sm font-semibold transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-[#673d2b] text-white border-[#673d2b]"
                  : "bg-black/60 text-gray-300 border-gray-600"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* SUBCATEGORY NAVIGATION */}
        {activeTab && filteredSubCategories?.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center text-gray-200 mb-6">
              Filter by Type
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setActiveFilter("All")}
                className={`px-6 py-3 rounded-full border-2 text-sm font-semibold transition-all duration-300 ${
                  activeFilter === "All"
                    ? "bg-[#673d2b] text-white border-[#673d2b]"
                    : "bg-black/60 text-gray-300 border-gray-600"
                }`}
              >
                All
              </button>
              {filteredSubCategories.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setActiveFilter(sub.name)}
                  className={`px-6 py-3 rounded-full border-2 text-sm font-semibold transition-all duration-300 uppercase ${
                    activeFilter === sub.name
                      ? "bg-[#673d2b] text-white border-[#673d2b]"
                      : "bg-black/60 text-gray-300 border-gray-600"
                  }`}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Subcategory Banner */}
        {activeSubCategory?.imageUrl && (
          <div className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl">
            {/* Image */}
            <div className="relative w-full h-64 md:h-80 lg:h-96">
              <Image
                src={activeSubCategory.imageUrl}
                alt={activeSubCategory.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            <div className="absolute bottom-6 left-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase drop-shadow-lg">
                {activeSubCategory.name}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mt-2"></div>
            </div>
          </div>
        )}

        {/* Menu Items */}
        <div className="max-w-5xl mx-auto">
          {filteredItems.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group bg-black/70 border-2 border-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-[#673d2b]/50"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#673d2b]">
                    {item.name}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base line-clamp-2">
                    {item.description}
                  </p>
                  <div className="mt-4 text-2xl font-bold text-[#673d2b]">
                    ₦{item.price.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-white mb-2">
                No Items Found
              </h3>
              <p className="text-gray-300">
                We couldn&apos;t find any items in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
