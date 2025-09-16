"use client";

import Link from "next/link";
import { useState } from "react";
import { useCategories } from "../_lib/Queries/useCategories";
import { useMenuItems } from "../_lib/Queries/useMenuItems";
import { useSubCategories } from "../_lib/Queries/useSubCategories";

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

  console.log(filteredSubCategories);

  return (
    <div
      className="min-h-screen bg-black"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23111111' fill-opacity='0.3'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundColor: "#0a0a0a",
      }}
    >
      {/* Header Section */}
      <div
        className="relative overflow-hidden text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, #673d2b 0%, #844628 100%), url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M20 20.5V18H4v-2h16V4.5L26 12l-6 7.5z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            Our Delicious Menu
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Discover our carefully crafted dishes made with the finest
            ingredients and authentic flavors that will tantalize your taste
            buds.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-12 fill-current text-black"
            viewBox="0 0 1440 48"
          >
            <path d="M0,32L48,37.3C96,43,192,53,288,48C384,43,480,21,576,21.3C672,21,768,43,864,48C960,53,1056,43,1152,37.3C1248,32,1344,32,1392,32L1440,32L1440,48L1392,48C1344,48,1248,48,1152,48C1056,48,960,48,864,48C768,48,672,48,576,48C480,48,384,48,288,48C192,48,96,48,48,48L0,48Z"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Tabs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Browse by Category
          </h2>
          <nav
            className="bg-black/60 backdrop-blur-sm shadow-2xl rounded-2xl border border-gray-800"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23333333' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          >
            <div className="p-2">
              <div className="flex justify-center gap-2 overflow-x-auto pb-2">
                {categories?.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveTab(cat.id);
                      setActiveFilter("All");
                    }}
                    className={`relative py-4 px-8 text-sm font-bold rounded-xl transition-all duration-300 transform uppercase hover:scale-105 whitespace-nowrap ${
                      activeTab === cat.id
                        ? "bg-[#673d2b] text-white shadow-lg shadow-[#673d2b]/30"
                        : "text-gray-300 hover:bg-[#673d2b]/20 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>

        {/* Subcategory Filters */}
        {activeTab && (
          <div className="mb-12 transform animate-in slide-in-from-top duration-500">
            <h3 className="text-2xl font-semibold text-center text-gray-200 mb-6">
              Filter by Type
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setActiveFilter("All")}
                className={`px-6 py-3 rounded-full border-2 text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  activeFilter === "All"
                    ? "bg-[#673d2b] text-white border-[#673d2b] shadow-lg shadow-[#673d2b]/30"
                    : "bg-black/60 backdrop-blur-sm text-gray-300 border-gray-600 hover:bg-[#673d2b]/20 hover:border-[#673d2b]/50"
                }`}
              >
                All
              </button>
              {filteredSubCategories?.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setActiveFilter(sub.name)}
                  className={`px-6 py-3 rounded-full border-2 text-sm font-semibold transition-all duration-300 transform uppercase hover:scale-105 hover:shadow-lg ${
                    activeFilter === sub.name
                      ? "bg-[#673d2b] text-white border-[#673d2b] shadow-lg shadow-[#673d2b]/30"
                      : "bg-black/60 backdrop-blur-sm text-gray-300 border-gray-600 hover:bg-[#673d2b]/20 hover:border-[#673d2b]/50"
                  }`}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Menu Items */}
        <div className="max-w-5xl mx-auto">
          {filteredItems.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
              {filteredItems.map((item, index) => (
                <Link key={item.id} href={`/menu/${item.slug}`}>
                  <div
                    className="group bg-black/70 backdrop-blur-sm border-2 border-gray-800 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 animate-in slide-in-from-bottom cursor-pointer capitalize hover:border-[#673d2b]/50"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23333333' fill-opacity='0.1'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-2 h-2 bg-[#673d2b] rounded-full"></div>
                          <span className="text-sm font-medium text-[#673d2b] bg-[#673d2b]/10 px-3 py-1 rounded-full">
                            {
                              filteredSubCategories?.find(
                                (sub) => sub.id === item.subCategoryId
                              )?.name
                            }
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#673d2b] transition-colors duration-300">
                          {item.name}
                        </h3>
                        <p className="text-gray-300 text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="lg:ml-8">
                        <div className="text-right">
                          <div className="text-3xl font-bold text-[#673d2b] mb-2">
                            ₦{item.price.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 w-20 h-20 bg-[#673d2b]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-[#673d2b]/20 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-[#673d2b] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">!</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                No Items Found
              </h3>
              <p className="text-gray-300">
                We couldn&apos;t find any items in this category. Try selecting
                a different filter.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center">
        <div className="inline-flex items-center gap-2 text-[#673d2b] font-medium">
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#673d2b]"></div>
          <span>Crafted with love</span>
          <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#673d2b]"></div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
