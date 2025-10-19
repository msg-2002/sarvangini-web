import React, { useState, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import { SiteContent, Language, LocalizedString, SocialWorkCategory, TeamMember, MarriageProfile, HeaderTheme } from '../types';
import { DEFAULT_CONTENT } from '../constants';
import { v4 as uuidv4 } from 'uuid';
import { useLanguage } from '../context/LanguageContext';


// Accordion Component
const Accordion = ({ title, children }: PropsWithChildren<{title: string}>) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-border-color rounded-md mb-2">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-surface p-4 text-left font-semibold flex justify-between items-center hover:bg-background"
            >
                {title}
                <svg className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && <div className="p-4 bg-background">{children}</div>}
        </div>
    );
};


const AdminDashboard = () => {
  const { content, setContent } = useContent();
  const { language } = useLanguage();
  const [formData, setFormData] = useState<SiteContent>(content);
  const navigate = useNavigate();
  const c = content.adminDashboard.confirmations;

  const handleLogout = () => {
    if (window.confirm(c.logout[language])) {
        sessionStorage.removeItem('sarvangini-admin-auth');
        navigate('/admin-login');
    }
  };

  const handleResetContent = () => {
    if (window.confirm(c.resetContent[language])) {
        setContent(DEFAULT_CONTENT);
        setFormData(DEFAULT_CONTENT);
        alert('Content has been reset to default.');
    }
  }

  const handleInputChange = (path: string, value: any) => {
    setFormData(prev => {
        const keys = path.split('.');
        let newFormData = JSON.parse(JSON.stringify(prev)); // Deep copy
        let current = newFormData as any;
        for (let i = 0; i < keys.length - 1; i++) {
            current = current[keys[i]];
        }
        current[keys[keys.length - 1]] = value;
        return newFormData;
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContent(formData);
    alert('Content updated successfully!');
  };

  const fileToBase64 = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = error => reject(error);
      });
  }

  const handleImageUpload = async (path: string, file: File) => {
      const base64 = await fileToBase64(file);
      handleInputChange(path, base64);
  }
  
  // COMPONENTS FOR FORM
  const LocalizedInput = ({ path, label }: { path: string, label: string }) => {
    const keys = path.split('.');
    let value: LocalizedString = formData as any;
    try {
        keys.forEach(key => value = value?.[key]);
        if (!value) return <div className="text-red-500">Error: Invalid path "{path}"</div>;
    } catch(e) { return <div className="text-red-500">Error: Invalid path "{path}"</div>; }

    return (
        <div className="mb-4">
            <label className="block text-light-text text-sm font-bold mb-2">{label}</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input className="input-themed" value={value[Language.EN]} onChange={e => handleInputChange(`${path}.${Language.EN}`, e.target.value)} placeholder="English"/>
                <input className="input-themed font-marathi" value={value[Language.MR]} onChange={e => handleInputChange(`${path}.${Language.MR}`, e.target.value)} placeholder="Marathi"/>
                <input className="input-themed font-hindi" value={value[Language.HI]} onChange={e => handleInputChange(`${path}.${Language.HI}`, e.target.value)} placeholder="Hindi"/>
            </div>
        </div>
    );
  };
  
  const TextInput = ({ path, label }: { path: string, label: string }) => {
    const keys = path.split('.');
    let value: string = formData as any;
    try {
        keys.forEach(key => value = value?.[key]);
         if (value === undefined || value === null) value = "";
    } catch(e) { return <div className="text-red-500">Error: Invalid path "{path}"</div>; }
    
    return (
        <div className="mb-4">
            <label className="block text-light-text text-sm font-bold mb-2">{label}</label>
            <input className="input-themed" value={value} onChange={e => handleInputChange(path, e.target.value)} placeholder={label}/>
        </div>
    )
  }
  
  const QuoteInput = ({ path, label }: { path: string, label: string }) => {
    return (
        <div className="border border-border-color p-3 my-4 rounded-md">
            <h4 className="font-semibold text-text mb-2">{label}</h4>
            <LocalizedInput path={`${path}.text`} label="Quote Text" />
            <LocalizedInput path={`${path}.author`} label="Quote Author" />
        </div>
    );
  };

  // Generic list management functions
    const addItem = (path: string, newItem: object) => {
        const keys = path.split('.');
        let list = formData as any;
        keys.forEach(key => list = list?.[key]);
        handleInputChange(path, [...list, newItem]);
    }

    const removeItem = (path: string, index: number) => {
        const keys = path.split('.');
        let list = formData as any;
        keys.forEach(key => list = list?.[key]);
        handleInputChange(path, list.filter((_:any, i:number) => i !== index));
    }

  // Marriage Profile Management
  const handleProfileStatusChange = (profileId: string, status: 'approved' | 'pending') => {
      if (window.confirm(c.changeProfileStatus[language])) {
        const updatedProfiles = formData.marriageProfiles.map(p => p.id === profileId ? {...p, status} : p);
        handleInputChange('marriageProfiles', updatedProfiles);
      }
  }

  const deleteProfile = (profileId: string) => {
      if (window.confirm(c.deleteProfile[language])) {
          const updatedProfiles = formData.marriageProfiles.filter(p => p.id !== profileId);
          handleInputChange('marriageProfiles', updatedProfiles);
      }
  }


  const pendingProfiles = formData.marriageProfiles.filter(p => p.status === 'pending');
  const approvedProfiles = formData.marriageProfiles.filter(p => p.status === 'approved');

  return (
    <div className="container mx-auto p-4 md:p-8 fade-in">
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-text">Admin Dashboard</h1>
        <div>
            <button onClick={handleResetContent} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2">Reset to Default</button>
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Logout</button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-surface shadow-md rounded px-4 md:px-8 pt-6 pb-8 mb-4 border border-border-color">
        
        <Accordion title="Marriage Profile Management">
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-text">Pending Profiles ({pendingProfiles.length})</h3>
                {pendingProfiles.length > 0 ? (
                    pendingProfiles.map(profile => (
                        <div key={profile.id} className="border border-border-color p-4 rounded-md flex justify-between items-center">
                            <div>
                                <p className="font-bold text-text">{profile.name}, {profile.gender}</p>
                                <p className="text-sm text-light-text">{profile.address}</p>
                            </div>
                            <div>
                                <button type="button" onClick={() => handleProfileStatusChange(profile.id, 'approved')} className="bg-green-500 text-white px-3 py-1 rounded-md mr-2">Approve</button>
                                <button type="button" onClick={() => deleteProfile(profile.id)} className="bg-red-500 text-white px-3 py-1 rounded-md">Delete</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-light-text italic">{content.adminDashboard.noPendingProfiles[language]}</p>
                )}
                 <h3 className="text-lg font-semibold mt-6 text-text">Approved Profiles ({approvedProfiles.length})</h3>
                 {approvedProfiles.length > 0 ? (
                    approvedProfiles.map(profile => (
                        <div key={profile.id} className="border border-border-color p-4 rounded-md flex justify-between items-center">
                            <div>
                                <p className="font-bold text-text">{profile.name}, {profile.gender}</p>
                                <p className="text-sm text-light-text">{profile.address}</p>
                            </div>
                            <div>
                                <button type="button" onClick={() => handleProfileStatusChange(profile.id, 'pending')} className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2">Make Pending</button>
                                <button type="button" onClick={() => deleteProfile(profile.id)} className="bg-red-500 text-white px-3 py-1 rounded-md">Delete</button>
                            </div>
                        </div>
                    ))
                 ) : (
                    <p className="text-light-text italic">{content.adminDashboard.noApprovedProfiles[language]}</p>
                 )}
            </div>
        </Accordion>
        
        <Accordion title="General Settings">
            <LocalizedInput path="appName" label="Website Name" />
            <LocalizedInput path="tagline" label="Tagline" />
            <TextInput path="footer.socialLinks.facebook" label="Facebook URL" />
            <TextInput path="footer.socialLinks.instagram" label="Instagram URL" />
            <TextInput path="footer.socialLinks.twitter" label="Twitter/X URL" />
            <TextInput path="footer.socialLinks.youtube" label="YouTube URL" />
            <LocalizedInput path="footer.copyright" label="Footer Copyright" />
        </Accordion>

        <Accordion title="Theme & Appearance">
            <div>
                <label className="block text-light-text text-sm font-bold mb-2">Header Festival Theme</label>
                <select
                    className="input-themed"
                    value={formData.header.headerTheme}
                    onChange={e => handleInputChange('header.headerTheme', e.target.value as HeaderTheme)}
                >
                    <option value="default">Default</option>
                    <option value="diwali">Diwali</option>
                    <option value="holi">Holi</option>
                    <option value="eid">Eid</option>
                </select>
            </div>
        </Accordion>
        
        <Accordion title="Navigation Links">
            <LocalizedInput path="nav.home" label="Home" />
            <LocalizedInput path="nav.marriage" label="Marriage Bureau" />
            <LocalizedInput path="nav.profiles" label="Profiles" />
            <LocalizedInput path="nav.socialWork" label="Social Work" />
            <LocalizedInput path="nav.about" label="About Us" />
            <LocalizedInput path="nav.contact" label="Contact Us" />
            <LocalizedInput path="nav.joinUs" label="Join Us" />
            <LocalizedInput path="nav.donate" label="Donate" />
        </Accordion>

        <Accordion title="Inspirational Quotes">
             <QuoteInput path="footer.quote1" label="Footer Quote 1" />
             <QuoteInput path="footer.quote2" label="Footer Quote 2" />
             <hr className="my-6"/>
             <h3 className="text-lg font-semibold mb-2 text-text">Page-Specific Quotes</h3>
             <QuoteInput path="marriageSection.pageQuote" label="Marriage Bureau Page Quote" />
             <QuoteInput path="profilesPage.pageQuote" label="Profiles Page Quote" />
             <QuoteInput path="socialWork.pageQuote" label="Social Work Page Quote" />
             <QuoteInput path="aboutUs.pageQuote" label="About Us Page Quote" />
             <QuoteInput path="contactUs.pageQuote" label="Contact Page Quote" />
             <QuoteInput path="donatePage.pageQuote" label="Donate Page Quote" />
             <QuoteInput path="joinUsPage.pageQuote" label="Join Us Page Quote" />
        </Accordion>

        <Accordion title="Homepage Content">
            <div className="mb-4">
                <label className="block text-light-text text-sm font-bold mb-2">Homepage Banner Image</label>
                <img src={formData.homepage.bannerImage} alt="banner" className="w-64 h-auto object-cover rounded-md mb-2"/>
                <input type="file" accept="image/*" onChange={e => e.target.files && handleImageUpload('homepage.bannerImage', e.target.files[0])} />
            </div>
            <LocalizedInput path="homepage.welcomeMessage" label="Welcome Message" />
            <LocalizedInput path="homepage.exploreServices" label="'Explore Services' Title" />
            <LocalizedInput path="homepage.recentActivitiesTitle" label="'Recent Activities' Title" />
            <LocalizedInput path="homepage.philosophy.title" label="Philosophy Section Title" />
            <LocalizedInput path="homepage.philosophy.text" label="Philosophy Section Text" />
        </Accordion>

         <Accordion title="Social Work Page">
            <LocalizedInput path="socialWork.title" label="Page Title" />
            <LocalizedInput path="socialWork.galleryTitle" label="Gallery Title" />
            <LocalizedInput path="socialWork.donateTitle" label="Donate Section Title" />
            <LocalizedInput path="socialWork.donateDesc" label="Donate Section Description" />
            <hr className="my-4"/>
            {formData.socialWork.categories.map((category, catIndex) => (
                <div key={category.id} className="border border-border-color p-4 rounded-md mb-4 relative">
                    <button type="button" onClick={() => removeItem('socialWork.categories', catIndex)} className="absolute top-2 right-2 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center font-bold">X</button>
                    <LocalizedInput path={`socialWork.categories.${catIndex}.title`} label={`Category ${catIndex + 1} Title`} />
                    <h4 className="text-md font-semibold mt-4 mb-2 text-text">Images</h4>
                    {category.images.map((image, imgIndex) => (
                         <div key={image.id} className="border-t border-border-color pt-4 mt-4 relative">
                            <button type="button" onClick={() => removeItem(`socialWork.categories.${catIndex}.images`, imgIndex)} className="absolute top-2 right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">X</button>
                            <LocalizedInput path={`socialWork.categories.${catIndex}.images.${imgIndex}.title`} label={`Image ${imgIndex + 1} Title (for Homepage)`} />
                            <LocalizedInput path={`socialWork.categories.${catIndex}.images.${imgIndex}.caption`} label={`Image ${imgIndex + 1} Caption`} />
                            <TextInput path={`socialWork.categories.${catIndex}.images.${imgIndex}.date`} label={`Image ${imgIndex + 1} Date (YYYY-MM-DD)`} />
                            <div className="mt-2">
                               <label className="block text-light-text text-sm font-bold mb-2">Image {imgIndex + 1}</label>
                                <img src={image.src} alt="Social work" className="w-48 h-32 object-cover rounded-md mb-2"/>
                                <input type="file" accept="image/*" onChange={e => e.target.files && handleImageUpload(`socialWork.categories.${catIndex}.images.${imgIndex}.src`, e.target.files[0])} />
                            </div>
                         </div>
                    ))}
                    <button type="button" onClick={() => addItem(`socialWork.categories.${catIndex}.images`, {id: uuidv4(), src: '', caption: {en:'',mr:'',hi:''}, title: {en:'',mr:'',hi:''}, date:''})} className="mt-4 bg-green-500 text-white px-3 py-1 rounded-md">Add Image</button>
                </div>
            ))}
             <button type="button" onClick={() => addItem('socialWork.categories', {id: uuidv4(), title: {en:'',mr:'',hi:''}, images: []})} className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Category</button>
        </Accordion>

        <Accordion title="About Us Page">
            <LocalizedInput path="aboutUs.title" label="Page Title" />
            <LocalizedInput path="aboutUs.vision" label="'Our Vision' Title" />
            <LocalizedInput path="aboutUs.placeholders.vision" label="Vision Text" />
            <LocalizedInput path="aboutUs.mission" label="'Our Mission' Title" />
            <LocalizedInput path="aboutUs.placeholders.mission" label="Mission Text" />
            <LocalizedInput path="aboutUs.history" label="'Our History' Title" />
            <LocalizedInput path="aboutUs.placeholders.history" label="History Text" />
            <LocalizedInput path="aboutUs.teamTitle" label="'Meet Our Team' Title" />
             <hr className="my-4"/>
            {formData.aboutUs.team.map((member, index) => (
                <div key={member.id} className="border border-border-color p-4 rounded-md mb-4 relative">
                     <button type="button" onClick={() => removeItem('aboutUs.team', index)} className="absolute top-2 right-2 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center font-bold">X</button>
                    <TextInput path={`aboutUs.team.${index}.name`} label="Member Name" />
                    <LocalizedInput path={`aboutUs.team.${index}.role`} label="Member Role" />
                    <LocalizedInput path={`aboutUs.team.${index}.vision`} label="Member Vision" />
                    <TextInput path={`aboutUs.team.${index}.contact`} label="Member Contact" />
                    <TextInput path={`aboutUs.team.${index}.email`} label="Member Email" />
                    <div className="mt-2">
                        <label className="block text-light-text text-sm font-bold mb-2">Member Photo</label>
                        <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-2"/>
                        <input type="file" accept="image/*" onChange={e => e.target.files && handleImageUpload(`aboutUs.team.${index}.photo`, e.target.files[0])} />
                    </div>
                </div>
            ))}
             <button type="button" onClick={() => addItem('aboutUs.team', {id: uuidv4(), name: '', role: {en:'',mr:'',hi:''}, vision: {en:'',mr:'',hi:''}, photo: ''})} className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Team Member</button>
        </Accordion>
        
        <Accordion title="Marriage Bureau Page Content">
            <LocalizedInput path="marriageSection.title" label="Page Title" />
            <LocalizedInput path="marriageSection.subheading" label="Page Subheading" />
            <LocalizedInput path="marriageSection.description" label="Description" />
            <hr className="my-4"/>
            <h4 className="font-semibold text-text mt-6 mb-2">Registration Form</h4>
            <LocalizedInput path="marriageSection.form.title" label="Form Title" />
            <LocalizedInput path="marriageSection.form.personalDetails" label="Personal Details Section Title" />
            <LocalizedInput path="marriageSection.form.name" label="Name Field Label" />
            <LocalizedInput path="marriageSection.form.familyDetails" label="Family Details Section Title" />
            <LocalizedInput path="marriageSection.form.professionalDetails" label="Professional Details Section Title" />
            <LocalizedInput path="marriageSection.form.culturalDetails" label="Cultural Details Section Title" />
            <LocalizedInput path="marriageSection.form.expectations" label="Expectations Field Label" />
            <LocalizedInput path="marriageSection.form.consent" label="Consent Checkbox Text" />
            <LocalizedInput path="marriageSection.form.submit" label="Submit Button Text" />
            <LocalizedInput path="marriageSection.form.paymentTitle" label="Payment Section Title" />
            <LocalizedInput path="marriageSection.form.paymentDesc" label="Payment Section Description" />
        </Accordion>

        <Accordion title="Profiles Page Content">
            <LocalizedInput path="profilesPage.title" label="Page Title" />
            <LocalizedInput path="profilesPage.noProfiles" label="'No Profiles' Message" />
            <LocalizedInput path="profilesPage.contactAction" label="Express Interest Button Text" />
        </Accordion>
        
        <Accordion title="Join Us Page Content">
            <LocalizedInput path="joinUsPage.title" label="Page Title" />
            <LocalizedInput path="joinUsPage.subtitle" label="Page Subtitle" />
            <hr className="my-4" />
            <h4 className="font-semibold text-text mt-6 mb-2">Join Us Form</h4>
            <LocalizedInput path="joinUsPage.form.name" label="Name Field Label" />
            <LocalizedInput path="joinUsPage.form.phone" label="Phone Field Label" />
            <LocalizedInput path="joinUsPage.form.email" label="Email Field Label" />
            <LocalizedInput path="joinUsPage.form.occupation" label="Occupation Field Label" />
            <LocalizedInput path="joinUsPage.form.education" label="Education Field Label" />
            <LocalizedInput path="joinUsPage.form.interestReason" label="Reason Field Label" />
            <LocalizedInput path="joinUsPage.form.submit" label="Submit Button Text" />
        </Accordion>

        <Accordion title="Donate Page Content">
             <LocalizedInput path="donatePage.title" label="Page Title" />
             <LocalizedInput path="donatePage.supportCause" label="Support Cause Text" />
             <LocalizedInput path="donatePage.scanToPay" label="'Scan to Pay' Text" />
             <LocalizedInput path="donatePage.directTransfer" label="'Direct Transfer' Text" />
             <TextInput path="donatePage.upiId" label="Donation UPI ID" />
             <TextInput path="donatePage.bankAccount" label="Donation Bank Account" />
              <div className="mt-2">
                <label className="block text-light-text text-sm font-bold mb-2">Donation QR Code</label>
                <img src={formData.donatePage.qrCode} alt="qr code" className="w-32 h-32 object-cover rounded-md mb-2"/>
                <input type="file" accept="image/*" onChange={e => e.target.files && handleImageUpload('donatePage.qrCode', e.target.files[0])} />
            </div>
             <LocalizedInput path="donatePage.inquiryButton" label="Inquiry Button Text" />
             <LocalizedInput path="donatePage.inquiryHelpText" label="Inquiry Help Text" />
        </Accordion>

        <Accordion title="Contact Page Content">
             <LocalizedInput path="contactUs.title" label="Page Title" />
             <LocalizedInput path="contactUs.getInTouch" label="'Get in Touch' Text" />
             <TextInput path="contactUs.phone" label="Contact Phone Number" />
             <TextInput path="contactUs.email" label="Contact Email Address" />
             <LocalizedInput path="contactUs.address" label="Address" />
             <TextInput path="contactUs.mapEmbedUrl" label="Google Maps Embed URL" />
        </Accordion>

        <div className="flex items-center justify-center mt-6">
          <button
            className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-6 rounded-lg text-lg focus:outline-none focus:shadow-outline btn-press"
            type="submit"
          >
            Save All Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminDashboard;
