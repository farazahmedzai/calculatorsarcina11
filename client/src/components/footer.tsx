import { Link } from "wouter";
import { Facebook, Twitter, Calculator } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-2">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Calculator Sarcina
              </h3>
            </div>
            <p className="text-slate-300 mb-8 max-w-md text-lg leading-relaxed">
              Resursa de încredere pentru calculul și planificarea pensiilor în România. 
              Informații actualizate conform legislației în vigoare.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-700 hover:bg-blue-600 p-3 rounded-lg transition-all transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-700 hover:bg-blue-600 p-3 rounded-lg transition-all transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Calculatoare</h4>
            <ul className="space-y-4 text-slate-300">
              <li>
                <Link href="/">
                  <span className="hover:text-blue-400 transition-colors cursor-pointer flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"></span>
                    Calculator Sarcina Principală
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="hover:text-blue-400 transition-colors cursor-pointer flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"></span>
                    Calculator Sarcina Anticipată
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="hover:text-blue-400 transition-colors cursor-pointer flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"></span>
                    Calculator Pilon III
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="hover:text-blue-400 transition-colors cursor-pointer flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"></span>
                    Calculator Stagiu Cotizare
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Resurse</h4>
            <ul className="space-y-4 text-slate-300">
              <li>
                <Link href="/planificare-pensie">
                  <span className="hover:text-blue-400 transition-colors cursor-pointer flex items-center group">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:bg-green-400 transition-colors"></span>
                    Ghiduri Complete
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/legislatie-resurse">
                  <span className="hover:text-blue-400 transition-colors cursor-pointer flex items-center group">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:bg-green-400 transition-colors"></span>
                    Legislația Pensiilor
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="hover:text-blue-400 transition-colors cursor-pointer flex items-center group">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:bg-green-400 transition-colors"></span>
                    Întrebări Frecvente
                  </span>
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:bg-green-400 transition-colors"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 calculatorsarcina.com. Toate drepturile rezervate.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors font-medium">
              Termeni și Condiții
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors font-medium">
              Politica de Confidențialitate
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
