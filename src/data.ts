import { Service, Doctor, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'trauma-center',
    name: 'Advanced Trauma Center',
    category: 'emergency',
    description: 'Level-1 response critical trauma center equipped with round-the-clock emergency surgical suites, life support, and highly trained traumatologists.',
    icon: 'ShieldAlert',
    details: [
      '24/7 Polytrauma Management Team',
      'Dedicated Emergency Resuscitation Bays',
      'Advanced Fracture & Spine Injury Management',
      'Direct pipeline to emergency CT/Digital X-ray'
    ]
  },
  {
    id: 'emergency-care',
    name: '24/7 Emergency Care',
    category: 'emergency',
    description: 'Immediate medical attention for critical and acute conditions with zero-delay triage and bedside stabilization by expert specialists.',
    icon: 'Activity',
    details: [
      'State-of-the-art triage management',
      'In-house expert emergency consultants',
      'Cardiac, stroke, and poisoning emergencies',
      'Bedside point-of-care laboratory tests'
    ]
  },
  {
    id: 'ambulance',
    name: 'Critical Care Ambulance Service',
    category: 'emergency',
    description: 'Advanced Life Support (ALS) smart fleet with real-time tracking, on-board ventilators, oxygen, and emergency medical technicians.',
    icon: 'Truck',
    details: [
      'GPS tracked dispatch across Kaimur & nearby districts',
      'Fully equipped with ventilator, defibrillator, and ECG',
      'Direct telemetry reporting to the hospital command center',
      '24/7 Hotline: +91 94708 26108'
    ]
  },
  {
    id: 'icu',
    name: 'Intensive Care Unit (ICU)',
    category: 'clinical',
    description: 'Advanced physiological monitoring and support systems for critically ill patients managed by board-certified intensivists.',
    icon: 'HeartPulse',
    details: [
      'High-end mechanical ventilation systems',
      'Arterial blood gas (ABG) monitoring at bedside',
      'Invading and non-invasive hemodynamic monitoring',
      '1:1 dedicated nursing care protocols'
    ]
  },
  {
    id: 'iccu',
    name: 'Intensive Coronary Care Unit (ICCU)',
    category: 'clinical',
    description: 'Highly specialized cardiac monitoring unit designed for rapid treatment of acute myocardial infarctions, heart failure, and arrhythmias.',
    icon: 'HeartZap',
    details: [
      'Continuous cardiac rhythm monitoring with telemetry',
      'Emergency cardiac pacing and cardioversion',
      'Early post-MI critical management',
      'Supervision by specialized cardiologists & CCU nurses'
    ]
  },
  {
    id: 'nicu',
    name: 'Neonatal ICU (NICU)',
    category: 'clinical',
    description: 'Specialized intensive level care for premature and critically ill newborns with extreme gentle incubation, phototherapy, and micro-ventilation.',
    icon: 'Baby',
    details: [
      'Advanced neonatal incubators with warmers',
      'Gentle high-frequency microcardiac ventilators',
      'Neonatal jaundice phototherapy systems',
      'Strictly maintained sterile environmental systems'
    ]
  },
  {
    id: 'child-specialist',
    name: 'Pediatrics & Neonatology',
    category: 'clinical',
    description: 'Comprehensive medical assessment, immunization, and growth tracking for infants, children, and adolescents.',
    icon: 'Stethoscope',
    details: [
      'Newborn screening & immunization clinic',
      'Growth & development milestones assessment',
      'Pediatric emergency management',
      'Expert child psychology and nutritional guidance'
    ]
  },
  {
    id: 'womens-health',
    name: "Obstetrics & Women's Health",
    category: 'clinical',
    description: 'Elite labor-delivery-recovery suites, high-risk pregnancy monitoring, minimally invasive painless deliveries, and complete gynecological care.',
    icon: 'Sparkles',
    details: [
      'Comprehensive prenatal & postnatal wellness packages',
      'Laparoscopic gynecological and micro-surgeries',
      'Painless labor delivery programs',
      'Adolescent health and menopausal clinic'
    ]
  },
  {
    id: 'general-medicine',
    name: 'Internal & General Medicine',
    category: 'clinical',
    description: 'Expert diagnostics and management of chronic diseases, systemic disorders, infectious illnesses, and geriatric primary health programs.',
    icon: 'Shield',
    details: [
      'Comprehensive diabetes, hypertension, and thyroid management',
      'Prevention and therapy of acute infectious diseases (Dengue, Typhoid, Covid)',
      'Detailed preventative global health screenings',
      'Rheumatology and immunity consultations'
    ]
  },
  {
    id: 'general-surgery',
    name: 'Advanced General Surgery',
    category: 'clinical',
    description: 'Modern surgical theater handling minor to complex laparoscopic actions, hernia repair, abdominal surgeries, and surgical critical care.',
    icon: 'Scissors',
    details: [
      'Laparoscopic keyhole key-vent gallbladder & appendix removal',
      'Trauma-induced emergency abdominal reconstructions',
      'Minimally invasive piles, fissure & fistula procedures',
      'Post-operative specialized healing ward'
    ]
  },
  {
    id: 'orthopedic',
    name: 'Orthopedics & Joint Replacement',
    category: 'clinical',
    description: 'State-of-the-art trauma fracture alignment, total joint surgeries, arthroscopy, and complete sports rehabilitation.',
    icon: 'Bone',
    details: [
      'Advanced trauma orthosurgery for complex skeletal fractures',
      'Total Knee and Hip Replacement (TKR & THR)',
      'Arthroscopic keyhole ligament repairs (ACL, meniscus)',
      'In-house customized healing physiotherapy units'
    ]
  },
  {
    id: 'dental',
    name: 'Advanced Dentistry',
    category: 'clinical',
    description: 'Elite cosmetic and remedial dental surgeries, root canals, implants, and orthodontic corrective structures in a sterile environment.',
    icon: 'Smile',
    details: [
      'Single-sitting root canal treatments (RCT)',
      'Aesthetic dental veneers, polishing & whitening',
      'Dental implants and complete custom dentures',
      'Pediatric dental cavity control and sealing'
    ]
  },
  {
    id: 'diabetology',
    name: 'Endocrinology & Diabetology',
    category: 'clinical',
    description: 'Dedicated focus on diabetic lifestyle modification, early symptom management, insulin titration, and diabetic neuropathy screening.',
    icon: 'Syringe',
    details: [
      'Diabetic foot care assessment and micro-vascular testing',
      'C-peptide/insulin profiling & customized nutrition therapy',
      'Gestational diabetes management',
      'Continuous Glucose Monitoring (CGM) reports'
    ]
  },
  {
    id: 'ultrasound',
    name: 'High-Resolution Ultrasound (USG)',
    category: 'diagnostic',
    description: 'Advanced 3D/4D ultrasound systems providing crystal-clear visualization for pregnancy tracking, organ mapping, and vascular dopplers.',
    icon: 'Radio',
    details: [
      'Anomaly scan & fetal growth tracking',
      'Whole abdomen & pelvic high resolution scanning',
      'Arterial/Venous Color Doppler studies',
      'USG-guided complex fine needle aspirations (FNAC)'
    ]
  },
  {
    id: 'digital-xray',
    name: 'Digital X-Ray (High-Frequency)',
    category: 'diagnostic',
    description: 'Low-radiation high-frequency radiology system producing instant crystal-clear images for fast, accurate emergency diagnostics.',
    icon: 'Scan',
    details: [
      'Instant digitized diagnostic report system',
      'Extremely high structural resolution with minimal patient radiation',
      'Bedside portable digital X-ray for ICU & Trauma beds',
      'Orthopedic digital skeletal mapping views'
    ]
  },
  {
    id: 'pathology',
    name: 'Fully Automatic Pathology Lab',
    category: 'diagnostic',
    description: 'In-house diagnostic engine running computerized biochemistry, hematology, and clinical pathology tests with barcoded precision.',
    icon: 'FlaskConical',
    details: [
      'Barcoded automated sample analyzers',
      'Critical value emergency alerts within 30 minutes',
      'Accredited standard internal quality controller validations',
      'Digital email/WhatsApp report delivery service'
    ]
  },
  {
    id: 'ayushman-bharat',
    name: 'Ayushman Bharat (PM-JAY)',
    category: 'scheme',
    description: 'Empaneled under Bihar State Health Authority. Uncapped free treatment facility up to ₹5 Lakhs per family annually for eligible cardholders.',
    icon: 'Award',
    details: [
      '100% cashless treatment across eligible surgical categories',
      'Dedicated Arogya Mitra desk for smooth processing',
      'Pre-authorization assistance in emergency situations',
      'Covers ICU, surgical implants, medicines & room charges'
    ]
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr1',
    name: 'Dr. Sanjay Kumar',
    speciality: 'Pediatrician (Child Specialist)',
    education: 'MD (Pediatrics), DCH (Gold Medalist)',
    experience: '14+ Years in Dedicated Pediatric Care',
    availability: 'Mon - Sat (9:00 AM - 2:00 PM)',
    status: 'Available Today',
    avatarSeed: 'sanjay_kumar',
    services: ['Newborn Care', 'Child Diseases', 'Vaccination', 'Pediatric Consultation']
  },
  {
    id: 'dr2',
    name: 'Dr. Rita Kumari',
    speciality: 'Gynecologist & Obstetrician',
    education: 'MS (Obstetrics & Gynecology), FMAS (Laparoscopy)',
    experience: '12+ Years in High-Risk Maternity Care',
    availability: 'Mon - Sat (10:00 AM - 4:00 PM)',
    status: 'In Surgery',
    avatarSeed: 'rita_kumari',
    services: ['Pregnancy Care', 'Normal Delivery', 'C-Section', 'Women\'s Health']
  },
  {
    id: 'dr3',
    name: 'Dr. Avadhesh Kumar',
    speciality: 'General & Laparoscopic Surgeon',
    education: 'MBBS, MS (General Surgery)',
    experience: '18+ Years in Advanced Operative Surgery',
    availability: 'Mon - Sat (11:00 AM - 5:00 PM)',
    status: 'Available Today',
    avatarSeed: 'avadhesh_kumar',
    services: ['Hernia Surgery', 'Appendix Surgery', 'Gall Bladder Surgery', 'General Surgery']
  },
  {
    id: 'dr4',
    name: 'Dr. Brajesh Kumar',
    speciality: 'Orthopedic Specialist',
    education: 'MBBS, MS (Orthopedics)',
    experience: '10+ Years in Joint & Trauma Reconstructions',
    availability: 'Tue, Thu, Sat (10:00 AM - 3:00 PM)',
    status: 'On Call',
    avatarSeed: 'brajesh_kumar',
    services: ['Bone & Joint Care', 'Fracture Treatment', 'Orthopedic Consultation']
  },
  {
    id: 'dr5',
    name: 'Dr. Mohit Sharan',
    speciality: 'Physician',
    education: 'MD (General Medicine)',
    experience: '8+ Years in Critical Medicine & OPD Checks',
    availability: 'Mon - Fri (9:30 AM - 4:30 PM)',
    status: 'Available Today',
    avatarSeed: 'mohit_sharan',
    services: ['General Medicine', 'Fever Treatment', 'Infection Management']
  },
  {
    id: 'dr6',
    name: 'Dr. S.K. Singh',
    speciality: 'Diabetologist',
    education: 'MBBS, PG Diploma in Diabetology (Gold Medalist)',
    experience: '22+ Years in Endocrine Care & Management',
    availability: 'Mon, Wed, Fri (10:00 AM - 2:00 PM)',
    status: 'Available Today',
    avatarSeed: 'sk_singh_diabetes',
    services: ['Diabetes Management', 'Lifestyle Consultation']
  },
  {
    id: 'dr7',
    name: 'Dr. Anchal Kumari',
    speciality: 'Dental Care',
    education: 'BDS (Dental Surgeon)',
    experience: '7+ Years in Advanced Oral Medicine',
    availability: 'Mon - Sat (9:00 AM - 1:00 PM)',
    status: 'Next Available: Tomorrow',
    avatarSeed: 'anchal_kumari',
    services: ['Dental Consultation', 'Oral Health Care']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Ramendra Kumar Mishra',
    location: 'Kudra, Kaimur',
    relation: 'Trauma Patient Father',
    text: 'My son was involved in an extremely severe road accident on GT Road. The trauma response at Mata Bhagyamani Devi Hospital was lightning fast. Within minutes, the surgeons aligned his multiple fractures under continuous ICU supervision. Today, my son is walking! It is indeed a blessing for the Kaimur region.',
    rating: 5
  },
  {
    id: 't2',
    author: 'Sarita Devi',
    location: 'Sakari, Kudra',
    relation: 'Maternity Patient',
    text: 'I was admitted with severe complications in my eighth month. The neonatal NICU team and gynecologist stayed alert the entire night. My baby received professional ventilator support in the NICU and got saved. The billing was cashless and fully covered under Ayushman Bharat! Truly professional.',
    rating: 5
  },
  {
    id: 't3',
    author: 'Dinesh Prasad Gupta',
    location: 'Mohania, Kaimur',
    relation: 'Diabetic Patient',
    text: 'The Diabetology and General Medicine services here are comparable to hospitals in major cities. They treat every patient like royalty. Their fully automated blood tests gave accurate readings, helping me manage my blood sugar level safely. Excellent clinic!',
    rating: 5
  }
];
