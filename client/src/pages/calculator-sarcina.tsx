import { PregnancyCalculator } from "@/components/pregnancy-calculator";
import { SEOHead } from "@/components/seo-head";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Baby, Heart, Calendar, Stethoscope } from "lucide-react";

export default function CalculatorSarcina() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        page="calculator-sarcina" 
        title="Calculator Sarcină Online - Calculează Data Nașterii și Săptămânile de Sarcină"
        description="Calculator sarcină precis pentru calcularea datei nașterii, săptămânilor de sarcină și jaloanelor importante. Introdu data ultimei menstruații sau a concepției pentru rezultate exacte."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-pink-950/20 dark:via-purple-950/20 dark:to-blue-950/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500/5 via-transparent to-transparent"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center space-y-8">
            <Badge className="px-6 py-2 text-sm font-semibold bg-pink-100 text-pink-700 border border-pink-200 rounded-full dark:bg-pink-900/30 dark:text-pink-300">
              <Baby className="w-4 h-4 mr-2" />
              Calculator Sarcină România
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Calculează-ți Sarcina
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Află data nașterii, săptămânile de sarcină și jaloanele importante cu cel mai precis calculator de sarcină din România
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 border-2 hover:border-pink-200 transition-colors">
              <CardContent className="space-y-4 pt-0">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="font-semibold">Data Nașterii</h3>
                <p className="text-sm text-muted-foreground">
                  Calculează data exactă a nașterii
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-2 hover:border-purple-200 transition-colors">
              <CardContent className="space-y-4 pt-0">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Baby className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold">Săptămâni de Sarcină</h3>
                <p className="text-sm text-muted-foreground">
                  Află exact în ce săptămână te afli
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-2 hover:border-blue-200 transition-colors">
              <CardContent className="space-y-4 pt-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold">Jaloane Importante</h3>
                <p className="text-sm text-muted-foreground">
                  Urmărește dezvoltarea bebelușului
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-2 hover:border-green-200 transition-colors">
              <CardContent className="space-y-4 pt-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Stethoscope className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold">Consultații Medicale</h3>
                <p className="text-sm text-muted-foreground">
                  Programează vizitele importante
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <PregnancyCalculator />
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-8 text-center">Cum funcționează calculatorul de sarcină?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Metode de calcul disponibile</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong>Data ultimei menstruații (LMP)</strong> - Cea mai comună metodă de calcul
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong>Data concepției</strong> - Pentru calculul exact bazat pe fertilizare
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong>Pe baza ecografiei</strong> - Folosește datele din ecografia medicală
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Ce vei afla</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>Data calculată a nașterii</div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>Săptămâna și ziua exactă de sarcină</div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>Trimestrul în care te afli</div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>Jaloanele importante ale sarcinii</div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>Informații despre dezvoltarea bebelușului</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg dark:bg-yellow-950/20 dark:border-yellow-800">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                Important de știut
              </h4>
              <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                Calculatorul oferă estimări bazate pe date statistice. Pentru informații medicale precise 
                și monitorizarea sarcinii, consultă întotdeauna medicul ginecolog. Fiecare sarcină este unică 
                și poate varia de la calculele standard.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}