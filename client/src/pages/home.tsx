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
      <section className="relative overflow-hidden bg-gradient-hero dark:bg-gradient-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center space-y-12">
            <div className="space-y-8">
              <Badge className="px-6 py-2 text-sm font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full">
                <Calculator className="w-4 h-4 mr-2" />
                Calculator Pensii România
              </Badge>
              
              <div className="space-y-6">
                <h1 className="hero-text text-gradient">
                  Calculează-ți Sarcina și Pensia
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                  Planifică-ți viitorul cu calculatoarele noastre avansate pentru sarcină și pensie
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/calculator-sarcina">
                  <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-pink-600 hover:bg-pink-700">
                    <Baby className="w-5 h-5 mr-2" />
                    Calculator Sarcină
                  </Button>
                </Link>
                <Button size="lg" className="px-8 py-4 text-lg font-semibold" onClick={() => {
                  const calculatorSection = document.getElementById('pension-calculator');
                  calculatorSection?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculator Pensie
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="section-title">Avantajele Calculatorului Nostru</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Utilizează algoritmi avansați pentru calcularea precisă a pensiei tale viitoare
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-2 hover:border-primary/20 transition-colors">
              <CardContent className="space-y-4 pt-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Calcul Instant</h3>
                <p className="text-muted-foreground">
                  Rezultate precise în mai puțin de 30 de secunde
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-2 hover:border-primary/20 transition-colors">
              <CardContent className="space-y-4 pt-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">100% Sigur</h3>
                <p className="text-muted-foreground">
                  Datele tale sunt protejate și nu sunt stocate
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-2 hover:border-primary/20 transition-colors">
              <CardContent className="space-y-4 pt-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Algoritm Avansat</h3>
                <p className="text-muted-foreground">
                  Bazat pe ultima legislație românească
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <PensionCalculator />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">50,000+</div>
              <div className="text-primary-foreground/80">Calcule Efectuate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">99.9%</div>
              <div className="text-primary-foreground/80">Acuratețe</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">4.9★</div>
              <div className="text-primary-foreground/80">Rating Utilizatori</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pension Calculator Section */}
      <section id="pension-calculator" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="section-title">Calculator de Pensii</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Calculează-ți pensia viitoare pe baza contribuțiilor actuale
            </p>
          </div>
          
          <PensionCalculator />
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="section-title">Ultimele Articole</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Informații utile despre pensii și planificare financiară
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="p-6">
                  <div className="animate-pulse space-y-4">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-full"></div>
                    <div className="h-3 bg-muted rounded w-2/3"></div>
                  </div>
                </Card>
              ))
            ) : (
              latestPosts.map((post) => (
                <Card key={post.id} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="space-y-4 p-0">
                    <h3 className="text-lg font-semibold line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.createdAt).toLocaleDateString('ro-RO')}
                      </span>
                      <Button variant="ghost" size="sm">
                        Citește
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/blog">
                Vezi Toate Articolele
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h2 className="section-title">Gata să-ți Calculezi Pensia?</h2>
            <p className="text-xl text-muted-foreground">
              Află acum cât vei primi la pensie și ia deciziile corecte pentru viitorul tău
            </p>
            <Button size="lg" className="px-12 py-6 text-xl">
              <Calculator className="w-6 h-6 mr-3" />
              Începe Calculul Acum
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}