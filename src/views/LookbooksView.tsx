import React, { useState } from 'react';
import { LOOKBOOK_SCENES, CatalogItem, LookbookScene } from '../data/catalog';

interface LookbooksViewProps {
  items: CatalogItem[];
  onQuickInspect: (item: CatalogItem) => void;
  onAddToCart: (item: CatalogItem) => void;
  onOpenConsultation: () => void;
}

export const LookbooksView: React.FC<LookbooksViewProps> = ({
  items,
  onQuickInspect,
  onAddToCart,
  onOpenConsultation,
}) => {
  const [activeSceneId, setActiveSceneId] = useState<string>(LOOKBOOK_SCENES[0].id);
  const [activePinCode, setActivePinCode] = useState<string | null>(null);

  const currentScene: LookbookScene =
    LOOKBOOK_SCENES.find((s) => s.id === activeSceneId) || LOOKBOOK_SCENES[0];

  const getPinnedItem = (itemId: string) => {
    return items.find((i) => i.id === itemId);
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-12 bg-[#fbf9f5] min-h-screen">
      <div className="max-w-[1536px] mx-auto space-y-8">
        {/* Header */}
        <div className="border-b border-[#cdc5bc]/40 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7c5730]" />
              <span className="text-xs font-semibold uppercase text-[#7c5730] tracking-[0.14em]">
                Spatial Narratives
              </span>
            </div>
            <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1b1c1a]">
              Shoppable Architectural Lookbooks
            </h1>
            <p className="text-sm sm:text-base text-[#4b463f] max-w-2xl font-light leading-relaxed">
              Experience our curated pieces staged in real architectural residences worldwide. Inspect coordinates to explore scale, materiality pairings, and configure direct specifications.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-5 py-3 bg-[#1b1c1a] text-white rounded text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#4b463f] transition-colors whitespace-nowrap self-start md:self-auto"
          >
            Commission Custom Interior
          </button>
        </div>

        {/* Scene Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#cdc5bc]/30">
          {LOOKBOOK_SCENES.map((scene) => {
            const isCurrent = scene.id === currentScene.id;
            return (
              <button
                key={scene.id}
                onClick={() => {
                  setActiveSceneId(scene.id);
                  setActivePinCode(null);
                }}
                className={`px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-[0.1em] transition-all whitespace-nowrap flex items-center gap-2 ${
                  isCurrent
                    ? 'bg-[#1b1c1a] text-white shadow-md'
                    : 'bg-[#f5f3ef] text-[#4b463f] hover:text-[#1b1c1a] hover:bg-[#efeeea]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                <span>{scene.title}</span>
                <span className="text-[10px] opacity-70">({scene.location.split(',')[0]})</span>
              </button>
            );
          })}
        </div>

        {/* Main Canvas & Inspector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Visual Canvas (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#eae8e4] rounded-xl overflow-hidden shadow-2xl border border-[#cdc5bc]/40">
              <img
                src={currentScene.image}
                alt={currentScene.title}
                className="w-full h-full object-cover"
              />

              {/* Pulsating Hotspot Pins */}
              {currentScene.hotspots.map((pin) => {
                const isSelected = activePinCode === pin.code;
                const targetItem = getPinnedItem(pin.itemId);

                return (
                  <div
                    key={pin.id}
                    style={{ top: `${pin.topPercent}%`, left: `${pin.leftPercent}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                  >
                    <button
                      onClick={() => {
                        setActivePinCode(isSelected ? null : pin.code);
                        if (targetItem) onQuickInspect(targetItem);
                      }}
                      className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-full font-bold text-xs sm:text-sm shadow-xl flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-[#1b1c1a] text-white scale-125 ring-4 ring-white/60'
                          : 'bg-[#fbf9f5] text-[#1b1c1a] hover:scale-110'
                      }`}
                    >
                      <span className="relative z-10">{pin.code}</span>
                      <span className="absolute inset-0 rounded-full bg-[#7c5730]/40 animate-ping" />
                    </button>

                    {/* Popover Card */}
                    <div className="absolute bottom-11 left-1/2 -translate-x-1/2 w-56 sm:w-64 p-3.5 bg-[#fbf9f5]/95 backdrop-blur-xl rounded-lg shadow-2xl pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-[#cdc5bc]/40 z-30">
                      <span className="text-[10px] font-semibold uppercase text-[#7c5730] block">
                        Coordinate {pin.code}
                      </span>
                      <p className="font-serif-display text-sm font-medium text-[#1b1c1a] leading-tight">
                        {pin.label}
                      </p>
                      {targetItem && (
                        <p className="text-xs text-[#4b463f] mt-0.5">
                          {targetItem.formattedPrice} • {targetItem.leadTime}
                        </p>
                      )}
                      <button
                        onClick={() => {
                          if (targetItem) onQuickInspect(targetItem);
                        }}
                        className="mt-2.5 w-full py-1.5 bg-[#1b1c1a] text-white rounded text-[11px] uppercase tracking-wider font-semibold hover:bg-[#4b463f]"
                      >
                        Inspect Coordinate
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Scene Information Bar */}
            <div className="p-4 sm:p-5 bg-[#f5f3ef] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-[#cdc5bc]/30">
              <div>
                <p className="text-xs font-semibold uppercase text-[#7c5730] tracking-wider">
                  Location &amp; Architecture
                </p>
                <p className="font-serif-display text-base text-[#1b1c1a] mt-0.5">
                  {currentScene.location} — {currentScene.architect}
                </p>
                <p className="text-xs text-[#4b463f] mt-1 font-light leading-relaxed max-w-2xl">
                  {currentScene.description}
                </p>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto flex-shrink-0">
                <span className="text-xs text-[#7c766e]">
                  {currentScene.hotspots.length} Pinned Coordinates
                </span>
              </div>
            </div>
          </div>

          {/* Coordinate Schedule / Inspector Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#f5f3ef] p-5 sm:p-6 rounded-xl border border-[#cdc5bc]/40 space-y-4">
              <div className="flex items-center justify-between border-b border-[#cdc5bc]/30 pb-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1b1c1a]">
                  Coordinate Schedule
                </h3>
                <span className="text-[11px] text-[#7c766e]">Select to inspect</span>
              </div>

              <div className="space-y-3">
                {currentScene.hotspots.map((pin) => {
                  const targetItem = getPinnedItem(pin.itemId);
                  if (!targetItem) return null;
                  const isSelected = activePinCode === pin.code;

                  return (
                    <div
                      key={pin.id}
                      onClick={() => onQuickInspect(targetItem)}
                      className={`p-3.5 rounded-lg border transition-all cursor-pointer flex gap-3 items-center justify-between group ${
                        isSelected
                          ? 'bg-[#efeeea] border-[#1b1c1a] shadow-sm'
                          : 'bg-[#fbf9f5] border-[#cdc5bc]/40 hover:border-[#1b1c1a]/50'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-7 h-7 rounded-full bg-[#1b1c1a] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {pin.code}
                        </span>
                        <div className="min-w-0">
                          <h4 className="font-serif-display text-sm font-medium text-[#1b1c1a] truncate group-hover:underline">
                            {targetItem.name}
                          </h4>
                          <p className="text-[11px] text-[#7c766e]">
                            {targetItem.formattedPrice} • {targetItem.leadTime}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(targetItem);
                          }}
                          title="Add to project bag"
                          className="p-1.5 rounded bg-[#efeeea] hover:bg-[#1b1c1a] hover:text-white transition-colors"
                        >
                          <span className="material-symbols-outlined text-[16px]">add</span>
                        </button>
                        <span className="material-symbols-outlined text-[#7c766e] text-[18px]">
                          chevron_right
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-[#cdc5bc]/30 space-y-2">
                <button
                  onClick={() => {
                    // Add all pinned items to project
                    currentScene.hotspots.forEach((p) => {
                      const item = getPinnedItem(p.itemId);
                      if (item) onAddToCart(item);
                    });
                  }}
                  className="w-full py-3 bg-[#1b1c1a] text-white rounded text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#4b463f] transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">library_add</span>
                  Add Complete Ensemble to Bag
                </button>

                <p className="text-[11px] text-[#7c766e] text-center pt-1">
                  Custom finish configurations confirmed prior to hand-crafting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
