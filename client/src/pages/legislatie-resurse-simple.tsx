import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  ExternalLink, 
  Download, 
  BookOpen, 
  Scale, 
  Building2,
  Users,
  Phone,
  Mail,
  Globe,
  Calendar,
  AlertCircle,
  CheckCircle2,
  Info
} from "lucide-react";

export default function LegislatieResurseSimple() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8">
            <Badge className="px-4 py-2 text-sm font-semibold bg-slate-100 text-slate-700 border border-slate-200 rounded-full">
              <Scale className="w-4 h-4 mr-2" />
              Legislație și Resurse Oficiale
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                Legislația <span className="bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">Pensiilor</span> România
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Ghid complet cu toate legile, reglementările și resursele oficiale pentru sistemul de pensii românesc
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Laws Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Principalele Legi și Reglementări
            </h2>
            <p className="text-lg text-slate-600">
              Actele normative care reglementează sistemul de pensii din România
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-center text-xl">Legea 263/2010</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 text-center">
                  Legea sistemului unitar de pensii publice - principalul act normativ
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                    <span>Condițiile de pensionare</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                    <span>Calculul punctajului de pensie</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                    <span>Tipurile de pensii</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Consultă Legea
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-center text-xl">Legea 411/2004</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 text-center">
                  Legea fondurilor de pensii private obligatorii (Pilonul II)
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                    <span>Funcționarea Pilonului II</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                    <span>Drepturile participanților</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                    <span>Transferul între fonduri</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Consultă Legea
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-center text-xl">Legea 204/2006</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 text-center">
                  Legea fondurilor de pensii private facultative (Pilonul III)
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                    <span>Contribuții voluntare</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                    <span>Avantaje fiscale</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                    <span>Flexibilitate contribuții</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Consultă Legea
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-center text-xl">Modificări 2025</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 text-center">
                  Ultimele modificări legislative pentru anul 2025
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <AlertCircle className="w-4 h-4 text-orange-500 mr-2" />
                    <span>Vârsta de pensionare</span>
                  </div>
                  <div className="flex items-center">
                    <AlertCircle className="w-4 h-4 text-orange-500 mr-2" />
                    <span>Valoarea punctului de pensie</span>
                  </div>
                  <div className="flex items-center">
                    <AlertCircle className="w-4 h-4 text-orange-500 mr-2" />
                    <span>Contribuții Pilonul II</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Vezi Modificările
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Official Resources */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Resurse și Autorități Oficiale
            </h2>
            <p className="text-lg text-slate-600">
              Contacte și resurse oficiale pentru informații despre pensii
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Building2 className="w-5 h-5 mr-2 text-blue-600" />
                  Casa Națională de Pensii
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm">
                  <Globe className="w-4 h-4 mr-2 text-slate-500" />
                  <span>www.cnpp.ro</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="w-4 h-4 mr-2 text-slate-500" />
                  <span>Tel: *8001</span>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="w-4 h-4 mr-2 text-slate-500" />
                  <span>contact@cnpp.ro</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Scale className="w-5 h-5 mr-2 text-green-600" />
                  Autoritatea de Supraveghere
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm">
                  <Globe className="w-4 h-4 mr-2 text-slate-500" />
                  <span>www.asfromania.ro</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="w-4 h-4 mr-2 text-slate-500" />
                  <span>Tel: 021.659.85.14</span>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="w-4 h-4 mr-2 text-slate-500" />
                  <span>office@asfromania.ro</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-purple-600" />
                  Monitorul Oficial
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm">
                  <Globe className="w-4 h-4 mr-2 text-slate-500" />
                  <span>www.monitoruloficial.ro</span>
                </div>
                <div className="flex items-center text-sm">
                  <Info className="w-4 h-4 mr-2 text-slate-500" />
                  <span>Publicarea legilor</span>
                </div>
                <div className="flex items-center text-sm">
                  <Download className="w-4 h-4 mr-2 text-slate-500" />
                  <span>Documente oficiale</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Calculează-ți pensia conform legislației actuale
          </h2>
          <p className="text-xl mb-8 text-slate-300">
            Folosește calculatorul nostru actualizat cu ultimele modificări legislative
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/planificare-pensie">
              <Button size="lg" variant="outline" className="bg-white text-slate-800 hover:bg-slate-100 border-white">
                <BookOpen className="w-5 h-5 mr-2" />
                Calculator Pensie
              </Button>
            </Link>
            <Link href="/tipuri-pensii">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Users className="w-5 h-5 mr-2" />
                Tipuri de Pensii
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}