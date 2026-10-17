import React from 'react';
import { CatalogItem } from '../data/catalog';

interface HomeViewProps {
  onNavigate: (tab: string) => void;
  onQuickInspect: (item: CatalogItem) => void;
  onAddToCart: (item: CatalogItem) => void;
  onOpenConsultation: () => void;
  items: CatalogItem[];
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onQuickInspect,
  onAddToCart,
  onOpenConsultation,
  items,
}) => {
  const travertineTable = items.find((i) => i.id === 'travertine-table') || items[0];
  const boucleSectional = items.find((i) => i.id === 'boucle-sectional') || items[1];
  const amberPendant = items.find((i) => i.id === 'amber-pendant') || items[2];
  const kansoCredenza = items.find((i) => i.id === 'kanso-credenza') || items[3];
  const kyotoChair = items.find((i) => i.id === 'kyoto-lounge-chair') || items[4];
  const sunkenTable = items.find((i) => i.id === 'sunken-living-table') || travertineTable;
  const executiveDesk = items.find((i) => i.id === 'executive-travertine-desk') || travertineTable;

  return (
    <div className="flex flex-col w-full">
      {/* =========================================================================
          Section 1: Editorial Hero Section
      ========================================================================== */}
      <section className="relative w-full px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-16 lg:py-20 overflow-hidden">
        <div className="max-w-[1536px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6 z-10">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7c5730]"></span>
              <span className="text-xs font-semibold uppercase text-[#7c5730] tracking-[0.14em]">
                The 2025 Permanent Collection
              </span>
            </div>

            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-7xl font-normal text-[#1b1c1a] tracking-tight max-w-2xl leading-[1.08]">
              Atmospheres of <span className="italic font-light">Quiet Grandeur</span>
            </h1>

            <p className="text-base sm:text-lg text-[#4b463f] max-w-xl font-light leading-relaxed">
              Sculptural calm meticulously formed from raw travertine, smoked oak, and hand-loomed raw linen. Built for architectural living, preserved as timeless heirlooms.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('collections')}
                className="px-6 py-3.5 bg-[#1b1c1a] text-white rounded text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#4b463f] transition-all duration-300 shadow-md"
              >
                Explore Collections
              </button>
              <button
                onClick={() => onNavigate('planner')}
                className="px-6 py-3.5 bg-[#efeeea] text-[#1b1c1a] rounded text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#eae8e4] transition-all duration-300 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">view_in_ar</span>
                Book 3D Room Planning
              </button>
            </div>

            {/* Curated Stats Mosaic */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 mt-2 bg-[#f5f3ef] p-5 sm:p-6 rounded-xl shadow-sm border border-[#cdc5bc]/30">
              <div className="space-y-1">
                <span className="font-serif-display text-2xl sm:text-3xl font-medium text-[#1b1c1a] block">
                  42
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase text-[#7c766e] tracking-wider block">
                  Curated Master Artisans
                </span>
              </div>
              <div className="space-y-1">
                <span className="font-serif-display text-2xl sm:text-3xl font-medium text-[#1b1c1a] block">
                  100%
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase text-[#7c766e] tracking-wider block">
                  Bespoke Made-to-Order
                </span>
              </div>
              <div className="space-y-1">
                <span className="font-serif-display text-2xl sm:text-3xl font-medium text-[#1b1c1a] block">
                  Neutral
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase text-[#7c766e] tracking-wider block">
                  Oak &amp; Travertine Provenance
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Composition */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative w-full aspect-[4/5] bg-[#efeeea] rounded-xl overflow-hidden shadow-xl border border-[#cdc5bc]/30 group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3_AFmroK69dJxCBXhc-OF5RRynOtL2W5DPtgPI85pQSVa4zlS6_b-1dhTYJPQDLiExJtGJOxNiulCaS6lJDWRPzReehOZY51ia8artiKkP3eLfOKWM9Y-K6c--jDx5WrTJgdLAJzBskPD245CmXp1oSvB8DeHIq9SIkE-sAD_Yopv6bCMpuNGNozygrgAgWWd4tAOQBsg-2ux-50-SwJhdtMNDeO2PcD0yXzSwwcgQ_Rhfs-2tVFi"
                alt="The Valbonne Salon Suite Japandi minimalism"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Card Footer Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#fbf9f5]/90 backdrop-blur-md rounded-lg shadow-lg flex items-center justify-between border border-[#cdc5bc]/30">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#7c766e]">
                    Featured Ensemble
                  </p>
                  <p className="font-serif-display text-lg sm:text-xl text-[#1b1c1a] font-medium">
                    The Valbonne Salon Suite
                  </p>
                </div>
                <button
                  onClick={() => onQuickInspect(boucleSectional)}
                  className="text-[10px] font-semibold uppercase px-3 py-1.5 rounded bg-[#efeeea] text-[#1b1c1a] hover:bg-[#eae8e4] transition-colors"
                >
                  No. 018 / Edition
                </button>
              </div>
            </div>

            {/* Overlapping Floating Materiality Vignette Card */}
            <div className="hidden sm:flex absolute -bottom-8 -left-8 p-3.5 bg-[#fbf9f5] rounded-lg shadow-xl w-64 items-center gap-3.5 z-20 border border-[#cdc5bc]/40">
              <div className="w-12 h-12 rounded bg-[#eae8e4] overflow-hidden flex-shrink-0">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgs8qTib5z6N0YWuJd9TN8aF3klPnptvpQjEG2PZOMriuOa7k7aEh_Pdfny8A2svprClju-Xew9t7XdmfpQfxw6eyDNoG6fwGbf5mrPWEeVvjs-K7YfmwVhcdHUyA-RbgRt4b6Ld7WVPDCLHBZFPsrakDDPCkmyXTjAH_7_YJnYNf20Uhe9psrx5QmGVkYy0QXfnzF6wxApY37irEN3nPaCcMjA-MSdmMT3BEUz7OndCOvS79HM2UX"
                  alt="Roman Travertine and Smoked Walnut Texture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-0.5 min-w-0">
                <span className="text-[10px] font-semibold uppercase text-[#7c5730] tracking-wider block">
                  Materiality
                </span>
                <p className="text-xs text-[#1b1c1a] font-medium leading-tight truncate">
                  Roman Travertine &amp; Smoked Walnut
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          Section 2: Curated Spaces & Seasonal Concepts (Architectural Volumes)
      ========================================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 bg-[#f5f3ef] border-y border-[#cdc5bc]/30">
        <div className="max-w-[1536px] mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <span className="text-xs font-semibold uppercase text-[#7c766e] tracking-[0.14em]">
                Architectural Volumes
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1b1c1a]">
                Curated Spaces &amp; Concepts
              </h2>
            </div>
            <p className="text-sm text-[#4b463f] max-w-md font-light leading-relaxed">
              Explore complete spatial narratives thoughtfully assembled for tactile repose, acoustic quietude, and refined proportion.
            </p>
          </div>

          {/* 4 Interactive Mood Tiles Bento */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {/* Tile 1: Sunken Living Room (7 col) */}
            <div className="lg:col-span-7 group relative bg-[#fbf9f5] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 aspect-[16/10] md:aspect-[16/11]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa3PmkF1T21zpp0mXPCRGhTObZE7rjaNCxBiQ6VD9M96px_1DEN-Z6eY9XBSGvwfh3OA9sqwPSFrDVAJGtGgcEoJOFaBxhZCuhipuOb483wCwW_grihZCb_E9Zno5XD7trCWfEqm1_68HKPFwUx8J8igk2rXU438VzVmrvOxnZQ4q8FFp0JdI3S2o4U_o94FSbDxG9Vovh2FuuUQHsAtAvLsuZe9c4Pqw860uclFlDbEXI8apEC9UM"
                alt="The Sunken Living Room"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ffdcbd] block">
                    Concept 01
                  </span>
                  <h3 className="font-serif-display text-2xl font-normal text-white">
                    The Sunken Living Room
                  </h3>
                  <p className="text-xs text-white/80 mt-1">
                    Warm Italian wool bouclé • Smoked walnut base • Low horizontal axis
                  </p>
                </div>
                <button
                  onClick={() => onQuickInspect(sunkenTable)}
                  className="px-4 py-2 bg-white/95 text-[#1b1c1a] rounded text-xs font-semibold uppercase tracking-wider backdrop-blur hover:bg-white transition-colors flex items-center gap-1 self-start sm:self-auto flex-shrink-0"
                >
                  <span>View Ensemble</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Tile 2: Minimalist Dining (5 col) */}
            <div className="lg:col-span-5 group relative bg-[#fbf9f5] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 aspect-[16/10] md:aspect-[16/11]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh29K_ZInryhlioJO9UG_R1IeXfvZHdL08pnp8CH25EBoEL1OuTB-k6B3qySySosMwSmqIG8MCEuxfjhpZ6a5rZfgaX-IZuA2dltt6iGwhMZ5cx0B99NkFB8CddWLYs58WCvqtL8BQzaLhQ3FRYl2PMSE74XQdfzFM4R2j_1fApWDWuIYsZ_UXnylEw1NrNpRKg3M2DiAx4m6ZfmwxwKH5mXcj3ZECpiYRIULbfsHSid1yKBG6X8zP"
                alt="Minimalist Dining"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col justify-end">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ffdcbd] block">
                  Concept 02
                </span>
                <h3 className="font-serif-display text-2xl font-normal text-white">
                  Minimalist Dining
                </h3>
                <p className="text-xs text-white/80 mt-1">
                  Honed limestone table • Sculptured ash chairs
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[11px] text-white/70">
                    8-12 Person Configurations Available
                  </span>
                  <button
                    onClick={() => onNavigate('collections')}
                    className="text-xs text-[#ffdcbd] font-medium hover:underline flex items-center gap-1"
                  >
                    Catalog Details →
                  </button>
                </div>
              </div>
            </div>

            {/* Tile 3: Serene Sanctuary (5 col) */}
            <div className="lg:col-span-5 group relative bg-[#fbf9f5] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 aspect-[16/10] md:aspect-[16/11]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwvvuFkXpeybuDgI5iQWEGc2TPSFIeYHx9GzPhMjsoV5bH6U8lDjLiYc9-cAUK_yL7P4DKS5JOHpoZ_B0lEKmmb4GnzTTFNLPwk9XSlHFT7RIOq5R714iXavveVg__we0I7jKp_PhXSJlkCX7qgGbW-GpUUeGYVtcHxgyGsC289A5UETOzv3RovP9ko555yJyYartv94MRzz6a6NX2pEaW_9Omo8_ZmhT7oKbEaC0HGAMt19Udz3tz"
                alt="Serene Sanctuary Bedroom"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col justify-end">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ffdcbd] block">
                  Concept 03
                </span>
                <h3 className="font-serif-display text-2xl font-normal text-white">
                  Serene Sanctuary
                </h3>
                <p className="text-xs text-white/80 mt-1">
                  Washed Belgian linen • Aged brass architectural sconces
                </p>
              </div>
            </div>

            {/* Tile 4: Executive Study (7 col) */}
            <div className="lg:col-span-7 group relative bg-[#fbf9f5] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 aspect-[16/10] md:aspect-[16/11]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaIhMotFlBaIYc2wrt-iYXK4GUNYhTrteEBz4_IWZXHYQVDPooHxzqtyJbiAJuYlFvrMtxMffysBqitE2Z-quNa6xLvx3EOWsPaV9qj61djl2siSs4CrQKt1-Ld6iRGQtzdCwsZYPyuBYC48DvHKommS14RpBMX20HZXZ0nCt-rWewYu0xl9gquE1_cQKhmsW1ZjjBleloV0CbY-qk7OFN1lDnUbEdCtnW-08yDsyXe4CB1RHBl9Cq"
                alt="Executive Study"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ffdcbd] block">
                    Concept 04
                  </span>
                  <h3 className="font-serif-display text-2xl font-normal text-white">
                    Executive Study
                  </h3>
                  <p className="text-xs text-white/80 mt-1">
                    Saddle leather • Monolithic raw travertine desk • Acoustic felt panels
                  </p>
                </div>
                <button
                  onClick={() => onQuickInspect(executiveDesk)}
                  className="px-4 py-2 bg-white/95 text-[#1b1c1a] rounded text-xs font-semibold uppercase tracking-wider backdrop-blur hover:bg-white transition-colors flex items-center gap-1 self-start sm:self-auto flex-shrink-0"
                >
                  <span>View Ensemble</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          Section 3: Featured Designer Spotlight
      ========================================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-24 bg-[#fbf9f5]">
        <div className="max-w-[1536px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Portrait & Context Column */}
          <div className="lg:col-span-5 relative space-y-4">
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg bg-[#efeeea] border border-[#cdc5bc]/40">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV1AxJmJ48D05_LdxKXYYP4hIcEUl_kN-XOfBPP2SbrLpwi7_QxArI-YjNn48nIBsrdUOQGG6nk_5ItR-JqjoCVpoh40zBeF3SO4O3C4vSqtiYhKjrGr6WFhTCufBaWaDnnTbn7pEUbQS-TAo170RtQOwKIUArieHsP-FxCAWgbumrzEzQkB2JGchUe-d1k_SIovlycoQklCY0gfUqk1XlmeFhwDXihhHK2Atui20DNJN_728g_4oZ"
                alt="Lead Designer Soren Lindqvist in Copenhagen atelier"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#eae8e4] p-5 rounded-xl space-y-1.5 border border-[#cdc5bc]/30">
              <span className="text-[11px] font-semibold uppercase text-[#7c5730] tracking-[0.14em] block">
                Master Collaboration
              </span>
              <p className="font-serif-display text-lg sm:text-xl text-[#1b1c1a] font-medium">
                Soren Lindqvist • Copenhagen
              </p>
              <p className="text-xs text-[#4b463f]">
                In partnership with the Gotland Stone Quarry and historic Veneto looms.
              </p>
            </div>
          </div>

          {/* Story & Signature Pieces Column */}
          <div className="lg:col-span-7 space-y-8 lg:pl-6">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase text-[#7c766e] tracking-[0.14em]">
                Designer Manifesto
              </span>
              <blockquote className="font-serif-display text-2xl sm:text-3xl lg:text-4xl text-[#1b1c1a] leading-snug">
                “We do not seek to fill space; we invite silence into form. A piece of furniture achieves its ultimate expression when its presence deepens the quiet of the room.”
              </blockquote>
              <p className="text-sm sm:text-base text-[#4b463f] max-w-xl font-light leading-relaxed">
                Drawing equally from 17th-century Japanese sukiya-style carpentry and Danish mid-century restraint, our collaboration yields objects that age gracefully alongside the architectures they inhabit.
              </p>
            </div>

            {/* Signature Pieces Showcase */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1b1c1a]">
                  Signature Limited Works
                </h4>
                <button
                  onClick={() => onNavigate('collections')}
                  className="text-xs font-semibold uppercase text-[#7c5730] hover:underline"
                >
                  View All Works →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Piece 1: Kanso Credenza */}
                <div className="bg-[#f5f3ef] p-4 rounded-xl space-y-3 shadow-sm group border border-[#cdc5bc]/30">
                  <div
                    className="relative aspect-square bg-[#efeeea] rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => onQuickInspect(kansoCredenza)}
                  >
                    <img
                      src={kansoCredenza.image}
                      alt={kansoCredenza.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-[#fbf9f5]/90 backdrop-blur text-[10px] uppercase font-semibold px-2 py-0.5 rounded text-[#1b1c1a]">
                      Edition of 40
                    </span>
                  </div>
                  <div className="flex items-start justify-between pt-1">
                    <div>
                      <h5
                        onClick={() => onQuickInspect(kansoCredenza)}
                        className="font-serif-display text-lg font-medium text-[#1b1c1a] cursor-pointer hover:underline"
                      >
                        {kansoCredenza.name}
                      </h5>
                      <p className="text-[11px] text-[#7c766e]">
                        {kansoCredenza.dimensions}
                      </p>
                    </div>
                    <span className="font-serif-display text-lg font-medium text-[#1b1c1a]">
                      {kansoCredenza.formattedPrice}
                    </span>
                  </div>
                  <button
                    onClick={() => onAddToCart(kansoCredenza)}
                    className="w-full py-2 bg-[#1b1c1a] text-white rounded text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#4b463f] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-[16px]">add</span>
                    Quick Add
                  </button>
                </div>

                {/* Piece 2: Kyoto Lounge Chair */}
                <div className="bg-[#f5f3ef] p-4 rounded-xl space-y-3 shadow-sm group border border-[#cdc5bc]/30">
                  <div
                    className="relative aspect-square bg-[#efeeea] rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => onQuickInspect(kyotoChair)}
                  >
                    <img
                      src={kyotoChair.image}
                      alt={kyotoChair.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-[#fbf9f5]/90 backdrop-blur text-[10px] uppercase font-semibold px-2 py-0.5 rounded text-[#1b1c1a]">
                      Hand-numbered
                    </span>
                  </div>
                  <div className="flex items-start justify-between pt-1">
                    <div>
                      <h5
                        onClick={() => onQuickInspect(kyotoChair)}
                        className="font-serif-display text-lg font-medium text-[#1b1c1a] cursor-pointer hover:underline"
                      >
                        {kyotoChair.name}
                      </h5>
                      <p className="text-[11px] text-[#7c766e]">
                        {kyotoChair.dimensions}
                      </p>
                    </div>
                    <span className="font-serif-display text-lg font-medium text-[#1b1c1a]">
                      {kyotoChair.formattedPrice}
                    </span>
                  </div>
                  <button
                    onClick={() => onAddToCart(kyotoChair)}
                    className="w-full py-2 bg-[#1b1c1a] text-white rounded text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#4b463f] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-[16px]">add</span>
                    Quick Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          Section 4: Shoppable Room Teaser with Interactive Hotspot Pins
      ========================================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 bg-[#f5f3ef] border-y border-[#cdc5bc]/30 overflow-hidden">
        <div className="max-w-[1536px] mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase text-[#7c5730] tracking-[0.14em]">
                Interactive Lookbook
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1b1c1a] mt-1">
                The Highgate Residence Salon
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#4b463f] max-w-sm font-light leading-relaxed">
              Select any pinned coordinate to inspect dimensions, provenance, and configure material finishes in real-time.
            </p>
          </div>

          {/* Room Canvas Container with Hotspots */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#eae8e4] rounded-xl overflow-hidden shadow-2xl border border-[#cdc5bc]/40">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa09IZcMceahocRvQ--SZbWgMvjXRQGV4VQkEF15YffiNHT6PeU5pxjERwSCzNLeqP5bBzRAnsdjTbQTQCI4LYE7-k_MQVoyNWjr5E85j9HVD08K3ADUvO03H3yxeZhAYos9V4DxUB5-r4mcGYdj_dDMbex25fxVkVTaeGy3NR50ztMzIJvUNd_q48lNxcdspkZdk05VPC3hdgShUjA_1U0d1oUTCKA21RAs72P_qnFzFGkm4YFvkd"
              alt="Highgate Residence Salon interior"
              className="w-full h-full object-cover"
            />

            {/* Hotspot A: Cocktail Table */}
            <div className="absolute top-[68%] left-[48%] -translate-x-1/2 -translate-y-1/2 z-20 group">
              <button
                onClick={() => onQuickInspect(travertineTable)}
                aria-label="Inspect Travertine Table"
                className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#fbf9f5] text-[#1b1c1a] text-xs sm:text-sm font-bold shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
              >
                <span className="relative z-10">A</span>
                <span className="absolute inset-0 rounded-full bg-[#7c5730]/40 animate-ping" />
              </button>

              {/* Hover Popover Micro-card */}
              <div className="absolute bottom-11 sm:bottom-12 left-1/2 -translate-x-1/2 w-60 sm:w-64 p-3.5 bg-[#fbf9f5]/95 backdrop-blur-xl rounded-lg shadow-2xl pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-[#cdc5bc]/40 z-30">
                <span className="text-[10px] font-semibold uppercase text-[#7c5730] block">Spotlight A</span>
                <p className="font-serif-display text-sm sm:text-base font-medium text-[#1b1c1a] leading-tight">
                  Honed Travertine Cocktail Table
                </p>
                <p className="text-xs text-[#4b463f] mt-0.5">$2,840 • Roman Unfilled</p>
                <button
                  onClick={() => onQuickInspect(travertineTable)}
                  className="mt-2.5 w-full py-1.5 bg-[#1b1c1a] text-white rounded text-[11px] uppercase tracking-wider font-semibold hover:bg-[#4b463f]"
                >
                  Quick Inspect
                </button>
              </div>
            </div>

            {/* Hotspot B: Sectional */}
            <div className="absolute top-[52%] left-[26%] -translate-x-1/2 -translate-y-1/2 z-20 group">
              <button
                onClick={() => onQuickInspect(boucleSectional)}
                aria-label="Inspect Cloud Bouclé Sectional"
                className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#fbf9f5] text-[#1b1c1a] text-xs sm:text-sm font-bold shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
              >
                <span className="relative z-10">B</span>
                <span className="absolute inset-0 rounded-full bg-[#7c5730]/40 animate-ping" />
              </button>

              <div className="absolute bottom-11 sm:bottom-12 left-1/2 -translate-x-1/2 w-60 sm:w-64 p-3.5 bg-[#fbf9f5]/95 backdrop-blur-xl rounded-lg shadow-2xl pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-[#cdc5bc]/40 z-30">
                <span className="text-[10px] font-semibold uppercase text-[#7c5730] block">Spotlight B</span>
                <p className="font-serif-display text-sm sm:text-base font-medium text-[#1b1c1a] leading-tight">
                  Cloud Wool Bouclé Sectional
                </p>
                <p className="text-xs text-[#4b463f] mt-0.5">$6,200 • 4 Modular Segments</p>
                <button
                  onClick={() => onQuickInspect(boucleSectional)}
                  className="mt-2.5 w-full py-1.5 bg-[#1b1c1a] text-white rounded text-[11px] uppercase tracking-wider font-semibold hover:bg-[#4b463f]"
                >
                  Quick Inspect
                </button>
              </div>
            </div>

            {/* Hotspot C: Pendant */}
            <div className="absolute top-[28%] left-[64%] -translate-x-1/2 -translate-y-1/2 z-20 group">
              <button
                onClick={() => onQuickInspect(amberPendant)}
                aria-label="Inspect Hand-blown Amber Pendant"
                className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#fbf9f5] text-[#1b1c1a] text-xs sm:text-sm font-bold shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
              >
                <span className="relative z-10">C</span>
                <span className="absolute inset-0 rounded-full bg-[#7c5730]/40 animate-ping" />
              </button>

              <div className="absolute bottom-11 sm:bottom-12 left-1/2 -translate-x-1/2 w-60 sm:w-64 p-3.5 bg-[#fbf9f5]/95 backdrop-blur-xl rounded-lg shadow-2xl pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-[#cdc5bc]/40 z-30">
                <span className="text-[10px] font-semibold uppercase text-[#7c5730] block">Spotlight C</span>
                <p className="font-serif-display text-sm sm:text-base font-medium text-[#1b1c1a] leading-tight">
                  Hand-blown Amber Pendant
                </p>
                <p className="text-xs text-[#4b463f] mt-0.5">$890 • Murano Glass &amp; Brass</p>
                <button
                  onClick={() => onQuickInspect(amberPendant)}
                  className="mt-2.5 w-full py-1.5 bg-[#1b1c1a] text-white rounded text-[11px] uppercase tracking-wider font-semibold hover:bg-[#4b463f]"
                >
                  Quick Inspect
                </button>
              </div>
            </div>
          </div>

          {/* Quick Item Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div
              onClick={() => onQuickInspect(travertineTable)}
              className="p-4 bg-[#fbf9f5] rounded-lg flex items-center justify-between shadow-sm cursor-pointer hover:bg-white transition-all border border-[#cdc5bc]/30 group"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#efeeea] flex items-center justify-center text-xs font-bold text-[#1b1c1a]">
                  A
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1b1c1a]">
                    Travertine Cocktail Table
                  </p>
                  <p className="text-[11px] text-[#7c766e]">
                    $2,840 • Lead Time: 4 Weeks
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#7c766e] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>

            <div
              onClick={() => onQuickInspect(boucleSectional)}
              className="p-4 bg-[#fbf9f5] rounded-lg flex items-center justify-between shadow-sm cursor-pointer hover:bg-white transition-all border border-[#cdc5bc]/30 group"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#efeeea] flex items-center justify-center text-xs font-bold text-[#1b1c1a]">
                  B
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1b1c1a]">
                    Cloud Wool Bouclé Sectional
                  </p>
                  <p className="text-[11px] text-[#7c766e]">
                    $6,200 • In Stock Tribeca
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#7c766e] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>

            <div
              onClick={() => onQuickInspect(amberPendant)}
              className="p-4 bg-[#fbf9f5] rounded-lg flex items-center justify-between shadow-sm cursor-pointer hover:bg-white transition-all border border-[#cdc5bc]/30 group"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#efeeea] flex items-center justify-center text-xs font-bold text-[#1b1c1a]">
                  C
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1b1c1a]">
                    Hand-blown Amber Pendant
                  </p>
                  <p className="text-[11px] text-[#7c766e]">
                    $890 • Murano Glass
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#7c766e] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          Section 5: Bespoke 3D Spatial Planning & Custom Curation
      ========================================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-24 bg-[#fbf9f5]">
        <div className="max-w-[1536px] mx-auto bg-[#eae8e4] rounded-xl p-6 sm:p-10 lg:p-14 relative overflow-hidden border border-[#cdc5bc]/40">
          {/* Faint decorative background architectural grid SVG */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="arch-grid-home" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#7c766e" strokeWidth="0.75" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#arch-grid-home)" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="material-symbols-outlined text-[#7c5730] text-[20px]">architecture</span>
                <span className="text-xs font-semibold uppercase text-[#7c5730] tracking-[0.14em]">
                  Private Architectural Service
                </span>
              </div>

              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1b1c1a]">
                Bespoke 3D Spatial Planning &amp; Custom Curation
              </h2>

              <p className="text-base sm:text-lg text-[#4b463f] max-w-xl font-light leading-relaxed">
                Entrust your floor plans to our Copenhagen &amp; Paris design ateliers. We produce parametric 3D walkthroughs, custom timber joinery, and tailored materiality schemes for bespoke residences worldwide.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#fbf9f5]/85 backdrop-blur p-4 rounded-lg border border-[#cdc5bc]/40">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1b1c1a]">
                    BIM / CAD Integration
                  </p>
                  <p className="text-xs text-[#4b463f] mt-1 font-light">
                    Direct Revit, Archicad, and Rhino files formatted for immediate procurement.
                  </p>
                </div>
                <div className="bg-[#fbf9f5]/85 backdrop-blur p-4 rounded-lg border border-[#cdc5bc]/40">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1b1c1a]">
                    Material Swatch Casket
                  </p>
                  <p className="text-xs text-[#4b463f] mt-1 font-light">
                    Delivered to your studio within 48 hours: 12 honed stone, raw timber, and wool swatches.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1b1c1a] text-white rounded text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#4b463f] transition-colors shadow-md"
                >
                  <span>Request Atelier Consultation</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Right Side: Testimonials Mosaic */}
            <div className="lg:col-span-5 space-y-4 mt-6 lg:mt-0">
              <div className="bg-[#fbf9f5] p-5 sm:p-6 rounded-xl shadow-md space-y-3 border border-[#cdc5bc]/30">
                <div className="flex items-center gap-1 text-[#7c5730]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[18px] fill-1">star</span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#1b1c1a] italic leading-relaxed font-light">
                  “Maison Élément transformed our Cap d&apos;Antibes villa project. The balance of warm limestone and proportioned seating created pure serenity.”
                </p>
                <div>
                  <p className="text-xs font-semibold uppercase text-[#1b1c1a] tracking-wider">
                    Camille Desrosiers
                  </p>
                  <p className="text-[11px] text-[#7c766e]">
                    Principal Architect, Studio Desrosiers Paris • AD100
                  </p>
                </div>
              </div>

              <div className="bg-[#fbf9f5] p-5 sm:p-6 rounded-xl shadow-md space-y-3 border border-[#cdc5bc]/30">
                <div className="flex items-center gap-1 text-[#7c5730]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[18px] fill-1">star</span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#1b1c1a] italic leading-relaxed font-light">
                  “The precision of their custom smoked oak sizing and white-glove arrival made procurement completely effortless for our Tribeca loft.”
                </p>
                <div>
                  <p className="text-xs font-semibold uppercase text-[#1b1c1a] tracking-wider">
                    David K. Thorne
                  </p>
                  <p className="text-[11px] text-[#7c766e]">
                    Partner, Thorne &amp; Cross Architecture, New York
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          Section 6: Press Quotes & Curatorial Recognition
      ========================================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-20 bg-[#f5f3ef] border-t border-[#cdc5bc]/30">
        <div className="max-w-[1536px] mx-auto space-y-8">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7c766e]">
              Atelier Critical Acclaim
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-center">
            <div className="space-y-3 p-4">
              <p className="font-serif-display text-xl sm:text-2xl tracking-tight uppercase text-[#1b1c1a]">
                Architectural Digest
              </p>
              <p className="text-sm text-[#4b463f] italic max-w-xs mx-auto font-light leading-relaxed">
                “Maison Élément represents the gold standard of contemporary tactile minimalism.”
              </p>
              <span className="text-[11px] font-semibold uppercase text-[#7c5730] tracking-wider block">
                Design Excellence Awards 2024
              </span>
            </div>

            <div className="space-y-3 p-4">
              <p className="font-serif-display text-xl sm:text-2xl tracking-tight uppercase text-[#1b1c1a]">
                Wallpaper*
              </p>
              <p className="text-sm text-[#4b463f] italic max-w-xs mx-auto font-light leading-relaxed">
                “A masterclass in restraint. Objects sculpted to calm the mind and ground the home.”
              </p>
              <span className="text-[11px] font-semibold uppercase text-[#7c5730] tracking-wider block">
                Best Interior Heirlooms
              </span>
            </div>

            <div className="space-y-3 p-4">
              <p className="font-serif-display text-xl sm:text-2xl tracking-tight uppercase text-[#1b1c1a]">
                Elle Decor
              </p>
              <p className="text-sm text-[#4b463f] italic max-w-xs mx-auto font-light leading-relaxed">
                “The serene convergence of Nordic functionalism and Japanese wabi-sabi philosophy.”
              </p>
              <span className="text-[11px] font-semibold uppercase text-[#7c5730] tracking-wider block">
                International Salon Selection
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
