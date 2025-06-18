import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo-head";
import { StructuredData } from "@/components/structured-data";
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
  Baby,
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
      <StructuredData 
        type="website" 
        data={{}} 
      />
      <StructuredData 
        type="organization" 
        data={{}} 
      />
      <StructuredData 
        type="calculator" 
        data={{
          name: "Calculator Sarcină și Pensie Online",
          description: "Calculatoare profesionale pentru sarcină și pensie conform legislației românești",
          url: "https://calculatorsarcina.com",
          features: [
            "Calculator sarcină cu 3 metode de calcul",
            "Calculator pensie conform legii 2025",
            "Rezultate instant și precise",
            "Ghiduri complete incluse"
          ],
          screenshot: "https://calculatorsarcina.com/assets/calculator-screenshot.jpg"
        }} 
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-indigo-50">
        {/* Modern Geometric Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000ms"></div>
          <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-4000ms"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 bg-[#f9e8f9]">
          <div className="text-center space-y-10">
            <div className="inline-flex items-center justify-center space-x-4">
              <Badge className="px-4 py-2 text-sm font-semibold bg-white/90 backdrop-blur-sm text-slate-700 border border-slate-200 rounded-full shadow-lg">
                <Sparkles className="w-4 h-4 mr-2 text-purple-500" />
                Calculator Profesional România
              </Badge>
              <Badge className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-0 rounded-full shadow-lg">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                100% Gratuit
              </Badge>
            </div>
            
            <div className="space-y-8">
              <h1 className="hero-text font-bold text-slate-900 leading-tight">
                Calculează-ți <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Sarcina</span> și <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Pensia</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Platformá modernă și precisă pentru planificarea viitorului tău financiar și familial, conform legislației românești
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/calculator-sarcina">
                <Button size="lg" className="group px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white hover:text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 [&>*]:text-white">
                  <Baby className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform text-white" />
                  <span className="text-white">Calculator Sarcină</span>
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform text-white" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="group px-8 py-4 text-lg font-semibold border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white" onClick={() => {
                const calculatorSection = document.getElementById('pension-calculator');
                calculatorSection?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <Calculator className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform text-slate-700" />
                <span className="text-slate-700">Calculator Pensie</span>
                <TrendingUp className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform text-slate-700" />
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-12">
              <div className="flex items-center space-x-3 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 shadow-sm">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-slate-700">Date Securizate</span>
              </div>
              <div className="flex items-center space-x-3 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 shadow-sm">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium text-slate-700">Rezultate Instant</span>
              </div>
              <div className="flex items-center space-x-3 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 shadow-sm">
                <Award className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-slate-700">Legislație 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge className="px-4 py-2 text-sm font-medium bg-purple-50 text-purple-700 border border-purple-200 rounded-full">
              <Star className="w-4 h-4 mr-2" />
              De ce să ne alegi
            </Badge>
            <h2 className="section-title text-slate-900">
              Soluții Complete pentru <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Viitorul Tău</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Tehnologie avansată și calcule precise conform legislației românești actuale
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Feature 1 - Pregnancy Calculator */}
            <Card className="group relative overflow-hidden p-8 bg-gradient-to-br from-pink-50 to-purple-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 rounded-2xl">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              <CardContent className="relative space-y-6 p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Baby className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-800">Calculator Sarcină</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Calculează data nașterii, săptămâna de sarcină și etapele importante ale dezvoltării bebelușului
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary" className="text-xs bg-pink-100 text-pink-700 border-0">DPM</Badge>
                  <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700 border-0">Concepție</Badge>
                  <Badge variant="secondary" className="text-xs bg-indigo-100 text-indigo-700 border-0">Ecografie</Badge>
                </div>
              </CardContent>
            </Card>
            
            {/* Feature 2 - Pension Calculator */}
            <Card className="group relative overflow-hidden p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 rounded-2xl">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              <CardContent className="relative space-y-6 p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-800">Calculator Pensie</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Calculează pensia viitoare bazată pe contribuții, vârstă și tipul de pensie dorit
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700 border-0">Toate tipurile</Badge>
                  <Badge variant="secondary" className="text-xs bg-indigo-100 text-indigo-700 border-0">Legislație 2025</Badge>
                </div>
              </CardContent>
            </Card>
            
            {/* Feature 3 - Security & Trust */}
            <Card className="group relative overflow-hidden p-8 bg-gradient-to-br from-emerald-50 to-teal-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 rounded-2xl">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              <CardContent className="relative space-y-6 p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-800">Securitate Maximă</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Datele personale sunt protejate și nu sunt stocate pe servere externe
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary" className="text-xs bg-emerald-100 text-emerald-700 border-0">GDPR</Badge>
                  <Badge variant="secondary" className="text-xs bg-teal-100 text-teal-700 border-0">SSL</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Additional Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="text-center space-y-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:shadow-lg hover:border-purple-300 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Rezultate Instant</h4>
                <p className="text-sm text-slate-600 mt-1">Sub 5 secunde</p>
              </div>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:shadow-lg hover:border-indigo-300 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">50,000+ Utilizatori</h4>
                <p className="text-sm text-slate-600 mt-1">Încredere verificată</p>
              </div>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:shadow-lg hover:border-emerald-300 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Ghiduri Complete</h4>
                <p className="text-sm text-slate-600 mt-1">Educație gratuită</p>
              </div>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Legislație 2025</h4>
                <p className="text-sm text-slate-600 mt-1">Mereu actualizat</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-gray-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-12 left-12 w-24 h-24 bg-white/5 rounded-full"></div>
          <div className="absolute bottom-12 right-12 w-32 h-32 bg-white/5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-400/20 rounded-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Încrederea Utilizatorilor Noștri</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Platformă validată de mii de români care și-au planificat viitorul cu ajutorul nostru
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group-hover:bg-white/15 transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-white">125K+</div>
                <div className="text-sm text-white/80 font-medium">Calcule Efectuate</div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group-hover:bg-white/15 transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-white">99.9%</div>
                <div className="text-sm text-white/80 font-medium">Acuratețe Calculare</div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group-hover:bg-white/15 transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-white">4.9★</div>
                <div className="text-sm text-white/80 font-medium">Rating Utilizatori</div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group-hover:bg-white/15 transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-white">85K+</div>
                <div className="text-sm text-white/80 font-medium">Utilizatori Activi</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pension Calculator Section */}
      <section id="pension-calculator" className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-3 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Calculator de Pensii</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Calculează-ți pensia viitoare pe baza contribuțiilor actuale
            </p>
          </div>
          
          <PensionCalculator />
        </div>
      </section>
      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-purple-50/30 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge className="px-4 py-2 text-sm font-medium bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full">
              <BookOpen className="w-4 h-4 mr-2" />
              Educație și informare
            </Badge>
            <h2 className="section-title text-slate-900">
              Ghiduri și <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Resurse</span> Educaționale
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Articole specializate despre sarcină, pensii și planificare financiară, scrise de experți
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="group p-8 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl animate-pulse">
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-slate-200 rounded-2xl"></div>
                    <div className="h-6 bg-slate-200 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-slate-100 rounded w-full"></div>
                      <div className="h-4 bg-slate-100 rounded w-2/3"></div>
                    </div>
                    <div className="h-8 bg-slate-100 rounded w-24"></div>
                  </div>
                </Card>
              ))
            ) : (
              latestPosts.map((post, index) => {
                const colors = [
                  { bg: 'from-purple-50 to-purple-100/50', border: 'border-0', icon: 'bg-gradient-to-br from-purple-500 to-purple-600', text: 'text-purple-800', button: 'text-purple-600 hover:text-purple-700 hover:bg-purple-50' },
                  { bg: 'from-indigo-50 to-indigo-100/50', border: 'border-0', icon: 'bg-gradient-to-br from-indigo-500 to-indigo-600', text: 'text-indigo-800', button: 'text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50' },
                  { bg: 'from-blue-50 to-blue-100/50', border: 'border-0', icon: 'bg-gradient-to-br from-blue-500 to-blue-600', text: 'text-blue-800', button: 'text-blue-600 hover:text-blue-700 hover:bg-blue-50' }
                ];
                const colorScheme = colors[index % colors.length];
                
                return (
                  <Card key={post.id} className={`group relative overflow-hidden p-8 bg-gradient-to-br ${colorScheme.bg} ${colorScheme.border} shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 rounded-2xl`}>
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
                    <CardContent className="relative space-y-6 p-0">
                      <div className={`w-16 h-16 ${colorScheme.icon} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <FileText className="w-8 h-8 text-white" />
                      </div>
                      <div className="space-y-3">
                        <h3 className={`text-xl font-bold ${colorScheme.text} leading-tight`}>{post.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{post.excerpt}</p>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-sm text-slate-500 font-medium">
                          {new Date(post.createdAt).toLocaleDateString('ro-RO', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                        <Button variant="ghost" size="sm" className={`${colorScheme.button} font-medium group/btn`}>
                          Citește mai mult
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            )}
          </div>
          
          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="px-8 py-4 text-base font-semibold border-2 border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-400 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
              <Link href="/blog">
                <BookOpen className="w-5 h-5 mr-3" />
                Explorează Toate Ghidurile
                <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-8 left-8 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
          <div className="absolute bottom-8 right-8 w-24 h-24 bg-pink-300/20 rounded-full animate-float animation-delay-2000ms"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse-slow"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="space-y-8 text-white">
            <div className="space-y-4">
              <Badge className="inline-flex items-center px-6 py-2 text-sm font-semibold bg-white/20 text-white border border-white/30 rounded-full backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Începe acum calcularea
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Planifică-ți <span className="text-pink-200">Viitorul</span> cu Încredere
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Fie că aștepți un copil sau plănuiești pensia, te ajutăm să iei deciziile corecte pentru familia ta
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/calculator-sarcina">
                <Button size="lg" className="group px-8 py-4 text-lg font-semibold bg-white text-purple-700 hover:bg-purple-50 hover:text-purple-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Baby className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                  Calculator Sarcină
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="group px-8 py-4 text-lg font-semibold border-2 border-white/50 text-[#683fe7] hover:bg-white/10 hover:border-white transition-all duration-300 hover:scale-105" onClick={() => {
                const calculatorSection = document.getElementById('pension-calculator');
                calculatorSection?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <Calculator className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                Calculator Pensie
                <TrendingUp className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-white/90">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-pink-300" />
                <span className="text-sm font-medium text-white">100% Gratuit</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-pink-300" />
                <span className="text-sm font-medium text-white">Rezultate Instant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-pink-300" />
                <span className="text-sm font-medium text-white">Date Securizate</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}