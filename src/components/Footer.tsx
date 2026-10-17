import React, { useState } from 'react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="w-full bg-[#f5f3ef] text-[#1b1c1a] pt-16 sm:pt-24 pb-12 border-t border-[#cdc5bc]/40">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-4 flex flex-col justify-between pr-0 lg:pr-8 space-y-6">
            <div className="space-y-4">
              <span className="font-serif-display text-xl sm:text-2xl tracking-tight uppercase text-[#1b1c1a] block font-medium">
                Maison Élément
              </span>
              <p className="text-sm text-[#4b463f] max-w-sm leading-relaxed font-light">
                A curated sanctuary where Nordic quietude meets Japandi architectural poise. We design bespoke heirlooms sculpted from honed travertine, smoked oak, and natural linen.
              </p>
            </div>

            <div className="pt-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7c766e] mb-2.5">
                Private Atelier Newsletter
              </p>
              {subscribed ? (
                <div className="p-2.5 bg-[#eae8e4] text-[#1b1c1a] rounded text-xs font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#7c5730]">check_circle</span>
                  <span>Enrolled in Private Atelier Correspondence.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your correspondence email"
                    className="w-full bg-[#efeeea] px-3.5 py-2.5 rounded text-xs text-[#1b1c1a] placeholder:text-[#7c766e] outline-none focus:ring-1 focus:ring-[#1b1c1a] border border-[#cdc5bc]/50"
                  />
                  <button
                    type="submit"
                    className="bg-[#1b1c1a] text-white text-xs font-semibold uppercase tracking-[0.12em] px-4 py-2.5 rounded hover:bg-[#4b463f] transition-colors flex-shrink-0"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Showrooms & Salons */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7c766e]">
              Showrooms &amp; Salons
            </h4>
            <div className="space-y-3.5 text-xs text-[#4b463f]">
              <div>
                <p className="font-medium text-[#1b1c1a]">Paris — Le Marais</p>
                <p className="font-light text-[#7c766e]">28 Rue de Turenne, 75003 Paris</p>
              </div>
              <div>
                <p className="font-medium text-[#1b1c1a]">Copenhagen — Indre By</p>
                <p className="font-light text-[#7c766e]">Bredgade 34, 1260 København</p>
              </div>
              <div>
                <p className="font-medium text-[#1b1c1a]">New York — Tribeca</p>
                <p className="font-light text-[#7c766e]">178 Franklin Street, NY 10013</p>
              </div>
            </div>
          </div>

          {/* Atelier Curations */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7c766e]">
              Atelier Curations
            </h4>
            <ul className="space-y-2 text-xs text-[#4b463f]">
              <li>
                <button
                  onClick={() => onNavigate('collections')}
                  className="hover:text-[#1b1c1a] transition-colors text-left"
                >
                  Living Sanctuaries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collections')}
                  className="hover:text-[#1b1c1a] transition-colors text-left"
                >
                  Dining Architecture
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collections')}
                  className="hover:text-[#1b1c1a] transition-colors text-left"
                >
                  Sculptural Lighting
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collections')}
                  className="hover:text-[#1b1c1a] transition-colors text-left"
                >
                  Raw Material Finishes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('lookbooks')}
                  className="hover:text-[#1b1c1a] transition-colors text-left"
                >
                  Curated Objects
                </button>
              </li>
            </ul>
          </div>

          {/* Architectural Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7c766e]">
              Architectural Services
            </h4>
            <ul className="space-y-2 text-xs text-[#4b463f]">
              <li>
                <button
                  onClick={() => onNavigate('planner')}
                  className="hover:text-[#1b1c1a] transition-colors text-left"
                >
                  Bespoke Spatial Modeling
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="hover:text-[#1b1c1a] transition-colors text-left"
                >
                  Private In-Home Curation
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="hover:text-[#1b1c1a] transition-colors text-left"
                >
                  Trade &amp; Hospitality Program
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#1b1c1a] transition-colors text-left"
                >
                  White-Glove Installation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#1b1c1a] transition-colors text-left"
                >
                  Material Provenance &amp; Care
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal / Copyright Strip */}
        <div className="pt-6 border-t border-[#cdc5bc]/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#7c766e]">
          <p>© 2025 Maison Élément Studio Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#1b1c1a] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#1b1c1a] cursor-pointer">Terms of Service</span>
            <button
              onClick={() => onNavigate('planner')}
              className="hover:text-[#1b1c1a] cursor-pointer underline underline-offset-2"
            >
              BIM &amp; CAD Library
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
