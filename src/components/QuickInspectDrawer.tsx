import React, { useState, useEffect } from 'react';
import { CatalogItem, MaterialFinish } from '../data/catalog';

interface QuickInspectDrawerProps {
  isOpen: boolean;
  item: CatalogItem | null;
  onClose: () => void;
  onAddToCart: (item: CatalogItem, finish: MaterialFinish) => void;
  onToggleWishlist: (item: CatalogItem) => void;
  isWishlisted: boolean;
}

export const QuickInspectDrawer: React.FC<QuickInspectDrawerProps> = ({
  isOpen,
  item,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  const [selectedFinish, setSelectedFinish] = useState<MaterialFinish | null>(null);
  const [addedToast, setAddedToast] = useState(false);

  useEffect(() => {
    if (item && item.finishes && item.finishes.length > 0) {
      setSelectedFinish(item.finishes[0]);
    }
  }, [item]);

  if (!isOpen || !item) return null;

  const currentFinish = selectedFinish || item.finishes[0];

  const handleAdd = () => {
    if (currentFinish) {
      onAddToCart(item, currentFinish);
      setAddedToast(true);
      setTimeout(() => setAddedToast(false), 2400);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1b1c1a]/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-4 sm:pl-10">
        <div className="w-screen max-w-md bg-[#fbf9f5] border-l border-[#cdc5bc]/50 shadow-2xl flex flex-col justify-between overflow-y-auto">
          {/* Top Bar */}
          <div className="p-6 pb-2 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7c5730]">
                Piece Overview
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => onToggleWishlist(item)}
                  aria-label={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
                  className={`p-1.5 rounded transition-colors ${
                    isWishlisted ? 'text-[#7c5730]' : 'text-[#7c766e] hover:text-[#1b1c1a]'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[20px] ${isWishlisted ? 'fill-1' : ''}`}>
                    favorite
                  </span>
                </button>
                <button
                  onClick={onClose}
                  aria-label="Close drawer"
                  className="p-1.5 rounded hover:bg-[#efeeea] text-[#1b1c1a] transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
            </div>

            {/* Product Image */}
            <div className="aspect-square bg-[#efeeea] rounded-xl overflow-hidden shadow-inner border border-[#cdc5bc]/30 relative group">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {item.badge && (
                <span className="absolute top-3 left-3 bg-[#fbf9f5]/90 backdrop-blur text-[10px] uppercase font-semibold px-2.5 py-1 rounded text-[#1b1c1a] border border-[#cdc5bc]/40">
                  {item.badge}
                </span>
              )}
            </div>

            {/* Title & Price */}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wider text-[#7c766e]">
                  {item.category} • {item.leadTime}
                </span>
              </div>
              <h3 className="font-serif-display text-2xl font-medium text-[#1b1c1a] mt-1">
                {item.name}
              </h3>
              <p className="font-serif-display text-xl text-[#7c5730] mt-1 font-semibold">
                {item.formattedPrice}
              </p>
            </div>

            {/* Architectural Description */}
            <div className="space-y-1.5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7c766e]">
                Architectural Description
              </p>
              <p className="text-sm text-[#4b463f] leading-relaxed font-light">
                {item.description}
              </p>
              {item.architecturalNote && (
                <p className="text-xs text-[#7c766e] italic pt-1 border-t border-[#cdc5bc]/20">
                  {item.architecturalNote}
                </p>
              )}
            </div>

            {/* Dimensions & Scale */}
            <div className="bg-[#f5f3ef] p-4 rounded-lg space-y-1 border border-[#cdc5bc]/30">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7c766e]">
                Dimensions &amp; Scale
              </p>
              <p className="text-xs text-[#1b1c1a] font-medium tracking-wide">
                {item.dimensions} {item.weight ? `• ${item.weight}` : ''}
              </p>
              <p className="text-[11px] text-[#7c766e] pt-1">
                Provenance: {item.provenance}
              </p>
            </div>

            {/* Available Atelier Finishes */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7c766e]">
                  Available Atelier Finishes
                </p>
                {currentFinish && (
                  <span className="text-xs text-[#1b1c1a] font-medium">
                    {currentFinish.name} ({currentFinish.textureName})
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                {item.finishes.map((finish) => {
                  const isSelected = currentFinish?.id === finish.id;
                  return (
                    <button
                      key={finish.id}
                      onClick={() => setSelectedFinish(finish)}
                      title={`${finish.name} - ${finish.textureName}`}
                      className={`w-7 h-7 rounded-full transition-transform border border-black/15 ${
                        isSelected
                          ? 'ring-2 ring-[#1b1c1a] ring-offset-2 scale-110'
                          : 'hover:scale-105 opacity-85 hover:opacity-100'
                      }`}
                      style={{ backgroundColor: finish.hex }}
                    />
                  );
                })}
              </div>
            </div>

            {/* CAD Spec Note */}
            {item.bimAvailable && (
              <div className="flex items-center gap-2 text-xs text-[#7c766e] pt-1">
                <span className="material-symbols-outlined text-[16px]">draw</span>
                <span>Direct Revit, Archicad &amp; Rhino BIM specs included</span>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="p-6 pt-4 border-t border-[#cdc5bc]/40 bg-[#fbf9f5] space-y-2.5">
            {addedToast && (
              <div className="p-2.5 bg-[#eae8e4] text-[#1b1c1a] rounded text-xs text-center font-medium flex items-center justify-center gap-1.5 animate-fadeIn">
                <span className="material-symbols-outlined text-[16px] text-[#7c5730]">check_circle</span>
                Added {item.name} to Curated Project
              </div>
            )}
            <button
              onClick={handleAdd}
              className="w-full py-3.5 bg-[#1b1c1a] text-white rounded text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#4b463f] transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
              Add to Curated Project ({item.formattedPrice})
            </button>
            <button
              onClick={onClose}
              className="w-full py-2.5 bg-[#efeeea] text-[#1b1c1a] rounded text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#eae8e4] transition-colors"
            >
              Continue Exploring
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
