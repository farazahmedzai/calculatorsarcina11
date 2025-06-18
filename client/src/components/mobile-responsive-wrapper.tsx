import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface MobileResponsiveWrapperProps {
  children: React.ReactNode;
  className?: string;
  enableTouchOptimization?: boolean;
  enableViewportDetection?: boolean;
}

interface ViewportInfo {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  orientation: 'portrait' | 'landscape';
  pixelRatio: number;
}

export function MobileResponsiveWrapper({
  children,
  className = '',
  enableTouchOptimization = true,
  enableViewportDetection = true,
}: MobileResponsiveWrapperProps) {
  const [viewport, setViewport] = useState<ViewportInfo>({
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    orientation: 'landscape',
    pixelRatio: 1,
  });

  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (!enableViewportDetection) return;

    const updateViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;
      const orientation = width > height ? 'landscape' : 'portrait';
      const pixelRatio = window.devicePixelRatio || 1;

      setViewport({
        width,
        height,
        isMobile,
        isTablet,
        isDesktop,
        orientation,
        pixelRatio,
      });
    };

    const detectTouch = () => {
      setIsTouch(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-ignore
        navigator.msMaxTouchPoints > 0
      );
    };

    updateViewport();
    detectTouch();

    const resizeObserver = new ResizeObserver(updateViewport);
    resizeObserver.observe(document.documentElement);

    window.addEventListener('orientationchange', updateViewport);
    window.addEventListener('resize', updateViewport);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('orientationchange', updateViewport);
      window.removeEventListener('resize', updateViewport);
    };
  }, [enableViewportDetection]);

  useEffect(() => {
    if (!enableTouchOptimization) return;

    // Add touch optimization classes to body
    const body = document.body;
    
    if (isTouch) {
      body.classList.add('touch-device');
      // Improve touch scrolling on iOS
      body.style.setProperty('-webkit-overflow-scrolling', 'touch');
      // Prevent zoom on double tap
      body.style.touchAction = 'manipulation';
    } else {
      body.classList.add('non-touch-device');
    }

    // Prevent horizontal scroll on mobile
    if (viewport.isMobile) {
      body.style.overflowX = 'hidden';
    }

    return () => {
      body.classList.remove('touch-device', 'non-touch-device');
      body.style.removeProperty('-webkit-overflow-scrolling');
      body.style.touchAction = '';
      body.style.overflowX = '';
    };
  }, [isTouch, viewport.isMobile, enableTouchOptimization]);

  const wrapperClasses = cn(
    // Base responsive classes
    'w-full min-h-screen',
    
    // Mobile optimizations
    viewport.isMobile && [
      'mobile-optimized',
      'text-sm leading-relaxed', // Better readability on small screens
      'space-y-4', // Consistent spacing
    ],
    
    // Tablet optimizations
    viewport.isTablet && [
      'tablet-optimized',
      'text-base leading-normal',
      'space-y-6',
    ],
    
    // Desktop optimizations
    viewport.isDesktop && [
      'desktop-optimized',
      'text-base leading-normal',
      'space-y-8',
    ],
    
    // Touch device optimizations
    isTouch && [
      'touch-optimized',
      '[&_button]:min-h-[44px]', // Minimum touch target size
      '[&_a]:min-h-[44px]',
      '[&_input]:min-h-[44px]',
      '[&_select]:min-h-[44px]',
      '[&_textarea]:min-h-[44px]',
    ],
    
    // Orientation specific
    viewport.orientation === 'portrait' && 'portrait-mode',
    viewport.orientation === 'landscape' && 'landscape-mode',
    
    // High DPI optimizations
    viewport.pixelRatio > 1 && 'high-dpi',
    
    className
  );

  return (
    <div className={wrapperClasses}>
      {children}
      
      {/* Mobile-specific enhancements */}
      {viewport.isMobile && (
        <>
          {/* Viewport meta tag enforcement */}
          <MobileViewportMeta />
          
          {/* Safe area insets for notched devices */}
          <SafeAreaInsets />
        </>
      )}
    </div>
  );
}

function MobileViewportMeta() {
  useEffect(() => {
    // Ensure proper viewport meta tag
    let viewportMeta = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
    
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.name = 'viewport';
      document.head.appendChild(viewportMeta);
    }
    
    viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover';
    
    // Add mobile-web-app-capable for PWA-like experience
    let webAppMeta = document.querySelector('meta[name="mobile-web-app-capable"]') as HTMLMetaElement;
    if (!webAppMeta) {
      webAppMeta = document.createElement('meta');
      webAppMeta.name = 'mobile-web-app-capable';
      webAppMeta.content = 'yes';
      document.head.appendChild(webAppMeta);
    }
    
    // Add apple-mobile-web-app-capable for iOS
    let appleMeta = document.querySelector('meta[name="apple-mobile-web-app-capable"]') as HTMLMetaElement;
    if (!appleMeta) {
      appleMeta = document.createElement('meta');
      appleMeta.name = 'apple-mobile-web-app-capable';
      appleMeta.content = 'yes';
      document.head.appendChild(appleMeta);
    }
    
    // Add status bar style for iOS
    let statusBarMeta = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]') as HTMLMetaElement;
    if (!statusBarMeta) {
      statusBarMeta = document.createElement('meta');
      statusBarMeta.name = 'apple-mobile-web-app-status-bar-style';
      statusBarMeta.content = 'default';
      document.head.appendChild(statusBarMeta);
    }
  }, []);

  return null;
}

function SafeAreaInsets() {
  useEffect(() => {
    // Add CSS custom properties for safe area insets
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --safe-area-inset-top: env(safe-area-inset-top, 0px);
        --safe-area-inset-right: env(safe-area-inset-right, 0px);
        --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
        --safe-area-inset-left: env(safe-area-inset-left, 0px);
      }
      
      .safe-area-top {
        padding-top: var(--safe-area-inset-top);
      }
      
      .safe-area-bottom {
        padding-bottom: var(--safe-area-inset-bottom);
      }
      
      .safe-area-left {
        padding-left: var(--safe-area-inset-left);
      }
      
      .safe-area-right {
        padding-right: var(--safe-area-inset-right);
      }
      
      .safe-area-all {
        padding: var(--safe-area-inset-top) var(--safe-area-inset-right) var(--safe-area-inset-bottom) var(--safe-area-inset-left);
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
}

// Hook for accessing viewport information in components
export function useViewport() {
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false,
    isTablet: typeof window !== 'undefined' ? window.innerWidth >= 768 && window.innerWidth < 1024 : false,
    isDesktop: typeof window !== 'undefined' ? window.innerWidth >= 1024 : true,
    orientation: typeof window !== 'undefined' ? (window.innerWidth > window.innerHeight ? 'landscape' : 'portrait') as 'portrait' | 'landscape' : 'landscape' as const,
  });

  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setViewport({
        width,
        height,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
        orientation: width > height ? 'landscape' : 'portrait',
      });
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    window.addEventListener('orientationchange', updateViewport);

    return () => {
      window.removeEventListener('resize', updateViewport);
      window.removeEventListener('orientationchange', updateViewport);
    };
  }, []);

  return viewport;
}

// Performance optimization hook for mobile
export function useMobileOptimization() {
  useEffect(() => {
    // Preconnect to external domains for faster loading
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Optimize images loading for mobile
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });

    // Add performance hints
    const performanceStyle = document.createElement('style');
    performanceStyle.textContent = `
      /* Mobile performance optimizations */
      * {
        -webkit-transform: translateZ(0);
        -moz-transform: translateZ(0);
        -ms-transform: translateZ(0);
        -o-transform: translateZ(0);
        transform: translateZ(0);
      }
      
      /* Smooth scrolling for mobile */
      html {
        scroll-behavior: smooth;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      
      /* Better touch interactions */
      .touch-device * {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      
      .touch-device input,
      .touch-device textarea,
      .touch-device [contenteditable] {
        -webkit-user-select: text;
        -khtml-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
      }
      
      /* Mobile form optimizations */
      @media (max-width: 767px) {
        input, select, textarea {
          font-size: 16px; /* Prevent zoom on iOS */
        }
        
        button {
          min-height: 44px;
          min-width: 44px;
        }
        
        .container {
          padding-left: 1rem;
          padding-right: 1rem;
        }
      }
    `;
    
    document.head.appendChild(performanceStyle);

    return () => {
      // Cleanup on unmount
      document.head.removeChild(performanceStyle);
    };
  }, []);
}