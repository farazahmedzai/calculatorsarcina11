import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BreadcrumbNavigation } from "@/components/breadcrumb-navigation";
import { MobileResponsiveWrapper, useMobileOptimization } from "@/components/mobile-responsive-wrapper";
import { AdvancedSEOWrapper, useMobilePerformanceOptimization } from "@/components/advanced-seo-wrapper";
import Home from "@/pages/home";
import CalculatorSarcina from "@/pages/calculator-sarcina";
import PlanificareePensie from "@/pages/planificare-pensie";
import TipuriPensii from "@/pages/tipuri-pensii";
import LegislatieResurse from "@/pages/legislatie-resurse";
import Blog from "@/pages/blog";
import DespreNoi from "@/pages/despre-noi";
import NotFound from "@/pages/not-found";

function Router() {
  // Apply mobile and performance optimizations
  useMobileOptimization();
  useMobilePerformanceOptimization();

  return (
    <AdvancedSEOWrapper>
      <MobileResponsiveWrapper
        enableTouchOptimization={true}
        enableViewportDetection={true}
        className="safe-area-all"
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <BreadcrumbNavigation />
          <main className="flex-1">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/calculator-sarcina" component={CalculatorSarcina} />
              <Route path="/planificare-pensie" component={PlanificareePensie} />
              <Route path="/tipuri-pensii" component={TipuriPensii} />
              <Route path="/legislatie-resurse" component={LegislatieResurse} />
              <Route path="/blog" component={Blog} />
              <Route path="/blog/:slug" component={Blog} />
              <Route path="/despre-noi" component={DespreNoi} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
      </MobileResponsiveWrapper>
    </AdvancedSEOWrapper>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
