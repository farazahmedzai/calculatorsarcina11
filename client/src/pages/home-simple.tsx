import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Shield, 
  Star, 
  Calculator,
  Baby,
  Sparkles,
  Users,
  BookOpen,
  CheckCircle2,
  Zap,
  Award
} from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function HomeSimple() {
  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
  });

  const latestPosts = blogPosts?.slice(0, 3) || [];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-indigo-50">
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
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
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                Calculează-ți <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Sarcina</span> și <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Pensia</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Platformă modernă și precisă pentru planificarea viitorului tău financiar și familial, conform legislației românești
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/calculator-sarcina">
                <Button size="lg" className="group px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white hover:text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0">
                  <Baby className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform text-white" />
                  <span className="text-white">Calculator Sarcină</span>
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform text-white" />
                </Button>
              </Link>
              <Link href="/planificare-pensie">
                <Button size="lg" variant="outline" className="group px-8 py-4 text-lg font-semibold border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
                  <Calculator className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform text-slate-700" />
                  <span className="text-slate-700">Calculator Pensie</span>
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform text-slate-700" />
                </Button>
              </Link>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Soluții Complete pentru <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Viitorul Tău</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Tehnologie avansată și calcule precise conform legislației românești actuale
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Feature 1 - Pregnancy Calculator */}
            <Card className="group relative overflow-hidden p-8 bg-gradient-to-br from-pink-50 to-purple-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 rounded-2xl">
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

      {/* Blog Section */}
      {!isLoading && latestPosts.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <Badge className="px-4 py-2 text-sm font-medium bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full mb-4">
                <BookOpen className="w-4 h-4 mr-2" />
                Blog și Resurse
              </Badge>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Articole și Ghiduri Utile
              </h2>
              <p className="text-lg text-slate-600">
                Informații actualizate despre legislația românească
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {latestPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-slate-800 group-hover:text-purple-600 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" size="sm" className="group-hover:bg-purple-50 group-hover:border-purple-300">
                        Citește mai mult
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}