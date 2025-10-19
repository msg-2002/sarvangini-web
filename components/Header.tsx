import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../context/ContentContext';
import { Language } from '../types';
import { useTheme } from '../context/ThemeContext';

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);


export const Header = () => {
  const { language, setLanguage, getFontClass } = useLanguage();
  const { content } = useContent();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const navLinks = [
    { to: '/', label: content.nav.home[language] },
    { to: '/marriage', label: content.nav.marriage[language] },
    { to: '/profiles', label: content.nav.profiles[language] },
    { to: '/social-work', label: content.nav.socialWork[language] },
    { to: '/about-us', label: content.nav.about[language] },
    { to: '/contact-us', label: content.nav.contact[language] },
    { to: '/join-us', label: content.nav.joinUs[language] },
    { to: '/donate', label: content.nav.donate[language] },
  ];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLangOpen(false);
  };

  const navLinkClasses = (isActive: boolean) =>
    `nav-link pb-1 hover:text-primary-hover transition-colors duration-200 font-medium border-b-2 ${getFontClass()} ${
      isActive
        ? 'text-secondary font-bold border-secondary nav-link-active'
        : 'text-text border-transparent'
    }`;

  const mobileNavLinkClasses = (isActive: boolean) =>
    `block px-3 py-2 rounded-md text-base font-medium hover:text-primary-hover hover:bg-background ${getFontClass()} ${
      isActive
        ? 'text-primary font-bold'
        : 'text-text'
    }`;

  const themeClass = content.header.headerTheme !== 'default' ? `header-theme-${content.header.headerTheme}` : '';

  return (
    <header className={`bg-surface shadow-lg sticky top-0 z-50 border-b border-border-color transition-colors duration-300 ${themeClass}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Name */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="app-name text-3xl font-serif font-bold text-secondary text-shadow-custom">
              {content.appName[language]}
            </NavLink>
            <p className={`tagline text-xs text-light-text -mt-1 ${getFontClass()}`}>{content.tagline[language]}</p>
          </div>

          <div className="flex items-center">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => navLinkClasses(isActive)}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Controls */}
            <div className="flex items-center gap-4 ml-4">
              {/* Theme Switcher */}
              <button
                  onClick={toggleTheme}
                  className="control-btn p-2 border border-border-color rounded-md text-text hover:bg-background transition"
                  aria-label={content.header.toggleTheme[language]}
              >
                  {theme === 'light' ? <MoonIcon /> : <SunIcon />}
              </button>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="control-btn flex items-center p-2 border border-border-color rounded-md text-sm font-medium text-text hover:bg-background transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.343 4.343a6 6 0 118.486 8.486A6 6 0 014.343 4.343z" clipRule="evenodd" /></svg>
                  {language.toUpperCase()}
                </button>
                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-surface ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <button onClick={() => handleLanguageChange(Language.EN)} className="block w-full text-left px-4 py-2 text-sm text-text hover:bg-background" role="menuitem">{content.header.languageNames.en[language]}</button>
                      <button onClick={() => handleLanguageChange(Language.MR)} className="block w-full text-left px-4 py-2 text-sm text-text hover:bg-background font-marathi" role="menuitem">{content.header.languageNames.mr[language]}</button>
                      <button onClick={() => handleLanguageChange(Language.HI)} className="block w-full text-left px-4 py-2 text-sm text-text hover:bg-background font-hindi" role="menuitem">{content.header.languageNames.hi[language]}</button>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="control-btn inline-flex items-center justify-center p-2 rounded-md text-light-text hover:text-text hover:bg-background focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary" aria-controls="mobile-menu" aria-expanded="false">
                  <span className="sr-only">{content.header.openMenu[language]}</span>
                  <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isMenuOpen && (
        <div className="md:hidden bg-surface border-t border-border-color" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => mobileNavLinkClasses(isActive)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
