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

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            Our Delicious Menu
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
            Discover our carefully crafted dishes made with the finest
            ingredients and authentic flavors that will tantalize your taste
            buds.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-12 fill-current text-amber-50"
            viewBox="0 0 1440 48"
          >
            <path d="M0,32L48,37.3C96,43,192,53,288,48C384,43,480,21,576,21.3C672,21,768,43,864,48C960,53,1056,43,1152,37.3C1248,32,1344,32,1392,32L1440,32L1440,48L1392,48C1344,48,1248,48,1152,48C1056,48,960,48,864,48C768,48,672,48,576,48C480,48,384,48,288,48C192,48,96,48,48,48L0,48Z"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Tabs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Browse by Category
          </h2>
          <nav className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-2xl border border-white/50">
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
                        ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg shadow-amber-500/30"
                        : "text-gray-700 hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-100 hover:text-amber-800"
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
            <h3 className="text-2xl font-semibold text-center text-gray-700 mb-6">
              Filter by Type
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setActiveFilter("All")}
                className={`px-6 py-3 rounded-full border-2 text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  activeFilter === "All"
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white border-transparent shadow-lg shadow-amber-500/30"
                    : "bg-white/80 backdrop-blur-sm text-gray-700 border-gray-300 hover:bg-amber-50 hover:border-amber-300"
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
                      ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white border-transparent shadow-lg shadow-amber-500/30"
                      : "bg-white/80 backdrop-blur-sm text-gray-700 border-gray-300 hover:bg-amber-50 hover:border-amber-300"
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
                    className="group bg-white/90 backdrop-blur-sm border-2 border-white/50 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 animate-in slide-in-from-bottom cursor-pointer capitalize"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                          <span className="text-sm font-medium text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                            {
                              filteredSubCategories?.find(
                                (sub) => sub.id === item.subCategoryId
                              )?.name
                            }
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="lg:ml-8">
                        <div className="text-right">
                          <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
                            ₦{item.price.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">!</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                No Items Found
              </h3>
              <p className="text-gray-600">
                We couldn&apos;t find any items in this category. Try selecting
                a different filter.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center">
        <div className="inline-flex items-center gap-2 text-amber-700 font-medium">
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
          <span>Crafted with love</span>
          <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-amber-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
