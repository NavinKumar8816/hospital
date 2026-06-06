# Mata Bhagyamani Devi Hospital Website

Premium hospital and trauma center website for **Mata Bhagyamani Devi Hospital, Kudra, Kaimur, Bihar**, built with React, TypeScript, Vite, Tailwind CSS v4, and Motion.

This project presents the hospital as a modern multi-speciality healthcare destination with a strong emergency-care identity, Ayushman Bharat support, doctor discovery, appointment flow, testimonials, infrastructure showcase, FAQs, and a dedicated **Nursing College** experience.

## Overview

The website is designed to:

- present the hospital brand with a premium, trustworthy visual identity
- highlight emergency and trauma services clearly
- support patient discovery across departments and doctors
- provide a strong appointment and contact conversion flow
- showcase Ayushman Bharat eligibility and hospital trust signals
- connect the hospital website with the nursing college experience

## Key Features

- Premium responsive hospital landing page
- Sticky navigation with active section tracking
- Dedicated hero section with emergency-first messaging
- About, trust, services, trauma, facilities, and gallery sections
- Doctor listing with appointment preselection flow
- Ayushman Bharat / PM-JAY informational section
- Testimonials and FAQ sections
- Appointment booking portal
- Contact and location section
- Sticky emergency support UI
- Dedicated Nursing College page with lazy loading
- Dynamic SEO metadata based on active view

## Main User Flows

- **Hospital Visitors**
  Explore services, doctors, facilities, emergency support, testimonials, FAQs, and appointment options.

- **Emergency / Urgent Care Visitors**
  Quickly identify trauma support, emergency numbers, and immediate contact points.

- **Ayushman Bharat Patients**
  Learn about PM-JAY support and navigate to relevant assistance information.

- **Nursing Aspirants**
  Enter the Nursing College experience through CTA-driven navigation from the main hospital website.

## Tech Stack

- `React 19`
- `TypeScript`
- `Vite`
- `Tailwind CSS v4`
- `Motion`
- `Lucide React`

## Project Structure

```text
src/
  components/
    AboutHospital.tsx
    AppointmentPortal.tsx
    AyushmanBharat.tsx
    ContactLocation.tsx
    DoctorsList.tsx
    EmergencyWidget.tsx
    Footer.tsx
    GallerySection.tsx
    Header.tsx
    Hero.tsx
    HospitalFAQ.tsx
    NursingCollege.tsx
    NursingCollegePage.tsx
    SEOMetadata.tsx
    ServicesGrid.tsx
    StickyBottomEmergencyBar.tsx
    Testimonials.tsx
    TraumaSpecial.tsx
    TrustFacilities.tsx
    WhyTrustUs.tsx
    college/
      AdmissionsJourney.tsx
  App.tsx
  index.css
  main.tsx
```

## Important Architecture Notes

- The app supports two main views: `hospital` and `college`.
- `NursingCollegePage` is lazy-loaded for better bundle performance.
- The header uses section-aware active navigation.
- SEO metadata updates dynamically through `SEOMetadata.tsx`.
- Appointment flow supports doctor preselection from the doctors section.

## Local Development

### Prerequisites

- `Node.js 18+` recommended
- `npm`

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The site will run locally at:

```text
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Type Check

```bash
npm run lint
```

## Available Scripts

- `npm run dev` - start the Vite dev server with a forced fresh rebuild
- `npm run build` - create a production build
- `npm run preview` - preview the production build locally
- `npm run lint` - run TypeScript type checking

## Design Direction

This project uses a premium healthcare visual system built around:

- soft luxury gradients
- glassmorphism surfaces
- bold typography
- emergency-first trust messaging
- strong CTA hierarchy
- responsive layouts for desktop and mobile

## SEO and Branding

The site includes dynamic metadata for:

- hospital view
- nursing college view
- social sharing tags
- canonical URLs
- structured schema markup

Core brand themes represented in the UI:

- trust
- compassion
- emergency readiness
- women and child care
- academic affiliation

## Content Areas Included

- Hospital brand story
- Multi-speciality departments
- Trauma and emergency care
- Trust and infrastructure highlights
- Doctor directory
- Appointment booking
- Ayushman Bharat support
- FAQs
- Gallery and testimonials
- Nursing college promotion and dedicated college view

## Recommended Future Enhancements

- backend-powered appointment submissions
- CMS integration for doctors, gallery, and testimonials
- analytics and conversion tracking
- WhatsApp lead capture
- multilingual support
- accessibility audit and refinements
- deployment pipeline and environment-specific configuration

## Project Identity

**Hospital Name:** Mata Bhagyamani Devi Hospital  
**Location:** Sakari Mod, Kudra, Kaimur, Bihar  
**Positioning:** Multi-Speciality Hospital & Trauma Center with Ayushman Bharat support and Nursing College affiliation

## License

This project is currently private and intended for hospital website development and deployment use.
