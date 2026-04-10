/**
 * Clinic contact and social links — update `social` URLs to your real profiles when ready.
 */
export const SITE = {
  clinicName: 'Hair4Life Clinic',
  /** Official logo — file in `public/images/logo.svg` (not used as favicon). */
  logoUrl: '/images/logo.svg',
  logoAlt: 'Hair4Life Clinic',
  email: 'dhirenkansara24@gmail.com',
  /** Primary contact number */
  phoneDisplay: '+91 96640 44414',
  /** Use with tel: — digits and leading + */
  phoneTel: '+919664044414',
  /** Secondary number (keep visible in selected places only) */
  phoneSecondaryDisplay: '+91 90815 44414',
  phoneSecondaryTel: '+919081544414',
  addressLine1: 'Mahavir Tower, Semi Basement',
  addressLine2: 'Near Das Khaman, Opp HP Petrol Pump',
  addressLine3: 'Paldi Road, Paldi, Ahmedabad - 380007',
  addressLine4: 'Gujarat, India',
  /** Clinic pin (Mahavir Tower) — matches Google Maps embed on Contact page */
  mapsLatitude: 23.01239887918099,
  mapsLongitude: 72.56071947510372,
  /** Single line for navbar, footer, contact */
  officeHoursDisplay: 'Working Hours: 10 AM – 8 PM | Tuesday Off',
  /** Keep for filters/logic if needed */
  officeClosedDay: 'Tuesday',
  /** WhatsApp wa.me number — country code + number, no + */
  whatsappNumber: '919664044414',
  defaultWhatsAppMessage: 'Hello Hair4Life Team, I would like to schedule a consultation.',
  social: {
    facebook: 'https://www.facebook.com/hair4lifeclinic',
    instagram: 'https://www.instagram.com/hair4lifeclinic/',
    twitter: 'https://x.com/hair4lifeclinic',
  },
  /** Official YouTube channel (videos embedded on the site are from here). */
  youtubeChannelUrl: 'https://www.youtube.com/@hair4lifecompletehairsolut880',
} as const;
