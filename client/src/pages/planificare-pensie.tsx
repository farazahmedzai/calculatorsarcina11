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
        question: "La ce vârstă pot ieși la pensie în România?",
        answer: "Vârsta standard de pensionare este 65 de ani pentru bărbați și crește gradual pentru femei până la 63 de ani în 2030. Există opțiuni de pensie anticipată cu condiții speciale."
      },
      {
        question: "Cum se calculează pensia în România?",
        answer: "Pensia se calculează pe baza punctelor de pensie acumulate și valoarea punctului de pensie (1.785 RON în 2024). Formula: Puncte × Valoarea punctului × Coeficientul de corecție."
      },
      {
        question: "Ce este pilonul II de pensii?",
        answer: "Pilonul II este sistemul de pensii private obligatorii pentru persoanele născute după 1 ianuarie 1970. Contribuția este de 3.75% din salariul brut și se investește pe piața de capital."
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
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-6 text-white">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Dorești să afli mai multe despre sistemul de pensii?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Calculatorul nostru de sarcină te ajută să planifici și viitorul familial al copilului.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <a 
                href="/calculator-sarcina"
                className="group inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Calculator className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <span>Calculator Sarcină</span>
              </a>
              <a 
                href="/tipuri-pensii"
                className="group inline-flex items-center px-8 py-4 bg-white/20 text-white border border-white/30 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
              >
                <Shield className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <span>Tipuri de Pensii</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}