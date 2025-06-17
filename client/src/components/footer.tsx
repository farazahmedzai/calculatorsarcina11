import { Link } from "wouter";
import { Facebook, Twitter, Calculator, Mail, Phone, MapPin, Heart, Star, Shield, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/5 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full translate-x-48 translate-y-48"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-purple-500/5 rounded-full"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-orange-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-2.5 h-2.5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
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
              <div className="flex items-center space-x-2 text-slate-300">
                <Shield className="w-4 h-4 text-teal-400" />
                <span>Date Securizate</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Star className="w-4 h-4 text-orange-400" />
                <span>125K+ Utilizatori</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Heart className="w-4 h-4 text-red-400" />
                <span>Made in România</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="group bg-slate-800/50 hover:bg-teal-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 border border-slate-700/50 hover:border-teal-500">
                <Facebook className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="group bg-slate-800/50 hover:bg-orange-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 border border-slate-700/50 hover:border-orange-500">
                <Twitter className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a href="mailto:contact@calculatorsarcina.com" className="group bg-slate-800/50 hover:bg-purple-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 border border-slate-700/50 hover:border-purple-500">
                <Mail className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Calculators Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white flex items-center space-x-2">
              <Calculator className="w-5 h-5 text-teal-400" />
              <span>Calculatoare</span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/calculator-sarcina">
                  <span className="group flex items-center space-x-2 text-slate-300 hover:text-orange-300 transition-all duration-300 cursor-pointer">
                    <span className="w-2 h-2 bg-orange-400 rounded-full group-hover:scale-150 transition-transform"></span>
                    <span className="group-hover:translate-x-1 transition-transform">Calculator Sarcină</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/planificare-pensie">
                  <span className="group flex items-center space-x-2 text-slate-300 hover:text-teal-300 transition-all duration-300 cursor-pointer">
                    <span className="w-2 h-2 bg-teal-400 rounded-full group-hover:scale-150 transition-transform"></span>
                    <span className="group-hover:translate-x-1 transition-transform">Calculator Pensie</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/tipuri-pensii">
                  <span className="group flex items-center space-x-2 text-slate-300 hover:text-teal-300 transition-all duration-300 cursor-pointer">
                    <span className="w-2 h-2 bg-teal-400 rounded-full group-hover:scale-150 transition-transform"></span>
                    <span className="group-hover:translate-x-1 transition-transform">Tipuri de Pensii</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white flex items-center space-x-2">
              <Star className="w-5 h-5 text-orange-400" />
              <span>Resurse</span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/planificare-pensie">
                  <span className="group flex items-center space-x-2 text-slate-300 hover:text-orange-300 transition-all duration-300 cursor-pointer">
                    <span className="w-2 h-2 bg-orange-400 rounded-full group-hover:scale-150 transition-transform"></span>
                    <span className="group-hover:translate-x-1 transition-transform">Ghiduri Complete</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/legislatie-resurse">
                  <span className="group flex items-center space-x-2 text-slate-300 hover:text-teal-300 transition-all duration-300 cursor-pointer">
                    <span className="w-2 h-2 bg-teal-400 rounded-full group-hover:scale-150 transition-transform"></span>
                    <span className="group-hover:translate-x-1 transition-transform">Legislația Pensiilor</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="group flex items-center space-x-2 text-slate-300 hover:text-orange-300 transition-all duration-300 cursor-pointer">
                    <span className="w-2 h-2 bg-orange-400 rounded-full group-hover:scale-150 transition-transform"></span>
                    <span className="group-hover:translate-x-1 transition-transform">Blog și Articole</span>
                  </span>
                </Link>
              </li>
            </ul>
            
            {/* Contact Info */}
            <div className="pt-4 space-y-2 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@calculatorsarcina.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>București, România</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-slate-400 text-sm">
                © 2025 calculatorsarcina.com. Toate drepturile rezervate.
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Platformă dezvoltată cu ❤️ în România pentru familiile românești
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-teal-300 transition-colors duration-300 hover:underline">
                Termeni și Condiții
              </a>
              <a href="#" className="text-slate-400 hover:text-orange-300 transition-colors duration-300 hover:underline">
                Politica de Confidențialitate
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-300 transition-colors duration-300 hover:underline">
                GDPR
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-300 transition-colors duration-300 hover:underline">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
