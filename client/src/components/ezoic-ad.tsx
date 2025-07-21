import { useEffect, useRef } from 'react';

interface EzoicAdProps {
  placementId: number;
  className?: string;
}

declare global {
  interface Window {
    ezstandalone: {
      cmd: Array<() => void>;
      showAds: (placementId: number) => void;
    };
  }
}

export function EzoicAd({ placementId, className = "" }: EzoicAdProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ezstandalone) {
      window.ezstandalone.cmd.push(function () {
        window.ezstandalone.showAds(placementId);
      });
    }
  }, [placementId]);

  return (
    <div 
      ref={adRef}
      id={`ezoic-pub-ad-placeholder-${placementId}`}
      className={`ezoic-ad ${className}`}
    />
  );
}

// Pre-configured ad components for different positions
export function HeaderAd() {
  return (
    <div className="w-full flex justify-center py-4">
      <EzoicAd placementId={101} className="max-w-full" />
    </div>
  );
}

export function SidebarAd() {
  return (
    <div className="w-full mb-6">
      <EzoicAd placementId={102} className="w-full" />
    </div>
  );
}

export function ContentAd() {
  return (
    <div className="w-full flex justify-center my-8">
      <EzoicAd placementId={103} className="max-w-full" />
    </div>
  );
}

export function FooterAd() {
  return (
    <div className="w-full flex justify-center py-6">
      <EzoicAd placementId={104} className="max-w-full" />
    </div>
  );
}