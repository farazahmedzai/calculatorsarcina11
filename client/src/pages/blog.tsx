import { Link, useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { SEOHead } from "@/components/seo-head";
import { StructuredData } from "@/components/structured-data";
import { EducationalContentSection, pensionEducationalContent } from "@/components/educational-content-section";
import { ArrowLeft, Calendar, User, BookOpen, TrendingUp, FileText, Users, Calculator } from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
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
          <SEOHead page="blog" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <Skeleton className="h-8 w-20 mb-4" />
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-64 w-full mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
      );
    }

    if (!singlePost) {
      return (
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-neutral-800 mb-4">Articolul nu a fost găsit</h1>
            <Link href="/blog">
              <Button>Înapoi la Blog</Button>
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-white">
        <SEOHead 
          page="blog" 
          title={singlePost.title} 
          description={singlePost.excerpt}
          article={{
            publishedTime: singlePost.createdAt,
            modifiedTime: singlePost.updatedAt,
            author: "Calculator Sarcina",
            section: singlePost.category,
            tags: [singlePost.category, "pensii", "romania"]
          }}
        />
        <StructuredData 
          type="article" 
          data={{
            headline: singlePost.title,
            description: singlePost.excerpt,
            image: singlePost.imageUrl || "https://calculatorsarcina.com/assets/default-article.jpg",
            datePublished: singlePost.createdAt,
            dateModified: singlePost.updatedAt,
            url: `https://calculatorsarcina.com/blog/${singlePost.slug}`,
            section: singlePost.category,
            keywords: [singlePost.category, "pensii", "romania", "planificare financiara"]
          }} 
        />
        
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 pl-0">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Înapoi la Blog
            </Button>
          </Link>

          <header className="mb-12">
            <Badge variant="secondary" className="mb-4">
              {singlePost.category}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6 leading-tight">
              {singlePost.title}
            </h1>
            <div className="flex items-center gap-6 text-neutral-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(singlePost.createdAt).toLocaleDateString('ro-RO')}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Calculator Sarcina</span>
              </div>
            </div>
            {singlePost.imageUrl && (
              <img 
                src={singlePost.imageUrl} 
                alt={singlePost.title}
                className="w-full h-64 lg:h-96 object-cover rounded-xl mb-8"
              />
            )}
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-neutral-600 leading-relaxed mb-8">
              {singlePost.excerpt}
            </p>
            <div className="text-neutral-700 leading-relaxed whitespace-pre-line">
              {singlePost.content}
            </div>
          </div>

          <footer className="mt-16 pt-8 border-t border-neutral-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <Link href="/blog">
                <Button variant="outline">
                  Citește mai multe articole
                </Button>
              </Link>
              <Link href="/">
                <Button className="bg-primary hover:bg-secondary">
                  Calculează-ți Pensia
                </Button>
              </Link>
            </div>
          </footer>
        </article>
      </div>
    );
  }

  // Show blog listing
  return (
    <div className="min-h-screen bg-white">
      <SEOHead page="blog" />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Blog Pensii România
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Ghiduri și sfaturi pentru planificarea pensiei, modificări legislative și strategii de investiții
          </p>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">
              Categorii Principale
            </h2>
            <p className="text-xl text-neutral-600">
              Explorează articolele organizate pe categorii pentru o navigare mai ușoară
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 rounded-xl p-4 w-fit mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Planificare</h3>
                <p className="text-neutral-600 mb-6">
                  Strategii și sfaturi pentru planificarea eficientă a pensiei
                </p>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {blogPosts?.filter(post => post.category === "Planificare").length || 0} articole
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-500/10 rounded-xl p-4 w-fit mx-auto mb-6">
                  <FileText className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Legislație</h3>
                <p className="text-neutral-600 mb-6">
                  Modificări legislative și interpretări ale legii pensiilor
                </p>
                <Badge variant="secondary" className="bg-orange-500/10 text-orange-500">
                  {blogPosts?.filter(post => post.category === "Legislație").length || 0} articole
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-accent/10 rounded-xl p-4 w-fit mx-auto mb-6">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Investiții</h3>
                <p className="text-neutral-600 mb-6">
                  Ghiduri despre pilonii de pensii și strategii de investiții
                </p>
                <Badge variant="secondary" className="bg-accent/10 text-accent">
                  {blogPosts?.filter(post => post.category === "Investiții").length || 0} articole
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Educational Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">
              Ghiduri Educaționale
            </h2>
            <p className="text-xl text-neutral-600">
              Conținut educațional structurat pentru înțelegerea sistemului de pensii
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-500 rounded-full p-4 w-fit mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Ghiduri pentru Începători</h3>
                <p className="text-neutral-600 mb-6">
                  Concepte de bază ale sistemului de pensii explicate simplu
                </p>
                <Button variant="outline" className="group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  Explorează Ghidurile
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="bg-green-500 rounded-full p-4 w-fit mx-auto mb-6">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Calculatoare Avansate</h3>
                <p className="text-neutral-600 mb-6">
                  Instrumente pentru simulări și planificare detaliată
                </p>
                <Button variant="outline" className="group-hover:bg-green-500 group-hover:text-white transition-colors">
                  Folosește Calculatoarele
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="bg-purple-500 rounded-full p-4 w-fit mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Strategii de Investiții</h3>
                <p className="text-neutral-600 mb-6">
                  Optimizarea pilonilor II și III pentru randament maxim
                </p>
                <Button variant="outline" className="group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  Învață Strategii
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">
              Toate Articolele
            </h2>
            <p className="text-xl text-neutral-600">
              Informații actualizate despre sistemul de pensii din România
            </p>
          </div>

          {isLoadingPosts ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="bg-white animate-pulse">
                  <Skeleton className="h-48 rounded-t-xl" />
                  <CardContent className="p-6">
                    <Skeleton className="h-4 w-20 mb-2" />
                    <Skeleton className="h-6 w-full mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4 mb-4" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : blogPosts && blogPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="bg-white hover:shadow-lg transition-shadow group">
                  {post.imageUrl && (
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge 
                        variant="secondary" 
                        className={`${
                          post.category === "Planificare" ? "bg-primary/10 text-primary" :
                          post.category === "Legislație" ? "bg-orange-500/10 text-orange-500" :
                          "bg-accent/10 text-accent"
                        }`}
                      >
                        {post.category}
                      </Badge>
                      <span className="text-sm text-neutral-500">
                        {new Date(post.createdAt).toLocaleDateString('ro-RO')}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-neutral-600 mb-4 line-clamp-3">
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
          ) : (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                Nu sunt articole disponibile
              </h3>
              <p className="text-neutral-600 mb-6">
                Revino în curând pentru articole noi despre pensii și planificare financiară.
              </p>
              <Link href="/">
                <Button className="bg-primary hover:bg-secondary">
                  Calculează-ți Pensia
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Educational Content Section */}
      <EducationalContentSection 
        title="Conținut Educațional Recomandat"
        subtitle="Articole detaliate pentru înțelegerea și optimizarea pensiei tale"
        articles={pensionEducationalContent}
        showFeatured={true}
        className="bg-white"
      />

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Rămâi la Curent cu Modificările Legislative
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Abonează-te pentru a primi notificări despre articolele noi și modificările importante din legislația pensiilor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <div className="flex-1">
              <input 
                type="email" 
                placeholder="Adresa ta de email"
                className="w-full px-4 py-3 rounded-lg text-neutral-800 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
            <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all duration-300">
              Abonează-te
            </Button>
          </div>
          <p className="text-sm text-purple-200 mt-4">
            Fără spam. Poți să te dezabonezi oricând.
          </p>
        </div>
      </section>
    </div>
  );
}
