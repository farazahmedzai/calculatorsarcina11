import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo-head";
import { Users, Calendar, Heart, Shield, Clock, Calculator } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-green-600">
      <SEOHead page="tipuri" />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-400/80 to-green-600/80 text-white backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Ghid Exhaustiv: Tipuri de Pensii din România
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Descoperă toate tipurile de pensii disponibile în sistemul public din România și condițiile de acordare.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Sistemul public de pensii din România oferă mai multe tipuri de pensii, fiecare cu condițiile și 
              avantajele sale specifice. Înțelegerea acestor diferențe te ajută să iei decizii informate despre 
              planificarea pensiei tale.
            </p>
          </div>
        </div>
      </section>

      {/* Pension Types */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
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
      <section className="py-16 bg-white/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
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

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600/90 to-green-700/90 text-white backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Calculează-ți Pensia pentru Fiecare Tip</h3>
          <p className="text-green-100 mb-6">
            Folosește calculatorul nostru pentru a vedea care tip de pensie se potrivește cel mai bine situației tale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 transition-all duration-300">
                Calculează Pensia Acum
              </Button>
            </Link>
            <Link href="/legislatie-resurse">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 transition-all duration-300">
                Citește Legislația
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
