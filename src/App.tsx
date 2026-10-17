/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CATALOG_ITEMS, CatalogItem, MaterialFinish } from './data/catalog';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuickInspectDrawer } from './components/QuickInspectDrawer';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ConsultationModal } from './components/ConsultationModal';
import { HomeView } from './views/HomeView';
import { CatalogView } from './views/CatalogView';
import { LookbooksView } from './views/LookbooksView';
import { PlannerView } from './views/PlannerView';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Initial cart with 2 pieces to match the badge "2" in header design
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      item: CATALOG_ITEMS[0], // Travertine table
      finish: CATALOG_ITEMS[0].finishes[0],
      quantity: 1,
    },
    {
      item: CATALOG_ITEMS[2], // Amber pendant
      finish: CATALOG_ITEMS[2].finishes[0],
      quantity: 1,
    },
  ]);

  // Initial wishlist with 3 pieces to match the badge "3" in header design
  const [wishlistItems, setWishlistItems] = useState<CatalogItem[]>([
    CATALOG_ITEMS[1], // Bouclé sectional
    CATALOG_ITEMS[3], // Kanso credenza
    CATALOG_ITEMS[4], // Kyoto chair
  ]);

  // Modals & Drawers
  const [inspectDrawerOpen, setInspectDrawerOpen] = useState(false);
  const [inspectItem, setInspectItem] = useState<CatalogItem | null>(null);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [wishlistDrawerOpen, setWishlistDrawerOpen] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.trim() && currentTab !== 'collections') {
      setCurrentTab('collections');
    }
  };

  const handleOpenQuickInspect = (item: CatalogItem) => {
    setInspectItem(item);
    setInspectDrawerOpen(true);
  };

  const handleCloseQuickInspect = () => {
    setInspectDrawerOpen(false);
  };

  const handleAddToCart = (item: CatalogItem, finish?: MaterialFinish) => {
    const selectedFinish = finish || item.finishes[0];
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (ci) => ci.item.id === item.id && ci.finish.id === selectedFinish.id
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      }
      return [...prev, { item, finish: selectedFinish, quantity: 1 }];
    });
  };

  const handleUpdateCartQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(index);
    } else {
      setCartItems((prev) => {
        const next = [...prev];
        next[index].quantity = newQty;
        return next;
      });
    }
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleToggleWishlist = (item: CatalogItem) => {
    setWishlistItems((prev) => {
      const exists = prev.some((w) => w.id === item.id);
      if (exists) {
        return prev.filter((w) => w.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const handleRemoveWishlistItem = (id: string) => {
    setWishlistItems((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f5] text-[#1b1c1a]">
      {/* Header */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        cartCount={cartItems.reduce((acc, c) => acc + c.quantity, 0)}
        wishlistCount={wishlistItems.length}
        onOpenCart={() => setCartDrawerOpen(true)}
        onOpenWishlist={() => setWishlistDrawerOpen(true)}
        onOpenConsultation={() => setConsultationModalOpen(true)}
        onSearchChange={handleSearchChange}
        searchQuery={searchQuery}
      />

      {/* Main Content Body */}
      <main className="flex-1 w-full pt-20 sm:pt-24 bg-[#fbf9f5]">
        {currentTab === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onQuickInspect={handleOpenQuickInspect}
            onAddToCart={(item) => handleAddToCart(item)}
            onOpenConsultation={() => setConsultationModalOpen(true)}
            items={CATALOG_ITEMS}
          />
        )}

        {currentTab === 'collections' && (
          <CatalogView
            items={CATALOG_ITEMS}
            onQuickInspect={handleOpenQuickInspect}
            onAddToCart={(item) => handleAddToCart(item)}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistItems.map((w) => w.id)}
            searchQuery={searchQuery}
          />
        )}

        {currentTab === 'lookbooks' && (
          <LookbooksView
            items={CATALOG_ITEMS}
            onQuickInspect={handleOpenQuickInspect}
            onAddToCart={(item) => handleAddToCart(item)}
            onOpenConsultation={() => setConsultationModalOpen(true)}
          />
        )}

        {currentTab === 'planner' && (
          <PlannerView
            items={CATALOG_ITEMS}
            onAddToCart={(item) => handleAddToCart(item)}
            onOpenConsultation={() => setConsultationModalOpen(true)}
          />
        )}
      </main>

      {/* Refined Architectural Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => setConsultationModalOpen(true)}
      />

      {/* Slide-out Quick Inspect Drawer (matches screenshot right-side panel) */}
      <QuickInspectDrawer
        isOpen={inspectDrawerOpen}
        item={inspectItem}
        onClose={handleCloseQuickInspect}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={inspectItem ? wishlistItems.some((w) => w.id === inspectItem.id) : false}
      />

      {/* Slide-out Curated Bag Drawer */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Slide-out Saved Wishlist Drawer */}
      <WishlistDrawer
        isOpen={wishlistDrawerOpen}
        onClose={() => setWishlistDrawerOpen(false)}
        items={wishlistItems}
        onRemoveItem={handleRemoveWishlistItem}
        onQuickInspect={handleOpenQuickInspect}
        onAddToCart={(item) => handleAddToCart(item)}
      />

      {/* Private Atelier Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
      />
    </div>
  );
}
