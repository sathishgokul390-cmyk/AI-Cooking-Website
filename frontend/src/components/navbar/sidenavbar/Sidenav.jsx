// import {
//   Clock3,
//   ChevronDown,
//   Search,
//   Salad,
//   Flame,
//   Apple,
//   HeartPulse,
//   UtensilsCrossed,
//   ChefHat,
//   Globe2,
// } from "lucide-react";

// import { useState } from "react";

// export default function Sidenav() {
// ... (old code preserved as-is)
// }



// new Sidenav bar code

import React, { useState } from "react";
import "../../../styles/navbar/sidenav.css";
import {
  Clock3,
  ChevronDown,
  Search,
  Salad,
  Flame,
  Apple,
  HeartPulse,
  UtensilsCrossed,
  ChefHat,
  Globe2,
  SlidersHorizontal,
  X,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// SidebarMainLayout at MODULE level — keeps input focus stable across renders
// ─────────────────────────────────────────────────────────────────────────────
function SidebarMainLayout({
  search,
  setSearch,
  activeFilteredList,
  openDropdown,
  setOpenDropdown,
  selectedFilters,
  handleItemToggle,
  handleClearCategory,
  totalActiveCount,
  triggerApplyFilters,
  closeMobile,
}) {
  return (
    <div className="sidebar-container">

      {/* HEADER */}
      <div className="sidebar-header-section">
        <div>
          <h1 className="sidebar-main-title">Filters</h1>
          <p className="sidebar-sub-title">Discover perfect recipes</p>
        </div>
        <button onClick={closeMobile} className="mobile-close-btn">
          <X size={18} />
        </button>
      </div>

      {/* SEARCH */}
      <div className="search-bar-box">
        <Search size={18} className="search-bar-icon" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search filters..."
          className="search-bar-input"
        />
      </div>

      {/* FILTER LIST */}
      <div className="scrollable-filter-list">
        {activeFilteredList.map((filter, index) => {
          const Icon = filter.icon;
          const isOpen = search.trim() ? true : openDropdown === filter.title;
          const activeCategoryCount = selectedFilters[filter.apiKey]?.length || 0;

          return (
            <div key={index} className="filter-category-row">
              <button
                onClick={() => setOpenDropdown(isOpen ? null : filter.title)}
                className="category-trigger-btn"
              >
                <div className="category-trigger-left">
                  <div className="category-icon-bg">
                    <Icon size={18} className={filter.color} />
                  </div>
                  <div className="category-title-stack">
                    <span className="category-title-text">{filter.title}</span>
                    {activeCategoryCount > 0 && (
                      <span className="category-count-indicator">
                        {activeCategoryCount} selected
                      </span>
                    )}
                  </div>
                </div>
                <div className="category-trigger-right">
                  {activeCategoryCount > 0 && (
                    <span
                      onClick={(e) => handleClearCategory(filter.apiKey, e)}
                      className="category-clear-badge"
                    >
                      Clear
                    </span>
                  )}
                  <ChevronDown
                    size={16}
                    className={`category-arrow-icon ${isOpen ? "rotated" : ""}`}
                  />
                </div>
              </button>

              <div className={`accordion-expand-box ${isOpen ? "expanded" : ""}`}>
                <div className="accordion-expand-inner">
                  <div className="pills-grid-layout">
                    {filter.filteredItems.map((item, idx) => {
                      const isSelected =
                        selectedFilters[filter.apiKey]?.includes(item) || false;
                      return (
                        <button
                          key={idx}
                          onClick={() => handleItemToggle(filter.apiKey, item)}
                          className={`filter-pill-item ${isSelected ? "selected" : ""}`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* FOOTER */}
      <div className="sidebar-footer-section">
        <button onClick={triggerApplyFilters} className="apply-filters-action-btn">
          Apply Filters {totalActiveCount > 0 && `(${totalActiveCount})`}
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Sidenav export
// ─────────────────────────────────────────────────────────────────────────────
export default function Sidenav({ onApplyFilters }) {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({});

  const filters = [
    {
      title: "Cooking Time",
      apiKey: "time",
      icon: Clock3,
      color: "text-orange-400",
      items: ["Under 15 mins", "15 - 30 mins", "30 - 60 mins", "1+ hour"],
    },
    {
      title: "Ingredients",
      apiKey: "q",
      icon: Salad,
      color: "text-green-400",
      items: ["Chicken", "Rice", "Egg", "Vegetables", "Seafood"],
    },
    {
      title: "Calories",
      apiKey: "calories",
      icon: Flame,
      color: "text-red-400",
      items: ["Under 200", "200 - 400", "400 - 600", "600+"],
    },
    {
      title: "Diet",
      apiKey: "diet",
      icon: Apple,
      color: "text-lime-400",
      items: ["balanced", "high-protein", "low-carb", "low-fat"],
    },
    {
      title: "Health",
      apiKey: "health",
      icon: HeartPulse,
      color: "text-pink-400",
      items: ["vegan", "vegetarian", "paleo", "dairy-free", "gluten-free"],
    },
    {
      title: "Meal",
      apiKey: "mealType",
      icon: UtensilsCrossed,
      color: "text-yellow-400",
      items: ["Breakfast", "Lunch", "Dinner", "Snack"],
    },
    {
      title: "Dish",
      apiKey: "dishType",
      icon: ChefHat,
      color: "text-cyan-400",
      items: ["Soup", "Main course", "Salad", "Pizza", "Sandwiches"],
    },
    {
      title: "Cuisine",
      apiKey: "cuisineType",
      icon: Globe2,
      color: "text-blue-400",
      items: ["American", "Asian", "British", "Indian", "Italian", "Mediterranean"],
    },
  ];

  const handleItemToggle = (categoryKey, item) => {
    setSelectedFilters((prev) => {
      const cur = prev[categoryKey] || [];
      return {
        ...prev,
        [categoryKey]: cur.includes(item)
          ? cur.filter((i) => i !== item)
          : [...cur, item],
      };
    });
  };

  const handleClearCategory = (categoryKey, e) => {
    e.stopPropagation();
    setSelectedFilters((prev) => {
      const updated = { ...prev };
      delete updated[categoryKey];
      return updated;
    });
  };

  const activeFilteredList = React.useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return filters.map((f) => ({ ...f, filteredItems: f.items }));
    const result = [];
    for (const category of filters) {
      const titleMatches = category.title.toLowerCase().includes(q);
      if (titleMatches) {
        result.push({ ...category, filteredItems: category.items });
      } else {
        const matchedItems = category.items.filter((item) =>
          item.toLowerCase().includes(q)
        );
        if (matchedItems.length > 0) {
          result.push({ ...category, filteredItems: matchedItems });
        }
      }
    }
    return result;
  }, [search]);

  const totalActiveCount = Object.values(selectedFilters).flat().length;

  const triggerApplyFilters = () => {
    onApplyFilters(selectedFilters);
    setIsOpenMobile(false);
  };

  return (
    <>
      {/* ── MOBILE FILTER TRIGGER BUTTON ────────────────────────────────────
           Visible only below 1024px. Floats at the bottom-right of the screen.
           Shows the filter count badge when filters are active.
           Hidden on desktop — sidebar is always visible there.
      ──────────────────────────────────────────────────────────────────────── */}
      <button
        onClick={() => setIsOpenMobile(true)}
        className={`filter-fab${isOpenMobile ? " filter-fab-hidden" : ""}`}
        aria-label="Open filters"
      >
        <SlidersHorizontal size={20} />
        <span className="filter-fab-label">Filters</span>
        {totalActiveCount > 0 && (
          <span className="filter-fab-badge">{totalActiveCount}</span>
        )}
      </button>

      {/* BACKDROP */}
      {isOpenMobile && (
        <div
          className="mobile-backdrop-overlay"
          onClick={() => setIsOpenMobile(false)}
        />
      )}

      {/* SIDEBAR DRAWER */}
      <aside
        className={`sidebar-aside-wrapper ${isOpenMobile ? "mobile-drawer-open" : ""}`}
      >
        <SidebarMainLayout
          search={search}
          setSearch={setSearch}
          activeFilteredList={activeFilteredList}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          selectedFilters={selectedFilters}
          handleItemToggle={handleItemToggle}
          handleClearCategory={handleClearCategory}
          totalActiveCount={totalActiveCount}
          triggerApplyFilters={triggerApplyFilters}
          closeMobile={() => setIsOpenMobile(false)}
        />
      </aside>
    </>
  );
}
