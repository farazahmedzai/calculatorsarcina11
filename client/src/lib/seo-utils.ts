export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
  robots?: string;
  structuredData?: any;
}

export const defaultSEO: SEOData = {
  title: "Calculator Sarcina 2025 - Calculează Online Sarcina și Pensia | calculatorsarcina.com",
  description: "Folosește calculatorul de sarcină și pensie online pentru a-ți estima data nașterii și venitul la bătrânețe. Planifică-ți viitorul cu instrumentele noastre complete.",
  keywords: "calculator sarcina, calculator pensie, data nasterii, sarcina romania, pensie romania, calculatorsarcina.com",
};

export const pageSEO: Record<string, SEOData> = {
  home: {
    title: "Calculator Sarcina și Pensie Online | calculatorsarcina.com",
    description: "Calculatoare online pentru sarcină și pensie. Află data nașterii și estimează pensia viitoare cu instrumentele noastre complete.",
    keywords: "calculator sarcina, calculator pensie, data nasterii, sarcina romania, pensie romania",
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    ogImage: "https://calculatorsarcina.com/assets/og-home.jpg",
  },
  "404": {
    title: "Pagina nu a fost găsită - 404 | Calculator Sarcina",
    description: "Pagina pe care o cauți nu există. Explorează calculatoarele noastre pentru sarcină și pensie sau navighează prin secțiunile principale.",
    keywords: "404, pagina nu a fost gasita, calculator sarcina, eroare",
    robots: "noindex, follow",
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
    title: "Legea Pensiilor 2025 pe Înțelesul Tuturor | calculatorsarcina.com",
    description: "Ghid complet despre legislația pensiilor din România, vârsta de pensionare, stagiul de cotizare și procedurile oficiale.",
    keywords: "legea pensiilor 2025, vârsta de pensionare, stagiu cotizare, legislație pensii",
  },
  blog: {
    title: "Blog Pensii România - Ghiduri și Sfaturi pentru Planificarea Pensiei | calculatorsarcina.com",
    description: "Articole actualizate despre sistemul de pensii din România, modificări legislative și sfaturi practice pentru o pensie decentă.",
    keywords: "blog pensii, ghiduri pensii, sfaturi planificare pensie, modificări legislative",
  },
  "despre-noi": {
    title: "Despre Noi - Calculator Sarcina | Echipa și Misiunea Noastră",
    description: "Descoperă echipa Calculator Sarcina, misiunea noastră și valorile care ne ghidează în oferirea celor mai precise calculatoare pentru sarcină și pensie în România.",
    keywords: "despre calculator sarcina, echipa, misiune, valori, experienta, specializare romania",
    robots: "index, follow",
    ogImage: "https://calculatorsarcina.com/assets/og-about.jpg",
  },
};

export function getSEOData(page: string): SEOData {
  return pageSEO[page] || defaultSEO;
}
