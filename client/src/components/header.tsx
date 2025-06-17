import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Calculator } from "lucide-react";

export function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Acasă", href: "/", current: location === "/" },
    { name: "Planificare Pensie", href: "/planificare-pensie", current: location === "/planificare-pensie" },
    { name: "Tipuri de Pensii", href: "/tipuri-pensii", current: location === "/tipuri-pensii" },
    { name: "Legislație", href: "/legislatie-resurse", current: location === "/legislatie-resurse" },
    { name: "Blog", href: "/blog", current: location === "/blog" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="flex items-center space-x-3 cursor-pointer group">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-2 group-hover:shadow-lg transition-all">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                    Calculator Sarcina
                  </h1>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span
                    className={`${
                      item.current
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                    } px-4 py-2 rounded-lg transition-all cursor-pointer font-medium`}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </nav>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <span
                        className={`${
                          item.current
                            ? "text-primary font-medium"
                            : "text-neutral-600 hover:text-primary"
                        } transition-colors cursor-pointer block px-3 py-2 text-base`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
