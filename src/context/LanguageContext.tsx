
import React, { createContext, useState, useContext, PropsWithChildren } from 'react';
// FIX: Corrected import path for types.
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  getFontClass: () => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// FIX: Used PropsWithChildren for better type safety and to resolve type inference issues.
export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<Language>(Language.EN);

  const getFontClass = () => {
    switch (language) {
      case Language.MR:
        return 'font-marathi';
      case Language.HI:
        return 'font-hindi';
      default:
        return 'font-sans';
    }
  };

  const value = { language, setLanguage, getFontClass };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
