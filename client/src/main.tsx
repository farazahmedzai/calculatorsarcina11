import { createRoot } from "react-dom/client";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./index.css";

// Simple components
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Home from "@/pages/home-simple";
import CalculatorSarcina from "@/pages/calculator-sarcina-simple";
import PlanificareePensie from "@/pages/planificare-pensie-simple";
import TipuriPensii from "@/pages/tipuri-pensii";
import LegislatieResurse from "@/pages/legislatie-resurse";
import Blog from "@/pages/blog";
import NotFound from "@/pages/not-found";

function SimpleApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <main className="flex-1">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/calculator-sarcina" component={CalculatorSarcina} />
              <Route path="/planificare-pensie" component={PlanificareePensie} />
              <Route path="/tipuri-pensii" component={TipuriPensii} />
              <Route path="/legislatie-resurse" component={LegislatieResurse} />
              <Route path="/blog" component={Blog} />
              <Route path="/blog/:slug" component={Blog} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

createRoot(document.getElementById("root")!).render(<SimpleApp />);
