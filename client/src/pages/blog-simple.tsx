import { Link, useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Calendar, User, BookOpen, TrendingUp, FileText, Users, Calculator } from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function BlogSimple() {
  const params = useParams();
  const slug = params.slug;

  const { data: blogPosts, isLoading: isLoadingPosts } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
  });

  const { data: singlePost, isLoading: isLoadingSingle } = useQuery<BlogPost>({
    queryKey: [`/api/blog-posts/${slug}`],
    enabled: !!slug,
  });

  // If we have a slug, show single post
  if (slug) {
    if (isLoadingSingle) {
      return (
        <div className="min-h-screen bg-white">
          <div className="max-w-4xl mx-auto px-6 py-16">
            <Skeleton className="h-8 w-3/4 mb-4" />
            <Skeleton className="h-4 w-1/2 mb-8" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      );
    }

    if (!singlePost) {
      return (
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Articol negăsit</h1>
            <Link href="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Înapoi la Blog
              </Button>
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Înapoi la Blog
            </Button>
          </Link>
          
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{singlePost.title}</h1>
            
            <div className="flex items-center space-x-4 text-slate-600 mb-8">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{new Date(singlePost.createdAt).toLocaleDateString('ro-RO')}</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Calculator Sarcina</span>
              </div>
            </div>
            
            <div className="text-slate-700 leading-relaxed">
              {singlePost.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      </div>
    );
  }

  // Show blog listing
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8">
            <Badge className="px-4 py-2 text-sm font-semibold bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-full">
              <BookOpen className="w-4 h-4 mr-2" />
              Blog și Ghiduri
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                Blog și <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Resurse</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Articole utile, ghiduri complete și informații actualizate despre sistemul de pensii și planificarea financiară
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {isLoadingPosts ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="h-64">
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <>
              {blogPosts && blogPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.map((post) => (
                    <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                      <CardHeader>
                        <CardTitle className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-slate-500">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{new Date(post.createdAt).toLocaleDateString('ro-RO')}</span>
                          </div>
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            <span>Calculator Sarcina</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <Link href={`/blog/${post.slug}`}>
                          <Button variant="outline" size="sm" className="group-hover:bg-indigo-50 group-hover:border-indigo-300 group-hover:text-indigo-600 transition-colors">
                            Citește mai mult
                            <TrendingUp className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <FileText className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-700 mb-2">Nu există articole încă</h3>
                  <p className="text-slate-500 mb-6">Articolele vor fi publicate în curând. Verifică din nou!</p>
                  <Link href="/">
                    <Button variant="outline">
                      Înapoi la Acasă
                    </Button>
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Categorii Populare
            </h2>
            <p className="text-lg text-slate-600">
              Explorează ghidurile noastre organizate pe categorii
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Calculatoare</h3>
              <p className="text-sm text-slate-600">Ghiduri pentru folosirea calculatoarelor</p>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Investiții</h3>
              <p className="text-sm text-slate-600">Strategii de planificare financiară</p>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Legislație</h3>
              <p className="text-sm text-slate-600">Modificări și actualizări legislative</p>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Sfaturi</h3>
              <p className="text-sm text-slate-600">Recomandări practice pentru pensionare</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Începe să-ți planifici viitorul astăzi
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Folosește calculatoarele noastre pentru a lua decizii informate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/planificare-pensie">
              <Button size="lg" variant="outline" className="bg-white text-indigo-600 hover:bg-indigo-50 border-white">
                <Calculator className="w-5 h-5 mr-2" />
                Calculator Pensie
              </Button>
            </Link>
            <Link href="/calculator-sarcina">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <BookOpen className="w-5 h-5 mr-2" />
                Calculator Sarcină
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}