import React, { useState, useMemo } from 'react';
import { CatalogItem } from '../data/catalog';

interface CatalogViewProps {
  items: CatalogItem[];
  onQuickInspect: (item: CatalogItem) => void;
  onAddToCart: (item: CatalogItem) => void;
  onToggleWishlist: (item: CatalogItem) => void;
  wishlistIds: string[];
  searchQuery: string;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  items,
  onQuickInspect,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  searchQuery,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'lead-time'>('featured');

  const categories = ['All', 'Living', 'Dining', 'Bedroom', 'Workspace', 'Lighting'];
  const materials = ['All', 'Travertine', 'Walnut', 'Bouclé', 'Linen', 'Brass'];

  const filteredItems = useMemo(() => {
    return items
      .filter((item) => {
        // Category filter
        if (selectedCategory !== 'All' && item.category !== selectedCategory) {
          return false;
        }
        // Material filter
        if (selectedMaterial !== 'All') {
          const matchMaterial = item.finishes.some((f) =>
            f.name.toLowerCase().includes(selectedMaterial.toLowerCase())
          ) || item.description.toLowerCase().includes(selectedMaterial.toLowerCase());
          if (!matchMaterial) return false;
        }
        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = item.name.toLowerCase().includes(q);
          const matchSub = item.subtitle.toLowerCase().includes(q);
          const matchDesc = item.description.toLowerCase().includes(q);
          const matchMat = item.finishes.some((f) => f.name.toLowerCase().includes(q));
          if (!matchName && !matchSub && !matchDesc && !matchMat) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'lead-time') return a.leadTime.localeCompare(b.leadTime);
        return 0; // featured
      });
  }, [items, selectedCategory, selectedMaterial, searchQuery, sortBy]);

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-12 bg-[#fbf9f5] min-h-screen">
      <div className="max-w-[1536px] mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-3 border-b border-[#cdc5bc]/40 pb-8">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7c5730]" />
            <span className="text-xs font-semibold uppercase text-[#7c5730] tracking-[0.14em]">
              The Permanent Catalogue
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1b1c1a]">
                Collections &amp; Architectural Heirlooms
              </h1>
              <p className="text-sm sm:text-base text-[#4b463f] max-w-xl font-light mt-1.5 leading-relaxed">
                Sculpted from certified Roman travertine, smoked oak, and Italian wool. Each piece is crafted by master cabinetmakers and stonemasons to order.
              </p>
            </div>
            <div className="text-xs text-[#7c766e]">
              Showing <span className="font-semibold text-[#1b1c1a]">{filteredItems.length}</span> curated pieces
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 bg-[#f5f3ef] p-4 rounded-xl border border-[#cdc5bc]/40">
          {/* Room Categories */}
          <div className="flex items-center gap-1 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-[0.1em] transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#1b1c1a] text-white shadow-sm'
                    : 'text-[#4b463f] hover:text-[#1b1c1a] hover:bg-[#eae8e4]'
                }`}
              >
                {cat === 'All' ? 'All Spaces' : cat}
              </button>
            ))}
          </div>

          {/* Material & Sort Selectors */}
          <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
            {/* Material Filter */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-[10px] uppercase font-semibold text-[#7c766e] hidden sm:inline">Material:</span>
              <select
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value)}
                className="bg-[#efeeea] border border-[#cdc5bc]/50 rounded px-2.5 py-1.5 text-xs text-[#1b1c1a] outline-none"
              >
                <option value="All">All Materials</option>
                {materials.filter((m) => m !== 'All').map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            {/* Sort Filter */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-[10px] uppercase font-semibold text-[#7c766e] hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#efeeea] border border-[#cdc5bc]/50 rounded px-2.5 py-1.5 text-xs text-[#1b1c1a] outline-none"
              >
                <option value="featured">Featured Atelier Works</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="lead-time">Lead Time: Quick Ship</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center space-y-3 bg-[#f5f3ef] rounded-xl border border-[#cdc5bc]/30">
            <span className="material-symbols-outlined text-[48px] text-[#cdc5bc]">search_off</span>
            <p className="font-serif-display text-xl text-[#1b1c1a]">No pieces match your criteria</p>
            <p className="text-xs text-[#7c766e]">Try adjusting your material filters or clearing search terms.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedMaterial('All');
              }}
              className="px-4 py-2 bg-[#1b1c1a] text-white rounded text-xs uppercase tracking-wider font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => {
              const isWish = wishlistIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="bg-[#f5f3ef] p-4 sm:p-5 rounded-xl space-y-4 shadow-sm hover:shadow-md transition-all duration-300 border border-[#cdc5bc]/30 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    {/* Image Container with Badges */}
                    <div
                      className="relative aspect-square bg-[#efeeea] rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => onQuickInspect(item)}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {item.tag && (
                        <span className="absolute top-3 left-3 bg-[#fbf9f5]/90 backdrop-blur text-[10px] uppercase font-semibold px-2 py-0.5 rounded text-[#1b1c1a] border border-[#cdc5bc]/30">
                          {item.tag}
                        </span>
                      )}
                      {item.badge && !item.tag && (
                        <span className="absolute top-3 left-3 bg-[#fbf9f5]/90 backdrop-blur text-[10px] uppercase font-semibold px-2 py-0.5 rounded text-[#1b1c1a] border border-[#cdc5bc]/30">
                          {item.badge}
                        </span>
                      )}

                      {/* Wishlist toggle icon */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleWishlist(item);
                        }}
                        aria-label="Save to Wishlist"
                        className={`absolute top-3 right-3 p-1.5 rounded-full bg-white/90 backdrop-blur shadow-sm transition-colors ${
                          isWish ? 'text-[#7c5730]' : 'text-[#7c766e] hover:text-[#1b1c1a]'
                        }`}
                      >
                        <span className={`material-symbols-outlined text-[18px] ${isWish ? 'fill-1' : ''}`}>
                          favorite
                        </span>
                      </button>
                    </div>

                    {/* Metadata Header */}
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-[#7c766e]">
                        <span>{item.category}</span>
                        <span>{item.leadTime}</span>
                      </div>
                      <h3
                        onClick={() => onQuickInspect(item)}
                        className="font-serif-display text-xl font-medium text-[#1b1c1a] mt-1 cursor-pointer hover:underline"
                      >
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#4b463f] font-light mt-0.5 line-clamp-1">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Finishes preview */}
                    <div className="flex items-center justify-between pt-1 border-t border-[#cdc5bc]/20">
                      <div className="flex items-center gap-1.5">
                        {item.finishes.map((f) => (
                          <span
                            key={f.id}
                            className="w-3.5 h-3.5 rounded-full border border-black/20"
                            style={{ backgroundColor: f.hex }}
                            title={f.name}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#7c766e] tracking-wide">
                        {item.dimensions}
                      </span>
                    </div>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-2 border-t border-[#cdc5bc]/30 flex items-center justify-between gap-3">
                    <span className="font-serif-display text-xl font-semibold text-[#1b1c1a]">
                      {item.formattedPrice}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onQuickInspect(item)}
                        className="px-3 py-2 bg-[#efeeea] text-[#1b1c1a] rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#eae8e4] transition-colors"
                      >
                        Inspect
                      </button>
                      <button
                        onClick={() => onAddToCart(item)}
                        className="px-4 py-2 bg-[#1b1c1a] text-white rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#4b463f] transition-colors flex items-center gap-1 shadow-sm"
                      >
                        <span className="material-symbols-outlined text-[16px]">add</span>
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
