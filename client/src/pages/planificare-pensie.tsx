import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/seo-head";
import { TrendingUp, DollarSign, Shield, Target, AlertTriangle, CheckCircle } from "lucide-react";

export default function PlanificareePensie() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <SEOHead page="planificare" />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ghid Complet pentru Planificarea Pensiei în România
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Totul ce trebuie să știi pentru a-ți planifica o pensie decentă. Strategii, piloni și greșeli de evitat.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-xl text-neutral-600 leading-relaxed">
              Planificarea pensiei este unul dintre cele mai importante aspecte ale planificării financiare pe termen lung. 
              În România, sistemul de pensii se bazează pe trei piloni, fiecare cu caracteristicile și avantajele sale.
            </p>
          </div>

          {/* Piloni Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-800 mb-8 flex items-center">
              <TrendingUp className="w-8 h-8 text-primary mr-3" />
              Sistemul de Pensii din România
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Pilonul I</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 mb-4">
                    Sistemul public de pensii, obligatoriu pentru toți angajații. Funcționează pe principiul repartizării.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Obligatoriu
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Contribuție: 25%
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Garanție de stat
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20">
                <CardHeader>
                  <CardTitle className="text-accent">Pilonul II</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 mb-4">
                    Pensii private obligatorii, administrate de fonduri de pensii private.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Obligatoriu (sub 35 ani)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Contribuție: 3.75%
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Investiții pe piața de capital
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-500/20">
                <CardHeader>
                  <CardTitle className="text-orange-500">Pilonul III</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 mb-4">
                    Pensii private facultative, cu beneficii fiscale pentru contribuții.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Facultativ
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Deducere fiscală
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Flexibilitate mare
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Strategii de Planificare */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-800 mb-8 flex items-center">
              <Target className="w-8 h-8 text-accent mr-3" />
              Strategii de Planificare Eficientă
            </h2>
            
            <div className="space-y-8">
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-4">1. Începe Cât Mai Devreme</h3>
                  <p className="text-neutral-600 mb-4">
                    Timpul este cel mai important factor în planificarea pensiei. Cu cât începi mai devreme, 
                    cu atât beneficiezi mai mult de efectul compoundului.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-neutral-700">
                      <strong>Exemplu:</strong> Dacă începi să economisești 200 RON/lună la 25 de ani, 
                      vei avea cu 40% mai mulți bani la pensie decât dacă începi la 35 de ani.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-4">2. Diversifică Sursele de Venit</h3>
                  <p className="text-neutral-600 mb-4">
                    Nu te baza doar pe pilonul I. Combină toate sursele: pensie de stat, pilonul II, pilonul III, 
                    economii personale și investiții.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Surse Obligatorii</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Pilonul I (pensie de stat)</li>
                        <li>• Pilonul II (dacă ai sub 35 ani)</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Surse Opționale</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Pilonul III</li>
                        <li>• Economii personale</li>
                        <li>• Investiții în acțiuni/fonduri</li>
                        <li>• Proprietăți imobiliare</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-orange-500/5 border-orange-500/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-4">3. Calculează Necesarul de Pensie</h3>
                  <p className="text-neutral-600 mb-4">
                    Experții recomandă ca pensia să reprezinte 70-80% din ultimul salariu pentru a menține 
                    standardul de viață.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-neutral-700 mb-2">
                      <strong>Formula simplă:</strong>
                    </p>
                    <p className="text-sm text-neutral-700">
                      Pensia dorită = Ultimul salariu × 0.75<br/>
                      Exemplu: Pentru un salariu de 5.000 RON, pensia dorită ar fi ~3.750 RON
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Greșeli de Evitat */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-800 mb-8 flex items-center">
              <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
              Top 5 Greșeli de Evitat
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "Amânarea planificării",
                  description: "Mulți oameni cred că au timp suficient și amână planificarea pensiei. Fiecare an întârziat reduce semnificativ suma finală."
                },
                {
                  title: "Bazarea exclusiv pe pilonul I",
                  description: "Pensia de stat nu va fi suficientă pentru a menține standardul de viață. Este esențial să ai surse suplimentare de venit."
                },
                {
                  title: "Ignorarea inflației",
                  description: "Banii de azi nu vor avea aceeași putere de cumpărare peste 20-30 de ani. Investițiile trebuie să bată inflația."
                },
                {
                  title: "Lipsă de diversificare",
                  description: "Punerea tuturor ouălor într-un singur coș este riscantă. Diversifică între piloni și tipuri de investiții."
                },
                {
                  title: "Necunoașterea legislației",
                  description: "Modificările legislative pot afecta planificarea. Informează-te regulat despre schimbările din sistemul de pensii."
                }
              ].map((mistake, index) => (
                <Card key={index} className="border-l-4 border-l-red-500">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                      {index + 1}. {mistake.title}
                    </h3>
                    <p className="text-neutral-600">{mistake.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Începe Planificarea Acum</h3>
                <p className="text-white/90 mb-6">
                  Folosește calculatorul nostru pentru a vedea cum arată pensia ta cu strategiile recomandate.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/">
                    <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 transition-all duration-300">
                      Calculează Pensia
                    </Button>
                  </Link>
                  <Link href="/tipuri-pensii">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300">
                      Explorează Tipurile de Pensii
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
