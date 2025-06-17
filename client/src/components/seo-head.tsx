import { getSEOData } from "@/lib/seo-utils";

interface SEOHeadProps {
  page: string;
  title?: string;
  description?: string;
}

export function SEOHead({ page, title, description }: SEOHeadProps) {
  const seoData = getSEOData(page);
  const finalTitle = title || seoData.title;
  const finalDescription = description || seoData.description;

  // Update document head
  if (typeof document !== 'undefined') {
    document.title = finalTitle;
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', finalDescription);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', finalDescription);
      document.head.appendChild(metaDescription);
    }
    
    // Update or create meta keywords
    if (seoData.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', seoData.keywords);
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        metaKeywords.setAttribute('content', seoData.keywords);
        document.head.appendChild(metaKeywords);
      }
    }
  }

  return null;
}
