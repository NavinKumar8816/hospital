import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, User, Phone, FileText, CheckCircle, Sparkles, Award, ShieldAlert, ArrowRight, X } from 'lucide-react';
import { DOCTORS } from '../data';

interface AppointmentPortalProps {
  preselectedDoctor: string;
  onClearPreselect: () => void;
}

export default function AppointmentPortal({ preselectedDoctor, onClearPreselect }: AppointmentPortalProps) {
  const [formData, setFormData] = useState({
    patientName: '',
    patientPhone: '',
    speciality: 'Trauma & General Surgery',
    doctor: '',
    date: '',
    timeSlot: 'Morning (09:00 AM - 12:00 PM)',
    symptoms: '',
    hasAyushman: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successToken, setSuccessToken] = useState<string | null>(null);
  const [estimatedWait, setEstimatedWait] = useState<string>('');

  // Handle pre-selected doctor input changes
  useEffect(() => {
    if (preselectedDoctor) {
      // Find matching doctor speciality to pre-fill
      const matchedDoc = DOCTORS.find(d => d.name === preselectedDoctor);
      if (matchedDoc) {
        setFormData(prev => ({
          ...prev,
          doctor: matchedDoc.name,
          speciality: matchedDoc.speciality
        }));
      } else {
        setFormData(prev => ({ ...prev, doctor: preselectedDoctor }));
      }
    }
  }, [preselectedDoctor]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    }
  };

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.patientName.trim()) tempErrors.patientName = 'Patient Name is required';
    
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.patientPhone.trim()) {
      tempErrors.patientPhone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.patientPhone.replace(/[\s-+]/g, ''))) {
      tempErrors.patientPhone = 'Enter a valid 10-digit phone number';
    }

    if (!formData.doctor) tempErrors.doctor = 'Please select a consultant';
    if (!formData.date) tempErrors.date = 'Appointment date is required';
    
    // Prevent past booking dates
    if (formData.date) {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selectedDate < today) {
        tempErrors.date = 'Cannot reserve appointments in the past';
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formPayload = {
      access_key: '786fe89c-4454-47cc-8577-eaba319cb326',
      subject: 'New Appointment Request - MBD Hospital',
      patientName: formData.patientName,
      patientPhone: formData.patientPhone,
      speciality: formData.speciality,
      doctor: formData.doctor,
      appointmentDate: formData.date,
      timeSlot: formData.timeSlot,
      symptoms: formData.symptoms,
      ayushmanCard: formData.hasAyushman ? 'Yes' : 'No',
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formPayload),
      });

      const result = await response.json();

      if (!result.success) {
        alert('Appointment request failed.');
        return;
      }

      const dateFormatted = formData.date.replace(/-/g, '').substring(2);
      const randomNumber = Math.floor(Math.random() * 900) + 100;
      const token = `MBD-${dateFormatted}-${randomNumber}`;

      setSuccessToken(token);
      setEstimatedWait('10-15 Minutes');

      const sessionRecord = {
        ...formData,
        token,
        timestamp: new Date().toISOString()
      };
      const historical = JSON.parse(localStorage.getItem('mbd_appointments') || '[]');
      historical.push(sessionRecord);
      localStorage.setItem('mbd_appointments', JSON.stringify(historical));

      alert('Appointment request submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    }
  };

  const handleBookAnother = () => {
    setSuccessToken(null);
    setFormData({
      patientName: '',
      patientPhone: '',
      speciality: 'Trauma & General Surgery',
      doctor: '',
      date: '',
      timeSlot: 'Morning (09:00 AM - 12:00 PM)',
      symptoms: '',
      hasAyushman: false,
    });
    onClearPreselect();
  };

  return (
    <section id="appointment" className="py-16 md:py-20 bg-gradient-to-b from-purple-50/15 via-indigo-50/20 to-white relative overflow-hidden scroll-mt-[130px]">
      
      {/* Background Graphic Blobs */}
      <div className="absolute top-1/4 -right-24 w-80 h-80 rounded-full bg-brand-pink-light/60 mix-blend-multiply filter blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-brand-purple-light/40 mix-blend-multiply filter blur-3xl animate-pulse" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-pink-light border border-brand-pink/20 text-brand-purple text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4 animate-bounce text-brand-purple" />
            <span>Instant Digital Check-In</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 font-heading">
            Book Priority Consultation
          </h2>
          <p className="mt-4 text-slate-500 text-xs md:text-sm font-light">
            Skip the physical queue in our lobby. Complete this digital registration form to pre-register your case file directly under our primary specialist physicians.
          </p>
        </div>

        {/* Interfacing Panel container */}
        <div className="glass-card rounded-3xl border border-white/50 shadow-2xl overflow-hidden relative">
          
          <AnimatePresence mode="wait">
            {!successToken ? (
              
              /* Consultation Booking Form */
              <motion.form 
                key="booking-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-6 md:p-10 space-y-6"
              >
                
                {/* Visual Header notification for pre-selection */}
                {preselectedDoctor && (
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-brand-purple-light border border-brand-purple/20">
                    <div className="flex items-center gap-2.5">
                      <div className="h-2 w-2 rounded-full bg-brand-purple animate-ping" />
                      <p className="text-xs font-bold text-brand-purple">
                        Consulting pre-selected: <strong className="font-semibold text-slate-800">{preselectedDoctor}</strong>
                      </p>
                    </div>
                    <button 
                      type="button" 
                      onClick={onClearPreselect}
                      className="p-1 rounded-full text-slate-500 hover:bg-white transition-all cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Patient Name */}
                  <div className="flex flex-col">
                    <label className="text-[11px] font-extrabold uppercase tracking-widest text-slate-700 mb-2 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-medical-blue" />
                      Patient Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="patientName"
                      placeholder="Enter patient name as printed in Aadhaar"
                      value={formData.patientName}
                      onChange={handleChange}
                      className={`px-4 py-3 rounded-xl bg-white border text-sm font-medium focus:outline-none focus:border-brand-purple ${
                        errors.patientName ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200'
                      }`}
                    />
                    {errors.patientName && (
                      <span className="text-xs text-rose-500 font-bold mt-1.5">{errors.patientName}</span>
                    )}
                  </div>

                  {/* Patient Phone */}
                  <div className="flex flex-col">
                    <label className="text-[11px] font-extrabold uppercase tracking-widest text-slate-700 mb-2 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-medical-blue" />
                      Patient Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="patientPhone"
                      placeholder="e.g. 9470826108"
                      value={formData.patientPhone}
                      onChange={handleChange}
                      className={`px-4 py-3 rounded-xl bg-white border text-sm font-medium focus:outline-none focus:border-brand-purple ${
                        errors.patientPhone ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200'
                      }`}
                    />
                    {errors.patientPhone && (
                      <span className="text-xs text-rose-500 font-bold mt-1.5">{errors.patientPhone}</span>
                    )}
                  </div>

                  {/* Specialty Channel selection */}
                  <div className="flex flex-col">
                    <label className="text-[11px] font-extrabold uppercase tracking-widest text-slate-700 mb-2 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-medical-blue" />
                      Medical Specialty Department
                    </label>
                    <select
                      name="speciality"
                      value={formData.speciality}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-800 focus:outline-none focus:border-brand-purple"
                    >
                      <option value="Trauma & General Surgery">Advanced Trauma & General Surgery</option>
                      <option value="Orthopedics & Joint Alignment">Orthopedics & Fracture Alignment</option>
                      <option value="Obstetrics & Gynecology">Obstetrics & Women's Health</option>
                      <option value="Pediatrics & Neonatology ICU">Pediatrics & Neonatal ICU</option>
                      <option value="General Clinical Medicine">General Clinical Medicine</option>
                      <option value="Advanced Dentistry & RCT">Advanced Dentistry</option>
                    </select>
                  </div>

                  {/* Doctor Selector */}
                  <div className="flex flex-col">
                    <label className="text-[11px] font-extrabold uppercase tracking-widest text-slate-700 mb-2 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-medical-blue" />
                      Select Doctor consultant <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleChange}
                      className={`px-4 py-3 rounded-xl bg-white border text-sm font-medium text-slate-800 focus:outline-none focus:border-brand-purple ${
                        errors.doctor ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200'
                      }`}
                    >
                      <option value="">-- Choose Consultant --</option>
                      {DOCTORS.map((doc) => (
                        <option key={doc.id} value={doc.name}>
                          {doc.name} ({doc.speciality})
                        </option>
                      ))}
                    </select>
                    {errors.doctor && (
                      <span className="text-xs text-rose-500 font-bold mt-1.5">{errors.doctor}</span>
                    )}
                  </div>

                  {/* Requested Date */}
                  <div className="flex flex-col">
                    <label className="text-[11px] font-extrabold uppercase tracking-widest text-slate-700 mb-2 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-medical-blue" />
                      Consultation Date <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`px-4 py-3 rounded-xl bg-white border text-sm font-medium focus:outline-none focus:border-brand-purple ${
                        errors.date ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200'
                      }`}
                    />
                    {errors.date && (
                      <span className="text-xs text-rose-500 font-bold mt-1.5">{errors.date}</span>
                    )}
                  </div>

                  {/* Time slot preference */}
                  <div className="flex flex-col">
                    <label className="text-[11px] font-extrabold uppercase tracking-widest text-slate-700 mb-2 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-medical-blue" />
                      Time Slot Preference
                    </label>
                    <select
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-800 focus:outline-none focus:border-brand-purple"
                    >
                      <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM - 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM - 03:00 PM)">Afternoon (12:00 PM - 03:00 PM)</option>
                      <option value="Evening (03:00 PM - 06:00 PM)">Evening (03:00 PM - 06:00 PM)</option>
                    </select>
                  </div>

                </div>

                {/* Symptoms Descriptive Field */}
                <div className="flex flex-col">
                  <label className="text-[11px] font-extrabold uppercase tracking-widest text-slate-700 mb-2 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-medical-blue" />
                    Brief Symptoms or Reason for Consultation
                  </label>
                  <textarea
                    name="symptoms"
                    rows={3}
                    placeholder="e.g., severe back pain, fracture alignment follow-up, prenatal routine ultrasound scan"
                    value={formData.symptoms}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium focus:outline-none focus:border-brand-purple"
                  />
                </div>

                {/* Ayushman Bharat Checkbox Widget */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="hasAyushman"
                    name="hasAyushman"
                    checked={formData.hasAyushman}
                    onChange={handleChange}
                    className="w-4 h-4 text-brand-purple accent-brand-purple cursor-pointer"
                  />
                  <label htmlFor="hasAyushman" className="text-xs font-semibold text-slate-700 cursor-pointer">
                    I hold an active Ayushman Bharat Golden Card / Ration Card and wish to seek cashless treatment assistance.
                  </label>
                </div>

                {/* Submit button */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-xl medical-gradient text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-brand-purple/10 hover:shadow-xl hover:translate-y-[-1px] transition-all flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
                  >
                    <span>Finalize Priority Registration</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </motion.form>
            ) : (
              
              /* Custom Success Screen Token Display */
              <motion.div 
                key="booking-success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-6 md:p-10 text-center space-y-6"
              >
                
                {/* Pulsing seal */}
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-10 h-10 animate-bounce" />
                </div>

                <div className="max-w-md mx-auto">
                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 font-heading">
                    Priority Booking Confirmed!
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-light">
                    Your digital registration folder has been successfully locked into our clinical calendar queue database.
                  </p>
                </div>

                {/* Simulated physical token card */}
                <div className="max-w-md mx-auto rounded-2xl bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 p-6 text-white border border-white/10 shadow-2xl relative overflow-hidden text-left">
                  
                  {/* Intercept lines */}
                  <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none transform translate-x-12 -translate-y-12">
                    <Award className="w-36 h-36" />
                  </div>

                  <div className="flex items-center justify-between border-b border-white/10 pb-3.5 mb-4">
                    <div>
                      <span className="text-[10px] font-bold text-brand-pink uppercase tracking-widest leading-none">
                        Mata Bhagyamani Devi Hospital
                      </span>
                      <h4 className="text-xs text-slate-400 mt-1 uppercase font-semibold leading-none">
                        Clinical Entry Queue Token
                      </h4>
                    </div>
                    <div className="p-1 rounded bg-[#10b981]/15 text-[#10b981] font-mono text-[9px] border border-[#10b981]/35 font-bold uppercase">
                      CONFIRMED
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-y-3.5 gap-x-4 text-xs font-light">
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold leading-none">Patient Name</p>
                      <p className="text-slate-200 mt-1 font-semibold leading-tight">{formData.patientName}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold leading-none">Assigned Token ID</p>
                      <p className="text-brand-pink font-mono font-bold mt-1 leading-tight">{successToken}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold leading-none">Physician</p>
                      <p className="text-slate-200 mt-1 font-semibold leading-tight">{formData.doctor}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold leading-none">Scheduled Date</p>
                      <p className="text-slate-200 mt-1 font-semibold leading-tight">{formData.date}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold leading-none">Preferred Slot</p>
                      <p className="text-slate-200 mt-1 font-semibold leading-tight">{formData.timeSlot}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold leading-none">Est Lobby Wait Time</p>
                      <p className="text-[#10b981] mt-1 font-bold leading-tight">{estimatedWait}</p>
                    </div>
                  </div>

                  {formData.hasAyushman && (
                    <div className="mt-4 p-2.5 rounded-lg bg-teal-500/10 border border-teal-500/20 text-[10px] text-teal-300 flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-teal-400 animate-pulse" />
                      <span>Cashless Scheme: Patient declared holding active Ayushman Card</span>
                    </div>
                  )}

                </div>

                {/* Important Clinical Warnings for Patient preparation */}
                <div className="max-w-md mx-auto p-4 rounded-xl bg-amber-50 border border-amber-200 text-left space-y-2">
                  <p className="text-xs font-bold text-amber-800 flex items-center gap-1.5 leading-none">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    Important Clinical Instructions:
                  </p>
                  <ul className="list-disc pl-4 text-[11px] text-amber-700 leading-relaxed font-medium">
                    <li>Please safeguard or screenshot this Token on your mobile.</li>
                    <li>Kindly reach the hospital reception desk 15 minutes before your time slot.</li>
                    <li>Always bring past diagnostic X-rays, ultrasounds, or therapy reports if applicable.</li>
                  </ul>
                </div>

                <div className="flex justify-center gap-3 max-w-md mx-auto pt-2">
                  <button
                    onClick={handleBookAnother}
                    className="py-2.5 px-6 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer text-center"
                  >
                    Register Another Patient
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="flex-1 py-2.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center"
                  >
                    Print Entry Slip
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
