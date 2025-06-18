import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PregnancyCalculator } from "@/components/pregnancy-calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Baby, Heart, Calendar, Stethoscope, CheckCircle, AlertCircle, BookOpen, Users } from "lucide-react";

export default function CalculatorSarcinaSimple() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8">
            <Badge className="px-4 py-2 text-sm font-semibold bg-pink-100 text-pink-700 border border-pink-200 rounded-full">
              <Baby className="w-4 h-4 mr-2" />
              Calculator Sarcină Professional
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                Calculator <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Sarcină</span> Online
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Calculează data nașterii, săptămâna de gestație și etapele importante ale dezvoltării bebelușului tău
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-slate-700">100% Gratuit</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
                <Stethoscope className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-slate-700">Precis Medical</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="text-sm font-medium text-slate-700">Date Private</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <PregnancyCalculator />
        </div>
      </section>

      {/* Information Cards */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Informații Importante despre Sarcină
            </h2>
            <p className="text-lg text-slate-600">
              Tot ce trebuie să știi despre dezvoltarea bebelușului
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-center text-lg">Trimestrul I</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 text-sm">
                  Săptămânile 1-12: Formarea organelor principale și primele simptome de sarcină
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-center text-lg">Trimestrul II</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 text-sm">
                  Săptămânile 13-26: Perioada cea mai confortabilă, primele mișcări ale bebelușului
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Baby className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-center text-lg">Trimestrul III</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 text-sm">
                  Săptămânile 27-40: Creșterea rapidă și pregătirea pentru naștere
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ai nevoie de mai multe informații?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Explorează ghidurile noastre complete și calculatorul de pensii
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/planificare-pensie">
              <Button size="lg" variant="outline" className="bg-white text-purple-600 hover:bg-purple-50 border-white">
                <BookOpen className="w-5 h-5 mr-2" />
                Calculator Pensie
              </Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Users className="w-5 h-5 mr-2" />
                Blog și Ghiduri
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}