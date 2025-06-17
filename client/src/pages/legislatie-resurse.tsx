import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo-head";
import { FileText, Calendar, Scale, TrendingUp, AlertCircle, ExternalLink } from "lucide-react";

export default function LegislatieResurse() {
  const legislativeChanges = [
    {
      year: "2024",
      title: "Indexarea Pensiilor",
      description: "Mecanismul de indexare a pensiilor cu inflația și creșterea salarială",
      impact: "Creștere medie de 13.8% pentru toate pensiile"
    },
    {
      year: "2023",
      title: "Modificări Pilon II",
      description: "Contribuția la pilonul II a crescut la 3.75%",
      impact: "Fonduri suplimentare pentru pensiile private"
    },
    {
      year: "2022",
      title: "Vârsta de Pensionare",
      description: "Egalizarea vârstei de pensionare la 65 ani pentru bărbați și femei",
      impact: "Implementare graduală până în 2030"
    }
  ];

  const retirementAge = [
    { year: "2024", men: 65, women: 63 },
    { year: "2025", men: 65, women: 63.5 },
    { year: "2026", men: 65, women: 64 },
    { year: "2027", men: 65, women: 64.5 },
    { year: "2028", men: 65, women: 65 },
    { year: "2029", men: 65, women: 65 },
    { year: "2030", men: 65, women: 65 }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead page="legislatie" />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Legea Pensiilor 2024 pe Înțelesul Tuturor
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Ghid complet despre legislația pensiilor din România, modificările recente și procedurile oficiale.
          </p>
        </div>
      </section>

      {/* Current Law Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">
              Legislația Actuală în 2024
            </h2>
            <p className="text-xl text-neutral-600">
              Principalele prevederi ale Legii nr. 263/2010 privind sistemul unitar de pensii publice
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Scale className="w-6 h-6 mr-2" />
                  Principii Fundamentale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span className="text-neutral-700">Sistem de repartizare (pay-as-you-go)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span className="text-neutral-700">Principiul contributivității</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span className="text-neutral-700">Solidaritate intergenerațională</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span className="text-neutral-700">Echitate în acordarea beneficiilor</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center text-accent">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  Parametri Cheie 2024
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-neutral-800 mb-2">Valoarea punctului de pensie</h4>
                    <p className="text-2xl font-bold text-accent">87,5 RON</p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-neutral-800 mb-2">Pensia minimă</h4>
                    <p className="text-2xl font-bold text-primary">1.000 RON</p>
                  </div>
                  <div className="bg-orange-500/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-neutral-800 mb-2">Contribuția CAS</h4>
                    <p className="text-2xl font-bold text-orange-500">25%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Retirement Age Table */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4 flex items-center justify-center">
              <Calendar className="w-8 h-8 mr-3 text-primary" />
              Vârsta Standard de Pensionare: Tabel Complet
            </h2>
            <p className="text-xl text-neutral-600">
              Evoluția vârstei de pensionare până la egalizarea completă în 2030
            </p>
          </div>

          <Card className="bg-white shadow-lg">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Anul</th>
                      <th className="px-6 py-4 text-center font-semibold">Bărbați</th>
                      <th className="px-6 py-4 text-center font-semibold">Femei</th>
                      <th className="px-6 py-4 text-center font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    {retirementAge.map((item, index) => (
                      <tr key={index} className={index === 0 ? "bg-primary/5" : ""}>
                        <td className="px-6 py-4 font-medium text-neutral-800">{item.year}</td>
                        <td className="px-6 py-4 text-center text-neutral-700">{item.men} ani</td>
                        <td className="px-6 py-4 text-center text-neutral-700">{item.women} ani</td>
                        <td className="px-6 py-4 text-center">
                          {index === 0 ? (
                            <Badge className="bg-primary text-white">Actual</Badge>
                          ) : item.men === item.women ? (
                            <Badge className="bg-green-100 text-green-800">Egalizată</Badge>
                          ) : (
                            <Badge variant="secondary">Tranziție</Badge>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-blue-600 mt-1 mr-3" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Notă importantă</h4>
                <p className="text-blue-800">
                  Tabelul de mai sus se aplică pentru pensiile pentru limită de vârstă. Pentru pensiile anticipate, 
                  condițiile pot fi diferite și se recomandă consultarea unui specialist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Legislative Changes */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">
              Modificări Legislative Recente
            </h2>
            <p className="text-xl text-neutral-600">
              Principalele schimbări din legislația pensiilor în ultimii ani
            </p>
          </div>

          <div className="space-y-8">
            {legislativeChanges.map((change, index) => (
              <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge variant="outline" className="mb-2">{change.year}</Badge>
                      <h3 className="text-xl font-bold text-neutral-800">{change.title}</h3>
                    </div>
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-neutral-600 mb-4">{change.description}</p>
                  <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
                    <h4 className="font-semibold text-accent mb-2">Impact:</h4>
                    <p className="text-neutral-700">{change.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculation Methods */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">
              Cum se Calculează Corect Stagiul de Cotizare?
            </h2>
          </div>

          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-3">Perioade care se iau în calcul:</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-green-600 mb-2">✓ Perioade contributive</h4>
                      <ul className="text-sm space-y-1 text-neutral-600">
                        <li>• Activitate ca salariat</li>
                        <li>• Activitate independentă</li>
                        <li>• Plata voluntară de contribuții</li>
                        <li>• Serviciul militar obligatoriu</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600 mb-2">✓ Perioade asimilate</h4>
                      <ul className="text-sm space-y-1 text-neutral-600">
                        <li>• Concediu de maternitate</li>
                        <li>• Concediu pentru creșterea copilului</li>
                        <li>• Perioada de șomaj indemnizat</li>
                        <li>• Incapacitate temporară de muncă</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-900 mb-3">Stagiu minim necesar:</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">15 ani</div>
                      <div className="text-sm text-orange-800">Pensie pentru limită de vârstă</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">15 ani</div>
                      <div className="text-sm text-orange-800">Pensie anticipată parțială</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">35 ani</div>
                      <div className="text-sm text-orange-800">Pensie anticipată completă</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Official Resources */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">
              Resurse Oficiale
            </h2>
            <p className="text-xl text-neutral-600">
              Link-uri către documentele și site-urile oficiale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-primary/5 border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-neutral-800 mb-3 flex items-center">
                  <ExternalLink className="w-5 h-5 mr-2 text-primary" />
                  Casa Națională de Pensii Publice
                </h3>
                <p className="text-neutral-600 mb-4">
                  Site-ul oficial al CNPP cu informații actualizate despre pensii și proceduri.
                </p>
                <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-white">
                  Vizitează site-ul oficial
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-accent/5 border-accent/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-neutral-800 mb-3 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-accent" />
                  Legea nr. 263/2010
                </h3>
                <p className="text-neutral-600 mb-4">
                  Textul integral al legii sistemului unitar de pensii publice.
                </p>
                <Button variant="outline" size="sm" className="text-accent border-accent hover:bg-accent hover:text-white">
                  Citește legea completă
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Aplică Cunoștințele în Practică</h3>
          <p className="text-blue-100 mb-6">
            Acum că știi legislația, calculează-ți pensia pe baza condițiilor actuale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-accent hover:bg-green-600 text-white">
                Calculează Pensia Acum
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Citește Ghidurile Practice
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
