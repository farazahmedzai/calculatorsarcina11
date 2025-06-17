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
    <header className={`glass sticky top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-2xl shadow-premium border-b border-border/50' 
        : 'bg-background/80 backdrop-blur-xl'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="flex items-center space-x-3 cursor-pointer group">
                  <div className="relative">
                    <div className="absolute inset-0 gradient-primary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative gradient-primary rounded-2xl p-3 group-hover:shadow-glow transition-all duration-300 transform group-hover:scale-105">
                      <Calculator className="w-7 h-7 text-white" />
                    </div>
                    <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse-slow" />
                  </div>
                  <div className="space-y-1">
                    <h1 className="text-2xl font-bold text-gradient leading-none">
                      Calculator Pensii
                    </h1>
                    <p className="text-xs font-medium text-muted-foreground leading-none">
                      România • Premium
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span
                    className={`relative px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer group ${
                      item.current
                        ? "bg-primary/10 text-primary shadow-glow"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {item.current && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl blur-lg"></div>
                    )}
                    <span className="relative">{item.name}</span>
                    {item.current && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
                    )}
                  </span>
                </Link>
              ))}
              
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="ml-4 hover:bg-muted/50 rounded-xl transition-all duration-300"
              >
                {isDark ? (
                  <Sun className="h-5 w-5 text-amber-500" />
                ) : (
                  <Moon className="h-5 w-5 text-slate-600" />
                )}
              </Button>
            </div>
          </nav>
          
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-muted/50 rounded-xl"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-amber-500" />
              ) : (
                <Moon className="h-5 w-5 text-slate-600" />
              )}
            </Button>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-muted/50 rounded-xl">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] glass border-l border-border/50">
                <div className="mt-8">
                  <div className="flex items-center space-x-3 mb-8 pb-6 border-b border-border/50">
                    <div className="gradient-primary rounded-xl p-2">
                      <Calculator className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="font-bold text-lg text-gradient">Calculator Pensii</h2>
                      <p className="text-xs text-muted-foreground">România • Premium</p>
                    </div>
                  </div>
                  
                  <nav className="flex flex-col space-y-2">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <span
                          className={`relative flex items-center px-4 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer group ${
                            item.current
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.current && (
                            <div className="absolute left-0 w-1 h-6 bg-gradient-to-b from-primary to-purple-500 rounded-r-full"></div>
                          )}
                          <span className="relative ml-2">{item.name}</span>
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
