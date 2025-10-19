import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../context/ContentContext';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './IconComponents';
import { Quote, SiteContent } from '../types';

const YoutubeIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" clipRule="evenodd"></path>
    </svg>
);


export const Footer = () => {
  const { language, getFontClass } = useLanguage();
  const { content } = useContent();
  const location = useLocation();
  const fontClass = getFontClass();
  const c = content.footer;
  const navContent = content.nav;

  const quickLinks = [
    { to: '/', label: navContent.home[language] },
    { to: '/about-us', label: navContent.about[language] },
    { to: '/marriage', label: navContent.marriage[language] },
    { to: '/social-work', label: navContent.socialWork[language] },
    { to: '/join-us', label: navContent.joinUs[language] },
    { to: '/donate', label: navContent.donate[language] },
    { to: '/contact-us', label: navContent.contact[language] },
  ];
  const midIndex = Math.ceil(quickLinks.length / 2);
  const quickLinksCol1 = quickLinks.slice(0, midIndex);
  const quickLinksCol2 = quickLinks.slice(midIndex);

  const socialLinks = [
      { href: content.footer.socialLinks.facebook, icon: <FacebookIcon/> },
      { href: content.footer.socialLinks.instagram, icon: <InstagramIcon/> },
      { href: content.footer.socialLinks.twitter, icon: <TwitterIcon/> },
      { href: content.footer.socialLinks.youtube, icon: <YoutubeIcon/> },
  ];
  
  const getPageQuote = (): Quote => {
    const pathMap: { [key: string]: keyof SiteContent } = {
        '/about-us': 'aboutUs',
        '/marriage': 'marriageSection',
        '/profiles': 'profilesPage',
        '/social-work': 'socialWork',
        '/contact-us': 'contactUs',
        '/donate': 'donatePage',
        '/join-us': 'joinUsPage',
    };
    const pageKey = pathMap[location.pathname];
    const pageContent = content[pageKey] as any;
    return pageContent?.pageQuote || c.quote1;
  }

  const activeQuote = getPageQuote();

  return (
    <footer className="bg-surface text-text border-t border-border-color">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-1">
            <h3 className={`text-2xl font-bold mb-4 text-secondary text-shadow-custom ${fontClass}`}>{content.appName[language]}</h3>
            <p className={`text-light-text ${fontClass}`}>{content.tagline[language]}</p>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className={`text-xl font-semibold mb-4 text-shadow-custom ${fontClass}`}>{c.quickLinks[language]}</h3>
            <div className="grid grid-cols-2 gap-8">
                <ul className="space-y-2">
                  {quickLinksCol1.map((link) => (
                    <li key={link.to}>
                      <NavLink to={link.to} className={`text-light-text hover:text-accent transition-colors duration-200 ${fontClass}`}>
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {quickLinksCol2.map((link) => (
                    <li key={link.to}>
                      <NavLink to={link.to} className={`text-light-text hover:text-accent transition-colors duration-200 ${fontClass}`}>
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
            </div>
          </div>


          {/* Follow Us */}
          <div className="lg:col-span-1">
            <h3 className={`text-xl font-semibold mb-4 text-shadow-custom ${fontClass}`}>{c.followUs[language]}</h3>
            <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                    social.href && social.href !== '#' && (
                         <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-light-text hover:text-primary-hover transition-colors duration-200">{social.icon}</a>
                    )
                ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-color text-center space-y-8">
            <blockquote className={`text-light-text italic text-lg max-w-3xl mx-auto ${fontClass}`}>
                "{activeQuote.text[language]}"
                <cite className={`block not-italic mt-2 text-text font-semibold ${fontClass}`}>{activeQuote.author[language]}</cite>
            </blockquote>
             <blockquote className={`text-light-text italic text-lg max-w-3xl mx-auto ${fontClass}`}>
                "{c.quote2.text[language]}"
                <cite className={`block not-italic mt-2 text-text font-semibold ${fontClass}`}>{c.quote2.author[language]}</cite>
            </blockquote>
        </div>

        <div className="mt-8 pt-8 border-t border-border-color text-center">
          <p className={`text-light-text ${fontClass}`}>{c.copyright[language]}</p>
        </div>
      </div>
    </footer>
  );
};
