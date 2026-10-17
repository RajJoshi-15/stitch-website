export interface MaterialFinish {
  id: string;
  name: string;
  hex: string;
  textureName: string;
}

export interface CatalogItem {
  id: string;
  name: string;
  subtitle: string;
  category: 'Living' | 'Dining' | 'Bedroom' | 'Workspace' | 'Lighting' | 'Objects';
  price: number;
  formattedPrice: string;
  dimensions: string;
  weight: string;
  leadTime: string;
  provenance: string;
  description: string;
  architecturalNote: string;
  image: string;
  tag?: string;
  badge?: string;
  finishes: MaterialFinish[];
  selectedFinishId?: string;
  bimAvailable: boolean;
}

export interface HotspotPin {
  id: string;
  code: 'A' | 'B' | 'C' | 'D';
  label: string;
  topPercent: number; // e.g. 68
  leftPercent: number; // e.g. 48
  itemId: string;
}

export interface LookbookScene {
  id: string;
  title: string;
  location: string;
  architect: string;
  description: string;
  image: string;
  hotspots: HotspotPin[];
}

export const ATELIER_FINISHES: MaterialFinish[] = [
  { id: 'travertine', name: 'Roman Travertine', hex: '#E5DFD7', textureName: 'Honed Matte' },
  { id: 'smoked-walnut', name: 'Smoked Walnut', hex: '#3B332E', textureName: 'Oil Rubbed' },
  { id: 'bleached-linen', name: 'Bleached Linen', hex: '#D7C9B8', textureName: 'Raw Weave' },
  { id: 'nero-marquina', name: 'Nero Marquina', hex: '#1A1816', textureName: 'Honed Chamfer' },
  { id: 'aged-brass', name: 'Aged Burnished Brass', hex: '#A8926C', textureName: 'Patinated Hand-cast' },
];

export const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: 'travertine-table',
    name: 'Honed Travertine Cocktail Table',
    subtitle: 'Roman Unfilled • Chamfered Edge',
    category: 'Living',
    price: 2840,
    formattedPrice: '$2,840',
    dimensions: '140 × 80 × 36 cm',
    weight: '84 kg',
    leadTime: '4 Weeks',
    provenance: 'Tivoli Quarry, Rome • Hand-finished in Copenhagen',
    description: 'Solid natural Roman travertine with brushed matte sealer. Honed chamfered edges crafted in Tivoli, Italy.',
    architecturalNote: 'Sculpted from a single monolithic limestone slab. Subtle porous cavities are preserved naturally without polymer fillers, capturing the tactile silence of classical Roman baths.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6KIEEKJMdjBzgL4NVYPnM_ojdGAh9mWmUxusmUxEPoYJh9BLK03Z7G4EkJ6tCDxBS8JQC7D80WRUuEaKC4wdthehQgjpSbqLPomZ4MDn7ISThb25s0PcRgf1ZKM_y4khsMDrwOqVyE2kxSAxyh4jJJgI1n_Vltwpl-gHQhRg8BvSDK510mPh1L6dLDvu08x0ox6gEFTi8fr-W4H4bnHV1I6429VIVs_c0AbkciunffSVUqTCxYD0q',
    badge: 'Spotlight A',
    finishes: ATELIER_FINISHES.slice(0, 4),
    bimAvailable: true,
  },
  {
    id: 'boucle-sectional',
    name: 'Cloud Wool Bouclé Sectional',
    subtitle: '4 Modular Segments • Low Axis',
    category: 'Living',
    price: 6200,
    formattedPrice: '$6,200',
    dimensions: '340 × 180 × 72 cm',
    weight: '118 kg',
    leadTime: 'In Stock Tribeca',
    provenance: 'Veneto Looms, Italy • FSC Ash Frame',
    description: 'Architectural multi-density memory foam core wrapped in virgin New Zealand wool bouclé weave. Modular clip anchors.',
    architecturalNote: 'Generously proportioned for low-profile horizontal living. Deep ergonomic recline with zero spring reverberation, draped in breathable lanolin-washed wool yarn.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3_AFmroK69dJxCBXhc-OF5RRynOtL2W5DPtgPI85pQSVa4zlS6_b-1dhTYJPQDLiExJtGJOxNiulCaS6lJDWRPzReehOZY51ia8artiKkP3eLfOKWM9Y-K6c--jDx5WrTJgdLAJzBskPD245CmXp1oSvB8DeHIq9SIkE-sAD_Yopv6bCMpuNGNozygrgAgWWd4tAOQBsg-2ux-50-SwJhdtMNDeO2PcD0yXzSwwcgQ_Rhfs-2tVFi',
    badge: 'Spotlight B',
    finishes: [
      { id: 'bleached-linen', name: 'Oatmeal Wool Bouclé', hex: '#D7C9B8', textureName: 'Deep Loop' },
      { id: 'travertine', name: 'Chalk White Bouclé', hex: '#EAE5DC', textureName: 'Soft Tufted' },
      { id: 'smoked-walnut', name: 'Charcoal Merino Weave', hex: '#2B2825', textureName: 'Heavy Density' },
    ],
    bimAvailable: true,
  },
  {
    id: 'amber-pendant',
    name: 'Hand-blown Amber Pendant',
    subtitle: 'Murano Glass & Dark Bronze',
    category: 'Lighting',
    price: 890,
    formattedPrice: '$890',
    dimensions: 'Diam: 42 cm • Drop: 120 cm',
    weight: '6.5 kg',
    leadTime: '2 Weeks',
    provenance: 'Murano, Venice • Hand-cast bronze cap in Paris',
    description: 'Artisanal mouth-blown soda-lime glass with warm gradient amber gradation and dark bronze ceiling canopy.',
    architecturalNote: 'Produces an ambient candle-like luminance (2200K) that softens harsh architectural angles, creating organic optical ripples through hand-pinched glass bubbles.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa09IZcMceahocRvQ--SZbWgMvjXRQGV4VQkEF15YffiNHT6PeU5pxjERwSCzNLeqP5bBzRAnsdjTbQTQCI4LYE7-k_MQVoyNWjr5E85j9HVD08K3ADUvO03H3yxeZhAYos9V4DxUB5-r4mcGYdj_dDMbex25fxVkVTaeGy3NR50ztMzIJvUNd_q48lNxcdspkZdk05VPC3hdgShUjA_1U0d1oUTCKA21RAs72P_qnFzFGkm4YFvkd',
    badge: 'Spotlight C',
    finishes: [
      { id: 'amber', name: 'Cognac Amber Glass', hex: '#B87B44', textureName: 'Gradient Blown' },
      { id: 'smoke', name: 'Smoked Quartz Glass', hex: '#5E5752', textureName: 'Semi-opaque' },
      { id: 'opal', name: 'Frosted Opaline', hex: '#F0EBE3', textureName: 'Satin Etched' },
    ],
    bimAvailable: true,
  },
  {
    id: 'kanso-credenza',
    name: 'Kanso Credenza',
    subtitle: 'Hand-scorched Cedar • Brass Accents',
    category: 'Living',
    price: 5400,
    formattedPrice: '$5,400',
    dimensions: '220 × 50 × 74 cm',
    weight: '76 kg',
    leadTime: '6 Weeks',
    provenance: 'Kyoto Joinery Atelier • Gotland Quartzite Top',
    description: 'Hand-scorched Japanese cedar (Yakisugi) with brushed aged brass hardware and honed quartzite top on solid wooden plinth.',
    architecturalNote: 'Combines traditional flame-carbonized cedar surfaces with concealed push-to-open soft closing mechanisms and integrated cable management for seamless salon AV housing.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHIbXOQjvJFp8YLSsD_UuHKqc3Ctq8ayik8RGUhS_XmQQyP_dabeIj3mgzOVbpuBDEBWwQahH9ynVKXe1CxdveMo3D_uI9x6pPFMd08C3PKaqMsb7ycgbvtnJRVg_iu2-dVccGCFDDtjr3kncVtaF2HjbeK4--yIAsIhA976gdue19vunqSLqw9Ec0Hv4BskTmdW-tfD3bZBFpX5B7y-7N9prsd7TpyGLdXmQwR_P3zM4NvJ1oKXc2',
    tag: 'Edition of 40',
    finishes: ATELIER_FINISHES.slice(0, 4),
    bimAvailable: true,
  },
  {
    id: 'kyoto-lounge-chair',
    name: 'Kyoto Lounge Chair',
    subtitle: 'Sculpted Solid Walnut & Wool Cushion',
    category: 'Living',
    price: 2950,
    formattedPrice: '$2,950',
    dimensions: '86 × 82 × 68 cm',
    weight: '24 kg',
    leadTime: '3 Weeks',
    provenance: 'Danish Woodcraft Guild • Upholstered in Aarhus',
    description: 'Sculpted solid walnut frame with oatmeal woven wool bouclé upholstered deep seat cushion and cane backrest.',
    architecturalNote: 'Floating armrests hand-sanded along organic curves. Inspired by classic Scandinavian cabinetmaker exhibits and mid-century Japanese temple verandas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJ1ApzD8BPpyBFfEPj_zm1N1Xy-xd6pJOVcHLCFn2LTJQE0ZZnx9sGM6E3yPqkjS1vgs-3xi7ACdmJUuiqHN855YGq3vdqVTUM50Cak7mhvuAsxPUIDZDPPnXdi7DCK6pclE-m4eGLkRdVjyF4dr8ivtuGWcz1vyb9nPOiSDRdA-GkzjhVNh_73m2hatmmy0NOxj8i3owyTYtsfX0E3WzpOAKd9wpOrDSlSY8P7H6ZS8mB1i9NEO4M',
    tag: 'Hand-numbered',
    finishes: ATELIER_FINISHES.slice(0, 3),
    bimAvailable: true,
  },
  {
    id: 'monolithic-dining-table',
    name: 'Valbonne Monolithic Dining Table',
    subtitle: 'Honed Beige Limestone Plinth',
    category: 'Dining',
    price: 4800,
    formattedPrice: '$4,800',
    dimensions: '280 × 110 × 75 cm',
    weight: '190 kg',
    leadTime: '5 Weeks',
    provenance: 'Burgundy Quarry, France • Assembled in Paris',
    description: 'Monolithic honed beige limestone dining table with organic curved radius edges. Seats 8 to 12 guests.',
    architecturalNote: 'Two hollowed stone cylinder pedestals anchor an expansive 40mm thick chamfered tabletop treated with invisible food-safe oleophobic wax.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCh29K_ZInryhlioJO9UG_R1IeXfvZHdL08pnp8CH25EBoEL1OuTB-k6B3qySySosMwSmqIG8MCEuxfjhpZ6a5rZfgaX-IZuA2dltt6iGwhMZ5cx0B99NkFB8CddWLYs58WCvqtL8BQzaLhQ3FRYl2PMSE74XQdfzFM4R2j_1fApWDWuIYsZ_UXnylEw1NrNpRKg3M2DiAx4m6ZfmwxwKH5mXcj3ZECpiYRIULbfsHSid1yKBG6X8zP',
    tag: '8-12 Person',
    finishes: [
      { id: 'limestone', name: 'Burgundy Limestone', hex: '#DDD4C4', textureName: 'Honed Velvet' },
      { id: 'travertine', name: 'Roman Travertine', hex: '#E5DFD7', textureName: 'Brushed' },
      { id: 'nero-marquina', name: 'Belgian Fossil Black', hex: '#22201E', textureName: 'Matte' },
    ],
    bimAvailable: true,
  },
  {
    id: 'sukiya-platform-bed',
    name: 'Sukiya Low Platform Bed',
    subtitle: 'Bleached White Oak & Belgian Linen',
    category: 'Bedroom',
    price: 4200,
    formattedPrice: '$4,200',
    dimensions: '215 × 200 × 38 cm',
    weight: '82 kg',
    leadTime: '4 Weeks',
    provenance: 'Gotland Joinery • Washable Linen Cover',
    description: 'Low-profile architectural platform bed crafted from solid bleached white oak, fitted with integrated cantilever side plinths.',
    architecturalNote: 'Recessed base creates an illusory floating weightlessness. Accommodates tatami underlays or bespoke natural latex organic mattresses.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwvvuFkXpeybuDgI5iQWEGc2TPSFIeYHx9GzPhMjsoV5bH6U8lDjLiYc9-cAUK_yL7P4DKS5JOHpoZ_B0lEKmmb4GnzTTFNLPwk9XSlHFT7RIOq5R714iXavveVg__we0I7jKp_PhXSJlkCX7qgGbW-GpUUeGYVtcHxgyGsC289A5UETOzv3RovP9ko555yJyYartv94MRzz6a6NX2pEaW_9Omo8_ZmhT7oKbEaC0HGAMt19Udz3tz',
    tag: 'King & Queen Sizes',
    finishes: [
      { id: 'bleached-oak', name: 'Bleached White Oak', hex: '#E3DAC9', textureName: 'Matte Soap Finish' },
      { id: 'smoked-walnut', name: 'Smoked Walnut', hex: '#3B332E', textureName: 'Satin Wax' },
    ],
    bimAvailable: true,
  },
  {
    id: 'executive-travertine-desk',
    name: 'Monolithic Executive Desk',
    subtitle: 'Raw Travertine & Cognac Saddle Leather',
    category: 'Workspace',
    price: 6400,
    formattedPrice: '$6,400',
    dimensions: '240 × 90 × 75 cm',
    weight: '210 kg',
    leadTime: '6 Weeks',
    provenance: 'Tivoli, Italy • Hand-stitched Leather in Tuscany',
    description: 'Monolithic raw travertine executive desk with integrated cognac hand-stitched saddle leather writing pad and discreet power conduit.',
    architecturalNote: 'A commanding architectural centerpiece engineered with hidden steel cantilever armature to allow uninterrupted leg clearance across 2.4 meters.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaIhMotFlBaIYc2wrt-iYXK4GUNYhTrteEBz4_IWZXHYQVDPooHxzqtyJbiAJuYlFvrMtxMffysBqitE2Z-quNa6xLvx3EOWsPaV9qj61djl2siSs4CrQKt1-Ld6iRGQtzdCwsZYPyuBYC48DvHKommS14RpBMX20HZXZ0nCt-rWewYu0xl9gquE1_cQKhmsW1ZjjBleloV0CbY-qk7OFN1lDnUbEdCtnW-08yDsyXe4CB1RHBl9Cq',
    tag: 'Architect Edition',
    finishes: ATELIER_FINISHES.slice(0, 4),
    bimAvailable: true,
  },
  {
    id: 'sunken-living-table',
    name: 'Gotland Low Horizontal Plinth Table',
    subtitle: 'Smoked Walnut & Raw Sandstone',
    category: 'Living',
    price: 3600,
    formattedPrice: '$3,600',
    dimensions: '160 × 90 × 28 cm',
    weight: '62 kg',
    leadTime: '3 Weeks',
    provenance: 'Copenhagen Studio • Gotland Stone Inset',
    description: 'Minimalist low horizontal axis table designed specifically for sunken living rooms, tatami lounges, and deep modular seating.',
    architecturalNote: 'Calibrated at a restrained 28cm floor height to anchor eye-lines towards exterior gardens, courtyards, and horizon windows.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa3PmkF1T21zpp0mXPCRGhTObZE7rjaNCxBiQ6VD9M96px_1DEN-Z6eY9XBSGvwfh3OA9sqwPSFrDVAJGtGgcEoJOFaBxhZCuhipuOb483wCwW_grihZCb_E9Zno5XD7trCWfEqm1_68HKPFwUx8J8igk2rXU438VzVmrvOxnZQ4q8FFp0JdI3S2o4U_o94FSbDxG9Vovh2FuuUQHsAtAvLsuZe9c4Pqw860uclFlDbEXI8apEC9UM',
    finishes: ATELIER_FINISHES.slice(0, 3),
    bimAvailable: true,
  },
];

export const LOOKBOOK_SCENES: LookbookScene[] = [
  {
    id: 'highgate-residence',
    title: 'The Highgate Residence Salon',
    location: 'Highgate, North London',
    architect: 'Elden & Finch Architects',
    description: 'Double-height cedar timber ceiling, sweeping floor-to-ceiling glass fenestration, and natural lime-washed walls harmonizing travertine and bouclé.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa09IZcMceahocRvQ--SZbWgMvjXRQGV4VQkEF15YffiNHT6PeU5pxjERwSCzNLeqP5bBzRAnsdjTbQTQCI4LYE7-k_MQVoyNWjr5E85j9HVD08K3ADUvO03H3yxeZhAYos9V4DxUB5-r4mcGYdj_dDMbex25fxVkVTaeGy3NR50ztMzIJvUNd_q48lNxcdspkZdk05VPC3hdgShUjA_1U0d1oUTCKA21RAs72P_qnFzFGkm4YFvkd',
    hotspots: [
      { id: 'pin-a', code: 'A', label: 'Honed Travertine Cocktail Table', topPercent: 68, leftPercent: 48, itemId: 'travertine-table' },
      { id: 'pin-b', code: 'B', label: 'Cloud Wool Bouclé Sectional', topPercent: 52, leftPercent: 26, itemId: 'boucle-sectional' },
      { id: 'pin-c', code: 'C', label: 'Hand-blown Amber Pendant', topPercent: 28, leftPercent: 64, itemId: 'amber-pendant' },
    ],
  },
  {
    id: 'valbonne-salon',
    title: 'The Valbonne Salon Suite',
    location: 'Cap d’Antibes, Côte d’Azur',
    architect: 'Studio Desrosiers Paris',
    description: 'Sun-drenched morning light over textured limestone terraces, celebrating organic curves and acoustic stillness.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3_AFmroK69dJxCBXhc-OF5RRynOtL2W5DPtgPI85pQSVa4zlS6_b-1dhTYJPQDLiExJtGJOxNiulCaS6lJDWRPzReehOZY51ia8artiKkP3eLfOKWM9Y-K6c--jDx5WrTJgdLAJzBskPD245CmXp1oSvB8DeHIq9SIkE-sAD_Yopv6bCMpuNGNozygrgAgWWd4tAOQBsg-2ux-50-SwJhdtMNDeO2PcD0yXzSwwcgQ_Rhfs-2tVFi',
    hotspots: [
      { id: 'pin-v1', code: 'A', label: 'Cloud Wool Bouclé Sectional', topPercent: 60, leftPercent: 50, itemId: 'boucle-sectional' },
      { id: 'pin-v2', code: 'B', label: 'Honed Travertine Cocktail Table', topPercent: 78, leftPercent: 32, itemId: 'travertine-table' },
    ],
  },
  {
    id: 'arashiyama-study',
    title: 'Kyoto Sukiya Pavillion & Study',
    location: 'Arashiyama, Kyoto',
    architect: 'Takeshi Murata & Soren Lindqvist',
    description: 'An executive sanctuary balancing hand-scorched yakisugi cabinetry, monolithic stone plinths, and acoustic tranquility.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaIhMotFlBaIYc2wrt-iYXK4GUNYhTrteEBz4_IWZXHYQVDPooHxzqtyJbiAJuYlFvrMtxMffysBqitE2Z-quNa6xLvx3EOWsPaV9qj61djl2siSs4CrQKt1-Ld6iRGQtzdCwsZYPyuBYC48DvHKommS14RpBMX20HZXZ0nCt-rWewYu0xl9gquE1_cQKhmsW1ZjjBleloV0CbY-qk7OFN1lDnUbEdCtnW-08yDsyXe4CB1RHBl9Cq',
    hotspots: [
      { id: 'pin-k1', code: 'A', label: 'Monolithic Executive Desk', topPercent: 58, leftPercent: 44, itemId: 'executive-travertine-desk' },
      { id: 'pin-k2', code: 'B', label: 'Kyoto Lounge Chair', topPercent: 65, leftPercent: 72, itemId: 'kyoto-lounge-chair' },
    ],
  },
];
