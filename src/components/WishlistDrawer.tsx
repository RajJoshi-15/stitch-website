import React from 'react';
import { CatalogItem } from '../data/catalog';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CatalogItem[];
  onRemoveItem: (id: string) => void;
  onQuickInspect: (item: CatalogItem) => void;
  onAddToCart: (item: CatalogItem) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onQuickInspect,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-[#1b1c1a]/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-4 sm:pl-10">
        <div className="w-screen max-w-md bg-[#fbf9f5] border-l border-[#cdc5bc]/50 shadow-2xl flex flex-col justify-between overflow-y-auto">
          {/* Header */}
          <div className="p-6 pb-4 border-b border-[#cdc5bc]/40">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#7c5730] fill-1">favorite</span>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1b1c1a]">
                  Saved Atelier Pieces
                </span>
                <span className="text-xs text-[#7c766e]">({items.length})</span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close wishlist"
                className="p-1 rounded hover:bg-[#efeeea] text-[#1b1c1a] transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <span className="material-symbols-outlined text-[48px] text-[#cdc5bc]">favorite_border</span>
                <p className="font-serif-display text-lg text-[#1b1c1a]">No saved pieces yet</p>
                <p className="text-xs text-[#7c766e] max-w-xs mx-auto">
                  Pin your preferred architectural items to compare materiality schemes and configurations.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 bg-[#f5f3ef] rounded-xl flex gap-3.5 border border-[#cdc5bc]/30 relative group"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg bg-[#efeeea] flex-shrink-0 cursor-pointer"
                    onClick={() => {
                      onQuickInspect(item);
                      onClose();
                    }}
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4
                          onClick={() => {
                            onQuickInspect(item);
                            onClose();
                          }}
                          className="font-serif-display text-sm font-medium text-[#1b1c1a] truncate cursor-pointer hover:underline"
                        >
                          {item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-[#7c766e] hover:text-[#ba1a1a] p-0.5"
                          title="Remove from saved"
                        >
                          <span className="material-symbols-outlined text-[16px]">close</span>
                        </button>
                      </div>
                      <p className="text-xs font-mono font-semibold text-[#7c5730] mt-0.5">
                        {item.formattedPrice}
                      </p>
                      <p className="text-[10px] text-[#7c766e] truncate mt-0.5">
                        {item.dimensions}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <button
                        onClick={() => {
                          onAddToCart(item);
                          onClose();
                        }}
                        className="flex-1 py-1.5 bg-[#1b1c1a] text-white rounded text-[10px] font-semibold uppercase tracking-wider hover:bg-[#4b463f]"
                      >
                        Add to Bag
                      </button>
                      <button
                        onClick={() => {
                          onQuickInspect(item);
                          onClose();
                        }}
                        className="py-1.5 px-2 bg-[#efeeea] text-[#1b1c1a] rounded text-[10px] font-semibold uppercase tracking-wider hover:bg-[#eae8e4]"
                      >
                        Inspect
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#cdc5bc]/40 bg-[#fbf9f5]">
              <button
                onClick={onClose}
                className="w-full py-2.5 bg-[#efeeea] text-[#1b1c1a] rounded text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#eae8e4]"
              >
                Back to Curations
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
