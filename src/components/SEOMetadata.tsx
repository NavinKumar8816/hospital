import React, { useEffect } from 'react';

interface SEOMetadataProps {
  view: 'hospital' | 'college';
}

export default function SEOMetadata({ view }: SEOMetadataProps) {
  useEffect(() => {
    // Determine metadata based on current view
    const isHospital = view === 'hospital';
    const origin = window.location.origin || 'https://mata-bhagyamani.com';
    const canonicalUrl = isHospital 
      ? origin + '/' 
      : origin + '/?view=college';

    const title = isHospital
      ? "Mata Bhagyamani Devi Hospital | Multi-Speciality Hospital & Trauma Center in Kudra, Kaimur"
      : "Ramdhari Singh Memorial Nursing College | Nursing Education in Kudra, Kaimur";

    const description = isHospital
      ? "Mata Bhagyamani Devi Hospital provides 24×7 emergency care, trauma services, diagnostics, ICU, women’s healthcare, child healthcare and Ayushman Bharat treatment in Kudra, Kaimur, Bihar."
      : "Ramdhari Singh Memorial Nursing College offers ANM, GNM and hospital-attached nursing education with practical clinical training in Kudra, Kaimur, Bihar.";

    const keywords = isHospital
      ? "Hospital in Kudra, Best Hospital in Kaimur, Trauma Center Kudra, Emergency Hospital Bihar, Ayushman Bharat Hospital, ICU Hospital Kudra, Women & Child Care Hospital, Sasaram hospital, Mohania healthcare, Bihar trauma care, Bhabua diagnostics"
      : "Nursing College in Kaimur, ANM College Bihar, GNM College Bihar, Nursing Training Kudra, Hospital Attached Nursing College, GNM training Bihar, nursing school Kaimur, Kudra nursing institute, Sasaram paramedical";

    const bannerImage = isHospital
      ? "https://images.unsplash.com/photo-1586773860418-d3b31966cfde?auto=format&fit=crop&q=80&w=1200"
      : "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200";

    // Update document title
    document.title = title;

    // Helper to query and update or create meta tags
    const updateMetaTag = (nameAttr: string, valueAttr: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${valueAttr}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, valueAttr);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update Meta Description & Keywords
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);

    // Update Open Graph (OG) Tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:url', canonicalUrl);
    updateMetaTag('property', 'og:image', bannerImage);
    updateMetaTag('property', 'og:type', isHospital ? 'website' : 'educational');
    updateMetaTag('property', 'og:site_name', isHospital ? 'Mata Bhagyamani Devi Hospital' : 'Ramdhari Singh Memorial Nursing College');

    // Update Twitter Tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', bannerImage);

    // Update Canonical URL Link Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Generate JSON-LD Schema Markup
    const schemas: any[] = [];

    if (isHospital) {
      // 1. Local Business & Hospital Schema
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Hospital",
        "name": "Mata Bhagyamani Devi Hospital",
        "alternateName": "Mata Bhagyamani Devi Hospital & Trauma Center",
        "url": origin + "/",
        "logo": "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&q=80&w=200",
        "image": bannerImage,
        "description": "Multi-Speciality Hospital & Trauma Center providing 24x7 emergency clinical services and Ayushman Bharat diagnostics in Kudra, Kaimur.",
        "telephone": "+917250853234",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sakari Mod, National Highway 19",
          "addressLocality": "Kudra",
          "addressRegion": "Kaimur, Bihar",
          "postalCode": "821108",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "25.0487",
          "longitude": "83.8201"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "sameAs": [
          "https://maps.google.com/?q=Mata+Bhagyamani+Devi+Hospital+Kudra"
        ],
        "availableService": {
          "@type": "EmergencyService",
          "name": "24/7 Trauma and Emergency Care",
          "description": "Golden-hour trauma care, advanced ambulance dispatch, critical ICU ICU beds, and maternal emergency support."
        }
      });

      // 2. MedicalOrganization Schema
      schemas.push({
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "Mata Bhagyamani Devi Hospital",
        "url": origin + "/",
        "logo": "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&q=80&w=200",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sakari Mod, NH-19",
          "addressLocality": "Kudra",
          "addressRegion": "Kaimur, Bihar",
          "postalCode": "821108",
          "addressCountry": "IN"
        },
        "telephone": "+917250853234"
      });

      // 3. Hospital FAQs Schema
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Are 24x7 emergency and trauma services available at Mata Bhagyamani Devi Hospital?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Mata Bhagyamani Devi Hospital operates a fully equipped 24/7 Emergency Wing and Trauma Center in Kudra, Kaimur, offering round-the-clock intensive care, life support, critical surgery, and clinical emergency services."
            }
          },
          {
            "@type": "Question",
            "name": "Is Ayushman Bharat scheme (PM-JAY) treatment supported?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Mata Bhagyamani Devi Hospital is an officially empanelled Ayushman Bharat hospital offering 100% cashless high-quality treatments, surgery, and critical clinical diagnoses to all qualified PM-JAY cardholder patients."
            }
          },
          {
            "@type": "Question",
            "name": "How can I book an appointment with consulting doctors?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can lock your slot instantly using our Interactive Appointment Portal on this website, call our patient helpline at +91 7250853234 or +91 9110996491, or walk directly into our Kudra facility for swift consult assignments."
            }
          },
          {
            "@type": "Question",
            "name": "Does the hospital provide ambulance services near Kudra and Kaimur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we dispatch 24/7 critical care cardiac and standard ambulances across Kudra, Kaimur, Mohania, Bhabua, Sasaram, and surrounding regions. For instant ambulance dispatch, dial +91 7250853234 immediately."
            }
          },
          {
            "@type": "Question",
            "name": "What intensive care (ICU/NICU) structures are available?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our modern facility contains fully functional, pressurized Adult ICU wards and Neonatal Intensive Care Units (NICU) with professional ventilation setups, continuous patient status monitors, and 24/7 critical specialist oversight."
            }
          }
        ]
      });

    } else {
      // 1. EducationalOrganization & College Schema
      schemas.push({
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "name": "Ramdhari Singh Memorial Nursing College",
        "alternateName": "RSM School & College of Nursing",
        "url": origin + "/?view=college",
        "logo": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=200",
        "image": bannerImage,
        "description": "Ramdhari Singh Memorial Nursing College offers state-approved ANM, GNM, and hospital-attached nursing courses with 24/7 practical clinical bedside training.",
        "telephone": "+917250853234",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sakari Mod, NH-19, Kudra",
          "addressLocality": "Kaimur",
          "addressRegion": "Bihar",
          "postalCode": "821108",
          "addressCountry": "IN"
        }
      });

      // 2. Course Schema for GNM
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "General Nursing and Midwifery (GNM)",
        "description": "A comprehensive 3-year clinical diploma pathway covering general nursing, surgical wards, pediatric support, and localized community healthcare training.",
        "provider": {
          "@type": "CollegeOrUniversity",
          "name": "Ramdhari Singh Memorial Nursing College",
          "sameAs": origin + "/?view=college"
        },
        "educationalCredentialAwarded": "GNM Diploma (BNRC State Registered)"
      });

      // 3. Course Schema for ANM
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Auxiliary Nurse Midwifery (ANM)",
        "description": "A focused 2-year clinical nursing framework designed for women entering primary healthcare coordinates and village clinical care administration.",
        "provider": {
          "@type": "CollegeOrUniversity",
          "name": "Ramdhari Singh Memorial Nursing College",
          "sameAs": origin + "/?view=college"
        },
        "educationalCredentialAwarded": "ANM Certification"
      });

      // 4. College FAQs Schema
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who can apply for GNM and ANM admissions at Ramdhari Singh Memorial Nursing College?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Admissions are open to female candidates who have successfully cleared Inter (10+2) board exams from any recognized board. For ANM, students from Science, Arts, or Commerce are eligible. Basic physical fitness and a passing percentage of marks are mandatory."
            }
          },
          {
            "@type": "Question",
            "name": "Is there an attached clinic or hospital for practical training?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, students receive extensive real bedside clinical rotations inside our own 150-bed multi-speciality Mata Bhagyamani Devi Hospital directly adjacent to the academic campus wing."
            }
          },
          {
            "@type": "Question",
            "name": "What are the hostel facilities like for female residents?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ramdhari Singh Memorial College provides secure, gated female hostel structures with round-the-clock CCTV cameras, study centers, wholesome dining halls, and dedicated warden supervisions."
            }
          },
          {
            "@type": "Question",
            "name": "Are scholarships or financial guidance services available for nursing students?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we facilitate state-sponsored scholarship forms and furnish certified fee receipts, admission cards, and affiliation papers required for Central/State educational loans and credit-card initiatives."
            }
          }
        ]
      });
    }

    // Remove existing SEO scripts from dynamic meta tag container
    const existingScripts = document.querySelectorAll('script[data-seo-tags="true"]');
    existingScripts.forEach(script => script.remove());

    // Inject JSON-LD
    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-tags', 'true');
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    // Cleanup when component unmounts
    return () => {
      const currentScripts = document.querySelectorAll('script[data-seo-tags="true"]');
      currentScripts.forEach(script => script.remove());
    };

  }, [view]);

  return null; // Component does not render visual layout
}
