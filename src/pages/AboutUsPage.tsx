import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../context/ContentContext';

const AboutUsPage = () => {
  const { language, getFontClass } = useLanguage();
  const { content } = useContent();
  const c = content.aboutUs;

  return (
    <div className="pattern-bg py-20 fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-serif font-bold text-secondary text-shadow-custom ${getFontClass()}`}>{c.title[language]}</h1>
        </div>

        <div className="max-w-4xl mx-auto bg-surface p-10 rounded-lg shadow-xl space-y-8 border border-border-color">
          <div>
            <h2 className={`text-3xl font-serif font-bold text-text mb-4 text-shadow-custom ${getFontClass()}`}>{c.vision[language]}</h2>
            <p className={`text-lg text-light-text leading-relaxed ${getFontClass()}`}>
              {c.placeholders.vision[language]}
            </p>
          </div>
          <div>
            <h2 className={`text-3xl font-serif font-bold text-text mb-4 text-shadow-custom ${getFontClass()}`}>{c.mission[language]}</h2>
            <p className={`text-lg text-light-text leading-relaxed ${getFontClass()}`}>
              {c.placeholders.mission[language]}
            </p>
          </div>
           <div>
            <h2 className={`text-3xl font-serif font-bold text-text mb-4 text-shadow-custom ${getFontClass()}`}>{c.history[language]}</h2>
            <p className={`text-lg text-light-text leading-relaxed ${getFontClass()}`}>
                {c.placeholders.history[language]}
            </p>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="mt-24">
          <h2 className={`text-4xl font-serif font-bold text-secondary text-center mb-12 text-shadow-custom ${getFontClass()}`}>{c.teamTitle[language]}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {c.team.map((member) => (
              <div key={member.id} className="card-lift bg-surface text-center p-8 rounded-lg shadow-lg border border-border-color">
                <img src={member.photo} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary/50 object-cover"/>
                <h3 className="text-2xl font-bold text-text">{member.name}</h3>
                <p className={`text-primary font-semibold mb-3 ${getFontClass()}`}>{member.role[language]}</p>
                <p className={`text-light-text text-sm mb-4 ${getFontClass()}`}>{member.vision[language]}</p>
                {(member.contact || member.email) && (
                  <div className="border-t border-border-color pt-4 text-sm">
                    {member.contact && <p className="text-text"><strong>{c.teamDetails.phone[language]}:</strong> {member.contact}</p>}
                    {member.email && <p className="text-text"><strong>{c.teamDetails.email[language]}:</strong> {member.email}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
