export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

export const defaultSEO: SEOData = {
  title: "Calculator Pensie 2024 - Calculează Online Pensia Rapid și Corect | calculatorsarcina.ro",
  description: "Folosește cel mai precis calculator de pensie online pentru a-ți estima venitul la bătrânețe. Planifică-ți viitorul financiar cu instrumentele și ghidurile noastre complete.",
  keywords: "calculator pensie, calcul pensie, simulator pensie online, pensia mea, calculatorsarcina.ro",
};

export const pageSEO: Record<string, SEOData> = {
  home: {
    title: "Calculator Pensie Online: Află Pensia Ta în Câteva Secunde | calculatorsarcina.ro",
    description: "Folosește cel mai precis calculator de pensie online pentru a-ți estima venitul la bătrânețe. Planifică-ți viitorul financiar cu instrumentele și ghidurile noastre complete.",
    keywords: "calculator pensie, calcul pensie, simulator pensie online, pensia mea",
  },
  planificare: {
    title: "Ghid Complet pentru Planificarea Pensiei în România | calculatorsarcina.ro",
    description: "Descoperă strategiile de planificare a pensiei, diferențele între piloni și greșelile de evitat. Ghid complet pentru o pensie liniștită.",
    keywords: "planificare pensie, pilonul II, pilonul III, strategii investiții pensie",
  },
  tipuri: {
    title: "Ghid Exhaustiv: Tipuri de Pensii din România | calculatorsarcina.ro",
    description: "Descoperă ghidul exhaustiv despre toate tipurile de pensii disponibile în România: pensia pentru limită de vârstă, anticipată, de urmaș, de invaliditate.",
    keywords: "tipuri de pensii România, pensie de stat, pensie anticipată, pensie de urmaș",
  },
  legislatie: {
    title: "Legea Pensiilor 2024 pe Înțelesul Tuturor | calculatorsarcina.ro",
    description: "Ghid complet despre legislația pensiilor din România, vârsta de pensionare, stagiul de cotizare și procedurile oficiale.",
    keywords: "legea pensiilor 2024, vârsta de pensionare, stagiu cotizare, legislație pensii",
  },
  blog: {
    title: "Blog Pensii România - Ghiduri și Sfaturi pentru Planificarea Pensiei | calculatorsarcina.ro",
    description: "Articole actualizate despre sistemul de pensii din România, modificări legislative și sfaturi practice pentru o pensie decentă.",
    keywords: "blog pensii, ghiduri pensii, sfaturi planificare pensie, modificări legislative",
  },
};

export function getSEOData(page: string): SEOData {
  return pageSEO[page] || defaultSEO;
}
