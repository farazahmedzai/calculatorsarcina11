interface StructuredDataProps {
  type: 'calculator' | 'article' | 'faq' | 'howto' | 'organization' | 'website';
  data: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  let schema: any = {};

  switch (type) {
    case 'calculator':
      schema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": data.name,
        "description": data.description,
        "url": data.url,
        "applicationCategory": "HealthApplication",
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "RON"
        },
        "featureList": data.features || [],
        "screenshot": data.screenshot,
        "provider": {
          "@type": "Organization",
          "name": "Calculator Sarcina",
          "url": "https://calculatorsarcina.com"
        }
      };
      break;

    case 'article':
      schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": data.headline,
        "description": data.description,
        "image": data.image,
        "author": {
          "@type": "Organization",
          "name": "Calculator Sarcina",
          "url": "https://calculatorsarcina.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Calculator Sarcina",
          "logo": {
            "@type": "ImageObject",
            "url": "https://calculatorsarcina.com/assets/logo.png",
            "width": 300,
            "height": 300
          }
        },
        "datePublished": data.datePublished,
        "dateModified": data.dateModified,
        "url": data.url,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": data.url
        },
        "articleSection": data.section,
        "keywords": data.keywords,
        "inLanguage": "ro"
      };
      break;

    case 'faq':
      schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.questions.map((q: any) => ({
          "@type": "Question",
          "name": q.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": q.answer
          }
        }))
      };
      break;

    case 'howto':
      schema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": data.name,
        "description": data.description,
        "image": data.image,
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "RON",
          "value": "0"
        },
        "supply": data.supplies || [],
        "tool": data.tools || [],
        "step": data.steps.map((step: any, index: number) => ({
          "@type": "HowToStep",
          "position": index + 1,
          "name": step.name,
          "text": step.text,
          "image": step.image
        }))
      };
      break;

    case 'organization':
      schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Calculator Sarcina",
        "url": "https://calculatorsarcina.com",
        "logo": "https://calculatorsarcina.com/assets/logo.png",
        "description": "Platformă online pentru calculul sarcinii și planificarea pensiei în România",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "RO",
          "addressLocality": "București"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+40-XXX-XXX-XXX",
          "contactType": "customer service",
          "email": "contact@calculatorsarcina.com"
        },
        "sameAs": [
          "https://facebook.com/calculatorsarcina",
          "https://twitter.com/calculatorsarcina"
        ],
        "foundingDate": "2024",
        "areaServed": "Romania",
        "serviceType": "Healthcare Calculator"
      };
      break;

    case 'website':
      schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Calculator Sarcina",
        "url": "https://calculatorsarcina.com",
        "description": "Calculatoare online pentru sarcină și pensie în România",
        "inLanguage": "ro",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://calculatorsarcina.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Calculator Sarcina",
          "logo": {
            "@type": "ImageObject",
            "url": "https://calculatorsarcina.com/assets/logo.png"
          }
        }
      };
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2)
      }}
    />
  );
}