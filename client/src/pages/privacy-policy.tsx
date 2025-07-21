import { SEOHead } from "@/components/seo-head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Lock, Users, FileText, Mail, Phone, MapPin, Calendar } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        page="privacy-policy" 
        title="Politica de Confidențialitate - Calculator Sarcina | CalculatorSarcina.com"
        description="Politica de confidențialitate și protecția datelor personale conform GDPR pentru Calculator Sarcina. Aflați cum vă protejăm informațiile și respectăm drepturile dvs."
        keywords="politica confidentialitate, GDPR, protectia datelor, calculator sarcina, privacy policy"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Badge className="px-4 py-2 text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200 rounded-full mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Protecția Datelor GDPR
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Politica de Confidențialitate
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Protecția datelor dvs. personale este prioritatea noastră. Aflați cum colectăm, 
            folosim și protejăm informațiile dvs. conform legislației GDPR.
          </p>
          <div className="mt-8 text-sm text-slate-500">
            <div className="flex items-center justify-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Ultima actualizare: 21 ianuarie 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          
          {/* Introduction */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-3 text-xl">
                <FileText className="w-6 h-6" />
                <span>1. Introducere</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-4">
              <p className="text-slate-700 leading-relaxed">
                Această Politică de Confidențialitate descrie modul în care <strong>calculatorsarcina.com</strong> 
                ("noi", "nostru" sau "site-ul") colectează, folosește și protejează informațiile dvs. personale 
                când utilizați serviciile noastre de calculare online pentru sarcină și pensii.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Această politică este conformă cu Regulamentul General privind Protecția Datelor (GDPR) 
                și cu Legea nr. 190/2018 privind măsurile de punere în aplicare a GDPR în România.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                <p className="text-blue-800 font-medium">
                  <Shield className="w-5 h-5 inline mr-2" />
                  Principiul nostru fundamental: Datele dvs. sunt procesate doar în scopul furnizării serviciilor solicitate.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-3 text-xl">
                <Eye className="w-6 h-6" />
                <span>2. Informații pe care le Colectăm</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">2.1. Informații furnizate direct</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Pentru calculatorul de sarcină:</strong> Data ultimei menstruații, data concepției sau data ecografiei (în funcție de metoda aleasă)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Pentru calculatorul de pensii:</strong> Vârsta, venitul brut lunar, anii de contribuție, tipul pensiei dorite</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Contact (opțional):</strong> Adresa de email pentru newsletter sau întrebări</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">2.2. Informații colectate automat</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Date tehnice:</strong> Adresa IP (anonimizată), tipul browser-ului, sistemul de operare</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Date de utilizare:</strong> Paginile vizitate, timpul petrecut pe site, sursele de trafic</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Cookie-uri:</strong> Pentru îmbunătățirea funcționalității și analizarea traficului</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">
                  <Lock className="w-5 h-5 inline mr-2" />
                  IMPORTANT: Calculele se efectuează în browser-ul dvs. Datele introduse în calculatoare nu sunt transmise pe serverele noastre.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-3 text-xl">
                <Users className="w-6 h-6" />
                <span>3. Cum Folosim Informațiile</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-800">Scopuri legitime:</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Furnizarea serviciilor de calculare</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Îmbunătățirea funcționalității site-ului</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Analize statistice anonime</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Respectarea obligațiilor legale</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-800">Cu acordul dvs.:</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Trimiterea newsletter-ului educațional</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Comunicări promoționale</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Personalizarea conținutului</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-3 text-xl">
                <Lock className="w-6 h-6" />
                <span>4. Protecția Datelor</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Măsuri tehnice:</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Criptare SSL/TLS pentru toate conexiunile</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Calculele se efectuează local în browser</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Anonimizarea adreselor IP</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Backup-uri regulate și sigure</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Măsuri organizatorice:</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Acces restrictionat la date personale</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Instruirea echipei în protecția datelor</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Politici interne de securitate</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Monitorizarea încălcărilor de securitate</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-3 text-xl">
                <Shield className="w-6 h-6" />
                <span>5. Drepturile Dvs. GDPR</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-4">
              <p className="text-slate-700 leading-relaxed mb-6">
                Conform GDPR, aveți următoarele drepturi privind datele dvs. personale:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Dreptul de acces</h4>
                    <p className="text-sm text-slate-600">Să știți ce date avem despre dvs.</p>
                  </div>
                  
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Dreptul de rectificare</h4>
                    <p className="text-sm text-slate-600">Să corectați datele incorecte.</p>
                  </div>
                  
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Dreptul la ștergere</h4>
                    <p className="text-sm text-slate-600">Să solicitați ștergerea datelor.</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Dreptul la portabilitate</h4>
                    <p className="text-sm text-slate-600">Să primiți datele într-un format structurat.</p>
                  </div>
                  
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Dreptul de opoziție</h4>
                    <p className="text-sm text-slate-600">Să vă opuneți prelucrării pentru marketing.</p>
                  </div>
                  
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Dreptul la restricționare</h4>
                    <p className="text-sm text-slate-600">Să limitați prelucrarea datelor.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mt-6">
                <p className="text-indigo-800 font-medium">
                  Pentru exercitarea drepturilor, contactați-ne la: <strong>privacy@calculatorsarcina.com</strong>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-3 text-xl">
                <Eye className="w-6 h-6" />
                <span>6. Cookie-uri</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Tipuri de cookie-uri folosite:</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="border border-slate-200 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-800 mb-2">Esențiale</h4>
                      <p className="text-sm text-slate-600">Necesare pentru funcționarea site-ului</p>
                      <p className="text-xs text-green-600 mt-2 font-medium">Întotdeauna active</p>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-800 mb-2">Analiză</h4>
                      <p className="text-sm text-slate-600">Pentru înțelegerea utilizării site-ului</p>
                      <p className="text-xs text-blue-600 mt-2 font-medium">Cu acordul dvs.</p>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-800 mb-2">Publicitate</h4>
                      <p className="text-sm text-slate-600">Pentru reclame relevante</p>
                      <p className="text-xs text-blue-600 mt-2 font-medium">Cu acordul dvs.</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-700">
                  Puteți gestiona preferințele cookie-urilor prin setările browser-ului sau prin 
                  banner-ul de cookie-uri de pe site.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-slate-600 to-gray-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-3 text-xl">
                <Mail className="w-6 h-6" />
                <span>7. Contact și Întrebări</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">Responsabil cu protecția datelor:</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-slate-500" />
                      <span className="text-slate-700">privacy@calculatorsarcina.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-slate-500" />
                      <span className="text-slate-700">+40 21 XXX XXXX</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-slate-500" />
                      <span className="text-slate-700">București, România</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">Pentru reclamații:</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Dacă considerați că drepturile dvs. au fost încălcate, puteți depune o plângere la:
                  </p>
                  <p className="text-slate-700 font-medium mt-2">
                    Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)
                  </p>
                  <p className="text-sm text-slate-600 mt-1">
                    anspdcp.ro | contact@dataprotection.ro
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-3 text-xl">
                <Calendar className="w-6 h-6" />
                <span>8. Modificări ale Politicii</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-4">
              <p className="text-slate-700 leading-relaxed">
                Ne rezervăm dreptul de a actualiza această Politică de Confidențialitate pentru a reflecta 
                modificările în practicile noastre sau pentru alte motive operaționale, legale sau de reglementare.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Orice modificări vor fi publicate pe această pagină cu data actualizării. 
                Vă recomandăm să consultați periodic această politică pentru a fi la curent cu modificările.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <p className="text-emerald-800 font-medium">
                  Utilizarea continuă a site-ului după modificări constituie acceptarea noii politici.
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>
    </div>
  );
}