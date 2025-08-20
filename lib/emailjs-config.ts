// EmailJS Configuration
export const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'default_service',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'default_template',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'default_public_key',
}

// Email template parameters that EmailJS will use
export interface EmailTemplateParams {
  from_name: string
  from_email: string
  subject: string
  message: string
  to_name: string
}