import React, { useState } from 'react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenConsultation: () => void;
  onSearchChange: (query: string) => void;
  searchQuery: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenConsultation,
  onSearchChange,
  searchQuery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [searchOpenMobile, setSearchOpenMobile] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'collections', label: 'Collections & Catalog' },
    { id: 'lookbooks', label: 'Shoppable Lookbooks' },
    { id: 'planner', label: '3D Space Planning' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#fbf9f5]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)] border-b border-[#cdc5bc]/30">
      {/* Announcement Bar */}
      {bannerVisible && (
        <div className="bg-[#eae8e4] py-1.5 px-4 sm:px-8 text-center relative flex items-center justify-center">
          <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4b463f] truncate pr-6 sm:pr-0">
            Complimentary White-Glove Delivery on Curated Collections • Book a Private Showroom Visit
          </p>
          <button
            onClick={() => setBannerVisible(false)}
            aria-label="Dismiss banner"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7c766e] hover:text-[#1b1c1a] p-1"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
      )}

      {/* Main Navigation Bar */}
      <div className="h-18 sm:h-20 max-w-[1536px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <button
          onClick={() => {
            onNavigate('home');
            setMobileMenuOpen(false);
          }}
          className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 text-left focus:outline-none"
        >
          <img
            alt="Maison Élément Wordmark Logo"
            className="h-7 sm:h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW5ATMprnAu0MjB8Cu5vuIZ2RoxhZ0rYysUrWcTIKOGrLlAGS2SXQHOVvYSGkFgy6sFHBKo4SZ8DmHdSxNdqeOc9JZusgCtw4ivOG_OV7bBuXAaibovFdzhntAvr6aqXonxeiLvlBUOPDHkMNuZwmgS_3Y7EW4acPgJKILek2RsZ8RvRUZi5zUD9LcxVXk5aDGd25OSh60DWcnU5Ias8qto5wS-FCs-5LS7OqqFBX8UfNVEjrelAMC"
            onError={(e) => {
              // Graceful SVG fallback if external link is inaccessible
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <span className="font-serif-display text-lg sm:text-xl font-medium tracking-tight text-[#1b1c1a] uppercase">
            Maison Élément
          </span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`px-3.5 py-2 rounded text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#efeeea] text-[#1b1c1a]'
                    : 'text-[#4b463f] hover:text-[#1b1c1a] hover:bg-[#f5f3ef]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Utility Actions (Search, Wishlist, Cart, Consultation, Profile, Hamburger) */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-shrink-0">
          {/* Desktop Search Bar */}
          <div className="hidden md:flex items-center bg-[#f5f3ef] rounded-lg px-3 py-1.5 focus-within:bg-[#efeeea] focus-within:ring-1 focus-within:ring-[#1b1c1a]/20 transition-all">
            <span className="material-symbols-outlined text-[#7c766e] text-[18px] mr-2 select-none">search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search pieces, materials..."
              className="bg-transparent border-0 outline-none text-xs text-[#1b1c1a] placeholder:text-[#7c766e] w-36 lg:w-48"
            />
            {searchQuery && (
              <button onClick={() => onSearchChange('')} className="text-[#7c766e] hover:text-[#1b1c1a]">
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>

          {/* Mobile Search Toggle */}
          <button
            onClick={() => setSearchOpenMobile(!searchOpenMobile)}
            aria-label="Toggle mobile search"
            className="md:hidden p-2 rounded text-[#4b463f] hover:text-[#1b1c1a] hover:bg-[#f5f3ef]"
          >
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>

          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            aria-label={`Saved Wishlist (${wishlistCount} items)`}
            className="relative p-2 rounded hover:bg-[#f5f3ef] text-[#4b463f] hover:text-[#1b1c1a] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">favorite</span>
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#1b1c1a] text-white text-[9px] font-semibold flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Bag Drawer Trigger */}
          <button
            onClick={onOpenCart}
            aria-label={`Cart Bag Drawer (${cartCount} items)`}
            className="relative p-2 rounded hover:bg-[#f5f3ef] text-[#4b463f] hover:text-[#1b1c1a] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#1b1c1a] text-white text-[9px] font-semibold flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          {/* Consultation Button */}
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center justify-center bg-[#1b1c1a] text-white px-4 py-2.5 rounded text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#4b463f] transition-all duration-200 whitespace-nowrap"
          >
            Book Consultation
          </button>

          {/* Profile Avatar */}
          <div className="hidden sm:flex items-center pl-1">
            <img
              alt="Client Profile Avatar"
              className="w-8 h-8 rounded-full object-cover shadow-[0_1px_4px_rgba(0,0,0,0.08)] border border-[#cdc5bc]/40"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9lyPF1NsH_Cu8khBq9xaCaukq1hrT9IT59DnVBPSkFdMWeCsfy4aQwewdGJ2PRo7njmsC6_Ugthgw0sTrVPwmS0n35PUBzNthqpYIu8mvr7aZ_psMDUGRd661a5V4UMO2aLuBzI4UvyasY_sc6I8VwkYnMefarY-lc74dhi3B_t9JdDGzUezBa29BasbrLF23-ogya-Oz70G0xqddUcFrWpDe2SVff8s5MYfC-30qWBRn_SdWN9eb"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="xl:hidden p-2 rounded text-[#4b463f] hover:text-[#1b1c1a] hover:bg-[#f5f3ef]"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Search Overlay Bar */}
      {searchOpenMobile && (
        <div className="md:hidden px-4 py-2 bg-[#f5f3ef] border-t border-[#cdc5bc]/30 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#7c766e] text-[18px]">search</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search pieces, materials, finish..."
            className="bg-transparent border-0 outline-none text-xs text-[#1b1c1a] placeholder:text-[#7c766e] w-full py-1"
            autoFocus
          />
          {searchQuery && (
            <button onClick={() => onSearchChange('')} className="text-[#7c766e] p-1">
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          )}
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-full bg-[#fbf9f5] border-b border-[#cdc5bc] shadow-xl py-6 px-6 space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded text-sm font-semibold uppercase tracking-[0.12em] transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#efeeea] text-[#1b1c1a]'
                      : 'text-[#4b463f] hover:bg-[#f5f3ef] hover:text-[#1b1c1a]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="material-symbols-outlined text-[16px]">check</span>}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#cdc5bc]/40 space-y-2">
            <button
              onClick={() => {
                onOpenConsultation();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-[#1b1c1a] text-white rounded text-xs font-semibold uppercase tracking-[0.12em] flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              Book Consultation
            </button>
            <div className="flex items-center justify-between px-2 pt-2 text-xs text-[#4b463f]">
              <span>Curated Showrooms</span>
              <span className="font-medium text-[#1b1c1a]">Paris • Copenhagen • New York</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
