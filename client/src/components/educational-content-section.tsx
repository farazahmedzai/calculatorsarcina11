import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  BookOpen, 
  Calculator, 
  FileText, 
  TrendingUp, 
  Users, 
  Calendar,
  ArrowRight,
  Clock,
  Star
} from "lucide-react";

interface EducationalArticle {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  href: string;
  featured?: boolean;
}

interface EducationalContentSectionProps {
  title: string;
  subtitle?: string;
  articles: EducationalArticle[];
  showFeatured?: boolean;
  className?: string;
}

export function EducationalContentSection({ 
  title, 
  subtitle, 
  articles, 
  showFeatured = false,
  className = "" 
}: EducationalContentSectionProps) {
  const featuredArticles = showFeatured ? articles.filter(article => article.featured) : [];
  const regularArticles = showFeatured ? articles.filter(article => !article.featured) : articles;

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'planificare':
        return <TrendingUp className="w-5 h-5" />;
      case 'legislatie':
      case 'legislație':
        return <FileText className="w-5 h-5" />;
      case 'investitii':
      case 'investiții':
        return <Users className="w-5 h-5" />;
      case 'calculatoare':
        return <Calculator className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-neutral-800 mb-8 flex items-center">
              <Star className="w-6 h-6 mr-2 text-yellow-500" />
              Articole Recomandate
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <Card key={index} className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {article.category}
                      </Badge>
                      <Badge className="bg-yellow-100 text-yellow-800">
                        <Star className="w-3 h-3 mr-1" />
                        Recomandat
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-neutral-500">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </div>
                        <Badge variant="outline" className={getDifficultyColor(article.difficulty)}>
                          {article.difficulty}
                        </Badge>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-primary hover:text-primary/80 group flex items-center gap-1 cursor-pointer"
                        onClick={() => window.location.href = article.href}
                      >
                        Citește mai mult
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Articles Grid */}
        {regularArticles.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {getCategoryIcon(article.category)}
                      {article.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-neutral-500">
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {article.readTime}
                      </div>
                      <Badge variant="outline" className={getDifficultyColor(article.difficulty)}>
                        {article.difficulty}
                      </Badge>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-primary hover:text-primary/80 p-2 flex items-center gap-2 cursor-pointer"
                      onClick={() => window.location.href = article.href}
                    >
                      Citește mai mult
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// Sample educational content for pension topics
export const pensionEducationalContent: EducationalArticle[] = [
  {
    title: "Top 5 Greșeli de Evitat în Planificarea Pensiei",
    excerpt: "Descoperă cele mai comune greșeli pe care le fac românii când își planifică pensia și cum să le eviți.",
    category: "Planificare",
    readTime: "15 min",
    difficulty: "Beginner",
    href: "/blog/top-5-greseli-planificare-pensie",
    featured: true
  },
  {
    title: "Pilonul II vs. Pilonul III: Ghid de Decizie pentru 2024",
    excerpt: "Compară avantajele și dezavantajele celor două piloni și ia decizia corectă pentru situația ta financiară.",
    category: "Investiții",
    readTime: "12 min",
    difficulty: "Intermediate",
    href: "/blog/pilonul-2-vs-pilonul-3-ghid-decizie-2024",
    featured: true
  },
  {
    title: "Vârsta Standard de Pensionare în România: Tabel Complet 2024",
    excerpt: "Ghid actualizat cu toate modificările legislative privind vârsta de pensionare pentru bărbați și femei.",
    category: "Legislație",
    readTime: "10 min",
    difficulty: "Intermediate",
    href: "/blog/varsta-standard-pensionare-romania-2024"
  },
  {
    title: "Calculator Pensie: Planifică-ți Viitorul Financiar",
    excerpt: "Folosește calculatorul nostru pentru a estima pensia și pentru a lua decizii informate despre viitorul tău.",
    category: "Calculatoare",
    readTime: "8 min",
    difficulty: "Beginner",
    href: "/planificare-pensie"
  },
  {
    title: "Legislația Pensiilor: Resurse și Proceduri Oficiale",
    excerpt: "Accesează informații complete despre legislația actuală și procedurile oficiale pentru pensionare.",
    category: "Legislație",
    readTime: "12 min",
    difficulty: "Intermediate",
    href: "/legislatie-resurse"
  },
  {
    title: "Calculator Sarcină: Planificare pentru Viitoarele Mame",
    excerpt: "Calculează data nașterii și urmărește dezvoltarea sarcinii cu ghidurile noastre complete.",
    category: "Planificare",
    readTime: "15 min",
    difficulty: "Beginner",
    href: "/calculator-sarcina"
  }
];

// Sample educational content for pregnancy topics  
export const pregnancyEducationalContent: EducationalArticle[] = [
  {
    title: "Ghidul Complet al Sarcinii: De la Concepție la Naștere",
    excerpt: "Tot ce trebuie să știi despre sarcină - dezvoltarea bebelușului, controale medicale și pregătirea pentru naștere.",
    category: "Sarcină",
    readTime: "20 min",
    difficulty: "Beginner",
    href: "/blog/ghidul-complet-sarcina",
    featured: true
  },
  {
    title: "Calcularea Datei Nașterii: Metode și Precizie",
    excerpt: "Comparația metodelor de calculare a datei nașterii și factorii care influențează precizia estimărilor.",
    category: "Calculatoare", 
    readTime: "8 min",
    difficulty: "Intermediate",
    href: "/blog/calcularea-datei-nasterii-metode",
    featured: true
  },
  {
    title: "Dezvoltarea Bebelușului pe Săptămâni: Primul Trimestru",
    excerpt: "Urmărește dezvoltarea detaliată a bebelușului în primele 12 săptămâni de sarcină, cu jaloanele importante.",
    category: "Dezvoltare",
    readTime: "12 min", 
    difficulty: "Beginner",
    href: "/blog/dezvoltare-bebe-primul-trimestru"
  },
  {
    title: "Analize și Controale Medicale în Sarcină: Calendar Complet",
    excerpt: "Programul complet de controale medicale și analize necesare pe parcursul celor 9 luni de sarcină.",
    category: "Medical",
    readTime: "15 min",
    difficulty: "Intermediate", 
    href: "/blog/analize-controale-medicale-sarcina"
  },
  {
    title: "Alimentația în Sarcină: Ghid Nutrițional pentru Fiecare Trimestru",
    excerpt: "Recomandări nutriționale specifice pentru fiecare etapă a sarcinii, cu liste de alimente recomandate și interzise.",
    category: "Nutriție",
    readTime: "18 min",
    difficulty: "Beginner",
    href: "/blog/alimentatie-sarcina-ghid-nutritional"
  },
  {
    title: "Ecografiile în Sarcină: Când se Fac și Ce Relevă",
    excerpt: "Tipurile de ecografii din sarcină, momentul optim pentru fiecare și informațiile pe care le oferă.",
    category: "Medical", 
    readTime: "10 min",
    difficulty: "Intermediate",
    href: "/blog/ecografii-sarcina-tipuri-moment"
  }
];