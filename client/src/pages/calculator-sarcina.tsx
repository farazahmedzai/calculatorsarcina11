import { PregnancyCalculator } from "@/components/pregnancy-calculator";
import { SEOHead } from "@/components/seo-head";
import { StructuredData } from "@/components/structured-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Baby, Heart, Calendar, Stethoscope } from "lucide-react";

export default function CalculatorSarcina() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        page="calculator-sarcina" 
        title="Calculator Sarcină Online Gratuit - Data Nașterii și Săptămâni Gestație | CalculatorSarcina.com"
        description="Calculator sarcină online gratuit ✓ Calculează data nașterii și săptămânile de gestație ✓ Informații despre dezvoltarea bebelușului ✓ Trimestre sarcină ✓ Precis și medical"
        keywords="calculator sarcina, calculator sarcina online gratuit, data nasterii, saptamani gestatie, calculator gestatie, trimestre sarcina, dezvoltarea bebelusului"
      />
      <StructuredData 
        type="howto" 
        data={{
          name: "Cum să folosești calculatorul de sarcină",
          description: "Ghid pas cu pas pentru calcularea datei nașterii și săptămânilor de sarcină",
          image: "https://calculatorsarcina.com/assets/calculator-tutorial.jpg",
          steps: [
            {
              name: "Selectează metoda de calcul",
              text: "Alege între ultima menstruație (LMP), data concepției sau pe baza ecografiei"
            },
            {
              name: "Introdu datele necesare", 
              text: "Completează câmpurile cerute în funcție de metoda aleasă"
            },
            {
              name: "Obține rezultatele",
              text: "Primești data nașterii și informații despre săptămânile de sarcină"
            }
          ]
        }} 
      />
      <StructuredData 
        type="calculator" 
        data={{
          name: "Calculator Sarcină Online",
          description: "Calculator profesional pentru calcularea datei nașterii și urmărirea sarcinii",
          url: "https://calculatorsarcina.com/calculator-sarcina",
          features: [
            "3 metode de calcul disponibile",
            "Calculul precis al datei nașterii", 
            "Urmărirea săptămânilor de sarcină",
            "Jaloanele importante ale sarcinii"
          ]
        }} 
      />
      
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        <div className="floating-elements"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        
        <div className="hero-content relative max-w-6xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center space-y-8 animate-fade-in">
            <Badge className="px-6 py-3 text-sm font-semibold bg-white/20 text-white border border-white/30 rounded-full backdrop-blur-sm">
              <Baby className="w-4 h-4 mr-2" />
              Calculator Sarcină România
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Calculator Sarcină Online Gratuit - Află Data Nașterii și Săptămânile de Gestație
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Calculator sarcină precis pentru calcularea datei nașterii, săptămânilor de gestație și dezvoltarea bebelușului. Metode multiple de calculare: ultima menstruație, data concepției sau ecografie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="feature-card text-center group">
              <div className="icon-container w-16 h-16 mx-auto">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Data Nașterii</h3>
              <p className="text-gray-600">
                Calculează data exactă a nașterii cu precizie medicală
              </p>
            </div>
            
            <div className="feature-card text-center group">
              <div className="icon-container w-16 h-16 mx-auto">
                <Baby className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Săptămâni de Gestație</h3>
              <p className="text-gray-600">
                Află exact în ce săptămână de gestație te afli
              </p>
            </div>
            
            <div className="feature-card text-center group">
              <div className="icon-container w-16 h-16 mx-auto">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Jaloane Importante</h3>
              <p className="text-gray-600">
                Urmărește dezvoltarea și creșterea bebelușului
              </p>
            </div>
            
            <div className="feature-card text-center group">
              <div className="icon-container w-16 h-16 mx-auto">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Consultații Medicale</h3>
              <p className="text-gray-600">
                Programează vizitele medicale importante
              </p>
            </div>
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

            <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">
                Important de știut
              </h4>
              <p className="text-yellow-700 text-sm">
                Calculatorul oferă estimări bazate pe date statistice. Pentru informații medicale precise 
                și monitorizarea sarcinii, consultă întotdeauna medicul ginecolog. Fiecare sarcină este unică 
                și poate varia de la calculele standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trimestre Sarcină Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Informații despre Trimestre Sarcină</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="modern-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-pink-600 font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Primul Trimestru (Săptămânile 1-12)</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Formarea organelor principale</li>
                  <li>• Primele simptome de sarcină</li>
                  <li>• Prima ecografie (8-12 săptămâni)</li>
                  <li>• Analize importante: BHCG, TSH</li>
                  <li>• Începutul administrării acidului folic</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="modern-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Al Doilea Trimestru (Săptămânile 13-27)</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Ecografia morfologică (18-22 săptămâni)</li>
                  <li>• Primele mișcări ale bebelușului</li>
                  <li>• Screening pentru diabet gestațional</li>
                  <li>• Dezvoltarea sistemului nervos</li>
                  <li>• Cea mai confortabilă perioadă</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="modern-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Al Treilea Trimestru (Săptămânile 28-40)</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Maturizarea plămânilor fetali</li>
                  <li>• Monitorizarea constantă medicală</li>
                  <li>• Pregătirea pentru naștere</li>
                  <li>• Cursuri de pregătire pentru naștere</li>
                  <li>• Planificarea spitalizării</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Întrebări Frecvente despre Calculator Sarcină</h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg border modern-card">
              <h3 className="font-semibold mb-3">Cât de precis este calculatorul de sarcină?</h3>
              <p className="text-muted-foreground">
                Calculatorul de sarcină oferă estimări cu o precizie de ±3-5 zile pentru sarcinile regulate. 
                Precizia depinde de metoda utilizată și regularitatea ciclului menstrual. Pentru datarea 
                exactă, ecografia din primul trimestru rămâne standardul de aur.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg border modern-card">
              <h3 className="font-semibold mb-3">Care este diferența între calculul cu ultima menstruație și data concepției?</h3>
              <p className="text-muted-foreground">
                Calculul cu ultima menstruație (LMP) presupune ovulația la ziua 14 a ciclului, în timp ce 
                calculul cu data concepției folosește data exactă a fertilizării. Metoda cu data concepției 
                este mai precisă dacă știi exact când a avut loc ovulația.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg border modern-card">
              <h3 className="font-semibold mb-3">Când pot folosi calculatorul bazat pe ecografie?</h3>
              <p className="text-muted-foreground">
                Calculatorul bazat pe ecografie poate fi folosit începând cu săptămâna 6-8 de sarcină, 
                când măsurătorile fetale devin vizibile. Ecografia din primul trimestru (8-12 săptămâni) 
                oferă cea mai precisă datare a sarcinii.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}