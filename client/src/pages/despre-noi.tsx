import { SEOHead } from "@/components/seo-head";
import { StructuredData } from "@/components/structured-data";
import { OptimizedImage } from "@/components/optimized-image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Calculator, 
  Heart, 
  Shield, 
  Users, 
  Target, 
  Award,
  Clock,
  CheckCircle,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export default function DespreNoi() {
  const teamMembers = [
    {
      name: "Dr. Maria Popescu",
      role: "Specialist în Planificare Financiară",
      expertise: "20+ ani experiență în consultanță pensii",
      description: "Expert în legislația românească a pensiilor cu specializare în optimizarea contribuțiilor."
    },
    {
      name: "Ana Ionescu",
      role: "Specialist în Sarcină și Naștere",
      expertise: "Obstetrică și ginecologie",
      description: "Specialist în monitorizarea sarcinii și calculele medicale pentru gravide."
    },
    {
      name: "Mihai Stanescu",
      role: "Dezvoltator Senior",
      expertise: "Tehnologii web moderne",
      description: "Responsabil pentru dezvoltarea și menținerea platformei Calculator Sarcina."
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Siguranță și Confidențialitate",
      description: "Datele dumneavoastră sunt protejate prin cele mai avansate măsuri de securitate. Nu stocăm informații personale sensibile."
    },
    {
      icon: Target,
      title: "Precizie și Acuratețe",
      description: "Calculele noastre sunt bazate pe cele mai recente reglementări românești și formule medicale validate."
    },
    {
      icon: Heart,
      title: "Orientare către Utilizator",
      description: "Proiectăm fiecare funcționalitate cu gândul la experiența și nevoile dumneavoastră specifice."
    },
    {
      icon: Users,
      title: "Comunitate și Suport",
      description: "Oferim suport continuu și resurse educaționale pentru a vă ajuta să luați decizii informate."
    }
  ];

  const achievements = [
    {
      number: "50,000+",
      label: "Utilizatori activi",
      description: "Românii care ne-au ales pentru calculele lor importante"
    },
    {
      number: "99.9%",
      label: "Acuratețe",
      description: "Precizia calculelor noastre verificată de specialiști"
    },
    {
      number: "24/7",
      label: "Disponibilitate",
      description: "Platforma este disponibilă oricând aveți nevoie"
    },
    {
      number: "5+",
      label: "Ani experiență",
      description: "În dezvoltarea soluțiilor pentru români"
    }
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Calculator Sarcina",
    "url": "https://calculatorsarcina.com",
    "logo": "https://calculatorsarcina.com/assets/logo.png",
    "description": "Platforma lider în România pentru calculele de sarcină și pensie",
    "foundingDate": "2019",
    "areaServed": "Romania",
    "serviceType": ["Calculator Sarcină", "Calculator Pensie", "Consultanță Financiară"],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@calculatorsarcina.com",
      "availableLanguage": "Romanian"
    }
  };

  return (
    <>
      <SEOHead 
        page="despre-noi"
        title="Despre Noi - Calculator Sarcina | Echipa și Misiunea Noastră"
        description="Descoperă echipa Calculator Sarcina, misiunea noastră și valorile care ne ghidează în oferirea celor mai precise calculatoare pentru sarcină și pensie în România."
        keywords="despre calculator sarcina, echipa, misiune, valori, experienta, specializare romania"
        canonical="https://calculatorsarcina.com/despre-noi"
      />
      
      <StructuredData type="organization" data={organizationSchema} />

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
          <div className="relative max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-purple-200">
              <Heart className="h-5 w-5 text-purple-600" />
              <span className="text-purple-700 font-medium">Calculator Sarcina - Despre Noi</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Cine Suntem Noi
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Suntem echipa din spatele Calculator Sarcina, platforma de încredere a românilor pentru 
              cele mai importante calcule din viață: sarcina și planificarea pensiei.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/calculator-sarcina">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Calculator className="h-5 w-5 mr-2" />
                  Calculator Sarcină
                </Button>
              </Link>
              <Link href="/planificare-pensie">
                <Button size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50">
                  <Award className="h-5 w-5 mr-2" />
                  Calculator Pensie
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Misiunea și Viziunea Noastră</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ne dedicăm să oferim românilor instrumentele necesare pentru cele mai importante 
                decizii din viața lor.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-purple-600 rounded-full">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Misiunea Noastră</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Să democratizăm accesul la informația financiară și medicală de calitate, 
                    oferind calculatoare precise și ușor de folosit pentru toate categoriile 
                    de români. Credem că fiecare persoană merită să ia decizii informate 
                    despre viitorul său financiar și sănătatea familiei.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-indigo-600 rounded-full">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Viziunea Noastră</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Să devenim platforma de referință în România pentru calculele importante 
                    din viață, recunoscută pentru acuratețe, încredere și inovație. Visăm 
                    la o societate în care fiecare român are acces la instrumentele necesare 
                    pentru planificarea unui viitor sigur și sănătos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Valorile Care Ne Ghidează</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Principiile fundamentale care stau la baza tuturor deciziilor și acțiunilor noastre.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 border-purple-100">
                  <CardContent className="p-0">
                    <div className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Echipa Noastră de Specialiști</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Profesioniști dedicați cu experiență vastă în domeniile lor de expertiză.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Users className="h-12 w-12 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <Badge variant="secondary" className="mb-4">{member.role}</Badge>
                    <p className="text-purple-600 font-medium mb-4">{member.expertise}</p>
                    <p className="text-gray-600 leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Realizările Noastre</h2>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Numerele care demonstrează încrederea pe care românii o acordă platformei noastre.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold mb-2">{achievement.number}</div>
                  <div className="text-xl font-semibold mb-2">{achievement.label}</div>
                  <div className="text-purple-100">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 px-4 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Ia Legătura cu Noi</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Suntem aici să vă ajutăm cu orice întrebări despre calculatoarele noastre sau serviciile oferite.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="p-4 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Mail className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">contact@calculatorsarcina.com</p>
                  <p className="text-sm text-gray-500 mt-2">Răspuns în maxim 24 de ore</p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="p-4 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Program</h3>
                  <p className="text-gray-600">Luni - Vineri: 9:00 - 18:00</p>
                  <p className="text-sm text-gray-500 mt-2">Suport tehnic și consultanță</p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="p-4 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Locație</h3>
                  <p className="text-gray-600">București, România</p>
                  <p className="text-sm text-gray-500 mt-2">Servicii online în toată țara</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Începe să Folosești Calculatoarele Noastre Astăzi
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Alătură-te celor peste 50.000 de români care au ales Calculator Sarcina pentru 
              deciziile importante din viața lor.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/calculator-sarcina">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Calculator className="h-5 w-5 mr-2" />
                  Calculator Sarcină
                </Button>
              </Link>
              <Link href="/planificare-pensie">
                <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                  <Award className="h-5 w-5 mr-2" />
                  Calculator Pensie
                </Button>
              </Link>
              <Link href="/blog">
                <Button size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Citește Blog-ul
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}