import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Calculator, Sparkles, Moon, Sun } from "lucide-react";

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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-sm shadow-sm border-b border-border/50' 
        : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="flex items-center space-x-2 cursor-pointer group">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Calculator className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h1 className="text-lg font-bold text-foreground leading-tight">
                      Calculator Sarcina
                    </h1>
                    <p className="text-xs text-muted-foreground leading-tight">
                      România
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                      item.current
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
              
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="ml-2 h-8 w-8 p-0"
              >
                {isDark ? (
                  <Sun className="h-4 w-4 text-amber-500" />
                ) : (
                  <Moon className="h-4 w-4 text-slate-600" />
                )}
              </Button>
            </div>
          </nav>
          
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="h-8 w-8 p-0"
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-amber-500" />
              ) : (
                <Moon className="h-4 w-4 text-slate-600" />
              )}
            </Button>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <div className="mt-6">
                  <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-border">
                    <div className="bg-primary rounded-lg p-1.5">
                      <Calculator className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-base text-foreground">Calculator Sarcina</h2>
                      <p className="text-xs text-muted-foreground">România</p>
                    </div>
                  </div>
                  
                  <nav className="flex flex-col space-y-1">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <span
                          className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                            item.current
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
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
