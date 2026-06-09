import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const LANGUAGE_STORAGE_KEY = 'mbdh-language';

export const resources = {
  en: {
    translation: {
      common: {
        language: 'Language',
        english: 'English',
        hindi: 'हिन्दी',
        close: 'Close',
        loading: 'Loading Experience',
        hospital: 'Hospital',
        college: 'College',
        applyNow: 'Apply Now',
        bookAppointment: 'Book Appointment',
        emergencyCall: 'Emergency Call',
        whatsAppConsultation: 'WhatsApp Consultation',
        downloadProspectus: 'Download Prospectus',
        visitCollegeWebsite: 'Visit College Website',
        visitHospitalPortal: 'Enter Hospital Portal',
      },
      nav: {
        home: 'Home',
        about: 'About',
        doctors: 'Doctors',
        departments: 'Departments',
        services: 'Services',
        traumaCenter: 'Trauma Center',
        trauma: 'Trauma',
        facilities: 'Facilities',
        ayushmanBharat: 'Ayushman Bharat',
        ayushman: 'Ayushman',
        gallery: 'Gallery',
        contact: 'Contact',
        nursingCollege: 'Nursing College',
        admissionsOpen: 'Admissions Open 2026',
        emergencyTrauma: '24×7 Emergency Trauma Center',
        emergencyServicesAvailable: '24×7 Emergency Services Available',
        ayushmanSupported: 'Ayushman Bharat Supported',
        icuNicuAvailable: 'ICU • NICU Available',
        ambulanceAvailable: 'Ambulance Service Available',
        emergencyHelpline: 'Emergency Helpline: 7250853234',
        ambulance: 'Ambulance: 7250853234',
        whatsAppDoctorChat: 'WhatsApp Doctor Chat',
        admissionsCollegeOpen: 'Admissions College: Open',
        address: 'Sakari Mod, Kudra, Kaimur, Bihar',
        tagline: 'Care • Compassion • Trust',
        location: 'Kudra, Kaimur',
      },
      hero: {
        badge: 'Trusted Healthcare Partner',
        titleLine1: 'Mata Bhagyamani',
        titleLine2: 'Devi Hospital',
        subtitle: 'Multi-Speciality Hospital & Trauma Center',
        description:
          'Advanced emergency care, trauma services, women’s health, child healthcare, diagnostics and Ayushman Bharat support under one roof. We combine clinical excellence with motherly compassion to make every family feel completely secure.',
        whatsAppConsult: 'WhatsApp Consult',
        exploreCollege: 'Explore Nursing College',
        admissionsOpen: 'Admissions Open',
        collegePromise: 'Hospital Attached Training • 100% Placements',
        emergency: 'Emergency',
        specialities: 'Specialities',
        clinicalBeds: 'Clinical Beds',
        ayushmanTreatment: 'Ayushman Treatment',
        motherChild: 'Mother & Child',
        neonatalWards: 'Neonatal Wards Care',
        levelTrauma: 'Level 1 Trauma',
        criticalCare: 'Critical care',
        icuNicuEquipped: 'ICU / NICU Equipped',
        govtPmjay: 'Govt PM-JAY',
        cashlessSupport: '100% Cashless support',
        clinicalDepth: 'Clinical Depth',
      },
      hospital: {
        academicWing: 'Academic Wing Affiliate',
        collegeName: 'Ramdhari Singh Memorial School & College of Nursing',
        collegeShort:
          'Accredited GNM, B.Sc. Nursing & Paramedical pathways with direct hospital bedside clinical rotation.',
      },
      doctors: {
        senior: 'Senior Board of Specialists',
        title: 'Meet Our Medical Experts',
        description: 'Experienced specialists dedicated to providing compassionate and advanced healthcare services. All our clinicians are board-certified and active members of national trauma boards.',
        experiencedDoctors: 'Experienced Doctors',
        experiencedDocsDesc: 'Board certified consultants & senior surgeons',
        multiSpeciality: 'Multi-Speciality Team',
        multiSpecialityDesc: 'Cross-functional collaborative support network',
        emergencySupport: 'Emergency Support',
        emergencySupportDesc: 'On-Call trauma response 24×7 without failure',
        patientCare: 'Patient-Centered Care',
        patientCareDesc: 'Focused exclusively on continuous bedside comfort',
        viewProfile: 'View Profile',
        activeInClinic: 'Active in Clinic',
        inOperationRoom: 'In Operation Room',
        emergencyResponder: 'Emergency Responder',
        nextDutyTomorrow: 'Next Duty: Tomorrow',
      },

      seo: {
        hospitalTitle:
          'Mata Bhagyamani Devi Hospital | Multi-Speciality Hospital & Trauma Center in Kudra, Kaimur',
        hospitalDescription:
          'Mata Bhagyamani Devi Hospital provides 24×7 emergency care, trauma services, diagnostics, ICU, women’s healthcare, child healthcare and Ayushman Bharat treatment in Kudra, Kaimur, Bihar.',
        hospitalKeywords:
          'Hospital in Kudra, Best Hospital in Kaimur, Trauma Center Kudra, Emergency Hospital Bihar, Ayushman Bharat Hospital, ICU Hospital Kudra, Women & Child Care Hospital, Sasaram hospital, Mohania healthcare, Bihar trauma care, Bhabua diagnostics',
        collegeTitle:
          'Ramdhari Singh Memorial Nursing College | Nursing Education in Kudra, Kaimur',
        collegeDescription:
          'Ramdhari Singh Memorial Nursing College offers ANM, GNM and hospital-attached nursing education with practical clinical training in Kudra, Kaimur, Bihar.',
        collegeKeywords:
          'Nursing College in Kaimur, ANM College Bihar, GNM College Bihar, Nursing Training Kudra, Hospital Attached Nursing College, GNM training Bihar, nursing school Kaimur, Kudra nursing institute, Sasaram paramedical',
      },
    },
  },
  hi: {
    translation: {
      common: {
        language: 'भाषा',
        english: 'English',
        hindi: 'हिन्दी',
        close: 'बंद करें',
        loading: 'अनुभव लोड हो रहा है',
        hospital: 'अस्पताल',
        college: 'कॉलेज',
        applyNow: 'अभी आवेदन करें',
        bookAppointment: 'अपॉइंटमेंट बुक करें',
        emergencyCall: 'आपातकालीन कॉल',
        whatsAppConsultation: 'व्हाट्सएप पर संपर्क करें',
        downloadProspectus: 'प्रॉस्पेक्टस डाउनलोड करें',
        visitCollegeWebsite: 'कॉलेज वेबसाइट देखें',
        visitHospitalPortal: 'हॉस्पिटल पोर्टल खोलें',
      },
      nav: {
        home: 'होम',
        about: 'परिचय',
        doctors: 'डॉक्टर',
        departments: 'विभाग',
        services: 'सेवाएं',
        traumaCenter: 'ट्रॉमा सेंटर',
        trauma: 'ट्रॉमा',
        facilities: 'सुविधाएं',
        ayushmanBharat: 'आयुष्मान भारत',
        ayushman: 'आयुष्मान',
        gallery: 'गैलरी',
        contact: 'संपर्क',
        nursingCollege: 'नर्सिंग कॉलेज',
        admissionsOpen: 'प्रवेश 2026 खुले हैं',
        emergencyTrauma: '24×7 आपातकालीन ट्रॉमा सेंटर',
        emergencyServicesAvailable: '24×7 आपातकालीन सेवाएं उपलब्ध',
        ayushmanSupported: 'आयुष्मान भारत समर्थित',
        icuNicuAvailable: 'ICU • NICU उपलब्ध',
        ambulanceAvailable: 'एम्बुलेंस सेवा उपलब्ध',
        emergencyHelpline: 'आपातकालीन हेल्पलाइन: 7250853234',
        ambulance: 'एम्बुलेंस: 7250853234',
        whatsAppDoctorChat: 'व्हाट्सएप डॉक्टर चैट',
        admissionsCollegeOpen: 'कॉलेज प्रवेश: खुले हैं',
        address: 'सकरी मोड़, कुदरा, कैमूर, बिहार',
        tagline: 'सेवा • करुणा • विश्वास',
        location: 'कुदरा, कैमूर',
      },
      hero: {
        badge: 'विश्वसनीय स्वास्थ्य सेवा साथी',
        titleLine1: 'माता भाग्यमानी',
        titleLine2: 'देवी अस्पताल',
        subtitle: 'मल्टी-स्पेशियलिटी अस्पताल और ट्रॉमा सेंटर',
        description:
          'एक ही छत के नीचे उन्नत आपातकालीन देखभाल, ट्रॉमा सेवाएं, महिला स्वास्थ्य, बाल स्वास्थ्य, जांच सुविधाएं और आयुष्मान भारत सहायता। हम चिकित्सकीय उत्कृष्टता को मातृवत करुणा के साथ जोड़ते हैं ताकि हर परिवार सुरक्षित महसूस करे।',
        whatsAppConsult: 'व्हाट्सएप पर संपर्क करें',
        exploreCollege: 'नर्सिंग कॉलेज देखें',
        admissionsOpen: 'प्रवेश खुले हैं',
        collegePromise: 'हॉस्पिटल से जुड़ा प्रशिक्षण • प्लेसमेंट सहायता',
        emergency: 'आपातकाल',
        specialities: 'विशेषताएं',
        clinicalBeds: 'क्लिनिकल बेड',
        ayushmanTreatment: 'आयुष्मान उपचार',
        motherChild: 'मां और शिशु',
        neonatalWards: 'नवजात वार्ड देखभाल',
        levelTrauma: 'लेवल 1 ट्रॉमा',
        criticalCare: 'क्रिटिकल केयर',
        icuNicuEquipped: 'ICU / NICU सुसज्जित',
        govtPmjay: 'सरकारी PM-JAY',
        cashlessSupport: '100% कैशलेस सहायता',
        clinicalDepth: 'क्लिनिकल विशेषज्ञता',
      },
      hospital: {
        academicWing: 'शैक्षणिक विंग सहयोगी',
        collegeName: 'रामधारी सिंह मेमोरियल स्कूल एवं कॉलेज ऑफ नर्सिंग',
        collegeShort:
          'प्रत्यक्ष हॉस्पिटल बेडसाइड क्लिनिकल रोटेशन के साथ मान्यता प्राप्त GNM, B.Sc. Nursing और पैरामेडिकल पाठ्यक्रम।',
      },
      doctors: {
        senior: 'विशेषज्ञों की वरिष्ठ बोर्ड',
        title: 'हमारे मेडिकल विशेषज्ञों से मिलें',
        description: 'अनुभवी विशेषज्ञ करुणामय और उन्नत स्वास्थ्य सेवाएं प्रदान करने के लिए समर्पित। हमारे सभी चिकित्सक बोर्ड-प्रमाणित हैं और राष्ट्रीय ट्रॉमा बोर्डों के सक्रिय सदस्य हैं।',
        experiencedDoctors: 'अनुभवी डॉक्टर',
        experiencedDocsDesc: 'बोर्ड प्रमाणित सलाहकार और वरिष्ठ सर्जन',
        multiSpeciality: 'मल्टी-स्पेशलिटी टीम',
        multiSpecialityDesc: 'क्रॉस-फंक्शनल सहयोगी सहायता नेटवर्क',
        emergencySupport: 'आपातकालीन समर्थन',
        emergencySupportDesc: '24×7 बिना किसी विफलता के ऑन-कॉल ट्रॉमा प्रतिक्रिया',
        patientCare: 'रोगी-केंद्रित देखभाल',
        patientCareDesc: 'निरंतर बेडसाइड आराम पर पूरी तरह केंद्रित',
        viewProfile: 'प्रोफाइल देखें',
        activeInClinic: 'क्लिनिक में सक्रिय',
        inOperationRoom: 'ऑपरेशन रूम में',
        emergencyResponder: 'आपातकालीन प्रतिक्रियाकर्ता',
        nextDutyTomorrow: 'अगला ड्यूटी: कल',
      },

      seo: {
        hospitalTitle:
          'माता भाग्यमानी देवी अस्पताल | कुदरा, कैमूर में मल्टी-स्पेशियलिटी अस्पताल और ट्रॉमा सेंटर',
        hospitalDescription:
          'माता भाग्यमानी देवी अस्पताल कुदरा, कैमूर, बिहार में 24×7 आपातकालीन देखभाल, ट्रॉमा सेवा, जांच, ICU, महिला एवं बाल स्वास्थ्य और आयुष्मान भारत उपचार प्रदान करता है।',
        hospitalKeywords:
          'कुदरा अस्पताल, कैमूर का सर्वश्रेष्ठ अस्पताल, कुदरा ट्रॉमा सेंटर, बिहार इमरजेंसी अस्पताल, आयुष्मान भारत अस्पताल, ICU अस्पताल कुदरा, महिला और बाल अस्पताल',
        collegeTitle:
          'रामधारी सिंह मेमोरियल नर्सिंग कॉलेज | कुदरा, कैमूर में नर्सिंग शिक्षा',
        collegeDescription:
          'रामधारी सिंह मेमोरियल नर्सिंग कॉलेज कुदरा, कैमूर, बिहार में ANM, GNM और हॉस्पिटल से जुड़े व्यावहारिक क्लिनिकल प्रशिक्षण के साथ नर्सिंग शिक्षा प्रदान करता है।',
        collegeKeywords:
          'कैमूर नर्सिंग कॉलेज, बिहार ANM कॉलेज, बिहार GNM कॉलेज, कुदरा नर्सिंग ट्रेनिंग, हॉस्पिटल अटैच्ड नर्सिंग कॉलेज',
      },
    },
  },
} as const;

const storedLanguage =
  typeof window !== 'undefined' ? window.localStorage.getItem(LANGUAGE_STORAGE_KEY) : null;
const urlLanguage =
  typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('lang') : null;
const initialLanguage =
  urlLanguage === 'hi' || urlLanguage === 'en'
    ? urlLanguage
    : storedLanguage === 'hi' || storedLanguage === 'en'
      ? storedLanguage
      : 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', (language) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
  }
});

if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.language;
}

export default i18n;
