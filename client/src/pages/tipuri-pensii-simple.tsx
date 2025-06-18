import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  PiggyBank, 
  TrendingUp, 
  Calculator,
  Users,
  CheckCircle2,
  AlertTriangle,
  Star,
  Banknote,
  Building2,
  CreditCard
} from "lucide-react";

export default function TipuriPensiiSimple() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8">
            <Badge className="px-4 py-2 text-sm font-semibold bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-full">
              <Shield className="w-4 h-4 mr-2" />
              Ghid Complet Pensii România
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                Tipuri de <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Pensii</span> România
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Înțelege sistemul de pensii românesc și alege cea mai bună strategie pentru viitorul tău financiar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pension Pillars */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Cei Trei Piloni ai Sistemului de Pensii
            </h2>
            <p className="text-lg text-slate-600">
              Sistemul românesc de pensii se bazează pe trei piloni complementari
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Pilonul I */}
            <Card className="group relative overflow-hidden p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 rounded-2xl">
              <CardContent className="relative space-y-6 p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-800">Pilonul I</h3>
                  <p className="text-slate-600 font-medium">Pensie Publică Obligatorie</p>
                  <p className="text-slate-600 leading-relaxed">
                    Sistemul public de pensii administrat de Casa Națională de Pensii Publice. 
                    Este obligatoriu pentru toți angajații din România.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-slate-600">Contribuție: 25% din salariu</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-slate-600">Vârsta: 65 ani (bărbați), 63 ani (femei)</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-slate-600">Stagiu minim: 15 ani</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pilonul II */}
            <Card className="group relative overflow-hidden p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 rounded-2xl">
              <CardContent className="relative space-y-6 p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-800">Pilonul II</h3>
                  <p className="text-slate-600 font-medium">Pensie Privată Obligatorie</p>
                  <p className="text-slate-600 leading-relaxed">
                    Fonduri de pensii private obligatorii pentru persoanele născute după 1 ianuarie 1977. 
                    Contribuțiile sunt investite pe piețele financiare.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-slate-600">Contribuție: 3.75% din salariu</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-slate-600">Obligatoriu pentru cei născuți după 1977</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-slate-600">Randament variabil</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pilonul III */}
            <Card className="group relative overflow-hidden p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 rounded-2xl">
              <CardContent className="relative space-y-6 p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <PiggyBank className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-800">Pilonul III</h3>
                  <p className="text-slate-600 font-medium">Pensie Privată Facultativă</p>
                  <p className="text-slate-600 leading-relaxed">
                    Contribuții voluntare la fonduri de pensii private. Oferă avantaje fiscale 
                    și flexibilitate în alegerea sumelor și perioadelor de contribuție.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-slate-600">Contribuție voluntară</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-slate-600">Deducere fiscală până la 400€/an</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-slate-600">Flexibilitate maximă</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Comparație Detaliată
            </h2>
            <p className="text-lg text-slate-600">
              Analizează diferențele dintre cei trei piloni
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Caracteristică</th>
                    <th className="px-6 py-4 text-left font-semibold">Pilonul I</th>
                    <th className="px-6 py-4 text-left font-semibold">Pilonul II</th>
                    <th className="px-6 py-4 text-left font-semibold">Pilonul III</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">Tip contribuție</td>
                    <td className="px-6 py-4 text-slate-600">Obligatorie</td>
                    <td className="px-6 py-4 text-slate-600">Obligatorie</td>
                    <td className="px-6 py-4 text-slate-600">Voluntară</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">Procent contribuție</td>
                    <td className="px-6 py-4 text-slate-600">25%</td>
                    <td className="px-6 py-4 text-slate-600">3.75%</td>
                    <td className="px-6 py-4 text-slate-600">La alegere</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">Administrator</td>
                    <td className="px-6 py-4 text-slate-600">Statul român</td>
                    <td className="px-6 py-4 text-slate-600">Fonduri private</td>
                    <td className="px-6 py-4 text-slate-600">Fonduri private</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">Vârsta pensionării</td>
                    <td className="px-6 py-4 text-slate-600">63-65 ani</td>
                    <td className="px-6 py-4 text-slate-600">63-65 ani</td>
                    <td className="px-6 py-4 text-slate-600">Flexibilă</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Calculează-ți pensia pentru fiecare pilon
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Folosește calculatorul nostru pentru a estima pensia din toate sursele
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/planificare-pensie">
              <Button size="lg" variant="outline" className="bg-white text-indigo-600 hover:bg-indigo-50 border-white">
                <Calculator className="w-5 h-5 mr-2" />
                Calculator Pensie
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Users className="w-5 h-5 mr-2" />
                Înapoi la Acasă
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}