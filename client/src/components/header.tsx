import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Calculator, Sparkles, Moon, Sun, ArrowRight } from "lucide-react";

export function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: "Acasă", href: "/", current: location === "/" },
    { name: "Calculator Sarcină", href: "/calculator-sarcina", current: location === "/calculator-sarcina" },
    { name: "Planificare Pensie", href: "/planificare-pensie", current: location === "/planificare-pensie" },
    { name: "Tipuri de Pensii", href: "/tipuri-pensii", current: location === "/tipuri-pensii" },
    { name: "Legislație", href: "/legislatie-resurse", current: location === "/legislatie-resurse" },
    { name: "Blog", href: "/blog", current: location === "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg shadow-lg border-b border-slate-200/50 dark:border-slate-700/50' 
        : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="flex items-center space-x-3 cursor-pointer group">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-beige-500 to-cream-500 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <Calculator className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-cream-400 rounded-full flex items-center justify-center">
                      <Sparkles className="w-2 h-2 text-white" />
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <h1 className="text-xl font-bold bg-gradient-to-r from-beige-700 to-cream-600 bg-clip-text text-transparent leading-tight">
                      Calculator Sarcina
                    </h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight font-medium">
                      Platformă pentru viitorul tău
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span
                    className={`group relative px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                      item.current
                        ? "bg-gradient-to-r from-beige-500 to-cream-500 text-white shadow-lg"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/50"
                    }`}
                  >
                    {item.name}
                    {item.current && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cream-400 rounded-full"></div>
                    )}
                  </span>
                </Link>
              ))}
              
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="ml-4 h-10 w-10 p-0 rounded-xl bg-slate-100/80 dark:bg-slate-800/50 hover:bg-slate-200/80 dark:hover:bg-slate-700/50 transition-all duration-300"
              >
                {isDark ? (
                  <Sun className="h-5 h-5 text-amber-500" />
                ) : (
                  <Moon className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                )}
              </Button>
            </div>
          </nav>
          
          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="h-10 w-10 p-0 rounded-xl bg-slate-100/80 dark:bg-slate-800/50 hover:bg-slate-200/80 dark:hover:bg-slate-700/50 transition-all duration-300"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-amber-500" />
              ) : (
                <Moon className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              )}
            </Button>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-10 w-10 p-0 rounded-xl bg-slate-100/80 dark:bg-slate-800/50 hover:bg-slate-200/80 dark:hover:bg-slate-700/50 transition-all duration-300">
                  <Menu className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-l border-slate-200/50 dark:border-slate-700/50">
                <div className="mt-8">
                  <div className="flex items-center space-x-3 mb-8 pb-6 border-b border-slate-200 dark:border-slate-700">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-beige-500 to-cream-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Calculator className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-cream-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-2 h-2 text-white" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold bg-gradient-to-r from-beige-700 to-cream-600 bg-clip-text text-transparent">Calculator Sarcina</h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Platformă pentru viitorul tău</p>
                    </div>
                  </div>
                  
                  <nav className="flex flex-col space-y-2">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <span
                          className={`group flex items-center px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 cursor-pointer ${
                            item.current
                              ? "bg-gradient-to-r from-beige-500 to-cream-500 text-white shadow-lg"
                              : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/50"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="flex-1">{item.name}</span>
                          {item.current ? (
                            <div className="w-2 h-2 bg-cream-200 rounded-full"></div>
                          ) : (
                            <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                          )}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
