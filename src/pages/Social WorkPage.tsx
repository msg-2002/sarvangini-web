import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../context/ContentContext';
import { Link } from 'react-router-dom';

const SocialWorkPage = () => {
  const { language, getFontClass } = useLanguage();
  const { content } = useContent();
  const c = content.socialWork;
  const donateContent = content.donatePage;

  return (
    <div className="pattern-bg py-20 fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-serif font-bold text-secondary text-shadow-custom ${getFontClass()}`}>{c.title[language]}</h1>
        </div>

        {/* Gallery Section */}
        <div>
          <h2 className={`text-3xl font-serif font-bold text-center text-text mb-12 text-shadow-custom ${getFontClass()}`}>{c.galleryTitle[language]}</h2>
          
          <div className="space-y-16">
            {c.categories.map((category) => (
              <div key={category.id}>
                <h3 className={`text-2xl font-semibold text-secondary mb-6 border-b-2 border-primary pb-2 ${getFontClass()}`}>{category.title[language]}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.images.map((image) => (
                    <div key={image.id} className="card-lift bg-surface rounded-lg shadow-lg overflow-hidden border border-border-color">
                      <img src={image.src} alt={image.caption[language]} className="w-full h-64 object-cover"/>
                      <div className="p-4">
                        <p className={`text-light-text text-sm ${getFontClass()}`}>{image.caption[language]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Donate Section */}
        <div className="mt-24 bg-surface rounded-lg shadow-xl p-12 text-center border border-border-color">
            <h2 className={`text-3xl font-serif font-bold text-secondary mb-4 text-shadow-custom ${getFontClass()}`}>{c.donateTitle[language]}</h2>
            <p className={`text-lg text-light-text max-w-2xl mx-auto mb-8 ${getFontClass()}`}>{c.donateDesc[language]}</p>
             <Link to="/donate" className="bg-primary text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-primary-hover transition-colors duration-300 btn-press">
                {c.donateButton[language]}
            </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialWorkPage;
