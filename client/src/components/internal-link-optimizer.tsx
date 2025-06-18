import { Link } from "wouter";
import { ReactNode } from "react";

interface OptimizedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  title?: string;
  variant?: 'contextual' | 'navigational' | 'branded' | 'descriptive';
}

export function OptimizedLink({ 
  href, 
  children, 
  className = "", 
  title,
  variant = 'contextual' 
}: OptimizedLinkProps) {
  // Generate appropriate title attribute if not provided
  const linkTitle = title || generateLinkTitle(href, variant);
  
  return (
    <Link href={href}>
      <span 
        className={`cursor-pointer ${className}`}
        title={linkTitle}
        role="link"
        tabIndex={0}
      >
        {children}
      </span>
    </Link>
  );
}

function generateLinkTitle(href: string, variant: string): string {
  const routeTitles: Record<string, string> = {
    "/": "Calculatoare online pentru sarcină și pensie",
    "/calculator-sarcina": "Calculator sarcină - calculează data nașterii",
    "/planificare-pensie": "Ghid complet pentru planificarea pensiei",
    "/tipuri-pensii": "Tipurile de pensii disponibile în România",
    "/legislatie-resurse": "Legislația pensiilor și resurse oficiale",
    "/blog": "Blog cu articole despre pensii și planificare financiară"
  };

  const baseTitle = routeTitles[href] || "Navigare în site";
  
  switch (variant) {
    case 'contextual':
      return `${baseTitle} | Calculator Sarcina`;
    case 'navigational':
      return `Navighează la ${baseTitle}`;
    case 'branded':
      return `Calculator Sarcina - ${baseTitle}`;
    case 'descriptive':
      return baseTitle;
    default:
      return baseTitle;
  }
}

// Component for contextual internal links within content
export function ContextualLink({ href, children, className }: OptimizedLinkProps) {
  return (
    <OptimizedLink 
      href={href} 
      variant="contextual"
      className={`text-blue-600 hover:text-blue-800 underline decoration-1 hover:decoration-2 transition-all duration-200 ${className}`}
    >
      {children}
    </OptimizedLink>
  );
}

// Component for navigation links
export function NavigationLink({ href, children, className }: OptimizedLinkProps) {
  return (
    <OptimizedLink 
      href={href} 
      variant="navigational"
      className={`font-medium hover:text-primary transition-colors duration-200 ${className}`}
    >
      {children}
    </OptimizedLink>
  );
}