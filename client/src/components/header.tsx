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
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Calculator className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h1 className="text-xl font-bold text-foreground leading-none">
                      Calculator Pensii
                    </h1>
                    <p className="text-xs font-medium text-muted-foreground leading-none">
                      România
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
                    className={`relative px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 cursor-pointer ${
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
                  <div className="flex items-center space-x-3 mb-8 pb-6 border-b border-border">
                    <div className="bg-primary rounded-xl p-2">
                      <Calculator className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="font-bold text-lg text-foreground">Calculator Pensii</h2>
                      <p className="text-xs text-muted-foreground">România</p>
                    </div>
                  </div>
                  
                  <nav className="flex flex-col space-y-2">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <span
                          className={`relative flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer ${
                            item.current
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.current && (
                            <div className="absolute left-0 w-1 h-6 bg-primary rounded-r-full"></div>
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
