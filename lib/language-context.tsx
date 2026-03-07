"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { type Lang, translations } from "./translations"

interface LanguageContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: typeof translations["en"]
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: translations["en"],
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null
    if (stored === "en" || stored === "es") setLangState(stored)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem("lang", l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
