import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo-head";
import { PensionCalculator } from "@/components/pension-calculator";
import { 
  ArrowRight, 
  Shield, 
  BarChart3, 
  Star, 
  TrendingUp, 
  FileText, 
  Calculator,
  Users,
  BookOpen,
  CheckCircle2,
  Zap,
  Clock,
  Award,
  Baby
} from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function Home() {
  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
  });

  const latestPosts = blogPosts?.slice(0, 3) || [];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead page="home" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 to-orange-50 dark:from-slate-900 dark:to-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-16 lg:py-20">
          <div className="text-center space-y-8">
            <Badge className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border border-primary/20 rounded-full">
              <Calculator className="w-4 h-4 mr-2" />
              Calculator Pensii România
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Calculează-ți <span className="text-gradient">Sarcina</span> și <span className="text-gradient">Pensia</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Planifică-ți viitorul cu calculatoarele noastre precise pentru sarcină și pensie
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link href="/calculator-sarcina">
                <Button size="lg" className="px-6 py-3 text-base font-medium bg-orange-500 hover:bg-orange-600 text-white">
                  <Baby className="w-4 h-4 mr-2" />
                  Calculator Sarcină
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="px-6 py-3 text-base font-medium border-primary text-primary hover:bg-primary hover:text-white" onClick={() => {
                const calculatorSection = document.getElementById('pension-calculator');
                calculatorSection?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <Calculator className="w-4 h-4 mr-2" />
                Calculator Pensie
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 bg-gradient-to-r from-teal-50/50 to-orange-50/50 dark:bg-slate-50/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Avantajele Calculatorului Nostru</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Utilizează algoritmi avansați pentru calcularea precisă a pensiei tale viitoare
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 border-teal-100 hover:border-teal-200">
              <CardContent className="space-y-3 pt-0">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-teal-800">Calcul Instant</h3>
                <p className="text-sm text-muted-foreground">
                  Rezultate precise în mai puțin de 30 de secunde
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-200">
              <CardContent className="space-y-3 pt-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-orange-800">100% Sigur</h3>
                <p className="text-sm text-muted-foreground">
                  Datele tale sunt protejate și nu sunt stocate
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 border-teal-100 hover:border-teal-200">
              <CardContent className="space-y-3 pt-0">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-teal-800">Algoritm Avansat</h3>
                <p className="text-sm text-muted-foreground">
                  Bazat pe ultima legislația românească
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-bold">50,000+</div>
              <div className="text-sm text-teal-100">Calcule Efectuate</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-bold">99.9%</div>
              <div className="text-sm text-teal-100">Acuratețe</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-bold">4.9★</div>
              <div className="text-sm text-teal-100">Rating Utilizatori</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pension Calculator Section */}
      <section id="pension-calculator" className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-3 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Calculator de Pensii</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Calculează-ți pensia viitoare pe baza contribuțiilor actuale
            </p>
          </div>
          
          <PensionCalculator />
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 bg-gradient-to-br from-orange-50 to-teal-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-3 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Ultimele Articole</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Informații utile despre pensii și planificare financiară
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="p-4 border-orange-100">
                  <div className="animate-pulse space-y-3">
                    <div className="h-4 bg-orange-200 rounded w-3/4"></div>
                    <div className="h-3 bg-orange-100 rounded w-full"></div>
                    <div className="h-3 bg-orange-100 rounded w-2/3"></div>
                  </div>
                </Card>
              ))
            ) : (
              latestPosts.map((post) => (
                <Card key={post.id} className="p-4 hover:shadow-lg transition-all duration-300 border-orange-100 hover:border-orange-200 hover:scale-105">
                  <CardContent className="space-y-3 p-0">
                    <h3 className="text-base font-semibold line-clamp-2 text-teal-800">{post.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.createdAt).toLocaleDateString('ro-RO')}
                      </span>
                      <Button variant="ghost" size="sm" className="text-xs text-orange-600 hover:text-orange-700 hover:bg-orange-50">
                        Citește
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-50" asChild>
              <Link href="/blog">
                Vezi Toate Articolele
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Gata să-ți Calculezi Pensia?</h2>
            <p className="text-base text-muted-foreground">
              Află acum cât vei primi la pensie și ia deciziile corecte pentru viitorul tău
            </p>
            <Button size="lg" className="px-8 py-3">
              <Calculator className="w-4 h-4 mr-2" />
              Începe Calculul Acum
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}