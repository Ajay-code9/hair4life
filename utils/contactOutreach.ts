import { SITE } from '../config/site';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function openWhatsAppMessage(message: string): void {
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
}

const SERVICE_LABELS: Record<string, string> = {
  consultation: 'General Consultation',
  fue: 'Hair Transplant',
  laser: 'Laser Treatment',
  prp: 'PRP Therapy',
  skin: 'Skin Aesthetics',
  cosmetic: 'Hair Cosmetic/System',
};

export interface ConsultationFormPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
}

export function buildConsultationWhatsAppText(data: ConsultationFormPayload): string {
  return SITE.defaultWhatsAppMessage;
}

export function buildConsultationMailto(data: ConsultationFormPayload): string {
  const body = SITE.defaultWhatsAppMessage;
  const subject = 'Consultation request';
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function buildNewsletterWhatsAppText(email: string): string {
  return [
    `*Newsletter / updates — ${SITE.clinicName}*`,
    '',
    `Please add this email for clinic updates: ${email}`,
    '',
    '_Sent from the website_',
  ].join('\n');
}

export function buildNewsletterMailto(email: string): string {
  const subject = 'Newsletter signup';
  const body = `Please add my email to your updates list:\n\n${email}\n`;
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
