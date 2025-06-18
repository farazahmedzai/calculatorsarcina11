import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/seo-head";
import { StructuredData } from "@/components/structured-data";
import { Home, Search, Calculator, Baby } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 flex items-center justify-center px-4">
      <SEOHead 
        page="404" 
        title="Pagina nu a fost găsită - 404 | Calculator Sarcina"
        description="Pagina pe care o cauți nu există. Explorează calculatoarele noastre pentru sarcină și pensie sau navighează prin secțiunile principale."
      />
      <StructuredData type="website" data={{}} />
      
      <Card className="w-full max-w-lg text-center shadow-xl">
        <CardContent className="p-8">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-4xl font-bold text-white">404</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-800 mb-4">
              Pagina nu a fost găsită
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Ne pare rău, dar pagina pe care o cauți nu există sau a fost mutată. 
              Te invităm să explorezi calculatoarele și resursele noastre utile.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link href="/">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-lg py-3">
                <Home className="w-5 h-5 mr-2" />
                Înapoi la pagina principală
              </Button>
            </Link>
            
            <div className="grid grid-cols-2 gap-3">
              <Link href="/calculator-sarcina">
                <Button variant="outline" className="w-full">
                  <Baby className="w-4 h-4 mr-2" />
                  Calculator Sarcină
                </Button>
              </Link>
              
              <Link href="/planificare-pensie">
                <Button variant="outline" className="w-full">
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculator Pensie
                </Button>
              </Link>
            </div>
            
            <Link href="/blog">
              <Button variant="outline" className="w-full">
                <Search className="w-4 h-4 mr-2" />
                Explorează articolele din blog
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-200">
            <h2 className="text-sm font-semibold text-slate-700 mb-2">Pagini populare:</h2>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link href="/tipuri-pensii">
                <span className="text-xs bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-full cursor-pointer transition-colors">
                  Tipuri de Pensii
                </span>
              </Link>
              <Link href="/legislatie-resurse">
                <span className="text-xs bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-full cursor-pointer transition-colors">
                  Legislație
                </span>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
