# CW Massage & Personal Training

A modern, responsive website built with **React and Vite** for a massage therapy and personal training practitioner. The site focuses on clear communication, accessibility, and a practitioner led approach rather than over-engineering.

This project is also used as part of my personal development portfolio.

---

## Project Goals

- Present the practitioner as the centre of the service
- Keep the site calm, professional, and human
- Avoid unnecessary complexity (especially around bookings and GDPR)
- Build a clean, extensible foundation for future features

---

## What's been implemented

### Core setup

- React + Vite project scaffold
- Clean project structure with reusable components
- Deployed-ready configuration

### Layout & Navigation

- Persistent header and footer
- Client-side routing using 'react-router-dom'
- Pages:
  - Home
  - Services
  - Booking (Coming Soon)
  - Contact

### Home page
- Practitioner-led introduction
- Clear focus on injury recovery and long-term wellbeing
- Soft call-to-action directing users to contact methods

### Services page
- Structured service descriptions
- Reusable `ServiceCard` component
- Responsive grid layout
- Services focused on:
  - Massage Therapy
  - Personal Training
  - Pilates & movement

### Contact page
- External-first contact approach (GDPR-safe)
- WhatsApp and Facebook links
- Email fallback
- No forms or data collection

### Booking
- Intentionally left as a “Coming Soon” page
- Booking system will be handled via a third-party platform in the future

---

## GDPR & architectural decisions

- No user data is collected or stored
- No custom booking forms
- No authentication or databases
- Booking is planned to be handled via an external provider

These decisions were made deliberately to avoid premature complexity and compliance risk.

---

## What’s left to do

- Replace placeholder copy with practitioner-written content
- Add a profile image
- Choose and integrate a third-party booking platform
- Optional SEO and accessibility pass
- Optional analytics (privacy-friendly)

---

## 🛠️ Tech stack

- React
- Vite
- React Router
- CSS (custom, global styles)
- Vercel (deployment)

---

## Deployment

The project is designed to be deployed on **Vercel** with client-side routing support.

---

## Author

Built by **Kieran Kinnaird**  
https://kinnaird.dev