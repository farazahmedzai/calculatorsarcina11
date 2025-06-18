import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  loading = 'lazy',
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate responsive srcset for better performance
  const generateSrcSet = (baseSrc: string) => {
    if (baseSrc.includes('unsplash.com')) {
      return `${baseSrc}&w=400 400w, ${baseSrc}&w=800 800w, ${baseSrc}&w=1200 1200w`;
    }
    return baseSrc;
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  if (imageError) {
    return (
      <div 
        className={`bg-slate-200 flex items-center justify-center text-slate-500 ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={alt}
      >
        <span className="text-sm">Imagine indisponibilă</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-slate-200 animate-pulse rounded"
          style={{ width, height }}
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        srcSet={generateSrcSet(src)}
        sizes={sizes}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        decoding="async"
      />
    </div>
  );
}