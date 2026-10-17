import React, { useState } from 'react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [format, setFormat] = useState<'showroom' | 'virtual' | 'site'>('virtual');
  const [showroomLocation, setShowroomLocation] = useState('Paris — Le Marais');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Residential Residence');
  const [requestSwatches, setRequestSwatches] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1b1c1a]/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-4 text-center sm:p-0">
        <div className="relative bg-[#fbf9f5] rounded-xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:max-w-xl w-full border border-[#cdc5bc]/50 p-6 sm:p-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1 rounded hover:bg-[#efeeea] text-[#1b1c1a]"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#efeeea] text-[#7c5730] mx-auto flex items-center justify-center">
                <span className="material-symbols-outlined text-[32px]">event_available</span>
              </div>
              <h3 className="font-serif-display text-2xl font-medium text-[#1b1c1a]">
                Consultation Reserved
              </h3>
              <p className="text-sm text-[#4b463f] max-w-md mx-auto font-light">
                Thank you, {name || 'esteemed client'}. A calendar invitation and personal atelier briefing note have been dispatched to <span className="font-medium text-[#1b1c1a]">{email || 'your email'}</span>.
              </p>
              {requestSwatches && (
                <div className="p-3 bg-[#f5f3ef] rounded-lg text-xs text-[#7c766e] max-w-sm mx-auto border border-[#cdc5bc]/40">
                  <span className="font-semibold text-[#1b1c1a]">Material Swatch Casket:</span> Dispatched within 48 hours containing 12 hand-cut travertine, smoked oak, and virgin wool swatches.
                </div>
              )}
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#1b1c1a] text-white rounded text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#4b463f]"
                >
                  Return to Atelier
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7c5730]">
                  Private Architectural Service
                </span>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-medium text-[#1b1c1a] mt-1">
                  Book Atelier Consultation
                </h3>
                <p className="text-xs sm:text-sm text-[#4b463f] mt-1 font-light">
                  Collaborate directly with our Copenhagen and Paris spatial planners on bespoke floor plans, custom joinery, and tactile materiality schemes.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {/* Format selection */}
                <div className="space-y-1.5">
                  <label className="font-semibold uppercase tracking-[0.1em] text-[#7c766e] block text-[10px]">
                    Consultation Format
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormat('virtual')}
                      className={`p-3 rounded border text-left transition-colors ${
                        format === 'virtual'
                          ? 'border-[#1b1c1a] bg-[#efeeea] text-[#1b1c1a] font-medium'
                          : 'border-[#cdc5bc]/60 bg-[#f5f3ef] text-[#4b463f] hover:bg-[#efeeea]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px] block mb-1">devices</span>
                      <p className="font-medium text-xs">Virtual 3D Spatial</p>
                      <p className="text-[10px] text-[#7c766e]">Rhino / BIM Walkthrough</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormat('showroom')}
                      className={`p-3 rounded border text-left transition-colors ${
                        format === 'showroom'
                          ? 'border-[#1b1c1a] bg-[#efeeea] text-[#1b1c1a] font-medium'
                          : 'border-[#cdc5bc]/60 bg-[#f5f3ef] text-[#4b463f] hover:bg-[#efeeea]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px] block mb-1">storefront</span>
                      <p className="font-medium text-xs">Private Showroom</p>
                      <p className="text-[10px] text-[#7c766e]">Paris, CPH or NYC</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormat('site')}
                      className={`p-3 rounded border text-left transition-colors ${
                        format === 'site'
                          ? 'border-[#1b1c1a] bg-[#efeeea] text-[#1b1c1a] font-medium'
                          : 'border-[#cdc5bc]/60 bg-[#f5f3ef] text-[#4b463f] hover:bg-[#efeeea]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px] block mb-1">home_pin</span>
                      <p className="font-medium text-xs">On-Site Atelier</p>
                      <p className="text-[10px] text-[#7c766e]">Residence Walkthrough</p>
                    </button>
                  </div>
                </div>

                {format === 'showroom' && (
                  <div className="space-y-1">
                    <label className="font-semibold uppercase tracking-[0.1em] text-[#7c766e] block text-[10px]">
                      Select Salon
                    </label>
                    <select
                      value={showroomLocation}
                      onChange={(e) => setShowroomLocation(e.target.value)}
                      className="w-full bg-[#f5f3ef] border border-[#cdc5bc]/60 rounded p-2.5 text-xs text-[#1b1c1a] outline-none"
                    >
                      <option>Paris — Le Marais (28 Rue de Turenne)</option>
                      <option>Copenhagen — Indre By (Bredgade 34)</option>
                      <option>New York — Tribeca (178 Franklin Street)</option>
                    </select>
                  </div>
                )}

                {/* Personal & Project Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-semibold uppercase tracking-[0.1em] text-[#7c766e] block text-[10px]">
                      Your Name / Practice
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Camille Desrosiers"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#f5f3ef] border border-[#cdc5bc]/60 rounded p-2.5 text-xs text-[#1b1c1a] outline-none focus:border-[#1b1c1a]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold uppercase tracking-[0.1em] text-[#7c766e] block text-[10px]">
                      Correspondence Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. camille@atelier.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#f5f3ef] border border-[#cdc5bc]/60 rounded p-2.5 text-xs text-[#1b1c1a] outline-none focus:border-[#1b1c1a]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-semibold uppercase tracking-[0.1em] text-[#7c766e] block text-[10px]">
                      Project Classification
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full bg-[#f5f3ef] border border-[#cdc5bc]/60 rounded p-2.5 text-xs text-[#1b1c1a] outline-none"
                    >
                      <option>Residential Villa / Penthouse</option>
                      <option>Hospitality &amp; Boutique Hotel</option>
                      <option>Commercial Salon / Executive Suite</option>
                      <option>Yacht / Private Sanctuary</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold uppercase tracking-[0.1em] text-[#7c766e] block text-[10px]">
                      Target Timeline
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Autumn 2025"
                      defaultValue="Within 3 Months"
                      className="w-full bg-[#f5f3ef] border border-[#cdc5bc]/60 rounded p-2.5 text-xs text-[#1b1c1a] outline-none focus:border-[#1b1c1a]"
                    />
                  </div>
                </div>

                {/* Swatch casket checkbox */}
                <div className="p-3 bg-[#f5f3ef] rounded flex items-start gap-2.5 border border-[#cdc5bc]/40">
                  <input
                    type="checkbox"
                    id="swatchCheck"
                    checked={requestSwatches}
                    onChange={(e) => setRequestSwatches(e.target.checked)}
                    className="mt-0.5 rounded text-[#1b1c1a] focus:ring-0"
                  />
                  <label htmlFor="swatchCheck" className="text-xs text-[#4b463f] cursor-pointer">
                    <span className="font-semibold text-[#1b1c1a]">Include Material Swatch Casket:</span> Receive 12 hand-cut samples of Roman travertine, smoked oak, yakisugi cedar, and wool bouclé delivered to your practice.
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1b1c1a] text-white rounded text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#4b463f] transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Confirm Consultation Request</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
