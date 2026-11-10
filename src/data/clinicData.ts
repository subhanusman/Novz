export interface Physician {
  id: string;
  name: string;
  role: string;
  department: string;
  specialtyId: string;
  experienceYears: number;
  education: string;
  credentials: string;
  languages: string[];
  bio: string;
  philosophy: string;
  consultationDays: string[];
  slots: string[];
  consultationFee: string;
  photo: string;
  subspecialties: string[];
}

export interface Specialty {
  id: string;
  name: string;
  iconName: string;
  badge: string;
  tagline: string;
  shortDescription: string;
  detailedOverview: string;
  conditions: string[];
  procedures: string[];
  leadPhysicianId: string;
}

export interface Facility {
  id: string;
  title: string;
  category: 'Diagnostic' | 'Consultation' | 'Lounge' | 'Recovery';
  image: string;
  description: string;
  features: string[];
  location: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  city: string;
  specialty: string;
  quote: string;
  outcome: string;
  verifiedVisitDate: string;
}

export interface FAQItem {
  id: string;
  category: 'Appointments' | 'Consultations' | 'Billing & Insurance' | 'Clinic Policies';
  question: string;
  answer: string;
}

export const CLINIC_CONTACT = {
  brandName: 'NEXTR Apex Health',
  companyName: 'NEXTR Digital Solutions & Services',
  email: 'nextrsolutions@gmail.com',
  whatsAppUrl: 'https://wa.me/923239943441',
  whatsAppCtaText: 'Visit',
  footerCredit: 'Developed by NEXTR Digital Solutions & Services',
  address: 'Apex Health Pavilion, 450 Medical Heights Parkway, Suite 300',
  campusDetails: 'Building B, East Entrance with Valet & Dedicated Patient Parking',
  hours: [
    { days: 'Monday – Friday', time: '7:30 AM – 7:00 PM' },
    { days: 'Saturday', time: '8:00 AM – 4:00 PM' },
    { days: 'Sunday', time: '9:00 AM – 2:00 PM (Urgent Care & Virtual Triage)' }
  ]
};

export const SPECIALTIES: Specialty[] = [
  {
    id: 'cardiology',
    name: 'Cardiology & Vascular Wellness',
    iconName: 'HeartPulse',
    badge: 'Cardiovascular Care',
    tagline: 'Comprehensive cardiac assessment and non-invasive vascular health management.',
    shortDescription: 'Advanced cardiac screenings, personalized hypertension regimens, lipid management, and non-invasive cardiovascular diagnostics.',
    detailedOverview: 'Our Cardiovascular division integrates high-definition echocardiography, continuous cardiac rhythm monitoring, and preventative vascular risk profiling to deliver early intervention and unhurried clinical support.',
    conditions: [
      'Hypertension & Arterial Health',
      'Coronary Artery Screening',
      'Lipid & Cholesterol Optimization',
      'Cardiac Arrhythmias & Palpitations',
      'Heart Failure Prevention & Care'
    ],
    procedures: [
      '3D Transthoracic Echocardiogram',
      'Non-Invasive Vascular Doppler',
      'Continuous Ambulatory ECG (Holter)',
      'Cardiopulmonary Stress Diagnostics'
    ],
    leadPhysicianId: 'dr-evelyn-vance'
  },
  {
    id: 'neurology',
    name: 'Neurology & Cognitive Health',
    iconName: 'Brain',
    badge: 'Neurosciences',
    tagline: 'Precision neurological diagnostics and proactive cognitive longevity care.',
    shortDescription: 'Dedicated outpatient management for migraines, memory wellness, peripheral neuropathy, and neuromuscular disorders.',
    detailedOverview: 'Focused on diagnostic clarity and individualized long-term symptom relief, our neurology team combines state-of-the-art neuro-imaging analysis with comprehensive lifestyle and pharmacological care.',
    conditions: [
      'Chronic Migraines & Tension Headaches',
      'Mild Cognitive Impairment & Memory Care',
      'Neuropathy & Radicular Pain',
      'Sleep Disturbances & Restless Leg Syndrome',
      'Movement Disorders & Tremor Assessment'
    ],
    procedures: [
      'High-Resolution Brain MRI Review',
      'Digital Electroencephalogram (EEG)',
      'Comprehensive Cognitive Battery Evaluation',
      'Autonomic Nervous System Profiling'
    ],
    leadPhysicianId: 'dr-arthur-sterling'
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics & Joint Restoration',
    iconName: 'Activity',
    badge: 'Musculoskeletal',
    tagline: 'Restoring functional mobility, sports injury recovery, and joint preservation.',
    shortDescription: 'Specialized care for knee, shoulder, and spine conditions with minimally invasive treatment protocols and active physical rehabilitation.',
    detailedOverview: 'Our musculoskeletal team emphasizes joint preservation and non-surgical restoration wherever possible, backed by advanced digital fluoroscopy and custom physical therapy plans.',
    conditions: [
      'Osteoarthritis & Cartilage Wear',
      'Rotator Cuff & Shoulder Impingement',
      'Knee Meniscus & Ligament Strains',
      'Spinal Disc & Lumbar Discomfort',
      'Sports Related Musculoskeletal Injuries'
    ],
    procedures: [
      'Ultrasound-Guided Joint Injections',
      'Targeted Viscosupplementation Therapy',
      'Dynamic Functional Motion Analysis',
      'Pre- & Post-Operative Rehabilitation Coordination'
    ],
    leadPhysicianId: 'dr-marcus-thorne'
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics & Family Medicine',
    iconName: 'Baby',
    badge: 'Family Health',
    tagline: 'Gentle, compassionate healthcare for newborns, children, adolescents, and families.',
    shortDescription: 'Well-child wellness examinations, pediatric immunization tracking, adolescent care, and whole-family preventative medicine.',
    detailedOverview: 'Designed with calming child-friendly exam rooms, our pediatric service provides compassionate developmental screenings, acute illness management, and continuous family health guidance.',
    conditions: [
      'Newborn & Infant Milestone Tracking',
      'Childhood Asthma & Seasonal Allergies',
      'Adolescent Health & Wellness',
      'Acute Pediatric Fevers & Ear Infections',
      'Family Preventative Health Maintenance'
    ],
    procedures: [
      'Routine Growth & Vision Screenings',
      'Pediatric Immunization Consultations',
      'Allergy Sensitivity Assessments',
      'School & Sports Physical Evaluations'
    ],
    leadPhysicianId: 'dr-sarah-lin'
  },
  {
    id: 'dermatology',
    name: 'Dermatology & Aesthetic Wellness',
    iconName: 'Sparkles',
    badge: 'Cutaneous Health',
    tagline: 'Medical dermatology, skin cancer screenings, and evidence-based aesthetic care.',
    shortDescription: 'Comprehensive full-body skin examinations, acne and eczema management, and non-invasive medical aesthetic treatments.',
    detailedOverview: 'Bridging rigorous clinical dermatology with cosmetic skin wellness, our practitioners utilize high-magnification dermatoscopy and modern laser technology for radiant, healthy skin.',
    conditions: [
      'Atypical Moles & Cutaneous Lesions',
      'Persistent Acne & Rosacea',
      'Eczema, Psoriasis & Dermatitis',
      'Photo-Aging & Sun Damage Reversal',
      'Hair Thinning & Scalp Disorders'
    ],
    procedures: [
      'Digital Dermoscopy & Full-Body Mole Mapping',
      'Cryotherapy & Minor Lesion Biopsies',
      'Targeted Medical Chemical Peels',
      'Non-Ablative Laser Skin Rejuvenation'
    ],
    leadPhysicianId: 'dr-elena-rostova'
  },
  {
    id: 'internal-medicine',
    name: 'Internal Medicine & Preventative Care',
    iconName: 'Stethoscope',
    badge: 'Primary Care',
    tagline: 'Holistic chronic care management and executive annual health diagnostics.',
    shortDescription: 'In-depth annual physicals, metabolic syndrome optimization, diabetic management, and multi-system medical coordination.',
    detailedOverview: 'Our internal medicine physicians act as your central healthcare navigators, synthesizing laboratory diagnostics, specialist findings, and lifestyle metrics into an actionable health road map.',
    conditions: [
      'Metabolic Health & Type 2 Diabetes',
      'Thyroid & Endocrine Imbalances',
      'Gastrointestinal & Digestive Wellness',
      'Fatigue & Micronutrient Deficiencies',
      'Complex Multi-Condition Coordination'
    ],
    procedures: [
      'Executive Annual Health Panels',
      'Continuous Glucose Monitoring Trials',
      'Resting Metabolic Rate Assessment',
      'Preventative Cancer Screening Panels'
    ],
    leadPhysicianId: 'dr-julian-mercer'
  }
];

export const PHYSICIANS: Physician[] = [
  {
    id: 'dr-evelyn-vance',
    name: 'Dr. Evelyn Vance, MD',
    role: 'Chief of Cardiovascular Medicine',
    department: 'Cardiology & Vascular Wellness',
    specialtyId: 'cardiology',
    experienceYears: 16,
    education: 'Johns Hopkins School of Medicine',
    credentials: 'Board Certified in Cardiovascular Disease & Internal Medicine (Fictional Profile)',
    languages: ['English', 'French'],
    bio: 'Dr. Evelyn Vance has dedicated over sixteen years to preventive cardiology and non-invasive vascular diagnostics. She specializes in early cardiovascular risk stratification and helping patients maintain vascular vitality.',
    philosophy: 'Healthcare is most transformative when we listen closely, anticipate risks before symptoms appear, and design realistic habits together.',
    consultationDays: ['Monday', 'Tuesday', 'Thursday'],
    slots: ['08:30 AM', '10:00 AM', '11:30 AM', '02:00 PM', '03:45 PM'],
    consultationFee: 'Demonstration Voucher ($0)',
    photo: '/src/assets/images/doctor_female_chief_physician_1794223861795.jpg',
    subspecialties: ['Preventive Cardiology', 'Vascular Ultrasound', 'Women’s Heart Health']
  },
  {
    id: 'dr-arthur-sterling',
    name: 'Dr. Arthur M. Sterling, MD',
    role: 'Senior Neurologist & Cognitive Care Lead',
    department: 'Neurology & Cognitive Health',
    specialtyId: 'neurology',
    experienceYears: 21,
    education: 'Columbia University College of Physicians and Surgeons',
    credentials: 'Board Certified in Neurology & Clinical Neurophysiology (Fictional Profile)',
    languages: ['English', 'German'],
    bio: 'Dr. Arthur Sterling leads our neurological diagnostics with a focus on migraine solutions, memory protection, and peripheral nerve disorders. He brings a calm, methodical demeanor to every patient consultation.',
    philosophy: 'The brain and nervous system demand precision, patience, and empathetic exploration of how daily habits influence neurological resilience.',
    consultationDays: ['Tuesday', 'Wednesday', 'Friday'],
    slots: ['09:15 AM', '11:00 AM', '01:30 PM', '03:00 PM', '04:30 PM'],
    consultationFee: 'Demonstration Voucher ($0)',
    photo: '/src/assets/images/doctor_male_senior_specialist_1794223861761.jpg',
    subspecialties: ['Refractory Migraines', 'Cognitive Assessment', 'Neuromuscular Diagnostics']
  },
  {
    id: 'dr-marcus-thorne',
    name: 'Dr. Marcus Thorne, MD',
    role: 'Director of Orthopedic Sports Medicine',
    department: 'Orthopedics & Joint Restoration',
    specialtyId: 'orthopedics',
    experienceYears: 14,
    education: 'Stanford University School of Medicine',
    credentials: 'Board Certified in Orthopedic Surgery (Fictional Profile)',
    languages: ['English', 'Spanish'],
    bio: 'Dr. Marcus Thorne specializes in non-surgical joint preservation, regenerative therapies, and sports biomechanics. He works closely with in-house physical therapists to restore active lifestyles.',
    philosophy: 'Preserving natural joint anatomy and rebuilding confident functional movement are at the core of enduring orthopedic wellness.',
    consultationDays: ['Monday', 'Wednesday', 'Thursday'],
    slots: ['08:00 AM', '09:45 AM', '01:15 PM', '02:45 PM'],
    consultationFee: 'Demonstration Voucher ($0)',
    photo: '/src/assets/images/doctor_male_senior_specialist_1794223861761.jpg',
    subspecialties: ['Knee Joint Preservation', 'Shoulder Biomechanics', 'Sports Medicine']
  },
  {
    id: 'dr-sarah-lin',
    name: 'Dr. Sarah Lin, MD',
    role: 'Lead Pediatrician & Adolescent Care',
    department: 'Pediatrics & Family Medicine',
    specialtyId: 'pediatrics',
    experienceYears: 11,
    education: 'University of California, San Francisco',
    credentials: 'Board Certified in Pediatrics (Fictional Profile)',
    languages: ['English', 'Mandarin'],
    bio: 'Dr. Sarah Lin creates an uplifting, trust-building environment for young patients and their guardians. Her clinical background covers newborn wellness, adolescent development, and childhood allergic management.',
    philosophy: 'Nurturing a child’s health means supporting the entire family with clear communication, warmth, and unhurried clinical guidance.',
    consultationDays: ['Tuesday', 'Wednesday', 'Friday', 'Saturday'],
    slots: ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '03:30 PM'],
    consultationFee: 'Demonstration Voucher ($0)',
    photo: '/src/assets/images/doctor_female_chief_physician_1794223861795.jpg',
    subspecialties: ['Developmental Pediatrics', 'Pediatric Asthma', 'Preventive Family Care']
  },
  {
    id: 'dr-elena-rostova',
    name: 'Dr. Elena Rostova, MD',
    role: 'Consultant Dermatologist',
    department: 'Dermatology & Aesthetic Wellness',
    specialtyId: 'dermatology',
    experienceYears: 13,
    education: 'Yale School of Medicine',
    credentials: 'Board Certified in Dermatology (Fictional Profile)',
    languages: ['English', 'Russian'],
    bio: 'Dr. Elena Rostova provides comprehensive dermatologic consultations, from digital skin cancer screenings to customized regimens for chronic inflammatory skin disorders and non-invasive restorative aesthetics.',
    philosophy: 'Skin is our largest protective organ; treating it effectively requires combining scientific rigor with an appreciation for individual lifestyle factors.',
    consultationDays: ['Monday', 'Tuesday', 'Friday'],
    slots: ['10:00 AM', '11:15 AM', '01:45 PM', '03:15 PM'],
    consultationFee: 'Demonstration Voucher ($0)',
    photo: '/src/assets/images/doctor_female_chief_physician_1794223861795.jpg',
    subspecialties: ['Dermoscopy & Mole Mapping', 'Acne Therapeutics', 'Photoprotection Science']
  },
  {
    id: 'dr-julian-mercer',
    name: 'Dr. Julian Mercer, MD',
    role: 'Director of Internal Medicine & Diagnostics',
    department: 'Internal Medicine & Preventative Care',
    specialtyId: 'internal-medicine',
    experienceYears: 18,
    education: 'University of Pennsylvania Perelman School of Medicine',
    credentials: 'Board Certified in Internal Medicine (Fictional Profile)',
    languages: ['English', 'Portuguese'],
    bio: 'Dr. Julian Mercer focuses on executive health diagnostics, metabolic longevity, and complex multi-organ symptom coordination. He serves as an attentive medical partner for lifelong well-being.',
    philosophy: 'A doctor should be an analytical detective and a steady companion, connecting subtle diagnostic dots into a clear path forward.',
    consultationDays: ['Monday', 'Wednesday', 'Thursday', 'Friday'],
    slots: ['08:15 AM', '10:00 AM', '01:30 PM', '03:00 PM', '04:15 PM'],
    consultationFee: 'Demonstration Voucher ($0)',
    photo: '/src/assets/images/doctor_male_senior_specialist_1794223861761.jpg',
    subspecialties: ['Metabolic Health', 'Preventative Diagnostics', 'Cardiometabolic Risk']
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'reception-pavilion',
    title: 'Main Reception & Care Navigation Lounge',
    category: 'Lounge',
    image: '/src/assets/images/hero_modern_clinic_reception_1794223859800.jpg',
    description: 'A serene arrival space designed with natural oak textures, acoustic glass partitions, and biophilic greenery to eliminate traditional waiting room anxiety.',
    features: ['Expedite Digital Self-Check-In', 'Complimentary Botanical Tea & Water Bar', 'Spacious Distance Seating Zones', 'Concierge Patient Liaisons'],
    location: 'Pavilion Level 1, Main Entrance'
  },
  {
    id: 'consultation-suites',
    title: 'Private Physician Consultation Suite',
    category: 'Consultation',
    image: '/src/assets/images/clinic_consultation_suite_1794223860034.jpg',
    description: 'Ergonomic examination and discussion suites outfitted with dual interactive displays, private acoustic insulation, and calming garden courtyard vistas.',
    features: ['Real-Time Diagnostic Review Displays', 'Soundproof Privacy Architecture', 'Integrated Minor Exam Pod', 'Soft Ambient Lighting Regimen'],
    location: 'West Wing, Suites 201–214'
  },
  {
    id: 'diagnostic-imaging',
    title: 'High-Field 3T MRI & Imaging Center',
    category: 'Diagnostic',
    image: '/src/assets/images/clinic_diagnostic_center_1794223861794.jpg',
    description: 'Modern outpatient imaging suite engineered with ambient lighting systems and wide-bore architecture for patient comfort during scans.',
    features: ['Wide-Bore Silent MRI Technology', 'Rapid Same-Day Radiologist Reports', 'Calming Ambient Chromotherapy Lighting', 'Direct Specialist Consultation Link'],
    location: 'Lower Pavilion, Diagnostics Suite 10'
  },
  {
    id: 'rehab-biomechanics',
    title: 'Physical Motion & Rehabilitation Center',
    category: 'Recovery',
    image: '/src/assets/images/clinic_rehabilitation_pavilion_1794233557358.jpg',
    description: 'Dynamic physical therapy floor dedicated to gait analysis, post-surgical recovery, and sports biomechanics training under licensed supervision.',
    features: ['Functional Kinematic Motion Trackers', 'Targeted Resistance & Hydro Equipment', 'Private Manual Therapy Bays', 'Custom Home Exercise App Sync'],
    location: 'East Wing, Pavilion Level 2'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    patientName: 'Claire D.',
    city: 'Westwood Heights',
    specialty: 'Cardiology Care',
    quote: 'The consultation was the most unhurried medical experience I have ever had. Dr. Vance walked me through every echocardiogram metric on the large screen and laid out an actionable lifestyle plan.',
    outcome: 'Controlled blood pressure within 6 weeks without overwhelming side effects',
    verifiedVisitDate: 'October 2026'
  },
  {
    id: 'test-2',
    patientName: 'Jonathan M.',
    city: 'Oakridge Terrace',
    specialty: 'Neurology & Migraine Relief',
    quote: 'After 8 months of debilitating weekly migraines, the multidisciplinary approach here identified specific autonomic triggers. The clinic atmosphere feels more like a wellness retreat than a hospital.',
    outcome: 'Reduction of headache frequency from 4 days/week to less than 1 day/month',
    verifiedVisitDate: 'September 2026'
  },
  {
    id: 'test-3',
    patientName: 'Elena & Lucas K.',
    city: 'Maple Creek Valley',
    specialty: 'Pediatric Care',
    quote: 'Finding a pediatrician who genuinely listens to parents while keeping children laughing and comfortable is rare. Dr. Lin was remarkable with our 4-year-old son during his allergy check.',
    outcome: 'Accurate allergen isolation with an easy-to-follow school safety plan',
    verifiedVisitDate: 'November 2026'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Appointments',
    question: 'How does the demonstration appointment booking system work?',
    answer: 'This website is an interactive demonstration built by NEXTR Digital Solutions & Services. You can select any specialty, physician, calendar date, and convenient time slot. Upon submitting your simulated details, the system generates an immediate local confirmation voucher with a reference ID that you can view, save, or print. No payment or confidential health data is requested.'
  },
  {
    id: 'faq-2',
    category: 'Appointments',
    question: 'Can I schedule a virtual consultation instead of an in-person visit?',
    answer: 'Yes. In the appointment scheduler, you can toggle between "In-Person Clinic Visit" at our physical campus and "Encrypted Video Consultation" for telemedicine reviews. In a production environment, telemedicine links are automatically generated.'
  },
  {
    id: 'faq-3',
    category: 'Consultations',
    question: 'How long are standard physician consultations at NEXTR Apex Health?',
    answer: 'Our care model schedules 45 minutes for initial comprehensive evaluations and 30 minutes for follow-up assessments. This ensures ample time for unhurried medical history review, physical examination, and shared decision-making.'
  },
  {
    id: 'faq-4',
    category: 'Billing & Insurance',
    question: 'What insurance and billing models does this clinic demonstrate?',
    answer: 'The demonstration highlights a modern hybrid model: in-network major insurance billing along with transparent flat-rate self-pay pricing displayed upfront. For this demo, all consultation vouchers are free simulated records.'
  },
  {
    id: 'faq-5',
    category: 'Clinic Policies',
    question: 'Are the medical staff profiles and credentials real?',
    answer: 'All physician profiles, bios, testimonials, and credentials displayed on this demonstration website are fictional personas designed to showcase modern healthcare web design, accessibility, and scheduling user experience.'
  },
  {
    id: 'faq-6',
    category: 'Clinic Policies',
    question: 'What should I do in the event of an urgent medical emergency?',
    answer: 'This website does not provide active triage for life-threatening emergencies. In any real medical emergency, please dial 911 (or your local emergency services telephone number) or proceed immediately to the nearest hospital emergency room.'
  }
];
