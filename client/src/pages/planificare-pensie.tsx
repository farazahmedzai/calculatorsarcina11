import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo-head";
import { StructuredData } from "@/components/structured-data";
import { PensionCalculator } from "@/components/pension-calculator";
import { TrendingUp, DollarSign, Shield, Target, AlertTriangle, CheckCircle, Calculator, Users, BarChart3, Award } from "lucide-react";

export default function PlanificareePensie() {
  const faqData = {
    questions: [
      {
        question: "La ce vârstă ar trebui să încep să-mi planific pensia?",
        answer: "Cât mai devreme posibil, ideally în primul an de muncă. Cu cât începi mai devreme, cu atât beneficiezi mai mult de efectul compoundului și poți economisi sume mai mici lunar pentru aceeași pensie finală."
      },
      {
        question: "Este suficient doar pilonul I pentru o pensie decentă?",
        answer: "De obicei nu. Pilonul I (pensia de stat) reprezintă în medie 30-40% din ultimul salariu. Pentru a menține standardul de viață, experții recomandă să ai 70-80% din ultimul salariu, prin combinarea tuturor pilonilor de pensii și economii personale."
      },
      {
        question: "Cât ar trebui să economisesc lunar pentru pensie?",
        answer: "Regula generală este 10-15% din venit pentru pensie (incluzând toate pilonii). Dacă ai doar pilonul I (25% contribuție), consideră să adaugi încă 5-10% prin pilonul III sau economii personale."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead page="planificare" />
      <StructuredData type="faq" data={faqData} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-8 left-8 w-32 h-32 bg-indigo-200/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-8 right-8 w-24 h-24 bg-purple-200/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-200/30 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="text-center space-y-8">
            <Badge className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 rounded-full shadow-lg">
              <Calculator className="w-4 h-4 mr-2" />
              Calculator Pensie România
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight">
                Calculator Pensie Online Gratuit
                <br />
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Planifică-ți Viitorul Financiar
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Calculează pensia ta viitoare conform legislației românești 2025. Instrumente profesionale pentru planificarea pensiei și strategii de optimizare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Calcul Precis</h3>
              <p className="text-slate-600">
                Calculează pensia conform legislației românești 2025
              </p>
            </div>
            
            <div className="text-center group p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Toate Tipurile</h3>
              <p className="text-slate-600">
                Pensie anticipată, standard și invaliditate
              </p>
            </div>
            
            <div className="text-center group p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Analiză Detaliată</h3>
              <p className="text-slate-600">
                Breakdown complet al calculului pensiei
              </p>
            </div>
            
            <div className="text-center group p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 hover:from-emerald-100 hover:to-emerald-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Legislație 2025</h3>
              <p className="text-slate-600">
                Actualizat cu cele mai noi reglementări
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <PensionCalculator />
        </div>
      </section>

      {/* Pension System Overview */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Sistemul de Pensii din România</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">I</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Pilonul I - Pensii de Stat</h3>
                <p className="text-slate-600 mb-4">
                  Sistemul public de pensii, obligatoriu pentru toți angajații. Funcționează pe principiul repartizării.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    <span>Obligatoriu pentru toți angajații</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    <span>Contribuție: 25% din salariu</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    <span>Garanție de stat</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    <span>Pensia minimă garantată</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">II</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Pilonul II - Pensii Private Obligatorii</h3>
                <p className="text-slate-600 mb-4">
                  Pensii private obligatorii, administrate de fonduri de pensii private.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>Obligatoriu pentru cei sub 35 ani</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>Contribuție: 3.75% din salariu</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>Investiții pe piața de capital</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>Randament variabil</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">III</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Pilonul III - Pensii Private Facultative</h3>
                <p className="text-slate-600 mb-4">
                  Pensii private facultative, cu beneficii fiscale pentru contribuții.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    <span>Facultativ - alegerea ta</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    <span>Deducere fiscală până 400€/an</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    <span>Flexibilitate în contribuții</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    <span>Opțiuni diverse de investiții</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-8 text-center">Cum funcționează calculatorul de pensie?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Date necesare pentru calcul</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong>Vârsta curentă</strong> - Pentru calculul anilor până la pensionare
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong>Salariul lunar brut</strong> - Pentru calculul punctelor de pensie
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong>Stagiul de cotizare</strong> - Anii de contribuție la pensie
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong>Tipul pensiei</strong> - Standard, anticipată sau invaliditate
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Ce vei afla</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>Valoarea calculată a pensiei</div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>Breakdown detaliat al calculului</div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>Punctele de pensie acumulate</div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>Penalizări sau bonusuri aplicate</div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>Recomandări pentru optimizare</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">
                Important de știut
              </h4>
              <p className="text-yellow-700 text-sm">
                Calculatorul oferă estimări bazate pe legislația actuală și parametrii introduși. 
                Pentru informații oficiale și planificarea detaliată, consultă Casa de Pensii și 
                un consultant financiar autorizat. Legislația se poate modifica în timp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Întrebări Frecvente despre Pensii</h2>
          
          <div className="space-y-6">
            {faqData.questions.map((faq, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="font-semibold mb-3 text-slate-800">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
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

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">
              Întrebări Frecvente despre Planificarea Pensiei
            </h2>
            
            <div className="space-y-4">
              <Card className="border border-neutral-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                    La ce vârstă ar trebui să încep să-mi planific pensia?
                  </h3>
                  <p className="text-neutral-600">
                    Cât mai devreme posibil, ideally în primul an de muncă. Cu cât începi mai devreme, 
                    cu atât beneficiezi mai mult de efectul compoundului și poți economisi sume mai mici lunar 
                    pentru aceeași pensie finală.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-neutral-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                    Este suficient doar pilonul I pentru o pensie decentă?
                  </h3>
                  <p className="text-neutral-600">
                    De obicei nu. Pilonul I (pensia de stat) reprezintă în medie 30-40% din ultimul salariu. 
                    Pentru a menține standardul de viață, experții recomandă să ai 70-80% din ultimul salariu, 
                    prin combinarea tuturor piloniu de pensii și economii personale.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-neutral-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                    Cât ar trebui să economisesc lunar pentru pensie?
                  </h3>
                  <p className="text-neutral-600">
                    Regula generală este 10-15% din venit pentru pensie (incluzând toate pilonii). 
                    Dacă ai doar pilonul I (25% contribuție), consideră să adaugi încă 5-10% prin pilonul III 
                    sau economii personale.
                  </p>
                </CardContent>
              </Card>
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
                    <Button variant="outline" className="border-white text-white bg-white/10 hover:bg-white hover:text-purple-600 transition-all duration-300">
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
