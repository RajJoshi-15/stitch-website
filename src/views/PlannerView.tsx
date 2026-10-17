import React, { useState } from 'react';
import { CatalogItem } from '../data/catalog';

interface PlacedPiece {
  id: string;
  itemId: string;
  name: string;
  price: number;
  x: number; // percentage in room grid
  y: number; // percentage in room grid
  rotation: number; // 0, 90, 180, 270
  widthMeters: number;
  depthMeters: number;
  finish: string;
}

interface PlannerViewProps {
  items: CatalogItem[];
  onAddToCart: (item: CatalogItem) => void;
  onOpenConsultation: () => void;
}

export const PlannerView: React.FC<PlannerViewProps> = ({
  items,
  onAddToCart,
  onOpenConsultation,
}) => {
  const [roomTemplate, setRoomTemplate] = useState<'grand-salon' | 'sunken-living' | 'dining-chamber' | 'executive-study'>('grand-salon');
  const [viewMode, setViewMode] = useState<'2d' | '3d'>('2d');
  const [selectedPieceId, setSelectedPieceId] = useState<string | null>('p-1');
  const [exportedCAD, setExportedCAD] = useState(false);

  // Initial placed pieces for the chosen room
  const [placedPieces, setPlacedPieces] = useState<PlacedPiece[]>([
    {
      id: 'p-1',
      itemId: 'boucle-sectional',
      name: 'Cloud Wool Bouclé Sectional',
      price: 6200,
      x: 35,
      y: 45,
      rotation: 0,
      widthMeters: 3.4,
      depthMeters: 1.8,
      finish: 'Oatmeal Wool Bouclé',
    },
    {
      id: 'p-2',
      itemId: 'travertine-table',
      name: 'Honed Travertine Cocktail Table',
      price: 2840,
      x: 48,
      y: 52,
      rotation: 0,
      widthMeters: 1.4,
      depthMeters: 0.8,
      finish: 'Roman Travertine',
    },
    {
      id: 'p-3',
      itemId: 'kyoto-lounge-chair',
      name: 'Kyoto Lounge Chair',
      price: 2950,
      x: 70,
      y: 42,
      rotation: 270,
      widthMeters: 0.86,
      depthMeters: 0.82,
      finish: 'Smoked Walnut',
    },
    {
      id: 'p-4',
      itemId: 'amber-pendant',
      name: 'Hand-blown Amber Pendant',
      price: 890,
      x: 50,
      y: 48,
      rotation: 0,
      widthMeters: 0.5,
      depthMeters: 0.5,
      finish: 'Cognac Amber Glass',
    },
  ]);

  const roomDimensions = {
    'grand-salon': { width: 8.5, length: 6.2, label: 'Grand Living Salon (8.5m × 6.2m • 52.7 m²)' },
    'sunken-living': { width: 7.2, length: 5.6, label: 'Sunken Courtyard Pavilion (7.2m × 5.6m • 40.3 m²)' },
    'dining-chamber': { width: 6.0, length: 4.8, label: 'Minimalist Dining Chamber (6.0m × 4.8m • 28.8 m²)' },
    'executive-study': { width: 5.4, length: 4.2, label: 'Executive Sukiya Study (5.4m × 4.2m • 22.7 m²)' },
  };

  const currentRoom = roomDimensions[roomTemplate];

  const handleAddPiece = (item: CatalogItem) => {
    const newPiece: PlacedPiece = {
      id: `p-${Date.now()}`,
      itemId: item.id,
      name: item.name,
      price: item.price,
      x: 40 + Math.floor(Math.random() * 20),
      y: 40 + Math.floor(Math.random() * 20),
      rotation: 0,
      widthMeters: 1.5,
      depthMeters: 0.9,
      finish: item.finishes[0]?.name || 'Natural Honed',
    };
    setPlacedPieces([...placedPieces, newPiece]);
    setSelectedPieceId(newPiece.id);
  };

  const handleRemovePiece = (id: string) => {
    setPlacedPieces(placedPieces.filter((p) => p.id !== id));
    if (selectedPieceId === id) setSelectedPieceId(null);
  };

  const handleRotatePiece = (id: string) => {
    setPlacedPieces(
      placedPieces.map((p) => {
        if (p.id === id) {
          const nextRotation = (p.rotation + 90) % 360;
          return { ...p, rotation: nextRotation };
        }
        return p;
      })
    );
  };

  const handleMovePiece = (id: string, deltaX: number, deltaY: number) => {
    setPlacedPieces(
      placedPieces.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            x: Math.max(10, Math.min(85, p.x + deltaX)),
            y: Math.max(10, Math.min(85, p.y + deltaY)),
          };
        }
        return p;
      })
    );
  };

  const totalEstimate = placedPieces.reduce((sum, p) => sum + p.price, 0);
  const selectedPiece = placedPieces.find((p) => p.id === selectedPieceId);

  const handleExportCAD = () => {
    setExportedCAD(true);
    setTimeout(() => setExportedCAD(false), 3000);
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-12 bg-[#fbf9f5] min-h-screen">
      <div className="max-w-[1536px] mx-auto space-y-8">
        {/* Header */}
        <div className="border-b border-[#cdc5bc]/40 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="material-symbols-outlined text-[#7c5730] text-[20px]">architecture</span>
              <span className="text-xs font-semibold uppercase text-[#7c5730] tracking-[0.14em]">
                Parametric Spatial Studio
              </span>
            </div>
            <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1b1c1a]">
              3D Spatial Planning &amp; Curation
            </h1>
            <p className="text-sm sm:text-base text-[#4b463f] max-w-2xl font-light leading-relaxed">
              Stage bespoke pieces into architectural floor plans. Analyze scale clearances, material compatibility, and generate parametric BIM/CAD schedules directly for your studio.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-3 bg-[#1b1c1a] text-white rounded text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#4b463f] transition-colors whitespace-nowrap shadow-sm"
            >
              Book Atelier Consultation
            </button>
          </div>
        </div>

        {/* Toolbar: Room footprints & Projection modes */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#f5f3ef] p-4 rounded-xl border border-[#cdc5bc]/40">
          {/* Room Selection */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-[10px] font-semibold uppercase text-[#7c766e] hidden md:inline">Footprint:</span>
            {(
              [
                ['grand-salon', 'Grand Salon'],
                ['sunken-living', 'Sunken Pavilion'],
                ['dining-chamber', 'Dining Chamber'],
                ['executive-study', 'Sukiya Study'],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setRoomTemplate(key)}
                className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-[0.08em] whitespace-nowrap transition-colors ${
                  roomTemplate === key
                    ? 'bg-[#1b1c1a] text-white'
                    : 'bg-[#efeeea] text-[#4b463f] hover:bg-[#eae8e4]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* 2D vs 3D Mode Toggle */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto">
            <div className="flex items-center bg-[#efeeea] p-1 rounded-lg border border-[#cdc5bc]/50">
              <button
                onClick={() => setViewMode('2d')}
                className={`px-3 py-1 text-xs font-semibold uppercase rounded transition-colors flex items-center gap-1 ${
                  viewMode === '2d' ? 'bg-[#1b1c1a] text-white' : 'text-[#4b463f] hover:text-[#1b1c1a]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">grid_on</span>
                2D CAD Floor Plan
              </button>
              <button
                onClick={() => setViewMode('3d')}
                className={`px-3 py-1 text-xs font-semibold uppercase rounded transition-colors flex items-center gap-1 ${
                  viewMode === '3d' ? 'bg-[#1b1c1a] text-white' : 'text-[#4b463f] hover:text-[#1b1c1a]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">view_in_ar</span>
                3D Spatial View
              </button>
            </div>
          </div>
        </div>

        {/* Spatial Workspace: Left Canvas + Right BOM Palette */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Interactive Canvas (8 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div
              className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${
                viewMode === '2d'
                  ? 'bg-[#fbf9f5] border-[#1b1c1a]'
                  : 'bg-gradient-to-b from-[#eae8e4] to-[#dedbd5] border-[#7c5730]/60'
              } shadow-xl`}
            >
              {/* Blueprint Grid Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <defs>
                  <pattern id="cad-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1b1c1a" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cad-grid)" />
              </svg>

              {/* Dimension Callouts on perimeter */}
              <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#7c766e] pointer-events-none">
                <span>◀— North Wall: {currentRoom.width} meters —▶</span>
                <span className="bg-[#fbf9f5]/80 px-2 py-0.5 rounded border border-[#cdc5bc]">Scale 1:50</span>
              </div>
              <div className="absolute top-10 bottom-10 left-3 flex flex-col justify-between text-[11px] font-mono text-[#7c766e] pointer-events-none">
                <span className="rotate-90 origin-left">◀— {currentRoom.length}m —▶</span>
              </div>

              {/* Architectural Fenestration / Doorway Indicators */}
              <div className="absolute top-0 left-1/3 w-1/4 h-1.5 bg-[#7c5730]" title="Floor to ceiling glass fenestration">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] uppercase font-mono text-[#7c5730]">Glass Glazing</span>
              </div>
              <div className="absolute bottom-0 right-1/4 w-16 h-1.5 bg-[#1b1c1a]" title="Entryway threshold">
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[9px] uppercase font-mono text-[#1b1c1a]">Entry 900mm</span>
              </div>

              {/* Render Placed Pieces */}
              {placedPieces.map((piece) => {
                const isSelected = selectedPieceId === piece.id;

                if (viewMode === '3d') {
                  // 3D Isometric View Simulation
                  return (
                    <div
                      key={piece.id}
                      onClick={() => setSelectedPieceId(piece.id)}
                      style={{
                        top: `${piece.y}%`,
                        left: `${piece.x}%`,
                        transform: `translate(-50%, -50%) rotate(${piece.rotation}deg) scale(${isSelected ? 1.05 : 1})`,
                      }}
                      className={`absolute cursor-pointer transition-all duration-300 p-2 rounded-lg bg-[#fbf9f5]/95 shadow-2xl border ${
                        isSelected
                          ? 'border-[#1b1c1a] ring-2 ring-[#7c5730]'
                          : 'border-[#cdc5bc]/80 hover:shadow-lg'
                      }`}
                    >
                      <div className="text-center">
                        <div className="w-12 h-10 mx-auto bg-[#eae8e4] rounded flex items-center justify-center text-[#7c5730] shadow-inner mb-1">
                          <span className="material-symbols-outlined text-[20px]">
                            {piece.name.includes('Table') ? 'table_restaurant' : piece.name.includes('Pendant') ? 'light' : 'chair'}
                          </span>
                        </div>
                        <p className="font-serif-display text-[11px] font-medium text-[#1b1c1a] truncate max-w-[100px]">
                          {piece.name}
                        </p>
                        <p className="font-mono text-[9px] text-[#7c5730]">
                          ${piece.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  );
                }

                // 2D CAD Blueprint View
                return (
                  <div
                    key={piece.id}
                    onClick={() => setSelectedPieceId(piece.id)}
                    style={{
                      top: `${piece.y}%`,
                      left: `${piece.x}%`,
                      transform: `translate(-50%, -50%) rotate(${piece.rotation}deg)`,
                      width: `${piece.widthMeters * 35}px`,
                      height: `${piece.depthMeters * 35}px`,
                    }}
                    className={`absolute cursor-pointer transition-all flex flex-col items-center justify-center text-center rounded border-2 shadow-sm ${
                      isSelected
                        ? 'bg-[#7c5730]/15 border-[#1b1c1a] ring-2 ring-[#7c5730]'
                        : 'bg-[#efeeea] border-[#7c766e]/60 hover:border-[#1b1c1a]'
                    }`}
                  >
                    <span className="text-[10px] font-semibold uppercase text-[#1b1c1a] truncate px-1 pointer-events-none">
                      {piece.name.split(' ')[0]}
                    </span>
                    <span className="font-mono text-[8px] text-[#7c766e] pointer-events-none">
                      {piece.widthMeters}m × {piece.depthMeters}m
                    </span>

                    {/* Rotation indicator notch */}
                    <div className="absolute -top-1.5 w-1.5 h-1.5 bg-[#1b1c1a] rounded-full" />
                  </div>
                );
              })}

              {/* Watermark footprint caption */}
              <div className="absolute bottom-3 left-4 text-xs font-mono text-[#7c766e]">
                {currentRoom.label}
              </div>
            </div>

            {/* Selected Piece Floating Control Strip */}
            {selectedPiece && (
              <div className="bg-[#f5f3ef] p-4 rounded-xl border border-[#cdc5bc]/40 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#efeeea] flex items-center justify-center text-[#7c5730]">
                    <span className="material-symbols-outlined text-[20px]">architecture</span>
                  </div>
                  <div>
                    <h4 className="font-serif-display text-sm font-medium text-[#1b1c1a]">
                      {selectedPiece.name}
                    </h4>
                    <p className="text-[11px] text-[#7c766e]">
                      Finish: <span className="font-medium text-[#1b1c1a]">{selectedPiece.finish}</span> • Scale: {selectedPiece.widthMeters}m × {selectedPiece.depthMeters}m
                    </p>
                  </div>
                </div>

                {/* Micro-position & rotate tools */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleRotatePiece(selectedPiece.id)}
                    className="px-3 py-1.5 bg-[#efeeea] text-[#1b1c1a] hover:bg-[#eae8e4] rounded text-xs font-medium flex items-center gap-1"
                    title="Rotate 90 degrees"
                  >
                    <span className="material-symbols-outlined text-[16px]">rotate_right</span>
                    Rotate (90°)
                  </button>

                  <div className="flex items-center border border-[#cdc5bc] rounded bg-white overflow-hidden">
                    <button
                      onClick={() => handleMovePiece(selectedPiece.id, -5, 0)}
                      className="px-2 py-1 text-xs hover:bg-[#efeeea]"
                      title="Nudge Left"
                    >
                      ←
                    </button>
                    <button
                      onClick={() => handleMovePiece(selectedPiece.id, 0, -5)}
                      className="px-2 py-1 text-xs hover:bg-[#efeeea]"
                      title="Nudge Up"
                    >
                      ↑
                    </button>
                    <button
                      onClick={() => handleMovePiece(selectedPiece.id, 0, 5)}
                      className="px-2 py-1 text-xs hover:bg-[#efeeea]"
                      title="Nudge Down"
                    >
                      ↓
                    </button>
                    <button
                      onClick={() => handleMovePiece(selectedPiece.id, 5, 0)}
                      className="px-2 py-1 text-xs hover:bg-[#efeeea]"
                      title="Nudge Right"
                    >
                      →
                    </button>
                  </div>

                  <button
                    onClick={() => handleRemovePiece(selectedPiece.id)}
                    className="p-1.5 text-[#ba1a1a] hover:bg-white rounded"
                    title="Remove from room"
                  >
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Piece Palette & Architectural BOM (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Bill of Materials (BOM) & Total */}
            <div className="bg-[#f5f3ef] p-5 sm:p-6 rounded-xl border border-[#cdc5bc]/40 space-y-4">
              <div className="flex items-center justify-between border-b border-[#cdc5bc]/30 pb-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1b1c1a]">
                  Architectural Schedule (BOM)
                </h3>
                <span className="text-[11px] text-[#7c766e]">{placedPieces.length} Pieces</span>
              </div>

              <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                {placedPieces.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => setSelectedPieceId(p.id)}
                    className={`p-2.5 rounded flex items-center justify-between text-xs cursor-pointer border transition-colors ${
                      selectedPieceId === p.id
                        ? 'bg-[#efeeea] border-[#1b1c1a]'
                        : 'bg-[#fbf9f5] border-[#cdc5bc]/30 hover:border-[#cdc5bc]'
                    }`}
                  >
                    <div className="min-w-0 pr-2">
                      <p className="font-serif-display font-medium text-[#1b1c1a] truncate">
                        {p.name}
                      </p>
                      <p className="text-[10px] text-[#7c766e]">
                        {p.widthMeters}m × {p.depthMeters}m • {p.finish}
                      </p>
                    </div>
                    <span className="font-mono font-medium text-[#1b1c1a] flex-shrink-0">
                      ${p.price.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-[#cdc5bc]/30 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-[#4b463f]">Total Estimated Curation:</span>
                  <span className="font-mono text-base font-semibold text-[#1b1c1a]">
                    ${totalEstimate.toLocaleString()}
                  </span>
                </div>
                <p className="text-[11px] text-[#7c766e]">
                  Includes bespoke timber sizing, white-glove room assembly, and BIM parameter model package.
                </p>
              </div>

              {exportedCAD && (
                <div className="p-2.5 bg-[#eae8e4] text-[#1b1c1a] rounded text-xs text-center font-medium animate-fadeIn">
                  ✓ Revit &amp; Rhino (.OBJ / .DWG) Architectural Package Exported
                </div>
              )}

              <div className="space-y-2 pt-1">
                <button
                  onClick={() => {
                    placedPieces.forEach((p) => {
                      const item = items.find((i) => i.id === p.itemId);
                      if (item) onAddToCart(item);
                    });
                  }}
                  className="w-full py-3 bg-[#1b1c1a] text-white rounded text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#4b463f] transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">shopping_bag</span>
                  Add All Planned Pieces to Bag
                </button>

                <button
                  onClick={handleExportCAD}
                  className="w-full py-2.5 bg-[#efeeea] text-[#1b1c1a] rounded text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#eae8e4] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  Export BIM / CAD Package (.DWG)
                </button>
              </div>
            </div>

            {/* Catalog Staging Palette */}
            <div className="bg-[#f5f3ef] p-5 rounded-xl border border-[#cdc5bc]/40 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1b1c1a]">
                Stage New Piece to Layout
              </h4>
              <p className="text-[11px] text-[#4b463f]">
                Click any piece from our permanent collection to drop it directly into your room canvas:
              </p>

              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {items.slice(0, 6).map((item) => (
                  <div
                    key={item.id}
                    className="p-2.5 bg-[#fbf9f5] rounded-lg border border-[#cdc5bc]/30 flex items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 object-cover rounded bg-[#efeeea] flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="font-serif-display text-xs font-medium text-[#1b1c1a] truncate">
                          {item.name}
                        </p>
                        <p className="text-[10px] text-[#7c766e]">
                          {item.formattedPrice}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleAddPiece(item)}
                      className="px-2.5 py-1 bg-[#efeeea] text-[#1b1c1a] hover:bg-[#1b1c1a] hover:text-white rounded text-[10px] font-semibold uppercase tracking-wider transition-colors flex-shrink-0"
                    >
                      + Place
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
