"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import emailjs from "@emailjs/browser"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { useTranslations } from 'next-intl'
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact"
import { emailConfig, type EmailTemplateParams } from "@/lib/emailjs-config"
import { toast } from "sonner"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const t = useTranslations('contact')
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      // Initialize EmailJS (only needs to be done once)
      emailjs.init(emailConfig.publicKey)

      // Prepare email parameters
      const templateParams: EmailTemplateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: 'Daniela Ayelén Argüello',
      }

      // Send email using EmailJS
      const response = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      )

      if (response.status === 200) {
        toast.success(t('form.success'), {
          description: "I'll get back to you as soon as possible!",
          icon: <CheckCircle className="w-4 h-4" />,
        })
        reset()
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('Email error:', error)
      toast.error(t('form.error'), {
        description: "Please try again later or contact me directly via email.",
        icon: <AlertCircle className="w-4 h-4" />,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="shadow-lg">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {t('form.name')}
              </label>
              <Input
                id="name"
                type="text"
                {...register("name")}
                placeholder={t('form.namePlaceholder')}
                className="transition-all duration-300 focus:ring-2 focus:ring-[#0066CC]"
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {t('form.email')}
              </label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder={t('form.emailPlaceholder')}
                className="transition-all duration-300 focus:ring-2 focus:ring-[#0066CC]"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              {t('form.subject')}
            </label>
            <Input
              id="subject"
              type="text"
              {...register("subject")}
              placeholder={t('form.subjectPlaceholder')}
              className="transition-all duration-300 focus:ring-2 focus:ring-[#0066CC]"
              disabled={isSubmitting}
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              {t('form.message')}
            </label>
            <Textarea
              id="message"
              {...register("message")}
              rows={6}
              placeholder={t('form.messagePlaceholder')}
              className="transition-all duration-300 focus:ring-2 focus:ring-[#0066CC] resize-none"
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#0066CC] to-[#FF6600] hover:from-[#0052A3] hover:to-[#E55A00] text-white font-semibold py-3 transition-all duration-300 hover:shadow-lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t('form.sending')}
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                {t('form.send')}
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}