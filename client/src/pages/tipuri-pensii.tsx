import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo-head";
import { StructuredData } from "@/components/structured-data";
import { FAQSection, pensionFAQs } from "@/components/faq-section";
import { ComparisonTable, pensionTypesComparison, pensionPillarsComparison } from "@/components/comparison-table";
import { TimelineComponent, pensionTimelineItems } from "@/components/timeline-component";
import { Users, Calendar, Heart, Shield, Clock, Calculator, TrendingUp, AlertTriangle } from "lucide-react";

export default function TipuriPensii() {
  const pensionTypes = [
    {
      title: "Pensia pentru Limită de Vârstă",
      icon: <Calendar className="w-8 h-8" />,
      color: "primary",
      description: "Pensia standard acordată la vârsta legală de pensionare",
      conditions: [
        "Vârsta standard: 65 ani (bărbați și femei)",
        "Stagiu minim de cotizare: 15 ani",
        "Contribuții la sistemul public de pensii"
      ],
      calculation: "Se calculează pe baza punctelor de pensie acumulate și a valorii punctului de pensie",
      advantages: [
        "Fără penalizări",
        "Beneficii pentru stagiu suplimentar",
        "Stabilitate garantată de stat"
      ]
    },
    {
      title: "Pensia Anticipată Parțială",
      icon: <Clock className="w-8 h-8" />,
      color: "accent",
      description: "Permite pensionarea cu până la 5 ani mai devreme",
      conditions: [
        "Vârsta minimă: 60 ani",
        "Stagiu minim de cotizare: 15 ani",
        "Acceptarea unei penalizări"
      ],
      calculation: "Penalizare de 0.5% pentru fiecare lună de anticipare",
      advantages: [
        "Pensionare mai devreme",
        "Penalizare redusă",
        "Flexibilitate în planificare"
      ]
    },
    {
      title: "Pensia Anticipată Completă",
      icon: <Shield className="w-8 h-8" />,
      color: "orange-500",
      description: "Pentru persoanele cu stagiu complet de cotizare",
      conditions: [
        "Stagiu complet de cotizare (35 ani)",
        "Fără limită de vârstă minimă",
        "Penalizare redusă"
      ],
      calculation: "Penalizare de 0.75% pentru fiecare lună de anticipare",
      advantages: [
        "Pensionare foarte devreme",
        "Pentru stagii mari de cotizare",
        "Penalizare proporțională"
      ]
    },
    {
      title: "Pensia de Urmaș",
      icon: <Heart className="w-8 h-8" />,
      color: "red-500",
      description: "Acordată membrilor familiei în cazul decesului asiguratului",
      conditions: [
        "Soț/soție supraviețuitor",
        "Copii până la 18 ani (26 pentru studenți)",
        "Părinți în întreținere"
      ],
      calculation: "Procentaj din pensia pe care o avea sau ar fi avut persoana decedată",
      advantages: [
        "Protecție pentru familie",
        "Continuitatea veniturilor",
        "Suport în perioade dificile"
      ]
    },
    {
      title: "Pensia de Invaliditate",
      icon: <Shield className="w-8 h-8" />,
      color: "blue-500",
      description: "Pentru persoanele cu capacitate de muncă redusă",
      conditions: [
        "Gradul I: invaliditate gravă",
        "Gradul II: invaliditate accentuată", 
        "Gradul III: invaliditate ușoară"
      ],
      calculation: "Bazată pe gradul de invaliditate și stagiul de cotizare",
      advantages: [
        "Suport pentru persoanele cu dizabilități",
        "Calcul favorabil",
        "Protecție socială"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 dark:to-slate-900">
      <SEOHead 
        page="tipuri" 
        title="Ghid Complet: Tipuri de Pensii din România 2025 | Calculator Pensii"
        description="Descoperă toate tipurile de pensii din România: pentru limită de vârstă, anticipată, de invaliditate și de urmaș. Ghid complet cu condiții, calcul și avantaje."
        keywords="tipuri pensii romania, pensie limita varsta, pensie anticipata, pensie invaliditate, pensie urmas, calculator pensii"
      />
      <StructuredData 
        type="article" 
        data={{
          headline: "Ghid Exhaustiv: Tipuri de Pensii din România",
          description: "Ghid complet despre toate tipurile de pensii disponibile în sistemul public din România, cu condiții de acordare și modalități de calcul.",
          datePublished: new Date().toISOString(),
          dateModified: new Date().toISOString(),
          url: "https://calculatorsarcina.com/tipuri-pensii",
          keywords: ["tipuri pensii", "pensie romania", "calculator pensii", "pensie anticipata", "pensie invaliditate"]
        }} 
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Ghid Exhaustiv: Tipuri de Pensii din România
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Descoperă toate tipurile de pensii disponibile în sistemul public din România și condițiile de acordare.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Sistemul public de pensii din România oferă mai multe tipuri de pensii, fiecare cu condițiile și 
              avantajele sale specifice. Înțelegerea acestor diferențe te ajută să iei decizii informate despre 
              planificarea pensiei tale.
            </p>
          </div>
        </div>
      </section>

      {/* Pension Types */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {pensionTypes.map((pension, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className={`bg-${pension.color === 'primary' ? 'primary' : pension.color}/10 p-3 rounded-xl`}>
                      <div className={`text-${pension.color === 'primary' ? 'primary' : pension.color}`}>
                        {pension.icon}
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-neutral-800">{pension.title}</CardTitle>
                      <p className="text-neutral-600 mt-2">{pension.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-4">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-3 flex items-center">
                        <Users className="w-5 h-5 mr-2 text-primary" />
                        Condiții de Acordare
                      </h4>
                      <ul className="space-y-2">
                        {pension.conditions.map((condition, idx) => (
                          <li key={idx} className="text-sm text-neutral-600 flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {condition}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-3 flex items-center">
                        <Calculator className="w-5 h-5 mr-2 text-accent" />
                        Mod de Calcul
                      </h4>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {pension.calculation}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-3 flex items-center">
                        <Shield className="w-5 h-5 mr-2 text-green-600" />
                        Avantaje
                      </h4>
                      <ul className="space-y-2">
                        {pension.advantages.map((advantage, idx) => (
                          <li key={idx} className="text-sm text-neutral-600 flex items-start">
                            <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {advantage}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Comparație Rapidă: Tipuri de Pensii
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-neutral-100">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-neutral-800">Tip Pensie</th>
                  <th className="px-6 py-4 text-left font-semibold text-neutral-800">Vârsta Minimă</th>
                  <th className="px-6 py-4 text-left font-semibold text-neutral-800">Stagiu Minim</th>
                  <th className="px-6 py-4 text-left font-semibold text-neutral-800">Penalizări</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-neutral-800">Limită de vârstă</td>
                  <td className="px-6 py-4 text-neutral-600">65 ani</td>
                  <td className="px-6 py-4 text-neutral-600">15 ani</td>
                  <td className="px-6 py-4">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Fără penalizări</Badge>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-neutral-800">Anticipată parțială</td>
                  <td className="px-6 py-4 text-neutral-600">60 ani</td>
                  <td className="px-6 py-4 text-neutral-600">15 ani</td>
                  <td className="px-6 py-4">
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">0.5%/lună</Badge>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-neutral-800">Anticipată completă</td>
                  <td className="px-6 py-4 text-neutral-600">Fără limită</td>
                  <td className="px-6 py-4 text-neutral-600">35 ani</td>
                  <td className="px-6 py-4">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">0.75%/lună</Badge>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-neutral-800">De urmaș</td>
                  <td className="px-6 py-4 text-neutral-600">Variabilă</td>
                  <td className="px-6 py-4 text-neutral-600">Nu se aplică</td>
                  <td className="px-6 py-4">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">Nu se aplică</Badge>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-neutral-800">De invaliditate</td>
                  <td className="px-6 py-4 text-neutral-600">Nu se aplică</td>
                  <td className="px-6 py-4 text-neutral-600">Variabil</td>
                  <td className="px-6 py-4">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Fără penalizări</Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pillar Comparison */}
      <ComparisonTable 
        title="Comparație: Pilonii de Pensii din România"
        subtitle="Înțelege diferențele între cele trei piloni de pensii"
        columns={["Pilonul I", "Pilonul II", "Pilonul III"]}
        items={pensionPillarsComparison}
        className="bg-neutral-50"
      />

      {/* Pension Planning Timeline */}
      <TimelineComponent 
        title="Cronologia Planificării Pensiei"
        items={pensionTimelineItems}
        className="bg-white"
      />

      {/* Key Statistics */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Statistici Cheie - Sistemul de Pensii România</h2>
            <p className="text-blue-100 text-lg">Date actualizate pentru 2025</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="bg-white/10 border-white/20 text-center">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">87,5 RON</div>
                <div className="text-blue-100">Valoarea punctului de pensie</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">4.8 mil</div>
                <div className="text-blue-100">Pensionari în România</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-center">
              <CardContent className="p-6">
                <Calculator className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">65 ani</div>
                <div className="text-blue-100">Vârsta standard de pensionare</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-center">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">25%</div>
                <div className="text-blue-100">Contribuția CAS</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Warnings */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-yellow-400">
            <div className="flex items-start">
              <AlertTriangle className="w-8 h-8 text-yellow-600 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Atenție la Planificarea Pensiei</h3>
                <div className="space-y-4 text-neutral-700">
                  <p>
                    <strong>Verifică periodic datele:</strong> Solicită anual extrasul de cont de la Casa de Pensii pentru a verifica corectitudinea datelor de contribuții.
                  </p>
                  <p>
                    <strong>Documentația completă:</strong> Păstrează toate documentele care atestă activitatea profesională, inclusiv contractele de muncă și adeverințele de salarii.
                  </p>
                  <p>
                    <strong>Consultanță specializată:</strong> Pentru situații complexe (lucru în străinătate, perioade de întrerupere), consultă un specialist în legislația muncii.
                  </p>
                  <p>
                    <strong>Pilonul II:</strong> Verifică performanța fondului de pensii privat ales și consideră schimbarea dacă este necesar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={pensionFAQs} className="bg-white" />

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Calculează-ți Pensia pentru Fiecare Tip</h3>
          <p className="text-purple-100 mb-6">
            Folosește calculatorul nostru pentru a vedea care tip de pensie se potrivește cel mai bine situației tale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 transition-all duration-300">
                Calculează Pensia Acum
              </Button>
            </Link>
            <Link href="/legislatie-resurse">
              <Button variant="outline" className="bg-[#9961ed] border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300">
                Citește Legislația
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
