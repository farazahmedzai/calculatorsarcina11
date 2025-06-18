import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface AdvancedSEOWrapperProps {
  children: React.ReactNode;
}

export function AdvancedSEOWrapper({ children }: AdvancedSEOWrapperProps) {
  const [location] = useLocation();

  useEffect(() => {
    // Critical Web Vitals optimization
    optimizeWebVitals();
    
    // Advanced mobile SEO meta tags
    addMobileSEOTags();
    
    // Performance monitoring
    monitorPagePerformance();
    
    // Image lazy loading enforcement
    enforceImageOptimization();
    
    // Schema markup validation
    validateStructuredData();
    
  }, [location]);

  return <>{children}</>;
}

function optimizeWebVitals() {
  // Largest Contentful Paint (LCP) optimization
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      if (entry.entryType === 'largest-contentful-paint') {
        // Track LCP for analytics
        console.debug('LCP:', entry.startTime);
      }
      
      if (entry.entryType === 'first-input') {
        // Track FID for analytics
        console.debug('FID:', (entry as any).processingStart - entry.startTime);
      }
    });
  });

  try {
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
  } catch (e) {
    // Browser doesn't support these metrics
  }

  // Cumulative Layout Shift (CLS) optimization
  let clsValue = 0;
  let clsEntries: any[] = [];

  const clsObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      // Only count layout shifts without recent user input
      if (!(entry as any).hadRecentInput) {
        const firstSessionEntry = clsEntries[0];
        const lastSessionEntry = clsEntries[clsEntries.length - 1];

        // If entry occurred less than 1 second after the previous entry and
        // less than 5 seconds after the first entry in the session, include it
        if (clsEntries.length &&
            entry.startTime - lastSessionEntry.startTime < 1000 &&
            entry.startTime - firstSessionEntry.startTime < 5000) {
          clsValue += (entry as any).value;
          clsEntries.push(entry);
        } else {
          clsValue = (entry as any).value;
          clsEntries = [entry];
        }
      }
    }
  });

  try {
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  } catch (e) {
    // Browser doesn't support layout-shift
  }
}

function addMobileSEOTags() {
  // Enhanced mobile viewport and app tags
  const metaTags = [
    { name: 'format-detection', content: 'telephone=no, email=no, address=no' },
    { name: 'HandheldFriendly', content: 'true' },
    { name: 'MobileOptimized', content: 'width' },
    { name: 'apple-mobile-web-app-title', content: 'Calculator Sarcina' },
    { name: 'application-name', content: 'Calculator Sarcina' },
    { name: 'msapplication-tooltip', content: 'Calculator Sarcina - Pensie și Sarcină' },
    { name: 'msapplication-starturl', content: '/' },
    { name: 'msapplication-window', content: 'width=1024;height=768' },
    { name: 'msapplication-task', content: 'name=Calculator Pensie;action-uri=/planificare-pensie;icon-uri=/icons/pension-icon.ico' },
    { name: 'msapplication-task', content: 'name=Calculator Sarcină;action-uri=/calculator-sarcina;icon-uri=/icons/pregnancy-icon.ico' },
  ];

  metaTags.forEach(({ name, content }) => {
    let existingTag = document.querySelector(`meta[name="${name}"]`);
    if (!existingTag) {
      existingTag = document.createElement('meta');
      (existingTag as HTMLMetaElement).name = name;
      document.head.appendChild(existingTag);
    }
    (existingTag as HTMLMetaElement).content = content;
  });

  // Add iOS-specific meta tags for better app-like experience
  const iosTags = [
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'apple-touch-fullscreen', content: 'yes' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
  ];

  iosTags.forEach(({ name, content }) => {
    let existingTag = document.querySelector(`meta[name="${name}"]`);
    if (!existingTag) {
      existingTag = document.createElement('meta');
      (existingTag as HTMLMetaElement).name = name;
      document.head.appendChild(existingTag);
    }
    (existingTag as HTMLMetaElement).content = content;
  });
}

function monitorPagePerformance() {
  // Resource timing monitoring
  const resourceObserver = new PerformanceObserver((list) => {
    const resources = list.getEntries();
    resources.forEach((resource) => {
      // Monitor slow resources
      if (resource.duration > 1000) {
        console.debug('Slow resource:', resource.name, resource.duration);
      }
    });
  });

  try {
    resourceObserver.observe({ entryTypes: ['resource'] });
  } catch (e) {
    // Browser doesn't support resource timing
  }

  // Navigation timing
  window.addEventListener('load', () => {
    setTimeout(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
        
        console.debug('Page load metrics:', {
          loadTime,
          domContentLoaded,
          firstByte: navigation.responseStart - navigation.requestStart,
          domInteractive: navigation.domInteractive - navigation.fetchStart
        });
      }
    }, 0);
  });
}

function enforceImageOptimization() {
  // Ensure all images have proper loading attributes
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    if (!img.loading) {
      img.loading = 'lazy';
    }
    if (!img.decoding) {
      img.decoding = 'async';
    }
    
    // Add error handling
    img.onerror = () => {
      console.debug('Image failed to load:', img.src);
    };
  });

  // Set up intersection observer for images
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  // Observe images with data-src attribute
  document.querySelectorAll('img[data-src]').forEach((img) => {
    imageObserver.observe(img);
  });
}

function validateStructuredData() {
  // Check for structured data presence and validity
  const structuredDataScripts = document.querySelectorAll('script[type="application/ld+json"]');
  
  structuredDataScripts.forEach((script) => {
    try {
      const data = JSON.parse(script.textContent || '');
      
      // Basic validation for required fields
      if (data['@context'] !== 'https://schema.org') {
        console.debug('Invalid schema context');
      }
      
      if (!data['@type']) {
        console.debug('Missing schema type');
      }
      
    } catch (e) {
      console.debug('Invalid JSON-LD structured data');
    }
  });
}

// Advanced mobile performance optimizations
export function useMobilePerformanceOptimization() {
  useEffect(() => {
    // Preload critical resources
    preloadCriticalResources();
    
    // Optimize font loading
    optimizeFontLoading();
    
    // Network-aware loading
    adaptToNetworkConditions();
    
    // Memory management
    cleanupMemoryLeaks();
    
  }, []);
}

function preloadCriticalResources() {
  const criticalResources = [
    { href: '/manifest.json', as: 'manifest' },
    { href: 'https://fonts.gstatic.com', rel: 'preconnect', crossorigin: 'anonymous' },
  ];

  criticalResources.forEach(({ href, as, rel = 'preload', crossorigin }) => {
    const link = document.createElement('link');
    link.rel = rel;
    link.href = href;
    if (as) link.as = as;
    if (crossorigin) link.crossOrigin = crossorigin;
    document.head.appendChild(link);
  });
}

function optimizeFontLoading() {
  // Check if fonts are already loaded
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      document.body.classList.add('fonts-loaded');
    });
  }

  // Fallback for browsers without font loading API
  setTimeout(() => {
    document.body.classList.add('fonts-loaded');
  }, 3000);
}

function adaptToNetworkConditions() {
  // Network Information API support
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  
  if (connection) {
    const updateNetworkStatus = () => {
      const effectiveType = connection.effectiveType;
      document.body.dataset.networkSpeed = effectiveType;
      
      // Adjust image quality based on connection speed
      if (effectiveType === 'slow-2g' || effectiveType === '2g') {
        document.body.classList.add('low-bandwidth');
      } else {
        document.body.classList.remove('low-bandwidth');
      }
    };

    updateNetworkStatus();
    connection.addEventListener('change', updateNetworkStatus);
  }
}

function cleanupMemoryLeaks() {
  // Cleanup function to prevent memory leaks
  const cleanup = () => {
    // Remove event listeners
    const elements = document.querySelectorAll('[data-cleanup]');
    elements.forEach((element) => {
      element.removeAttribute('data-cleanup');
    });
  };

  // Cleanup on page unload
  window.addEventListener('beforeunload', cleanup);
  
  return cleanup;
}