import React, { useState } from 'react';
import { CatalogItem, MaterialFinish } from '../data/catalog';

export interface CartItem {
  item: CatalogItem;
  finish: MaterialFinish;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [exportedSpec, setExportedSpec] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const formattedSubtotal = `$${subtotal.toLocaleString('en-US')}`;

  const handleExportSpecs = () => {
    setExportedSpec(true);
    setTimeout(() => setExportedSpec(false), 3000);
  };

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutComplete(true);
    setTimeout(() => {
      onClearCart();
      setCheckoutComplete(false);
      setIsCheckingOut(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1b1c1a]/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-4 sm:pl-10">
        <div className="w-screen max-w-md bg-[#fbf9f5] border-l border-[#cdc5bc]/50 shadow-2xl flex flex-col justify-between overflow-y-auto">
          {/* Top Bar */}
          <div className="p-6 pb-4 border-b border-[#cdc5bc]/40">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#7c5730]">shopping_bag</span>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1b1c1a]">
                  Curated Project Bag
                </span>
                <span className="text-xs text-[#7c766e]">({items.length} pieces)</span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close cart"
                className="p-1 rounded hover:bg-[#efeeea] text-[#1b1c1a] transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <p className="text-[11px] text-[#7c766e] mt-1">
              Includes White-Glove Unpacking &amp; Placement in North America &amp; Europe
            </p>
          </div>

          {/* Item List or Checkout State */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {checkoutComplete ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#efeeea] text-[#7c5730] mx-auto flex items-center justify-center">
                  <span className="material-symbols-outlined text-[32px]">check</span>
                </div>
                <h3 className="font-serif-display text-2xl text-[#1b1c1a]">
                  Atelier Order Confirmed
                </h3>
                <p className="text-sm text-[#4b463f] max-w-xs mx-auto">
                  Reference #ME-{Math.floor(100000 + Math.random() * 900000)}. Your Senior Architectural Curator will reach out within 4 business hours to finalize finish coordination and delivery schedule.
                </p>
                <div className="p-4 bg-[#f5f3ef] rounded-lg text-xs text-[#7c766e] text-left space-y-1">
                  <p className="font-semibold text-[#1b1c1a]">Included White-Glove Details:</p>
                  <p>• Climate-controlled bespoke crating</p>
                  <p>• Room placement &amp; assembly by certified joiners</p>
                  <p>• Material provenance dossier &amp; wax kit</p>
                </div>
              </div>
            ) : isCheckingOut ? (
              <form onSubmit={handleConfirmOrder} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#cdc5bc]/30">
                  <h4 className="font-serif-display text-lg text-[#1b1c1a]">Bespoke Procurement Details</h4>
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="text-xs text-[#7c5730] hover:underline"
                  >
                    ← Back to items
                  </button>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-semibold text-[#7c766e]">Lead Architect / Client Name</label>
                  <input
                    type="text"
                    required
                    defaultValue="Camille Desrosiers"
                    className="w-full bg-[#f5f3ef] border border-[#cdc5bc]/50 rounded p-2.5 text-xs text-[#1b1c1a] outline-none focus:border-[#1b1c1a]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-semibold text-[#7c766e]">Email Correspondence</label>
                  <input
                    type="email"
                    required
                    defaultValue="c.desrosiers@studiodesrosiers.com"
                    className="w-full bg-[#f5f3ef] border border-[#cdc5bc]/50 rounded p-2.5 text-xs text-[#1b1c1a] outline-none focus:border-[#1b1c1a]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-semibold text-[#7c766e]">Delivery Destination &amp; Floor</label>
                  <input
                    type="text"
                    required
                    defaultValue="Cap d'Antibes Villa, 14 Chemin des Sables"
                    className="w-full bg-[#f5f3ef] border border-[#cdc5bc]/50 rounded p-2.5 text-xs text-[#1b1c1a] outline-none focus:border-[#1b1c1a]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-semibold text-[#7c766e]">Architectural Trade Account / VAT (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. FR883920194"
                    className="w-full bg-[#f5f3ef] border border-[#cdc5bc]/50 rounded p-2.5 text-xs text-[#1b1c1a] outline-none focus:border-[#1b1c1a]"
                  />
                </div>

                <div className="p-3.5 bg-[#f5f3ef] rounded-lg text-xs space-y-1.5 border border-[#cdc5bc]/30">
                  <div className="flex justify-between text-[#7c766e]">
                    <span>Curated Pieces Subtotal:</span>
                    <span className="font-mono text-[#1b1c1a]">{formattedSubtotal}</span>
                  </div>
                  <div className="flex justify-between text-[#7c766e]">
                    <span>White-Glove Installation:</span>
                    <span className="text-[#7c5730] font-medium">Complimentary ($0)</span>
                  </div>
                  <div className="flex justify-between font-semibold text-[#1b1c1a] pt-1 border-t border-[#cdc5bc]/20">
                    <span>Total Procurement:</span>
                    <span className="font-mono text-base">{formattedSubtotal}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1b1c1a] text-white rounded text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#4b463f] transition-all shadow-md"
                >
                  Confirm Atelier Commission ({formattedSubtotal})
                </button>
              </form>
            ) : items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <span className="material-symbols-outlined text-[48px] text-[#cdc5bc]">chair</span>
                <p className="font-serif-display text-lg text-[#1b1c1a]">Your curated bag is empty</p>
                <p className="text-xs text-[#7c766e] max-w-xs mx-auto">
                  Explore our permanent collection or shoppable lookbooks to assemble your bespoke residence.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-4 py-2 bg-[#1b1c1a] text-white rounded text-xs uppercase tracking-wider font-semibold"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              items.map((cartItem, idx) => (
                <div
                  key={`${cartItem.item.id}-${cartItem.finish.id}-${idx}`}
                  className="p-3.5 bg-[#f5f3ef] rounded-xl flex gap-3.5 border border-[#cdc5bc]/30 relative"
                >
                  {/* Thumbnail */}
                  <img
                    src={cartItem.item.image}
                    alt={cartItem.item.name}
                    className="w-20 h-20 object-cover rounded-lg bg-[#efeeea] flex-shrink-0"
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-serif-display text-sm font-medium text-[#1b1c1a] truncate">
                          {cartItem.item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(idx)}
                          className="text-[#7c766e] hover:text-[#ba1a1a] p-0.5"
                          title="Remove item"
                        >
                          <span className="material-symbols-outlined text-[16px]">delete</span>
                        </button>
                      </div>

                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full border border-black/20"
                          style={{ backgroundColor: cartItem.finish.hex }}
                        />
                        <span className="text-[11px] text-[#4b463f] truncate">
                          {cartItem.finish.name} ({cartItem.finish.textureName})
                        </span>
                      </div>
                      <p className="text-[10px] text-[#7c766e] mt-0.5">
                        {cartItem.item.leadTime}
                      </p>
                    </div>

                    {/* Quantity & Price */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-[#cdc5bc] rounded bg-white overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(idx, cartItem.quantity - 1)}
                          className="px-2 py-0.5 text-xs text-[#1b1c1a] hover:bg-[#efeeea]"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-mono font-medium text-[#1b1c1a]">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(idx, cartItem.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-[#1b1c1a] hover:bg-[#efeeea]"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-mono text-xs font-semibold text-[#1b1c1a]">
                        ${(cartItem.item.price * cartItem.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Controls */}
          {items.length > 0 && !isCheckingOut && !checkoutComplete && (
            <div className="p-6 border-t border-[#cdc5bc]/40 bg-[#fbf9f5] space-y-3">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-[#7c766e]">
                  <span>Subtotal</span>
                  <span className="font-mono text-sm font-semibold text-[#1b1c1a]">
                    {formattedSubtotal}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#7c766e]">
                  <span>White-Glove Delivery</span>
                  <span className="text-[#7c5730] font-medium">Complimentary</span>
                </div>
              </div>

              {exportedSpec && (
                <div className="p-2 bg-[#eae8e4] text-[#1b1c1a] rounded text-[11px] text-center font-medium animate-fadeIn">
                  ✓ Architectural BIM / Spec Package (.PDF) generated &amp; downloaded
                </div>
              )}

              <button
                onClick={() => setIsCheckingOut(true)}
                className="w-full py-3.5 bg-[#1b1c1a] text-white rounded text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#4b463f] transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Proceed to Procurement</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>

              <button
                onClick={handleExportSpecs}
                className="w-full py-2 bg-[#efeeea] text-[#1b1c1a] rounded text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#eae8e4] transition-colors flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">file_download</span>
                Export BIM Spec Sheet (.CSV / .PDF)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
