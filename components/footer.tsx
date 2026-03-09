"use client"
import { useLang } from "@/lib/language-context"

export function Footer() {
  const { t } = useLang()
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">&copy; 2026 Daniela Ayelén Argüello. {t.footer.rights}</p>
        <p className="text-sm text-gray-500 mt-2">{t.footer.builtWith}</p>
      </div>
    </footer>
  )
}
