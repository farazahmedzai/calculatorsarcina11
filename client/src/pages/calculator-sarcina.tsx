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
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-8 left-8 w-32 h-32 bg-pink-200/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-8 right-8 w-24 h-24 bg-purple-200/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-200/30 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="text-center space-y-8">
            <Badge className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 rounded-full shadow-lg">
              <Baby className="w-4 h-4 mr-2" />
              Calculator Sarcină România
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight">
                Calculator Sarcină Online Gratuit
                <br />
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Află Data Nașterii și Săptămânile de Gestație
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Calculator sarcină precis pentru calcularea datei nașterii, săptămânilor de gestație și dezvoltarea bebelușului. Metode multiple de calculare: ultima menstruație, data concepției sau ecografie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Data Nașterii</h3>
              <p className="text-slate-600">
                Calculează data exactă a nașterii cu precizie medicală
              </p>
            </div>
            
            <div className="text-center group p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Baby className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Săptămâni de Gestație</h3>
              <p className="text-slate-600">
                Află exact în ce săptămână de gestație te afli
              </p>
            </div>
            
            <div className="text-center group p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-rose-100 hover:from-rose-100 hover:to-rose-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Jaloane Importante</h3>
              <p className="text-slate-600">
                Urmărește dezvoltarea și creșterea bebelușului
              </p>
            </div>
            
            <div className="text-center group p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Consultații Medicale</h3>
              <p className="text-slate-600">
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
            <Card className="group overflow-hidden rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Primul Trimestru (Săptămânile 1-12)</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>Formarea organelor principale</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>Primele simptome de sarcină</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>Prima ecografie (8-12 săptămâni)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>Analize importante: BHCG, TSH</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    <span>Începutul administrării acidului folic</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Al Doilea Trimestru (Săptămânile 13-27)</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>Ecografia morfologică (18-22 săptămâni)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>Primele mișcări ale bebelușului</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>Screening pentru diabet gestațional</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>Dezvoltarea sistemului nervos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>Cea mai confortabilă perioadă</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Al Treilea Trimestru (Săptămânile 28-40)</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    <span>Maturizarea plămânilor fetali</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    <span>Monitorizarea constantă medicală</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    <span>Pregătirea pentru naștere</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    <span>Cursuri de pregătire pentru naștere</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    <span>Planificarea spitalizării</span>
                  </li>
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
            <div className="p-6 bg-white rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="font-semibold mb-3 text-slate-800">Cât de precis este calculatorul de sarcină?</h3>
              <p className="text-slate-600">
                Calculatorul de sarcină oferă estimări cu o precizie de ±3-5 zile pentru sarcinile regulate. 
                Precizia depinde de metoda utilizată și regularitatea ciclului menstrual. Pentru datarea 
                exactă, ecografia din primul trimestru rămâne standardul de aur.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="font-semibold mb-3 text-slate-800">Care este diferența între calculul cu ultima menstruație și data concepției?</h3>
              <p className="text-slate-600">
                Calculul cu ultima menstruație (LMP) presupune ovulația la ziua 14 a ciclului, în timp ce 
                calculul cu data concepției folosește data exactă a fertilizării. Metoda cu data concepției 
                este mai precisă dacă știi exact când a avut loc ovulația.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="font-semibold mb-3 text-slate-800">Când pot folosi calculatorul bazat pe ecografie?</h3>
              <p className="text-slate-600">
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