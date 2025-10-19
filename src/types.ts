// FIX: Corrected import to use named export `v4` from uuid.
import { v4 as uuidv4 } from 'uuid';

export enum Language {
  EN = 'en',
  MR = 'mr',
  HI = 'hi',
}

export type LocalizedString = {
  [key in Language]: string;
};

export interface Quote {
    text: LocalizedString;
    author: LocalizedString;
}

export interface SocialWorkImage {
    id: string;
    src: string;
    caption: LocalizedString;
    title?: LocalizedString;
    date: string;
}

export interface SocialWorkCategory {
    id: string;
    title: LocalizedString;
    images: SocialWorkImage[];
}

export interface TeamMember {
    id: string;
    name: string;
    role: LocalizedString;
    vision: LocalizedString;
    photo: string;
    contact?: string;
    email?: string;
}

export interface MarriageProfile {
  id: string;
  status: 'approved' | 'pending';
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  photo: string;
  dob: string;
  address: string;
  phone: string;
  alternatePhone?: string;
  email: string;
  fatherName: string;
  motherName: string;
  sisters: string;
  brothers: string;
  job: string;
  salary: string;
  education: string;
  gotra: string;
  caste: string;
  religion: string;
  expectations: string;
  consent: boolean;
}

export type HeaderTheme = 'default' | 'diwali' | 'holi' | 'eid';

export interface SiteContent {
  appName: LocalizedString;
  tagline: LocalizedString;
  languageSelector: LocalizedString;
  header: {
    toggleTheme: LocalizedString;
    openMenu: LocalizedString;
    headerTheme: HeaderTheme;
    languageNames: {
      en: LocalizedString;
      mr: LocalizedString;
      hi: LocalizedString;
    }
  };
  nav: {
    home: LocalizedString;
    marriage: LocalizedString;
    profiles: LocalizedString;
    socialWork: LocalizedString;
    about: LocalizedString;
    contact: LocalizedString;
    donate: LocalizedString;
    joinUs: LocalizedString;
    adminLogin: LocalizedString;
  };
  homepage: {
    bannerImage: string;
    welcomeMessage: LocalizedString;
    exploreServices: LocalizedString;
    recentActivitiesTitle: LocalizedString;
    philosophy: {
        title: LocalizedString;
        text: LocalizedString;
    };
  };
  marriageSection: {
    pageQuote?: Quote;
    title: LocalizedString;
    subheading: LocalizedString;
    description: LocalizedString;
    oneStopSolution: {
      title: LocalizedString;
      items: LocalizedString[];
    };
    form: {
      title: LocalizedString;
      personalDetails: LocalizedString;
      name: LocalizedString;
      gender: LocalizedString;
      male: LocalizedString;
      female: LocalizedString;
      other: LocalizedString;
      photo: LocalizedString;
      dob: LocalizedString;
      address: LocalizedString;
      phone: LocalizedString;
      alternatePhone: LocalizedString;
      email: LocalizedString;
      familyDetails: LocalizedString;
      fatherName: LocalizedString;
      motherName: LocalizedString;
      sisters: LocalizedString;
      brothers: LocalizedString;
      professionalDetails: LocalizedString;
      job: LocalizedString;
      salary: LocalizedString;
      education: LocalizedString;
      culturalDetails: LocalizedString;
      gotra: LocalizedString;
      caste: LocalizedString;
      religion: LocalizedString;
      expectations: LocalizedString;
      consent: LocalizedString;
      submit: LocalizedString;
      paymentTitle: LocalizedString;
      paymentDesc: LocalizedString;
      formSuccess: LocalizedString;
      formSuccessSub: LocalizedString;
      formWhatsapp: LocalizedString;
    };
    filters: {
      title: LocalizedString;
      ageRange: LocalizedString;
      from: LocalizedString;
      to: LocalizedString;
      caste: LocalizedString;
      education: LocalizedString;
      search: LocalizedString;
      gender: {
        label: LocalizedString;
        all: LocalizedString;
        male: LocalizedString;
        female: LocalizedString;
        other: LocalizedString;
      };
    };
  };
  profilesPage: {
    pageQuote?: Quote;
    title: LocalizedString;
    noProfiles: LocalizedString;
    contactAction: LocalizedString;
    ageString: LocalizedString;
    details: {
        education: LocalizedString;
        occupation: LocalizedString;
        caste: LocalizedString;
        salary: LocalizedString;
        address: LocalizedString;
        religion: LocalizedString;
    };
    interestMessage: LocalizedString;
  };
  socialWork: {
    pageQuote?: Quote;
    title: LocalizedString;
    galleryTitle: LocalizedString;
    categories: SocialWorkCategory[];
    donateTitle: LocalizedString;
    donateDesc: LocalizedString;
    donateButton: LocalizedString;
  };
  aboutUs: {
    pageQuote?: Quote;
    title: LocalizedString;
    vision: LocalizedString;
    mission: LocalizedString;
    history: LocalizedString;
    teamTitle: LocalizedString;
    placeholders: {
      vision: LocalizedString;
      mission: LocalizedString;
      history: LocalizedString;
    };
    teamDetails: {
        phone: LocalizedString;
        email: LocalizedString;
    };
    team: TeamMember[];
  };
  contactUs: {
    pageQuote?: Quote;
    title: LocalizedString;
    getInTouch: LocalizedString;
    phone: string;
    email: string;
    address: LocalizedString;
    mapEmbedUrl: string;
    labels: {
        phone: LocalizedString;
        email: LocalizedString;
        address: LocalizedString;
    };
  };
  joinUsPage: {
    pageQuote?: Quote;
    title: LocalizedString;
    subtitle: LocalizedString;
    form: {
        name: LocalizedString;
        phone: LocalizedString;
        email: LocalizedString;
        occupation: LocalizedString;
        education: LocalizedString;
        interestReason: LocalizedString;
        submit: LocalizedString;
        success: LocalizedString;
        whatsappMessage: LocalizedString;
    }
  };
  donatePage: {
    pageQuote?: Quote;
    title: LocalizedString;
    supportCause: LocalizedString;
    scanToPay: LocalizedString;
    directTransfer: LocalizedString;
    upiId: string;
    bankAccount: string;
    qrCode: string;
    inquiryButton: LocalizedString;
    inquiryMessage: LocalizedString;
    inquiryHelpText: LocalizedString;
  };
  footer: {
    copyright: LocalizedString;
    quickLinks: LocalizedString;
    followUs: LocalizedString;
    adminLogin: LocalizedString;
    socialLinks: {
        facebook: string;
        instagram: string;
        twitter: string;
        youtube: string;
    };
    quote1: {
        text: LocalizedString;
        author: LocalizedString;
    };
    quote2: {
        text: LocalizedString;
        author: LocalizedString;
    };
  };
  adminDashboard: {
    noPendingProfiles: LocalizedString;
    noApprovedProfiles: LocalizedString;
    confirmations: {
      logout: LocalizedString;
      resetContent: LocalizedString;
      deleteProfile: LocalizedString;
      changeProfileStatus: LocalizedString;
    };
  };
  marriageProfiles: MarriageProfile[];
}
