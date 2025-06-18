import { Button } from "@/components/ui/button";
import { PensionCalculator } from "@/components/pension-calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Shield, TrendingUp, Users, CheckCircle, Clock, Award, Banknote } from "lucide-react";

export default function PlanificarePensieSimple() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8">
            <Badge className="px-4 py-2 text-sm font-semibold bg-blue-100 text-blue-700 border border-blue-200 rounded-full">
              <Calculator className="w-4 h-4 mr-2" />
              Calculator Pensie Professional România
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                Planificare <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Pensie</span> România
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Calculează pensia viitoare conform legislației românești actuale și planifică-ți viitorul financiar
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-slate-700">Legislație 2025</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
                <Shield className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-slate-700">Calcule Precise</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
                <Award className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium text-slate-700">100% Gratuit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="pension-calculator" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <PensionCalculator />
        </div>
      </section>

      {/* Information Cards */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Tipuri de Pensii în România
            </h2>
            <p className="text-lg text-slate-600">
              Înțelege sistemul de pensii românesc și opțiunile disponibile
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-center text-lg">Pilonul I</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 text-sm">
                  Sistemul public de pensii obligatoriu administrat de statul român
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-center text-lg">Pilonul II</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 text-sm">
                  Pensii private obligatorii administrate de fonduri de pensii private
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Banknote className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-center text-lg">Pilonul III</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 text-sm">
                  Pensii private facultative cu contribuții voluntare
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-center text-lg">Pensie Anticipată</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 text-sm">
                  Pentru cei care îndeplinesc condițiile speciale de pensionare timpurie
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              De ce să folosești calculatorul nostru?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Calcule Precise</h3>
              <p className="text-slate-600">
                Algoritm actualizat conform cu ultima legislație românească în vigoare
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Date Securizate</h3>
              <p className="text-slate-600">
                Informațiile tale personale sunt protejate și nu sunt stocate permanent
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Planificare Viitoare</h3>
              <p className="text-slate-600">
                Obține o estimare realistă pentru a-ți planifica pensionarea
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Începe să-ți planifici viitorul astăzi
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Folosește calculatorul de mai sus pentru a afla cât vei primi la pensie
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white text-indigo-600 hover:bg-indigo-50 border-white"
            onClick={() => {
              const calculatorSection = document.getElementById('pension-calculator');
              calculatorSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Calculator className="w-5 h-5 mr-2" />
            Calculează Pensia Acum
          </Button>
        </div>
      </section>
    </div>
  );
}