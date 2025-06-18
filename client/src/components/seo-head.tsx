import { useEffect } from "react";
import { getSEOData } from "@/lib/seo-utils";

interface SEOHeadProps {
  page: string;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

export function SEOHead({ 
  page, 
  title, 
  description, 
  keywords,
  canonical,
  ogImage,
  article 
}: SEOHeadProps) {
  const seoData = getSEOData(page);
  const finalTitle = title || seoData.title;
  const finalDescription = description || seoData.description;
  const finalKeywords = keywords || seoData.keywords;
  const finalCanonical = canonical || `https://calculatorsarcina.com${window.location.pathname}`;
  const finalOgImage = ogImage || seoData.ogImage || "https://calculatorsarcina.com/assets/og-image.jpg";

  useEffect(() => {
    if (typeof document === 'undefined') return;

    // Update document title
    document.title = finalTitle;

    // Helper function to update or create meta tags
    const updateOrCreateMeta = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    // Basic SEO meta tags
    updateOrCreateMeta('description', finalDescription);
    if (finalKeywords) {
      updateOrCreateMeta('keywords', finalKeywords);
    }
    updateOrCreateMeta('robots', 'index, follow');
    updateOrCreateMeta('viewport', 'width=device-width, initial-scale=1');

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', finalCanonical);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', finalCanonical);
      document.head.appendChild(canonicalLink);
    }

    // Open Graph tags
    updateOrCreateMeta('og:title', finalTitle, true);
    updateOrCreateMeta('og:description', finalDescription, true);
    updateOrCreateMeta('og:url', finalCanonical, true);
    updateOrCreateMeta('og:type', article ? 'article' : 'website', true);
    updateOrCreateMeta('og:image', finalOgImage, true);
    updateOrCreateMeta('og:image:alt', `${finalTitle} - calculatorsarcina.com`, true);
    updateOrCreateMeta('og:site_name', 'Calculator Sarcina', true);
    updateOrCreateMeta('og:locale', 'ro_RO', true);

    // Twitter Card tags
    updateOrCreateMeta('twitter:card', 'summary_large_image');
    updateOrCreateMeta('twitter:title', finalTitle);
    updateOrCreateMeta('twitter:description', finalDescription);
    updateOrCreateMeta('twitter:image', finalOgImage);
    updateOrCreateMeta('twitter:site', '@calculatorsarcina');

    // Article specific Open Graph tags
    if (article) {
      if (article.publishedTime) {
        updateOrCreateMeta('article:published_time', article.publishedTime, true);
      }
      if (article.modifiedTime) {
        updateOrCreateMeta('article:modified_time', article.modifiedTime, true);
      }
      if (article.author) {
        updateOrCreateMeta('article:author', article.author, true);
      }
      if (article.section) {
        updateOrCreateMeta('article:section', article.section, true);
      }
      if (article.tags) {
        article.tags.forEach(tag => {
          const meta = document.createElement('meta');
          meta.setAttribute('property', 'article:tag');
          meta.setAttribute('content', tag);
          document.head.appendChild(meta);
        });
      }
    }

    // Language and charset
    let htmlElement = document.documentElement;
    htmlElement.setAttribute('lang', 'ro');
    htmlElement.setAttribute('dir', 'ltr');

    // Charset (should be in index.html but ensure it's there)
    if (!document.querySelector('meta[charset]')) {
      const charset = document.createElement('meta');
      charset.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charset, document.head.firstChild);
    }

    // Favicon
    if (!document.querySelector('link[rel="icon"]')) {
      const favicon = document.createElement('link');
      favicon.setAttribute('rel', 'icon');
      favicon.setAttribute('type', 'image/x-icon');
      favicon.setAttribute('href', '/favicon.ico');
      document.head.appendChild(favicon);
    }

  }, [finalTitle, finalDescription, finalKeywords, finalCanonical, finalOgImage, article]);

  // Generate structured data for WebPage
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": finalTitle,
    "description": finalDescription,
    "url": finalCanonical,
    "image": finalOgImage,
    "publisher": {
      "@type": "Organization",
      "name": "Calculator Sarcina",
      "url": "https://calculatorsarcina.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://calculatorsarcina.com/assets/logo.png",
        "width": 300,
        "height": 300
      }
    },
    "dateModified": new Date().toISOString(),
    "inLanguage": "ro"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(webPageSchema, null, 2)
      }}
    />
  );
}
