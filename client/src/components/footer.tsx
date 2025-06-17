import { Link } from "wouter";
import { Facebook, Twitter, Calculator } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-teal-500 to-orange-500 rounded-lg p-2">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Calculator Sarcina
              </h3>
            </div>
            <p className="text-slate-300 mb-6 max-w-md text-sm leading-relaxed">
              Resursa de încredere pentru calculul sarcinii și planificarea pensiilor în România. 
              Informații actualizate conform legislației în vigoare.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-teal-600 hover:bg-teal-700 p-2 rounded-lg transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="bg-orange-600 hover:bg-orange-700 p-2 rounded-lg transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-base mb-4 text-white">Calculatoare</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>
                <Link href="/calculator-sarcina">
                  <span className="hover:text-orange-300 transition-colors cursor-pointer">
                    Calculator Sarcină
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/planificare-pensie">
                  <span className="hover:text-teal-300 transition-colors cursor-pointer">
                    Calculator Pensie
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/tipuri-pensii">
                  <span className="hover:text-teal-300 transition-colors cursor-pointer">
                    Tipuri de Pensii
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-base mb-4 text-white">Resurse</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>
                <Link href="/planificare-pensie">
                  <span className="hover:text-orange-300 transition-colors cursor-pointer">
                    Ghiduri Complete
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/legislatie-resurse">
                  <span className="hover:text-teal-300 transition-colors cursor-pointer">
                    Legislația Pensiilor
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="hover:text-orange-300 transition-colors cursor-pointer">
                    Blog și Articole
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 calculatorsarcina.com. Toate drepturile rezervate.
          </p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-teal-300 text-sm transition-colors">
              Termeni și Condiții
            </a>
            <a href="#" className="text-slate-400 hover:text-orange-300 text-sm transition-colors">
              Politica de Confidențialitate
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
