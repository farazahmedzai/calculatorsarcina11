import { Link } from "wouter";
import { Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Calculator Sarcina</h3>
            <p className="text-neutral-300 mb-6 max-w-md">
              Resursa de încredere pentru calculul și planificarea pensiilor în România. 
              Informații actualizate conform legislației în vigoare.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Calculatoare</h4>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <Link href="/">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Calculator Sarcina Principală
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Calculator Sarcina Anticipată
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Calculator Pilon III
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Calculator Stagiu Cotizare
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resurse</h4>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <Link href="/planificare-pensie">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Ghiduri Complete
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/legislatie-resurse">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Legislația Pensiilor
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Întrebări Frecvente
                  </span>
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © 2024 calculatorsarcina.com. Toate drepturile rezervate.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">
              Termeni și Condiții
            </a>
            <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">
              Politica de Confidențialitate
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
