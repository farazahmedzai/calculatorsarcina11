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
    <div className="min-h-screen bg-background">
      <SEOHead page="home" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-800"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32">
          <div className="text-center space-y-12 animate-fade-in">
            <div className="space-y-8">
              <Badge variant="secondary" className="px-8 py-3 text-sm font-bold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm">
                <Sparkles className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
                Calculator #1 pentru Pensii în România
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tight">
                  <span className="block text-foreground font-['Poppins']">
                    Calculează-ți
                  </span>
                  <span className="block text-gradient animate-gradient font-['Poppins']"> 
                    pensia viitoare
                  </span>
                </h1>
                <p className="text-2xl md:text-3xl font-light text-muted-foreground font-['Inter']">
                  în doar <span className="text-gradient-warm font-bold">30 de secunde</span>
                </p>
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                Planifică-ți viitorul financiar cu cel mai avansat calculator de pensii din România. 
                <span className="text-gradient font-bold">Complet gratuit.</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <Button 
                size="lg"
                className="relative h-16 px-12 text-xl font-bold rounded-2xl shadow-premium-lg hover:shadow-glow transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 group overflow-hidden"
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="absolute inset-0 gradient-primary opacity-100 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-forest-400/20 opacity-0 group-hover:opacity-100 transition-opacity animate-gradient"></div>
                <div className="relative flex items-center text-white">
                  <Calculator className="w-6 h-6 mr-3" />
                  Începe Calculul
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Button>
              
              <Link href="/planificare-pensie">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="h-16 px-12 text-xl font-bold rounded-2xl border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 backdrop-blur-xl glass group"
                >
                  <BookOpen className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Ghid Complet
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Calculator Section */}
          <div id="calculator" className="mt-24 animate-slide-up">
            <div className="max-w-3xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-gold-500/20 via-forest-500/20 to-gold-600/20 rounded-3xl blur-3xl opacity-60 group-hover:opacity-80 transition duration-700 animate-pulse-slow"></div>
                <div className="relative glass rounded-3xl shadow-premium-lg border border-border/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-50/30 via-forest-50/20 to-gold-100/30 dark:from-gold-900/20 dark:via-forest-900/10 dark:to-gold-800/20"></div>
                  <div className="relative">
                    <PensionCalculator />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-muted/40 to-muted/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-accent/10 text-accent border-accent/20 mb-6 rounded-full shadow-lg backdrop-blur-sm">
              <Star className="w-4 h-4 mr-2" />
              Resurse Complete
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Tot ce ai nevoie pentru
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> 
                planificarea perfectă
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Ghiduri complete, calculatoare avansate și legislație actualizată pentru deciții informate
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Feature 1 */}
            <div className="group animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <Card className="bg-card/60 backdrop-blur-xl border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-lg"></div>
                    <div className="relative bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-3 w-fit shadow-lg">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">Planificare Strategică</h3>
                  <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                    Strategii complete pentru maximizarea pensiei tale viitoare și optimizarea contribuțiilor.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 group/item">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="text-muted-foreground text-sm font-medium">Strategii de investiții</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="text-muted-foreground text-sm font-medium">Optimizarea contribuțiilor</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="text-muted-foreground text-sm font-medium">Greșeli de evitat</span>
                    </div>
                  </div>
                  
                  <Link href="/planificare-pensie">
                    <Button variant="link" className="p-0 text-primary hover:text-primary/80 font-semibold group/btn">
                      Explorează ghidul
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Feature 2 */}
            <div className="group animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Card className="bg-card/60 backdrop-blur-xl border border-accent/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-lg"></div>
                    <div className="relative bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-3 w-fit shadow-lg">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">Tipuri de Pensii</h3>
                  <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                    Ghid complet despre toate tipurile de pensii disponibile în sistemul românesc.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 group/item">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="text-muted-foreground text-sm font-medium">Pensia pentru limită de vârstă</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="text-muted-foreground text-sm font-medium">Pensia anticipată</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="text-muted-foreground text-sm font-medium">Pensia de invaliditate</span>
                    </div>
                  </div>
                  
                  <Link href="/tipuri-pensii">
                    <Button variant="link" className="p-0 text-primary hover:text-primary/80 font-semibold group/btn">
                      Vezi toate tipurile
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Feature 3 */}
            <div className="group animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Card className="bg-card/60 backdrop-blur-xl border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-lg"></div>
                    <div className="relative bg-gradient-to-r from-primary to-accent rounded-2xl p-3 w-fit shadow-lg">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">Legislație Actualizată</h3>
                  <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                    Legea pensiilor 2024 explicată simplu, vârsta de pensionare și proceduri.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 group/item">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="text-muted-foreground text-sm font-medium">Vârsta de pensionare</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="text-muted-foreground text-sm font-medium">Stagiul de cotizare</span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="text-muted-foreground text-sm font-medium">Proceduri oficiale</span>
                    </div>
                  </div>
                  
                  <Link href="/legislatie-resurse">
                    <Button variant="link" className="p-0 text-primary hover:text-primary/80 font-semibold group/btn">
                      Citește legislația
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Blog Preview */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-muted/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 mb-6 rounded-full shadow-lg backdrop-blur-sm">
              <BookOpen className="w-4 h-4 mr-2" />
              Ultimele Actualizări
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Rămâi la curent cu
              </span>
              <span className="block text-primary">legislația pensiilor</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Informații actualizate și analize despre sistemul de pensii din România
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-card/60 backdrop-blur-xl animate-pulse">
                  <div className="h-32 bg-muted/30 rounded-t-2xl"></div>
                  <CardContent className="p-6">
                    <div className="h-4 bg-muted/30 rounded mb-3"></div>
                    <div className="h-6 bg-muted/30 rounded mb-3"></div>
                    <div className="h-4 bg-muted/30 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {latestPosts.map((post, index) => (
                <div key={post.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Card className="bg-card/60 backdrop-blur-xl border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group h-full">
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary px-3 py-1 text-xs font-medium rounded-full">
                        {post.category}
                      </Badge>
                      <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="link" className="p-0 text-primary hover:text-primary/80 font-semibold group/btn">
                          Citește articolul
                          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button 
                variant="outline" 
                size="lg"
                className="h-12 px-8 text-lg font-semibold rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Vezi toate articolele
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/10 to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="px-6 py-2 text-sm font-medium bg-white/20 text-white border-white/30 mb-6 rounded-full shadow-lg backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Începe Acum - Complet Gratuit
            </Badge>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Calculează-ți pensia
              <span className="block">în 30 de secunde</span>
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Cel mai avansat calculator de pensii din România. Fără înregistrare, fără costuri ascunse, 
              rezultate instant.
            </p>
            
            <Button 
              size="lg"
              className="h-16 px-12 text-xl font-bold rounded-full bg-white text-primary hover:bg-white/95 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
              onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calculator className="w-6 h-6 mr-3" />
              Începe Calculul Acum
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
