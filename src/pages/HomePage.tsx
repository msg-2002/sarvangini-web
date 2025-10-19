import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../context/ContentContext';

const ServiceIcon = ({ service }: { service: string }) => {
    // FIX: Replaced JSX.Element with React.ReactElement to resolve namespace issue.
    const icons: { [key: string]: React.ReactElement } = {
        marriage: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
        profiles: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><circle cx="8.5" cy="7" r="2.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M5.5 20v-4.5a3 3 0 013-3h1a3 3 0 013 3V20" /><circle cx="15.5" cy="7" r="2.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M12.5 20l3-7.5 3 7.5h-6z" /></svg>,
        socialWork: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.273-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.273.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
        about: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
        contact: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
        joinUs: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>,
        donate: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    };
    return icons[service] || icons['about'];
}

const HomePage = () => {
  const { language, getFontClass } = useLanguage();
  const { content } = useContent();
  const c = content.homepage;
  const founder = content.aboutUs.team.find(m => m.id === 'nandini-gadakh');
  
  const serviceLinks = [
    { key: 'marriage', to: '/marriage', label: content.nav.marriage[language] },
    { key: 'profiles', to: '/profiles', label: content.nav.profiles[language] },
    { key: 'socialWork', to: '/social-work', label: content.nav.socialWork[language] },
    { key: 'about', to: '/about-us', label: content.nav.about[language] },
    { key: 'contact', to: '/contact-us', label: content.nav.contact[language] },
    { key: 'joinUs', to: '/join-us', label: content.nav.joinUs[language] },
    { key: 'donate', to: '/donate', label: content.nav.donate[language] },
  ];
  
  const allActivities = content.socialWork.categories.flatMap(category =>
    category.images.map(image => ({
        ...image,
        categoryTitle: category.title
    }))
  ).filter(image => image.date);

  const sortedActivities = allActivities.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


  return (
    <div className="bg-background fade-in">
      {/* Main Banner */}
      <section 
        className="relative bg-cover bg-center text-white py-40 px-4 sm:px-6 lg:px-8" 
        style={{ backgroundImage: `url('${c.bannerImage}')` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto text-center">
          <h1 className={`text-5xl md:text-6xl font-serif font-bold mb-4 text-white text-shadow-custom ${getFontClass()}`}>{content.appName[language]}</h1>
          <p className={`text-xl md:text-2xl text-gray-200 text-shadow-custom ${getFontClass()}`}>{content.tagline[language]}</p>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={`text-xl text-light-text max-w-4xl mx-auto leading-relaxed ${getFontClass()}`}>
            {c.welcomeMessage[language]}
          </p>
        </div>
      </section>

      {/* Explore Services Section */}
      <section className="py-20 bg-background border-y border-border-color">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className={`text-4xl font-serif font-bold text-secondary text-center mb-12 text-shadow-custom ${getFontClass()}`}>{c.exploreServices[language]}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 text-center">
                  {serviceLinks.map(link => (
                      <Link to={link.to} key={link.key} className="card-lift bg-surface p-6 rounded-lg shadow-lg flex flex-col items-center justify-center border border-border-color group">
                          <ServiceIcon service={link.key} />
                          <h3 className={`mt-4 font-semibold text-text group-hover:text-secondary transition-colors duration-300 ${getFontClass()}`}>{link.label}</h3>
                      </Link>
                  ))}
              </div>
          </div>
      </section>
      
      {/* Founder Section */}
      {founder && (
        <section className="py-20 bg-surface">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-center text-center md:text-left">
                    <div className="w-full md:w-1/3 flex justify-center p-4">
                        <img src={founder.photo} alt={founder.name} className="w-64 h-64 rounded-full object-cover shadow-xl border-4 border-secondary"/>
                    </div>
                    <div className="w-full md:w-2/3 p-4">
                        <h3 className="text-2xl font-bold text-text mb-4">{founder.name}, <span className={`font-normal text-xl ${getFontClass()}`}>{founder.role[language]}</span></h3>
                        <p className={`text-lg text-light-text italic border-l-4 border-primary pl-6 ${getFontClass()}`}>"{founder.vision[language]}"</p>
                    </div>
                </div>
            </div>
        </section>
      )}

      {/* Recent Activities Section */}
      <section className="py-20 bg-background border-t border-border-color">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className={`text-4xl font-serif font-bold text-secondary text-center mb-12 text-shadow-custom ${getFontClass()}`}>{c.recentActivitiesTitle[language]}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {sortedActivities.slice(0, 2).map(activity => (
                      <div key={activity.id} className="card-lift bg-surface rounded-lg shadow-lg overflow-hidden border border-border-color">
                          <img src={activity.src} alt={activity.title ? activity.title[language] : activity.categoryTitle[language]} className="w-full h-56 object-cover"/>
                          <div className="p-6">
                              <p className="text-sm text-light-text mb-2">{new Date(activity.date).toLocaleDateString(language, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                              <h3 className={`text-xl font-bold text-text mb-2 ${getFontClass()}`}>{activity.title ? activity.title[language] : activity.categoryTitle[language]}</h3>
                              <p className={`text-light-text ${getFontClass()}`}>{activity.caption[language]}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
      
      {/* Philosophy Section */}
      <section className="py-20 bg-surface pattern-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl font-serif font-bold text-secondary mb-6 text-shadow-custom ${getFontClass()}`}>{c.philosophy.title[language]}</h2>
          <p className={`text-xl text-light-text max-w-4xl mx-auto leading-relaxed italic ${getFontClass()}`}>
            {c.philosophy.text[language]}
          </p>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
