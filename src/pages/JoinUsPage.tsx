import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../context/ContentContext';

const JoinUsPage = () => {
    const { language, getFontClass } = useLanguage();
    const { content } = useContent();
    const c = content.joinUsPage;

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        occupation: '',
        education: '',
        interestReason: ''
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const whatsappMessage = c.form.whatsappMessage[language]
            .replace('{name}', formData.name)
            .replace('{phone}', formData.phone)
            .replace('{email}', formData.email)
            .replace('{occupation}', formData.occupation)
            .replace('{education}', formData.education)
            .replace('{interestReason}', formData.interestReason);
            
        const whatsappUrl = `https://wa.me/917972461024?text=${encodeURIComponent(whatsappMessage)}`;
        
        setFormSubmitted(true);
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
        }, 500);
    };

    if (formSubmitted) {
        return (
            <div className="container mx-auto py-20 px-4 text-center fade-in">
                <h2 className={`text-3xl font-serif font-bold text-secondary mb-4 text-shadow-custom ${getFontClass()}`}>{c.form.success[language]}</h2>
            </div>
        )
    }

    return (
        <div className="pattern-bg py-20 fade-in">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className={`text-4xl md:text-5xl font-serif font-bold text-secondary text-shadow-custom ${getFontClass()}`}>{c.title[language]}</h1>
                    <p className={`mt-4 text-lg text-light-text max-w-2xl mx-auto ${getFontClass()}`}>{c.subtitle[language]}</p>
                </div>
                
                <div className="max-w-2xl mx-auto bg-surface p-8 rounded-lg shadow-lg border border-border-color">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className={`block text-light-text font-medium mb-1 ${getFontClass()}`}>{c.form.name[language]}</label>
                            <input type="text" name="name" onChange={handleInputChange} required className="input-themed" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div>
                                <label className={`block text-light-text font-medium mb-1 ${getFontClass()}`}>{c.form.phone[language]}</label>
                                <input type="tel" name="phone" onChange={handleInputChange} required className="input-themed" />
                            </div>
                             <div>
                                <label className={`block text-light-text font-medium mb-1 ${getFontClass()}`}>{c.form.email[language]}</label>
                                <input type="email" name="email" onChange={handleInputChange} required className="input-themed" />
                            </div>
                        </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div>
                                <label className={`block text-light-text font-medium mb-1 ${getFontClass()}`}>{c.form.occupation[language]}</label>
                                <input type="text" name="occupation" onChange={handleInputChange} required className="input-themed" />
                            </div>
                             <div>
                                <label className={`block text-light-text font-medium mb-1 ${getFontClass()}`}>{c.form.education[language]}</label>
                                <input type="text" name="education" onChange={handleInputChange} required className="input-themed" />
                            </div>
                        </div>
                         <div>
                            <label className={`block text-light-text font-medium mb-1 ${getFontClass()}`}>{c.form.interestReason[language]}</label>
                            <textarea name="interestReason" rows={4} onChange={handleInputChange} required className="input-themed"></textarea>
                        </div>
                         <div>
                            <button type="submit" className="w-full bg-primary text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-primary-hover transition-colors duration-300 btn-press">
                                {c.form.submit[language]}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JoinUsPage;
