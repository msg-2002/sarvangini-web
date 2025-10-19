import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../context/ContentContext';
import { MarriageProfile } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

function calculateAge(dob: string) {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const ProfileShowcase = () => {
    const { content } = useContent();
    const { language, getFontClass } = useLanguage();
    const approvedProfiles = content.marriageProfiles.filter(p => p.status === 'approved');
    
    return (
        <div className="bg-surface p-8 rounded-lg shadow-lg h-full flex flex-col border border-border-color">
            <h3 className={`text-2xl font-serif font-bold text-secondary mb-4 text-shadow-custom ${getFontClass()}`}>{content.profilesPage.title[language]}</h3>
            <div className="relative flex-grow min-h-[300px]">
                <div className="absolute inset-0 overflow-y-auto no-scrollbar space-y-4">
                    {approvedProfiles.slice(0, 5).map(profile => (
                        <div key={profile.id} className="flex items-center bg-background p-3 rounded-lg">
                            <img src={profile.photo} alt={profile.name} className="w-16 h-16 rounded-full object-cover mr-4"/>
                            <div>
                                <p className="font-bold text-text">{profile.name}</p>
                                <p className={`text-sm text-light-text ${getFontClass()}`}>{calculateAge(profile.dob)} years, {profile.address}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Link to="/profiles" className={`mt-6 text-center text-accent hover:text-accent/80 font-semibold transition-colors duration-300 ${getFontClass()}`}>
                {content.nav.profiles[language]} &rarr;
            </Link>
        </div>
    )
}


const MarriageSection = () => {
  const { language, getFontClass } = useLanguage();
  const { content, setContent } = useContent();
  const c = content.marriageSection;

  const [formData, setFormData] = useState({
    name: '', gender: 'Male' as 'Male' | 'Female' | 'Other', photo: '', dob: '', address: '', phone: '', alternatePhone: '', email: '',
    fatherName: '', motherName: '', sisters: '', brothers: '',
    job: '', salary: '', education: '',
    gotra: '', caste: '', religion: '',
    expectations: '', consent: false,
  });
  
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    if (target instanceof HTMLInputElement && target.type === 'checkbox') {
        setFormData(prev => ({ ...prev, [target.name]: target.checked }));
    } else {
        setFormData(prev => ({ ...prev, [target.name]: target.value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, photo: reader.result as string }));
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
        alert("Please agree to the terms and conditions.");
        return;
    }
    const newProfile: MarriageProfile = {
        ...formData,
        id: uuidv4(),
        status: 'pending',
    };
    
    // 1. Update the state for admin panel
    setContent({
        ...content,
        marriageProfiles: [...content.marriageProfiles, newProfile]
    });
    
    // 2. Prepare and trigger WhatsApp notification
    const whatsappMessage = c.form.formWhatsapp[language]
        .replace('{name}', formData.name)
        .replace('{dob}', formData.dob)
        .replace('{phone}', formData.phone)
        .replace('{alternatePhone}', formData.alternatePhone || 'N/A')
        .replace('{job}', formData.job)
        .replace('{education}', formData.education);

    const whatsappUrl = `https://wa.me/917972461024?text=${encodeURIComponent(whatsappMessage)}`;
    
    // 3. Show success message and then redirect
    setFormSubmitted(true);
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
    }, 500);
  };
  
  if (formSubmitted) {
    return (
        <div className="container mx-auto py-20 px-4 text-center fade-in">
            <h2 className={`text-3xl font-serif font-bold text-secondary mb-4 text-shadow-custom ${getFontClass()}`}>{c.form.formSuccess[language]}</h2>
            <p className={`text-lg text-light-text ${getFontClass()}`}>{c.form.formSuccessSub[language]}</p>
        </div>
    )
  }

  return (
    <div className="pattern-bg py-20 fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-serif font-bold text-secondary text-shadow-custom ${getFontClass()}`}>{c.title[language]}</h1>
          <p className={`mt-4 text-lg text-light-text max-w-2xl mx-auto ${getFontClass()}`}>{c.subheading[language]}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-3 bg-surface p-8 rounded-lg shadow-lg border border-border-color">
            <h2 className={`text-3xl font-serif font-bold text-secondary mb-6 border-b border-border-color pb-4 text-shadow-custom ${getFontClass()}`}>{c.form.title[language]}</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Details */}
              <fieldset className="space-y-4">
                <legend className={`text-xl font-semibold text-text mb-4 ${getFontClass()}`}>{c.form.personalDetails[language]}</legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className={`block text-light-text font-medium mb-1 ${getFontClass()}`}>{c.form.name[language]}</label>
                        <input type="text" name="name" onChange={handleInputChange} required className="input-themed"/>
                    </div>
                     <div>
                        <label className={`block text-light-text font-medium mb-1 ${getFontClass()}`}>{c.form.gender[language]}</label>
                        <select name="gender" onChange={handleInputChange} className="input-themed">
                            <option value="Male">{c.form.male[language]}</option>
                            <option value="Female">{c.form.female[language]}</option>
                            <option value="Other">{c.form.other[language]}</option>
                        </select>
                    </div>
                    <div>
                        <label className={`block text-light-text font-medium mb-1 ${getFontClass()}`}>{c.form.dob[language]}</label>
                        <input type="date" name="dob" onChange={handleInputChange} required className="input-themed"/>
                    </div>
                     <div>
                        <label className={`block text-light-text font-medium mb-1 ${getFontClass()}`}>{c.form.photo[language]}</label>
                        <input type="file" name="photo" onChange={handleFileChange} required accept="image/*" className="w-full text-sm text-light-text file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/20 file:text-primary hover:file:bg-primary/30"/>
                        {photoPreview && (
                            <div className="mt-4">
                                <img src={photoPreview} alt="Profile preview" className="w-32 h-32 rounded-lg object-cover border-2 border-border-color"/>
                            </div>
                        )}
                    </div>
                     <div className="md:col-span-2">
                        <label className={`block text-light-text font-medium mb-1 ${getFontClass()}`}>{c.form.address[language]}</label>
                        <input type="text" name="address" onChange={handleInputChange} required className="input-themed"/>
                    </div>
                    <div>
                        <label className={`block text-light-text font-medium mb-1 ${getFontClass()}`}>{c.form.phone[language]}</label>
                        <input type="tel" name="phone" onChange={handleInputChange} required className="input-themed"/>
                    </div>
                     <div>
                        <label className={`block text-light-text font-medium mb-1 ${getFontClass()}`}>{c.form.alternatePhone[language]}</label>
                        <input type="tel" name="alternatePhone" onChange={handleInputChange} className="input-themed"/>
                    </div>
                    <div className="md:col-span-2">
                        <label className={`block text-light-text font-medium mb-1 ${getFontClass()}`}>{c.form.email[language]}</label>
                        <input type="email" name="email" onChange={handleInputChange} required className="input-themed"/>
                    </div>
                </div>
              </fieldset>

               {/* Family Details */}
              <fieldset className="space-y-4 pt-4 border-t border-border-color">
                 <legend className={`text-xl font-semibold text-text mb-4 ${getFontClass()}`}>{c.form.familyDetails[language]}</legend>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div><label className={`block text-light-text font-medium mb-1 ${getFontClass()}`}>{c.form.fatherName[language]}</label><input type="text" name="fatherName" onChange={handleInputChange} required className="input-themed"/></div>
                    <div><label className={`block text-light-text font-medium mb-1 ${getFontClass()}`}>{c.form.motherName[language]}</label><input type="text" name="motherName" onChange={handleInputChange} required className="input-themed"/></div>
                    <div><label className={`block text-light-text font-medium mb-1 ${getFontClass()}`}>{c.form.sisters[language]}</label><input type="text" name="sisters" onChange={handleInputChange} className="input-themed"/></div>
                    <div><label className={`block text-light-text font-medium mb-1 ${getFontClass()}`}>{c.form.brothers[language]}</label><input type="text" name="brothers" onChange={handleInputChange} className="input-themed"/></div>
                 </div>
              </fieldset>

                {/* Professional Details */}
                <fieldset className="space-y-4 pt-4 border-t border-border-color">
                    <legend className={`text-xl font-semibold text-text mb-4 ${getFontClass()}`}>{c.form.professionalDetails[language]}</legend>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div><label className={`block text-light-text font-medium mb-1 ${getFontClass()}`}>{c.form.education[language]}</label><input type="text" name="education" onChange={handleInputChange} required className="input-themed"/></div>
                        <div><label className={`block text-light-text font-medium mb-1 ${getFontClass()}`}>{c.form.job[language]}</label><input type="text" name="job" onChange={handleInputChange} required className="input-themed"/></div>
                        <div><label className={`block text-light-text font-medium mb-1 ${getFontClass()}`}>{c.form.salary[language]}</label><input type="text" name="salary" onChange={handleInputChange} required className="input-themed"/></div>
                    </div>
                </fieldset>

                {/* Cultural Details */}
                <fieldset className="space-y-4 pt-4 border-t border-border-color">
                    <legend className={`text-xl font-semibold text-text mb-4 ${getFontClass()}`}>{c.form.culturalDetails[language]}</legend>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div><label className={`block text-light-text font-medium mb-1 ${getFontClass()}`}>{c.form.religion[language]}</label><input type="text" name="religion" onChange={handleInputChange} required className="input-themed"/></div>
                        <div><label className={`block text-light-text font-medium mb-1 ${getFontClass()}`}>{c.form.caste[language]}</label><input type="text" name="caste" onChange={handleInputChange} required className="input-themed"/></div>
                        <div><label className={`block text-light-text font-medium mb-1 ${getFontClass()}`}>{c.form.gotra[language]}</label><input type="text" name="gotra" onChange={handleInputChange} className="input-themed"/></div>
                    </div>
                </fieldset>
              
                {/* Expectations */}
                <fieldset className="pt-4 border-t border-border-color">
                    <label className={`text-xl font-semibold text-text mb-4 block ${getFontClass()}`}>{c.form.expectations[language]}</label>
                    <textarea name="expectations" rows={4} onChange={handleInputChange} className="input-themed"></textarea>
                </fieldset>
              
               {/* Consent & Submit */}
                <div className="pt-4 border-t border-border-color">
                    <div className="flex items-center mb-6">
                        <input id="consent" name="consent" type="checkbox" onChange={handleInputChange} className="h-4 w-4 text-primary focus:ring-primary bg-surface border-border-color rounded"/>
                        <label htmlFor="consent" className={`ml-2 block text-sm text-text ${getFontClass()}`}>{c.form.consent[language]}</label>
                    </div>
                    <button type="submit" className="w-full bg-primary text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-primary-hover transition-colors duration-300 btn-press">
                        {c.form.submit[language]}
                    </button>
                </div>

            </form>
          </div>
          {/* Side Info Section */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 space-y-8">
                <ProfileShowcase />
                <div className="bg-surface p-8 rounded-lg shadow-lg border border-border-color">
                    <h3 className={`text-2xl font-serif font-bold text-secondary mb-4 text-shadow-custom ${getFontClass()}`}>{c.form.paymentTitle[language]}</h3>
                    <p className={`text-light-text mb-4 ${getFontClass()}`}>{c.form.paymentDesc[language]}</p>
                    <div className="bg-background p-4 rounded-md">
                        <p className="font-semibold text-text">UPI ID: <span className="font-normal">{content.donatePage.upiId}</span></p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarriageSection;
