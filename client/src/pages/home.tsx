import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo-head";
import { PensionCalculator } from "@/components/pension-calculator";
import { 
  CheckCircle, 
  Shield, 
  BarChart3, 
  Award, 
  TrendingUp, 
  FileText, 
  Calculator,
  Users,
  BookOpen
} from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function Home() {
  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
  });

  const latestPosts = blogPosts?.slice(0, 3) || [];

  return (
    <div className="min-h-screen bg-neutral-50">
      <SEOHead page="home" />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Calculatorul #1 din România
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
                  Calculează-ți
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> pensia </span>
                  în secunde
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                  Planifică-ți viitorul financiar cu precizie. Estimează pensia pe baza contribuțiilor și proiectează veniturile la bătrânețe.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                  onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculează Acum
                </Button>
                <Link href="/planificare-pensie">
                  <Button variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-xl font-semibold transition-all">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Ghid Complet
                  </Button>
                </Link>
              </div>
            </div>
            
            <div id="calculator" className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-20"></div>
              <div className="relative">
                <PensionCalculator />
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="border-t border-slate-200/60 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-100 rounded-full p-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-sm font-semibold text-slate-900">100% Gratuit</span>
                <span className="text-xs text-slate-500">Fără costuri ascunse</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 rounded-full p-3 mb-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-slate-900">Date Securizate</span>
                <span className="text-xs text-slate-500">Protejate SSL</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-100 rounded-full p-3 mb-3">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-semibold text-slate-900">Calcule Precise</span>
                <span className="text-xs text-slate-500">Algoritm verificat</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-orange-100 rounded-full p-3 mb-3">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <span className="text-sm font-semibold text-slate-900">Legislație 2024</span>
                <span className="text-xs text-slate-500">Actualizat recent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Silos */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Resurse Complete
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Planifică-ți Viitorul cu
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Încredere</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Descoperă ghidurile complete și instrumentele de calcul pentru a-ți planifica pensia în mod eficient
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Silo 1: Planificarea Pensiei */}
            <Card className="bg-white hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 w-fit mb-6 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Planificarea Pensiei</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Ghid complet pentru planificarea pensiei în România. Strategii de investiții, 
                  diferențe între piloni și greșeli de evitat.
                </p>
                <div className="space-y-3 mb-6">
                  <Link href="/blog">
                    <span className="block text-primary hover:text-secondary transition-colors font-medium cursor-pointer">
                      • Top 5 Greșeli de Evitat în Planificarea Pensiei
                    </span>
                  </Link>
                  <Link href="/blog">
                    <span className="block text-primary hover:text-secondary transition-colors font-medium cursor-pointer">
                      • Pilonul II vs. Pilonul III: Ghid de Decizie
                    </span>
                  </Link>
                  <Link href="/blog">
                    <span className="block text-primary hover:text-secondary transition-colors font-medium cursor-pointer">
                      • Strategii de Investiții pentru o Pensie Liniștită
                    </span>
                  </Link>
                </div>
                <Link href="/planificare-pensie">
                  <Button variant="link" className="p-0 text-primary hover:text-secondary font-semibold">
                    Vezi ghidul complet →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Silo 2: Tipuri de Pensii */}
            <Card className="bg-white hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-4 w-fit mb-6 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Tipuri de Pensii</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Ghid exhaustiv despre toate tipurile de pensii disponibile în sistemul public din România.
                </p>
                <div className="space-y-3 mb-6">
                  <Link href="/blog">
                    <span className="block text-primary hover:text-secondary transition-colors font-medium cursor-pointer">
                      • Totul despre Pensia pentru Limită de Vârstă
                    </span>
                  </Link>
                  <Link href="/blog">
                    <span className="block text-primary hover:text-secondary transition-colors font-medium cursor-pointer">
                      • Ghid Detaliat: Pensia Anticipată Parțială
                    </span>
                  </Link>
                  <Link href="/blog">
                    <span className="block text-primary hover:text-secondary transition-colors font-medium cursor-pointer">
                      • Pensia de Urmaș: Condiții de Acordare și Calcul
                    </span>
                  </Link>
                  <Link href="/blog">
                    <span className="block text-primary hover:text-secondary transition-colors font-medium cursor-pointer">
                      • Pensia de Invaliditate: Grade și Condiții
                    </span>
                  </Link>
                </div>
                <Link href="/tipuri-pensii">
                  <Button variant="link" className="p-0 text-primary hover:text-secondary font-semibold">
                    Explorează tipurile de pensii →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Silo 3: Legislație și Resurse */}
            <Card className="bg-white hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-4 w-fit mb-6 shadow-lg">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Legislație și Resurse</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Legea pensiilor 2024 pe înțelesul tuturor, vârsta de pensionare și procedurile oficiale.
                </p>
                <div className="space-y-3 mb-6">
                  <Link href="/blog">
                    <span className="block text-primary hover:text-secondary transition-colors font-medium cursor-pointer">
                      • Vârsta Standard de Pensionare: Tabel Complet
                    </span>
                  </Link>
                  <Link href="/blog">
                    <span className="block text-primary hover:text-secondary transition-colors font-medium cursor-pointer">
                      • Cum se Calculează Corect Stagiul de Cotizare?
                    </span>
                  </Link>
                  <Link href="/blog">
                    <span className="block text-primary hover:text-secondary transition-colors font-medium cursor-pointer">
                      • Indexarea Pensiilor: Mecanism și Impact
                    </span>
                  </Link>
                  <Link href="/blog">
                    <span className="block text-primary hover:text-secondary transition-colors font-medium cursor-pointer">
                      • Cum Cumperi Vechime în Muncă: Procedură
                    </span>
                  </Link>
                </div>
                <Link href="/legislatie-resurse">
                  <Button variant="link" className="p-0 text-primary hover:text-secondary font-semibold">
                    Citește ghidul legislativ →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Tools */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium mb-6">
              <Calculator className="w-4 h-4 mr-2" />
              Instrumente Avansate
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Calculatoare
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Specializate</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Instrumente dedicate pentru situații specifice de pensionare și planificare financiară
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl p-3 w-fit mb-6 shadow-lg">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Calculator Sarcina Anticipată</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Calculează penalizarea și valoarea pensiei anticipate parțiale sau complete.
                </p>
                <Button variant="link" className="p-0 text-blue-600 hover:text-blue-700 font-semibold group">
                  Utilizează calculatorul 
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-accent/10 rounded-lg p-3 w-fit mb-4">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">Calculator Contribuții Pilon III</h3>
                <p className="text-neutral-600 mb-4">
                  Estimează contribuțiile optime pentru pilonul III de pensii.
                </p>
                <Button variant="link" className="p-0 text-primary hover:text-secondary font-medium">
                  Calculează contribuțiile →
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
              <CardContent className="p-6">
                <div className="bg-orange-500/10 rounded-lg p-3 w-fit mb-4">
                  <BarChart3 className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">Calculator Stagiu Cotizare</h3>
                <p className="text-neutral-600 mb-4">
                  Verifică și calculează stagiul de cotizare necesar pentru pensionare.
                </p>
                <Button variant="link" className="p-0 text-primary hover:text-secondary font-medium">
                  Verifică stagiul →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
              Învață Totul Despre Sistemul de Pensii din România
            </h2>
            <p className="text-xl text-neutral-600">
              Articole actualizate cu cele mai recente modificări legislative și sfaturi practice
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-neutral-50 animate-pulse">
                  <div className="h-48 bg-neutral-200 rounded-t-xl"></div>
                  <CardContent className="p-6">
                    <div className="h-4 bg-neutral-200 rounded mb-2"></div>
                    <div className="h-6 bg-neutral-200 rounded mb-3"></div>
                    <div className="h-4 bg-neutral-200 rounded mb-4"></div>
                    <div className="h-4 bg-neutral-200 rounded w-1/2"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.map((post) => (
                <Card key={post.id} className="bg-neutral-50 hover:shadow-lg transition-shadow">
                  <img 
                    src={post.imageUrl || "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"} 
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-2">
                      {post.category}
                    </Badge>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-neutral-600 mb-4">
                      {post.excerpt}
                    </p>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="link" className="p-0 text-primary hover:text-secondary font-medium">
                        Citește articolul →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Vezi toate articolele
                <BookOpen className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Începe să-ți Planifici Pensia Astăzi
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Nu lăsa viitorul financiar la întâmplare. Folosește instrumentele noastre gratuite 
            și ghidurile complete pentru a-ți asigura o pensie decentă.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-accent hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
              onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Calculează Pensia Acum
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all">
              Descarcă Ghidul PDF
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
