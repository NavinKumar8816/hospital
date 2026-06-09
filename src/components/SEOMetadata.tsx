import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface SEOMetadataProps {
  view: 'hospital' | 'college';
}

const upsertMetaTag = (nameAttr: string, valueAttr: string, content: string) => {
  let element = document.querySelector(`meta[${nameAttr}="${valueAttr}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(nameAttr, valueAttr);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const upsertLinkTag = (rel: string, href: string, hreflang?: string) => {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]`;
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    if (hreflang) element.setAttribute('hreflang', hreflang);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
};

export default function SEOMetadata({ view }: SEOMetadataProps) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const isHospital = view === 'hospital';
    const origin = window.location.origin || 'https://mata-bhagyamani.com';
    const baseUrl = isHospital ? `${origin}/` : `${origin}/?view=college`;
    const separator = baseUrl.includes('?') ? '&' : '?';
    const canonicalUrl = `${baseUrl}${separator}lang=${i18n.language === 'hi' ? 'hi' : 'en'}`;
    const bannerImage = isHospital
      ? 'https://images.unsplash.com/photo-1586773860418-d3b31966cfde?auto=format&fit=crop&q=80&w=1200'
      : 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200';

    const title = isHospital ? t('seo.hospitalTitle') : t('seo.collegeTitle');
    const description = isHospital ? t('seo.hospitalDescription') : t('seo.collegeDescription');
    const keywords = isHospital ? t('seo.hospitalKeywords') : t('seo.collegeKeywords');
    const siteName = isHospital ? 'Mata Bhagyamani Devi Hospital' : 'Ramdhari Singh Memorial Nursing College';

    document.title = title;
    document.documentElement.lang = i18n.language === 'hi' ? 'hi-IN' : 'en-IN';

    upsertMetaTag('name', 'description', description);
    upsertMetaTag('name', 'keywords', keywords);
    upsertMetaTag('property', 'og:title', title);
    upsertMetaTag('property', 'og:description', description);
    upsertMetaTag('property', 'og:url', canonicalUrl);
    upsertMetaTag('property', 'og:image', bannerImage);
    upsertMetaTag('property', 'og:type', isHospital ? 'website' : 'educational');
    upsertMetaTag('property', 'og:site_name', siteName);
    upsertMetaTag('property', 'og:locale', i18n.language === 'hi' ? 'hi_IN' : 'en_IN');
    upsertMetaTag('name', 'twitter:card', 'summary_large_image');
    upsertMetaTag('name', 'twitter:title', title);
    upsertMetaTag('name', 'twitter:description', description);
    upsertMetaTag('name', 'twitter:image', bannerImage);

    upsertLinkTag('canonical', canonicalUrl);
    upsertLinkTag('alternate', `${baseUrl}${separator}lang=en`, 'en-IN');
    upsertLinkTag('alternate', `${baseUrl}${separator}lang=hi`, 'hi-IN');
    upsertLinkTag('alternate', `${baseUrl}${separator}lang=en`, 'x-default');

    const schemas: any[] = [
      isHospital
        ? {
            '@context': 'https://schema.org',
            '@type': 'Hospital',
            name: 'Mata Bhagyamani Devi Hospital',
            alternateName: 'Mata Bhagyamani Devi Hospital & Trauma Center',
            url: `${origin}/`,
            image: bannerImage,
            description,
            telephone: '+917250853234',
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Sakari Mod, National Highway 19',
              addressLocality: 'Kudra',
              addressRegion: 'Kaimur, Bihar',
              postalCode: '821108',
              addressCountry: 'IN',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '25.0487',
              longitude: '83.8201',
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '00:00',
              closes: '23:59',
            },
            availableLanguage: ['English', 'Hindi'],
          }
        : {
            '@context': 'https://schema.org',
            '@type': 'CollegeOrUniversity',
            name: 'Ramdhari Singh Memorial Nursing College',
            alternateName: 'RSM School & College of Nursing',
            url: `${origin}/?view=college`,
            image: bannerImage,
            description,
            telephone: '+917250853234',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Sakari Mod, NH-19, Kudra',
              addressLocality: 'Kaimur',
              addressRegion: 'Bihar',
              postalCode: '821108',
              addressCountry: 'IN',
            },
            availableLanguage: ['English', 'Hindi'],
          },
    ];

    const existingScripts = document.querySelectorAll('script[data-seo-tags="true"]');
    existingScripts.forEach((script) => script.remove());

    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-tags', 'true');
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      const currentScripts = document.querySelectorAll('script[data-seo-tags="true"]');
      currentScripts.forEach((script) => script.remove());
    };
  }, [view, i18n.language, t]);

  return null;
}
