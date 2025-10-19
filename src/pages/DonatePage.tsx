import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../context/ContentContext';

const DonatePage = () => {
  const { language, getFontClass } = useLanguage();
  const { content } = useContent();
  const c = content.donatePage;

  const handleInquiry = () => {
    const message = c.inquiryMessage[language];
    const whatsappUrl = `https://wa.me/917972461024?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pattern-bg py-20 fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-serif font-bold text-secondary text-shadow-custom ${getFontClass()}`}>{c.title[language]}</h1>
          <p className={`mt-4 text-lg text-light-text max-w-2xl mx-auto ${getFontClass()}`}>{c.supportCause[language]}</p>
        </div>

        <div className="max-w-4xl mx-auto bg-surface rounded-lg shadow-xl p-12 border border-border-color">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* QR Code */}
            <div className="text-center">
              <h2 className={`text-2xl font-serif font-semibold text-text mb-4 text-shadow-custom ${getFontClass()}`}>{c.scanToPay[language]}</h2>
              <div className="flex justify-center">
                <img src={c.qrCode} alt="Donation UPI QR Code" className="w-64 h-64 rounded-lg shadow-md border-4 border-primary/20 bg-white p-2"/>
              </div>
            </div>

            {/* Bank Details */}
            <div>
              <h2 className={`text-2xl font-serif font-semibold text-text mb-4 text-shadow-custom ${getFontClass()}`}>{c.directTransfer[language]}</h2>
              <div className="space-y-4 text-lg">
                <div className="bg-background p-4 rounded-md">
                  <p className={`text-light-text text-sm font-semibold ${getFontClass()}`}>UPI ID</p>
                  <p className="text-secondary font-mono">{c.upiId}</p>
                </div>
                <div className="bg-background p-4 rounded-md">
                   <p className={`text-light-text text-sm font-semibold ${getFontClass()}`}>Account Number</p>
                  <p className="text-secondary font-mono">{c.bankAccount}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border-color text-center">
            <p className={`text-lg text-light-text mb-4 ${getFontClass()}`}>{c.inquiryHelpText[language]}</p>
            <button
                onClick={handleInquiry}
                className="bg-accent text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-accent/90 transition-colors duration-300 btn-press"
            >
                {c.inquiryButton[language]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
