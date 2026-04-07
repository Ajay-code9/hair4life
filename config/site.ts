/**
 * Clinic contact and social links — update `social` URLs to your real profiles when ready.
 */
export const SITE = {
  clinicName: 'Hair4Life Clinic',
  /** Official logo — file in `public/images/logo.png` (not used as favicon). */
  logoUrl: '/images/logo.png',
  logoAlt: 'Hair4Life Clinic',
  email: 'info@hair4lifeclinic.com',
  phoneDisplay: '+91 90815 44414',
  /** Use with tel: — digits and leading + */
  phoneTel: '+919081544414',
  /** WhatsApp wa.me number — country code + number, no + */
  whatsappNumber: '919081544414',
  defaultWhatsAppMessage: 'Hi, I visited your website and would like to enquire about your services.',
  social: {
    facebook: 'https://www.facebook.com/hair4lifeclinic',
    instagram: 'https://www.instagram.com/hair4lifeclinic/',
    twitter: 'https://x.com/hair4lifeclinic',
  },
  /** Official YouTube channel (videos embedded on the site are from here). */
  youtubeChannelUrl: 'https://www.youtube.com/@hair4lifecompletehairsolut880',
} as const;
