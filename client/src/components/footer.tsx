import { Link } from "wouter";
import { Facebook, Twitter, Calculator, Mail, Phone, MapPin, Heart, Star, Shield, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Modern Decorative Elements */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 translate-x-40 translate-y-40"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Calculator className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Calculator Sarcina
                </h3>
                <p className="text-slate-400 text-sm font-medium">Platformă pentru viitorul tău</p>
              </div>
            </div>
            
            <p className="text-slate-300 max-w-md text-base leading-relaxed">
              Resursa de încredere pentru calculul sarcinii și planificarea pensiilor în România. 
              Oferim informații actualizate conform legislației în vigoare pentru a te ajuta să iei deciziile corecte.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center space-x-2 px-3 py-2 bg-slate-800/50 rounded-full border border-slate-700/50">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300">Date Securizate</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-2 bg-slate-800/50 rounded-full border border-slate-700/50">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-slate-300">125K+ Utilizatori</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-2 bg-slate-800/50 rounded-full border border-slate-700/50">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="text-slate-300">Made in România</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <a href="#" className="group bg-slate-800/50 hover:bg-blue-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 border border-slate-700/50 hover:border-blue-500 hover:shadow-lg">
                <Facebook className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="group bg-slate-800/50 hover:bg-sky-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 border border-slate-700/50 hover:border-sky-500 hover:shadow-lg">
                <Twitter className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a href="mailto:contact@calculatorsarcina.com" className="group bg-slate-800/50 hover:bg-purple-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 border border-slate-700/50 hover:border-purple-500 hover:shadow-lg">
                <Mail className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Calculators Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white flex items-center space-x-2">
              <Calculator className="w-5 h-5 text-purple-400" />
              <span>Calculatoare</span>
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/calculator-sarcina">
                  <span className="group flex items-center space-x-3 text-slate-300 hover:text-pink-300 transition-all duration-300 cursor-pointer p-2 rounded-lg hover:bg-slate-800/50">
                    <div className="w-2 h-2 bg-pink-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:translate-x-1 transition-transform">Calculator Sarcină</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/planificare-pensie">
                  <span className="group flex items-center space-x-3 text-slate-300 hover:text-indigo-300 transition-all duration-300 cursor-pointer p-2 rounded-lg hover:bg-slate-800/50">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:translate-x-1 transition-transform">Calculator Pensie</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/tipuri-pensii">
                  <span className="group flex items-center space-x-3 text-slate-300 hover:text-blue-300 transition-all duration-300 cursor-pointer p-2 rounded-lg hover:bg-slate-800/50">
                    <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:translate-x-1 transition-transform">Tipuri de Pensii</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>Resurse</span>
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/planificare-pensie">
                  <span className="group flex items-center space-x-3 text-slate-300 hover:text-emerald-300 transition-all duration-300 cursor-pointer p-2 rounded-lg hover:bg-slate-800/50">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:translate-x-1 transition-transform">Ghiduri Complete</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/legislatie-resurse">
                  <span className="group flex items-center space-x-3 text-slate-300 hover:text-cyan-300 transition-all duration-300 cursor-pointer p-2 rounded-lg hover:bg-slate-800/50">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:translate-x-1 transition-transform">Legislația Pensiilor</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="group flex items-center space-x-3 text-slate-300 hover:text-orange-300 transition-all duration-300 cursor-pointer p-2 rounded-lg hover:bg-slate-800/50">
                    <div className="w-2 h-2 bg-orange-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="group-hover:translate-x-1 transition-transform">Blog și Articole</span>
                  </span>
                </Link>
              </li>
            </ul>
            
            {/* Contact Info */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center space-x-3 text-sm text-slate-400 p-2 rounded-lg bg-slate-800/30">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>contact@calculatorsarcina.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-400 p-2 rounded-lg bg-slate-800/30">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>București, România</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-slate-400 text-sm font-medium">
                © 2025 calculatorsarcina.com. Toate drepturile rezervate.
              </p>
              <p className="text-slate-500 text-xs mt-2 flex items-center justify-center lg:justify-start space-x-1">
                <span>Platformă dezvoltată cu</span>
                <Heart className="w-3 h-3 text-red-400" />
                <span>în România pentru familiile românești</span>
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-purple-300 transition-all duration-300 hover:underline px-2 py-1 rounded hover:bg-slate-800/50">
                Termeni și Condiții
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-300 transition-all duration-300 hover:underline px-2 py-1 rounded hover:bg-slate-800/50">
                Politica de Confidențialitate
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-300 transition-all duration-300 hover:underline px-2 py-1 rounded hover:bg-slate-800/50">
                GDPR
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-300 transition-all duration-300 hover:underline px-2 py-1 rounded hover:bg-slate-800/50">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
