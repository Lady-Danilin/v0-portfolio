"use client"

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Mail, Linkedin, Instagram, Github, Heart } from 'lucide-react'

export function Footer() {
  const t = useTranslations('footer')
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/daniela-ayel%C3%A9n-arg%C3%BCello-61b33aa0/',
      icon: Linkedin,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/danil.arguello/',
      icon: Instagram,
    },
    {
      name: 'Email',
      href: 'mailto:arguellodanielaayelen@gmail.com',
      icon: Mail,
    },
  ]
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0066CC] to-[#FF6600] bg-clip-text text-transparent mb-2">
              Daniela Ayelén Argüello
            </h3>
            <p className="text-gray-400 text-sm">
              Digital Communication Strategist
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {['about', 'experience', 'projects', 'contact'].map((link) => (
                <Link
                  key={link}
                  href={`#${link}`}
                  className="text-gray-400 hover:text-[#0066CC] transition-colors text-sm capitalize"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-[#0066CC] to-[#FF6600] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center space-y-2">
            <p className="text-gray-400">
              &copy; {currentYear} Daniela Ayelén Argüello. {t('rights')}
            </p>
            <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
              {t('madeWith')} <Heart className="w-3 h-3 text-red-500" /> {t('by')} Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
