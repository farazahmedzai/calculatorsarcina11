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
  title: "Calculator Sarcina 2024 - Calculează Online Sarcina și Pensia | calculatorsarcina.com",
  description: "Folosește calculatorul de sarcină și pensie online pentru a-ți estima data nașterii și venitul la bătrânețe. Planifică-ți viitorul cu instrumentele noastre complete.",
  keywords: "calculator sarcina, calculator pensie, data nasterii, sarcina romania, pensie romania, calculatorsarcina.com",
};

export const pageSEO: Record<string, SEOData> = {
  home: {
    title: "Calculator Sarcina și Pensie Online | calculatorsarcina.com",
    description: "Calculatoare online pentru sarcină și pensie. Află data nașterii și estimează pensia viitoare cu instrumentele noastre complete.",
    keywords: "calculator sarcina, calculator pensie, data nasterii, sarcina romania, pensie romania",
  },
  "calculator-sarcina": {
    title: "Calculator Sarcină Online - Calculează Data Nașterii și Săptămânile de Sarcină",
    description: "Calculator sarcină precis pentru calcularea datei nașterii, săptămânilor de sarcină și jaloanelor importante. Introdu data ultimei menstruații sau a concepției pentru rezultate exacte.",
    keywords: "calculator sarcina, data nasterii, saptamani sarcina, calculul sarcinii, trimestre sarcina, dezvoltare bebelus",
  },
  planificare: {
    title: "Ghid Complet pentru Planificarea Pensiei în România | calculatorsarcina.com",
    description: "Descoperă strategiile de planificare a pensiei, diferențele între piloni și greșelile de evitat. Ghid complet pentru o pensie liniștită.",
    keywords: "planificare pensie, pilonul II, pilonul III, strategii investiții pensie",
  },
  tipuri: {
    title: "Ghid Exhaustiv: Tipuri de Pensii din România | calculatorsarcina.com",
    description: "Descoperă ghidul exhaustiv despre toate tipurile de pensii disponibile în România: pensia pentru limită de vârstă, anticipată, de urmaș, de invaliditate.",
    keywords: "tipuri de pensii România, pensie de stat, pensie anticipată, pensie de urmaș",
  },
  legislatie: {
    title: "Legea Pensiilor 2024 pe Înțelesul Tuturor | calculatorsarcina.com",
    description: "Ghid complet despre legislația pensiilor din România, vârsta de pensionare, stagiul de cotizare și procedurile oficiale.",
    keywords: "legea pensiilor 2024, vârsta de pensionare, stagiu cotizare, legislație pensii",
  },
  blog: {
    title: "Blog Pensii România - Ghiduri și Sfaturi pentru Planificarea Pensiei | calculatorsarcina.com",
    description: "Articole actualizate despre sistemul de pensii din România, modificări legislative și sfaturi practice pentru o pensie decentă.",
    keywords: "blog pensii, ghiduri pensii, sfaturi planificare pensie, modificări legislative",
  },
};

export function getSEOData(page: string): SEOData {
  return pageSEO[page] || defaultSEO;
}
