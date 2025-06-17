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
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Calculator Pensie Online: Află Pensia Ta în Câteva Secunde
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Planifică-ți viitorul financiar cu cel mai precis calculator de pensie din România. 
                Estimează-ți pensia pe baza contribuțiilor actuale și proiectează-ți veniturile la bătrânețe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-accent hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
                  onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Calculează Pensia Acum
                </Button>
                <Link href="/planificare-pensie">
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all">
                    Ghid Complet Pensii
                  </Button>
                </Link>
              </div>
            </div>
            
            <div id="calculator">
              <PensionCalculator />
            </div>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="border-t border-blue-400/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-white/10 rounded-full p-3 mb-2">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium">100% Gratuit</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/10 rounded-full p-3 mb-2">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium">Date Securizate</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/10 rounded-full p-3 mb-2">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium">Calcule Precise</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/10 rounded-full p-3 mb-2">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium">Legislație 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Silos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
              Planifică-ți Viitorul: Unelte și Resurse Esențiale
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Descoperă ghidurile complete și instrumentele de calcul pentru a-ți planifica pensia în mod eficient
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Silo 1: Planificarea Pensiei */}
            <Card className="bg-neutral-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-primary/10 rounded-xl p-4 w-fit mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Planificarea Pensiei</h3>
                <p className="text-neutral-600 mb-6">
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
            <Card className="bg-neutral-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-accent/10 rounded-xl p-4 w-fit mb-6">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Tipuri de Pensii</h3>
                <p className="text-neutral-600 mb-6">
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
            <Card className="bg-neutral-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-orange-500/10 rounded-xl p-4 w-fit mb-6">
                  <FileText className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Legislație și Resurse</h3>
                <p className="text-neutral-600 mb-6">
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
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
              Instrumente de Calcul Specializate
            </h2>
            <p className="text-xl text-neutral-600">
              Calculatoare dedicate pentru situații specifice de pensionare
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">Calculator Pensie Anticipată</h3>
                <p className="text-neutral-600 mb-4">
                  Calculează penalizarea și valoarea pensiei anticipate parțiale sau complete.
                </p>
                <Button variant="link" className="p-0 text-primary hover:text-secondary font-medium">
                  Utilizează calculatorul →
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
