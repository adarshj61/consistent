import { useEffect } from 'react';

/**
 * Lightweight, robust SEO and Schema.org injection component for SPA
 */
export default function SEOHead({
  title = "The Consistent Academy | English Language Proficiency & IELTS Training in Pune",
  description = "Empowering learners through structured IELTS, TOEFL, PTE, spoken English, and corporate communication courses in Pune, Maharashtra. Mentored by Vidya Wankhade.",
  canonical = "https://www.theconsistentacademy.in/",
  ogType = "website",
  ogImage = "/assets/logo2.png",
  schema = null
}) {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', description);
      document.head.appendChild(metaDesc);
    }

    // Update Canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', canonical);
    } else {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      linkCanonical.setAttribute('href', canonical);
      document.head.appendChild(linkCanonical);
    }

    // Update Open Graph tags
    const updateOG = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    };

    updateOG('og:title', title);
    updateOG('og:description', description);
    updateOG('og:url', canonical);
    updateOG('og:type', ogType);
    updateOG('og:image', ogImage);

    // Schema.org JSON-LD injection
    const scriptId = 'page-schema-jsonld';
    let scriptTag = document.getElementById(scriptId);
    if (scriptTag) scriptTag.remove();

    if (schema) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      scriptTag.text = JSON.stringify(schema);
      document.head.appendChild(scriptTag);
    }

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [title, description, canonical, ogType, ogImage, schema]);

  return null;
}
