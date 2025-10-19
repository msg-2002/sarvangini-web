import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../context/ContentContext';
import { MarriageProfile } from '../types';

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

const ProfileCard = ({ profile }: { profile: MarriageProfile }) => {
    const { language, getFontClass } = useLanguage();
    const { content } = useContent();
    const c = content.profilesPage;
    const age = calculateAge(profile.dob);

    const handleInterest = () => {
        const message = c.interestMessage[language]
            .replace('{name}', profile.name)
            .replace('{id}', profile.id.substring(0, 8));
        const whatsappUrl = `https://wa.me/917972461024?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="card-lift bg-surface rounded-lg shadow-lg overflow-hidden flex flex-col border border-border-color">
            <img src={profile.photo} alt={profile.name} className="w-full h-72 object-cover object-center"/>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-bold text-secondary">{profile.name}</h3>
                <p className={`text-light-text mb-3 ${getFontClass()}`}>{c.ageString[language].replace('{age}', age.toString())}, {profile.address}</p>
                
                <div className={`space-y-1 text-sm text-text ${getFontClass()}`}>
                    <p><strong>{c.details.occupation[language]}:</strong> {profile.job}</p>
                    <p><strong>{c.details.religion[language]}:</strong> {profile.religion} - {profile.caste}</p>
                    <p><strong>{c.details.salary[language]}:</strong> {profile.salary}</p>
                    <p><strong>{c.details.education[language]}:</strong> {profile.education}</p>
                </div>

                <div className="mt-auto pt-4">
                    <button onClick={handleInterest} className="w-full bg-primary text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary-hover transition-colors duration-300 btn-press">
                        {c.contactAction[language]}
                    </button>
                </div>
            </div>
        </div>
    );
};


const ProfilesPage = () => {
  const { language, getFontClass } = useLanguage();
  const { content } = useContent();
  const c = content.profilesPage;
  const approvedProfiles = content.marriageProfiles.filter(p => p.status === 'approved');
  
  const location = useLocation();
  const [filteredProfiles, setFilteredProfiles] = useState(approvedProfiles);
  const [filters, setFilters] = useState({
      minAge: location.state?.minAge || '18',
      maxAge: location.state?.maxAge || '60',
      caste: location.state?.caste || '',
      education: location.state?.education || '',
      gender: location.state?.gender || 'All',
  });
  
  useEffect(() => {
      const results = approvedProfiles.filter(profile => {
          const age = calculateAge(profile.dob);
          const ageMatch = age >= parseInt(filters.minAge) && age <= parseInt(filters.maxAge);
          const casteMatch = filters.caste ? profile.caste.toLowerCase().includes(filters.caste.toLowerCase()) : true;
          const educationMatch = filters.education ? profile.education.toLowerCase().includes(filters.education.toLowerCase()) : true;
          const genderMatch = filters.gender === 'All' ? true : profile.gender === filters.gender;
          return ageMatch && casteMatch && educationMatch && genderMatch;
      });
      setFilteredProfiles(results);
  }, [filters, content.marriageProfiles]);
  
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFilters(prev => ({...prev, [e.target.name]: e.target.value}));
  }

  return (
    <div className="pattern-bg py-20 fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-serif font-bold text-secondary text-shadow-custom ${getFontClass()}`}>{c.title[language]}</h1>
        </div>
        
        {/* Filters */}
        <div className="bg-surface p-6 rounded-lg shadow-lg mb-12 border border-border-color">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
                {/* Gender Filter */}
                 <div>
                    <label className={`block text-sm font-medium text-light-text mb-1 ${getFontClass()}`}>{content.marriageSection.filters.gender.label[language]}</label>
                    <select name="gender" value={filters.gender} onChange={handleFilterChange} className="input-themed">
                        <option value="All">{content.marriageSection.filters.gender.all[language]}</option>
                        <option value="Male">{content.marriageSection.filters.gender.male[language]}</option>
                        <option value="Female">{content.marriageSection.filters.gender.female[language]}</option>
                        <option value="Other">{content.marriageSection.filters.gender.other[language]}</option>
                    </select>
                </div>
                {/* Age Filter */}
                <div>
                     <label className={`block text-sm font-medium text-light-text mb-1 ${getFontClass()}`}>{content.marriageSection.filters.ageRange[language]}</label>
                     <div className="flex items-center gap-2">
                        <input type="number" name="minAge" value={filters.minAge} onChange={handleFilterChange} className="input-themed" placeholder={content.marriageSection.filters.from[language]}/>
                        <span>-</span>
                        <input type="number" name="maxAge" value={filters.maxAge} onChange={handleFilterChange} className="input-themed" placeholder={content.marriageSection.filters.to[language]}/>
                     </div>
                </div>
                {/* Caste & Education */}
                 <div>
                    <label className={`block text-sm font-medium text-light-text mb-1 ${getFontClass()}`}>{content.marriageSection.filters.caste[language]}</label>
                    <input type="text" name="caste" value={filters.caste} onChange={handleFilterChange} className="input-themed"/>
                </div>
                 <div>
                    <label className={`block text-sm font-medium text-light-text mb-1 ${getFontClass()}`}>{content.marriageSection.filters.education[language]}</label>
                    <input type="text" name="education" value={filters.education} onChange={handleFilterChange} className="input-themed"/>
                </div>
            </div>
        </div>
        
        {/* Profiles Grid */}
        {filteredProfiles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProfiles.map((profile) => (
              <React.Fragment key={profile.id}>
                <ProfileCard profile={profile} />
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className={`text-xl text-light-text ${getFontClass()}`}>{c.noProfiles[language]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilesPage;
