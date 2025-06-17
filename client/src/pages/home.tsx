import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  Sparkles
} from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function Home() {
  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
  });

  const latestPosts = blogPosts?.slice(0, 3) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      <SEOHead page="home" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="px-6 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
                <Sparkles className="w-4 h-4 mr-2" />
                Calculator Oficial de Pensii România
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Calculează-ți
                <span className="block text-primary"> pensia viitoare</span>
                <span className="text-3xl md:text-5xl lg:text-6xl text-muted-foreground">în 30 de secunde</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Instrument gratuit pentru planificarea pensiei tale. Estimează valoarea pensiei pe baza contribuțiilor actuale.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="h-14 px-8 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90"
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calculator className="w-5 h-5 mr-2" />
                Începe Calculul
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Link href="/planificare-pensie">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold rounded-full border-2 hover:bg-primary/5 transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Ghid Complet
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Calculator Section */}
          <div id="calculator" className="mt-20">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-30"></div>
                <div className="relative bg-card rounded-3xl shadow-2xl overflow-hidden">
                  <PensionCalculator />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-accent/10 text-accent border-accent/20 mb-6">
              <BarChart3 className="w-4 h-4 mr-2" />
              Resurse Complete
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Tot ce ai nevoie pentru
              <span className="block text-primary"> planificarea pensiei</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ghiduri complete, calculatoare avansate și legislație actualizată pentru deciții informate
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="bg-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="bg-primary/10 rounded-2xl p-4 w-fit mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Planificare Strategică</h3>
                <p className="text-muted-foreground mb-6">
                  Strategii complete pentru maximizarea pensiei tale viitoare și optimizarea contribuțiilor.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Strategii de investiții</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Optimizarea contribuțiilor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Greșeli de evitat</span>
                  </li>
                </ul>
                <Link href="/planificare-pensie">
                  <Button variant="link" className="p-0 text-primary hover:text-primary/80 font-semibold group">
                    Explorează ghidul
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="bg-accent/10 rounded-2xl p-4 w-fit mb-6">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Tipuri de Pensii</h3>
                <p className="text-muted-foreground mb-6">
                  Ghid complet despre toate tipurile de pensii disponibile în sistemul românesc.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Pensia pentru limită de vârstă</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Pensia anticipată</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Pensia de invaliditate</span>
                  </li>
                </ul>
                <Link href="/tipuri-pensii">
                  <Button variant="link" className="p-0 text-primary hover:text-primary/80 font-semibold group">
                    Vezi toate tipurile
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="bg-primary/10 rounded-2xl p-4 w-fit mb-6">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Legislație Actualizată</h3>
                <p className="text-muted-foreground mb-6">
                  Legea pensiilor 2024 explicată simplu, vârsta de pensionare și proceduri.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Vârsta de pensionare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Stagiul de cotizare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Proceduri oficiale</span>
                  </li>
                </ul>
                <Link href="/legislatie-resurse">
                  <Button variant="link" className="p-0 text-primary hover:text-primary/80 font-semibold group">
                    Citește legislația
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Simple Blog Preview */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ultimele Articole
            </h2>
            <p className="text-lg text-muted-foreground">
              Informații actualizate despre sistemul de pensii din România
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-card animate-pulse">
                  <div className="h-32 bg-muted rounded-t-xl"></div>
                  <CardContent className="p-6">
                    <div className="h-4 bg-muted rounded mb-2"></div>
                    <div className="h-6 bg-muted rounded mb-3"></div>
                    <div className="h-4 bg-muted rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {latestPosts.map((post) => (
                <Card key={post.id} className="bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary">
                      {post.category}
                    </Badge>
                    <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="link" className="p-0 text-primary hover:text-primary/80 font-semibold group">
                        Citește mai mult
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button 
                variant="outline" 
                size="lg"
                className="h-12 px-8 font-semibold rounded-full border-2 hover:bg-primary/5"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Vezi toate articolele
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Calculează-ți pensia în 30 de secunde
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Instrument gratuit pentru planificarea viitorului tău financiar. Fără înregistrare, fără costuri.
          </p>
          <Button 
            size="lg"
            variant="secondary"
            className="h-14 px-8 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
            onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Calculator className="w-5 h-5 mr-2" />
            Începe Calculul Acum
          </Button>
        </div>
      </section>
    </div>
  );
}
