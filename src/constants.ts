// FIX: Replaced placeholder text with a valid TypeScript module that defines and exports the `DEFAULT_CONTENT` constant. This constant provides a complete, default structure for the website's content, resolving multiple 'Cannot find name' and module resolution errors across the application.
import { SiteContent, Language } from './types';

export const DEFAULT_CONTENT: SiteContent = {
  appName: {
    [Language.EN]: 'Sarvangini',
    [Language.MR]: 'सर्वांगिणी',
    [Language.HI]: 'सर्वांगिणी',
  },
  tagline: {
    [Language.EN]: 'Uniting beautiful souls together.',
    [Language.MR]: 'सुंदर जीवांना एकत्र आणत आहोत.',
    [Language.HI]: 'सुंदर आत्माओं को एक साथ लाना।',
  },
  languageSelector: {
    [Language.EN]: 'Select Language',
    [Language.MR]: 'भाषा निवडा',
    [Language.HI]: 'भाषा चुनें',
  },
  header: {
    headerTheme: 'default',
    toggleTheme: {
        [Language.EN]: 'Toggle theme',
        [Language.MR]: 'थीम टॉगल करा',
        [Language.HI]: 'थीम टॉगल करें',
    },
    openMenu: {
        [Language.EN]: 'Open main menu',
        [Language.MR]: 'मुख्य मेनू उघडा',
        [Language.HI]: 'मुख्य मेनू खोलें',
    },
    languageNames: {
      en: {
        [Language.EN]: 'English',
        [Language.MR]: 'English',
        [Language.HI]: 'English',
      },
      mr: {
        [Language.EN]: 'मराठी',
        [Language.MR]: 'मराठी',
        [Language.HI]: 'मराठी',
      },
      hi: {
        [Language.EN]: 'हिन्दी',
        [Language.MR]: 'हिन्दी',
        [Language.HI]: 'हिन्दी',
      },
    }
  },
  nav: {
    home: {
      [Language.EN]: 'Home',
      [Language.MR]: 'मुख्यपृष्ठ',
      [Language.HI]: 'होम',
    },
    marriage: {
      [Language.EN]: 'Marriage Bureau',
      [Language.MR]: 'विवाह मंडळ',
      [Language.HI]: 'विवाह ब्यूरो',
    },
    profiles: {
      [Language.EN]: 'Profiles',
      [Language.MR]: 'प्रोफाइल्स',
      [Language.HI]: 'प्रोफाइल',
    },
    socialWork: {
      [Language.EN]: 'Social Work',
      [Language.MR]: 'सामाजिक कार्य',
      [Language.HI]: 'सामाजिक कार्य',
    },
    about: {
      [Language.EN]: 'About Us',
      [Language.MR]: 'आमच्याबद्दल',
      [Language.HI]: 'हमारे बारे में',
    },
    contact: {
      [Language.EN]: 'Contact Us',
      [Language.MR]: 'संपर्क',
      [Language.HI]: 'संपर्क करें',
    },
    donate: {
      [Language.EN]: 'Donate',
      [Language.MR]: 'दान करा',
      [Language.HI]: 'दान करें',
    },
    joinUs: {
      [Language.EN]: 'Join Us',
      [Language.MR]: 'सामील व्हा',
      [Language.HI]: 'हमसे जुड़ें',
    },
    adminLogin: {
      [Language.EN]: 'Admin Login',
      [Language.MR]: 'प्रशासक लॉगिन',
      [Language.HI]: 'एडमिन लॉग इन',
    }
  },
  homepage: {
    bannerImage: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop',
    welcomeMessage: {
      [Language.EN]: 'Welcome to Sarvangini, a dedicated platform for empowering women through matrimonial services, social initiatives, and community support.',
      [Language.MR]: 'सर्वांगिणी मध्ये आपले स्वागत आहे, वैवाहिक सेवा, सामाजिक उपक्रम आणि सामुदायिक समर्थनाद्वारे महिलांना सक्षम करण्यासाठी एक समर्पित व्यासपीठ.',
      [Language.HI]: 'सर्वांगिणी में आपका स्वागत है, वैवाहिक सेवाओं, सामाजिक पहलों और सामुदायिक समर्थन के माध्यम से महिलाओं को सशक्त बनाने के लिए एक समर्पित मंच।',
    },
    exploreServices: {
      [Language.EN]: 'Explore Our Services',
      [Language.MR]: 'आमच्या सेवा एक्सप्लोर करा',
      [Language.HI]: 'हमारी सेवाएं एक्सप्लोर करें',
    },
    recentActivitiesTitle: {
      [Language.EN]: 'Recent Activities',
      [Language.MR]: 'अलीकडील उपक्रम',
      [Language.HI]: 'हाल की गतिविधियाँ',
    },
    philosophy: {
        title: {
            [Language.EN]: 'A Voice for the Voiceless',
            [Language.MR]: 'मुक्यांचा आवाज',
            [Language.HI]: 'बेजुबानों की आवाज',
        },
        text: {
            [Language.EN]: 'In the quiet corners of the world, we stand for those unheard—the gentle souls of animals, the resilient spirits of widows and women, the hopeful eyes of orphans, and the vulnerable lives needing a hand. Our mission is to weave a tapestry of compassion, to make the world a more beautiful and kinder place for all beings.',
            [Language.MR]: 'जगाच्या शांत कोपऱ्यात, आम्ही त्यांच्यासाठी उभे आहोत ज्यांचा आवाज ऐकला जात नाही—प्राण्यांचे सौम्य आत्मे, विधवा आणि महिलांचे कणखर मनोधैर्य, अनाथांचे आशावादी डोळे आणि मदतीची गरज असलेले निराधार जीव. आमचे ध्येय करुणेचे वस्त्र विणणे आहे, जगाला सर्व जीवासाठी एक अधिक सुंदर आणि दयाळू ठिकाण बनवणे आहे.',
            [Language.HI]: 'दुनिया के शांत कोनों में, हम उन अनसुने लोगों के लिए खड़े हैं - जानवरों की कोमल आत्माएं, विधवाओं और महिलाओं की लचीली आत्माएं, अनाथों की उम्मीद भरी आंखें, और मदद की जरूरत वाले कमजोर जीवन। हमारा मिशन करुणा का एक ताना-बाना बुनना है, दुनिया को सभी प्राणियों के लिए एक और अधिक सुंदर और दयालु जगह बनाना है।',
        },
    },
  },
  marriageSection: {
    pageQuote: {
        text: {
            [Language.EN]: 'A successful marriage requires falling in love many times, always with the same person.',
            [Language.MR]: 'यशस्वी विवाहात अनेकदा प्रेमात पडावे लागते, पण नेहमी एकाच व्यक्तीसोबत.',
            [Language.HI]: 'एक सफल विवाह के लिए कई बार प्यार में पड़ना पड़ता है, हमेशा एक ही व्यक्ति के साथ।',
        },
        author: {
            [Language.EN]: 'Mignon McLaughlin',
            [Language.MR]: 'मिग्नॉन मॅकलॉफ्लिन',
            [Language.HI]: 'मिग्नॉन मैकलॉघलिन',
        }
    },
    title: {
      [Language.EN]: 'Find Your Perfect Match',
      [Language.MR]: 'तुमचा योग्य जोडीदार शोधा',
      [Language.HI]: 'अपना परफेक्ट मैच खोजें',
    },
    subheading: {
      [Language.EN]: 'A trusted platform for finding a life partner within the community. Register now to start your journey.',
      [Language.MR]: 'समाजात आयुष्यभराचा जोडीदार शोधण्यासाठी एक विश्वसनीय व्यासपीठ. तुमचा प्रवास सुरू करण्यासाठी आताच नोंदणी करा.',
      [Language.HI]: 'समुदाय के भीतर एक जीवन साथी खोजने के लिए एक विश्वसनीय मंच। अपनी यात्रा शुरू करने के लिए अभी पंजीकरण करें।',
    },
    description: {
      [Language.EN]: 'Our matrimonial service is dedicated to helping individuals find their life partners within the community, fostering happy and lasting relationships.',
      [Language.MR]: 'आमची विवाह सेवा व्यक्तींना समाजात त्यांचे जीवनसाथी शोधण्यात मदत करण्यासाठी समर्पित आहे, ज्यामुळे आनंदी आणि चिरस्थायी संबंध वाढीस लागतात.',
      [Language.HI]: 'हमारी वैवाहिक सेवा व्यक्तियों को समुदाय के भीतर अपने जीवन साथी खोजने में मदद करने के लिए समर्पित है, जिससे सुखी और स्थायी संबंधों को बढ़ावा मिलता है।',
    },
    oneStopSolution: {
        title: {
            [Language.EN]: 'One-Stop Solution',
            [Language.MR]: 'एक-स्टॉप समाधान',
            [Language.HI]: 'वन-स्टॉप समाधान',
        },
        items: [],
    },
    form: {
      title: {
        [Language.EN]: 'Registration Form',
        [Language.MR]: 'नोंदणी फॉर्म',
        [Language.HI]: 'पंजीकरण फॉर्म',
      },
      personalDetails: {
        [Language.EN]: 'Personal Details',
        [Language.MR]: 'वैयक्तिक माहिती',
        [Language.HI]: 'व्यक्तिगत विवरण',
      },
      name: {
        [Language.EN]: 'Full Name',
        [Language.MR]: 'पूर्ण नाव',
        [Language.HI]: 'पूरा नाम',
      },
      gender: {
        [Language.EN]: 'Gender',
        [Language.MR]: 'लिंग',
        [Language.HI]: 'लिंग',
      },
      male: {
        [Language.EN]: 'Male',
        [Language.MR]: 'पुरुष',
        [Language.HI]: 'पुरुष',
      },
      female: {
        [Language.EN]: 'Female',
        [Language.MR]: 'स्त्री',
        [Language.HI]: 'महिला',
      },
      other: {
        [Language.EN]: 'Other',
        [Language.MR]: 'इतर',
        [Language.HI]: 'अन्य',
      },
      photo: {
        [Language.EN]: 'Upload Photo',
        [Language.MR]: 'फोटो अपलोड करा',
        [Language.HI]: 'फोटो अपलोड करें',
      },
      dob: {
        [Language.EN]: 'Date of Birth',
        [Language.MR]: 'जन्म तारीख',
        [Language.HI]: 'जन्म की तारीख',
      },
      address: {
        [Language.EN]: 'Full Address',
        [Language.MR]: 'पूर्ण पत्ता',
        [Language.HI]: 'पूरा पता',
      },
      phone: {
        [Language.EN]: 'Phone Number',
        [Language.MR]: 'फोन नंबर',
        [Language.HI]: 'फोन नंबर',
      },
      alternatePhone: {
        [Language.EN]: 'Alternate Phone (Optional)',
        [Language.MR]: 'पर्यायी फोन (ऐच्छिक)',
        [Language.HI]: 'वैकल्पिक फोन (वैकल्पिक)',
      },
      email: {
        [Language.EN]: 'Email Address',
        [Language.MR]: 'ईमेल पत्ता',
        [Language.HI]: 'ईमेल पता',
      },
      familyDetails: {
        [Language.EN]: 'Family Details',
        [Language.MR]: 'कौटुंबिक माहिती',
        [Language.HI]: 'परिवार का विवरण',
      },
      fatherName: {
        [Language.EN]: 'Father\'s Name',
        [Language.MR]: 'वडिलांचे नाव',
        [Language.HI]: 'पिता का नाम',
      },
      motherName: {
        [Language.EN]: 'Mother\'s Name',
        [Language.MR]: 'आईचे नाव',
        [Language.HI]: 'मां का नाम',
      },
      sisters: {
        [Language.EN]: 'Sisters (Married/Unmarried)',
        [Language.MR]: 'बहिणी (विवाहित/अविवाहित)',
        [Language.HI]: 'बहनें (विवाहित/अविवाहित)',
      },
      brothers: {
        [Language.EN]: 'Brothers (Married/Unmarried)',
        [Language.MR]: 'भाऊ (विवाहित/अविवाहित)',
        [Language.HI]: 'भाई (विवाहित/अविवाहित)',
      },
      professionalDetails: {
        [Language.EN]: 'Professional Details',
        [Language.MR]: 'व्यावसायिक माहिती',
        [Language.HI]: 'पेशेवर विवरण',
      },
      job: {
        [Language.EN]: 'Job/Occupation',
        [Language.MR]: 'नोकरी/व्यवसाय',
        [Language.HI]: 'नौकरी/व्यवसाय',
      },
      salary: {
        [Language.EN]: 'Annual Salary',
        [Language.MR]: 'वार्षिक उत्पन्न',
        [Language.HI]: 'वार्षिक वेतन',
      },
      education: {
        [Language.EN]: 'Education',
        [Language.MR]: 'शिक्षण',
        [Language.HI]: 'शिक्षा',
      },
      culturalDetails: {
        [Language.EN]: 'Cultural Details',
        [Language.MR]: 'सांस्कृतिक माहिती',
        [Language.HI]: 'सांस्कृतिक विवरण',
      },
      gotra: {
        [Language.EN]: 'Gotra',
        [Language.MR]: 'गोत्र',
        [Language.HI]: 'गोत्र',
      },
      caste: {
        [Language.EN]: 'Caste',
        [Language.MR]: 'जात',
        [Language.HI]: 'जाति',
      },
      religion: {
        [Language.EN]: 'Religion',
        [Language.MR]: 'धर्म',
        [Language.HI]: 'धर्म',
      },
      expectations: {
        [Language.EN]: 'Expectations from Partner',
        [Language.MR]: 'जोडीदाराकडून अपेक्षा',
        [Language.HI]: 'साथी से उम्मीदें',
      },
      consent: {
        [Language.EN]: 'I agree to the terms and conditions and confirm that the information provided is true.',
        [Language.MR]: 'मी अटी आणि शर्तींना सहमत आहे आणि दिलेली माहिती खरी असल्याची पुष्टी करतो.',
        [Language.HI]: 'मैं नियमों और शर्तों से सहमत हूं और पुष्टि करता हूं कि दी गई जानकारी सत्य है।',
      },
      submit: {
        [Language.EN]: 'Submit Profile',
        [Language.MR]: 'प्रोफाइल सबमिट करा',
        [Language.HI]: 'प्रोफ़ाइल सबमिट करें',
      },
      paymentTitle: {
        [Language.EN]: 'Registration Fee',
        [Language.MR]: 'नोंदणी शुल्क',
        [Language.HI]: 'पंजीकरण शुल्क',
      },
      paymentDesc: {
        [Language.EN]: 'A nominal fee is required for registration. Please make the payment to the UPI ID provided below.',
        [Language.MR]: 'नोंदणीसाठी नाममात्र शुल्क आवश्यक आहे. कृपया खाली दिलेल्या UPI आयडीवर पेमेंट करा.',
        [Language.HI]: 'पंजीकरण के लिए एक मामूली शुल्क आवश्यक है। कृपया नीचे दिए गए यूपीआई आईडी पर भुगतान करें।',
      },
      formSuccess: {
        [Language.EN]: 'Registration Successful!',
        [Language.MR]: 'नोंदणी यशस्वी झाली!',
        [Language.HI]: 'पंजीकरण सफल!',
      },
      formSuccessSub: {
        [Language.EN]: 'Your profile has been submitted for approval. You will be notified once it is live.',
        [Language.MR]: 'तुमचे प्रोफाइल मंजुरीसाठी सबमिट केले आहे. ते थेट झाल्यावर तुम्हाला सूचित केले जाईल.',
        [Language.HI]: 'आपकी प्रोफ़ाइल अनुमोदन के लिए सबमिट कर दी गई है। इसके लाइव होने पर आपको सूचित किया जाएगा।',
      },
      formWhatsapp: {
        [Language.EN]: 'New Marriage Profile Registration:\n\nName: {name}\nDOB: {dob}\nPhone: {phone}\nAlternate Phone: {alternatePhone}\nJob: {job}\nEducation: {education}',
        [Language.MR]: 'नवीन विवाह प्रोफाइल नोंदणी:\n\nनाव: {name}\nजन्मदिनांक: {dob}\nफोन: {phone}\nपर्यायी फोन: {alternatePhone}\nनोकरी: {job}\nशिक्षण: {education}',
        [Language.HI]: 'नया विवाह प्रोफ़ाइल पंजीकरण:\n\nनाम: {name}\nजन्म तिथि: {dob}\nफ़ोन: {phone}\nवैकल्पिक फ़ोन: {alternatePhone}\nनौकरी: {job}\nशिक्षा: {education}',
      },
    },
    filters: {
      title: {
        [Language.EN]: 'Filter Profiles',
        [Language.MR]: 'प्रोफाइल फिल्टर करा',
        [Language.HI]: 'प्रोफ़ाइल फ़िल्टर करें',
      },
      ageRange: {
        [Language.EN]: 'Age Range',
        [Language.MR]: 'वयोमर्यादा',
        [Language.HI]: 'आयु सीमा',
      },
      from: {
        [Language.EN]: 'From',
        [Language.MR]: 'पासून',
        [Language.HI]: 'से',
      },
      to: {
        [Language.EN]: 'To',
        [Language.MR]: 'पर्यंत',
        [Language.HI]: 'तक',
      },
      caste: {
        [Language.EN]: 'Caste',
        [Language.MR]: 'जात',
        [Language.HI]: 'जाति',
      },
      education: {
        [Language.EN]: 'Education',
        [Language.MR]: 'शिक्षण',
        [Language.HI]: 'शिक्षा',
      },
      search: {
        [Language.EN]: 'Search',
        [Language.MR]: 'शोधा',
        [Language.HI]: 'खोजें',
      },
      gender: {
        label: {
            [Language.EN]: 'Gender',
            [Language.MR]: 'लिंग',
            [Language.HI]: 'लिंग',
        },
        all: {
            [Language.EN]: 'All',
            [Language.MR]: 'सर्व',
            [Language.HI]: 'सभी',
        },
        male: {
            [Language.EN]: 'Male',
            [Language.MR]: 'पुरुष',
            [Language.HI]: 'पुरुष',
        },
        female: {
            [Language.EN]: 'Female',
            [Language.MR]: 'स्त्री',
            [Language.HI]: 'महिला',
        },
        other: {
            [Language.EN]: 'Other',
            [Language.MR]: 'इतर',
            [Language.HI]: 'अन्य',
        },
      }
    }
  },
  profilesPage: {
    pageQuote: {
        text: {
            [Language.EN]: 'Love does not consist of gazing at each other, but in looking outward together in the same direction.',
            [Language.MR]: 'प्रेम म्हणजे एकमेकांकडे टक लावून पाहणे नव्हे, तर एकत्र एकाच दिशेने बाहेर पाहणे.',
            [Language.HI]: 'प्यार एक-दूसरे को देखने में नहीं, बल्कि एक साथ एक ही दिशा में बाहर देखने में निहित है।',
        },
        author: {
            [Language.EN]: 'Antoine de Saint-Exupéry',
            [Language.MR]: 'अँटोइन डी सेंट-एक्सुपरी',
            [Language.HI]: 'एंटोनी डी सेंट-एक्सुपéry',
        }
    },
    title: {
      [Language.EN]: 'Featured Profiles',
      [Language.MR]: 'वैशिष्ट्यीकृत प्रोफाइल',
      [Language.HI]: 'विशेष रुप से प्रदर्शित प्रोफाइल',
    },
    noProfiles: {
      [Language.EN]: 'No profiles match your criteria.',
      [Language.MR]: 'तुमच्या निकषांशी जुळणारे प्रोफाइल नाहीत.',
      [Language.HI]: 'कोई प्रोफ़ाइल आपके मानदंडों से मेल नहीं खाती।',
    },
    contactAction: {
        [Language.EN]: 'Express Interest',
        [Language.MR]: 'स्वारस्य व्यक्त करा',
        [Language.HI]: 'रुचि व्यक्त करें',
    },
    ageString: {
        [Language.EN]: '{age} years old',
        [Language.MR]: '{age} वर्षे',
        [Language.HI]: '{age} साल',
    },
    details: {
        education: {
            [Language.EN]: 'Education',
            [Language.MR]: 'शिक्षण',
            [Language.HI]: 'शिक्षा',
        },
        occupation: {
            [Language.EN]: 'Occupation',
            [Language.MR]: 'व्यवसाय',
            [Language.HI]: 'व्यवसाय',
        },
        caste: {
            [Language.EN]: 'Caste',
            [Language.MR]: 'जात',
            [Language.HI]: 'जाति',
        },
        salary: {
            [Language.EN]: 'Salary',
            [Language.MR]: 'पगार',
            [Language.HI]: 'वेतन',
        },
        address: {
            [Language.EN]: 'Address',
            [Language.MR]: 'पत्ता',
            [Language.HI]: 'पता',
        },
        religion: {
            [Language.EN]: 'Religion',
            [Language.MR]: 'धर्म',
            [Language.HI]: 'धर्म',
        },
    },
    interestMessage: {
        [Language.EN]: 'Hello, I am interested in the profile of {name} (ID: {id}). Please provide more details.',
        [Language.MR]: 'नमस्कार, मला {name} (आयडी: {id}) यांच्या प्रोफाइलमध्ये स्वारस्य आहे. कृपया अधिक माहिती द्या.',
        [Language.HI]: 'नमस्ते, मुझे {name} (आईडी: {id}) की प्रोफाइल में दिलचस्पी है। कृपया अधिक विवरण प्रदान करें।',
    },
  },
  socialWork: {
    pageQuote: {
        text: {
            [Language.EN]: 'The best way to find yourself is to lose yourself in the service of others.',
            [Language.MR]: 'स्वतःला शोधण्याचा सर्वोत्तम मार्ग म्हणजे इतरांच्या सेवेत स्वतःला हरवून टाकणे.',
            [Language.HI]: 'खुद को खोजने का सबसे अच्छा तरीका है दूसरों की सेवा में खुद को खो देना।',
        },
        author: {
            [Language.EN]: 'Mahatma Gandhi',
            [Language.MR]: 'महात्मा गांधी',
            [Language.HI]: 'महात्मा गांधी',
        }
    },
    title: {
      [Language.EN]: 'Our Social Initiatives',
      [Language.MR]: 'आमचे सामाजिक उपक्रम',
      [Language.HI]: 'हमारी सामाजिक पहल',
    },
    galleryTitle: {
      [Language.EN]: 'Gallery of Our Work',
      [Language.MR]: 'आमच्या कामाची गॅलरी',
      [Language.HI]: 'हमारे काम की गैलरी',
    },
    categories: [
        {
            id: 'health',
            title: {
                [Language.EN]: 'Health and Wellness',
                [Language.MR]: 'आरोग्य आणि निरोगीपणा',
                [Language.HI]: 'स्वास्थ्य और कल्याण',
            },
            images: [
                { 
                  id: 'health-1', 
                  src: 'https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=2071&auto=format&fit=crop', 
                  caption: { [Language.EN]: 'Organizing free health check-up camps for rural communities.', [Language.MR]: 'ग्रामीण समुदायांसाठी मोफत आरोग्य तपासणी शिबिरांचे आयोजन.', [Language.HI]: 'ग्रामीण समुदायों के लिए नि:शुल्क स्वास्थ्य जांच शिविरों का आयोजन।'},
                  date: '2024-05-20',
                  title: { [Language.EN]: 'Community Health Drive', [Language.MR]: 'समुदाय आरोग्य अभियान', [Language.HI]: 'सामुदायिक स्वास्थ्य अभियान' }
                },
                { 
                  id: 'health-2', 
                  src: 'https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=2070&auto=format&fit=crop', 
                  caption: { [Language.EN]: 'An awareness program focusing on women\'s hygiene and health.', [Language.MR]: 'महिला स्वच्छता आणि आरोग्यावर लक्ष केंद्रित करणारा जागरूकता कार्यक्रम.', [Language.HI]: 'महिला स्वच्छता और स्वास्थ्य पर केंद्रित एक जागरूकता कार्यक्रम।'},
                  date: '2024-04-15',
                  title: { [Language.EN]: 'Hygiene Awareness Program', [Language.MR]: 'स्वच्छता जागरूकता कार्यक्रम', [Language.HI]: 'स्वच्छता जागरूकता कार्यक्रम' }
                }
            ]
        }
    ],
    donateTitle: {
        [Language.EN]: 'Support Our Cause',
        [Language.MR]: 'आमच्या कार्याला पाठिंबा द्या',
        [Language.HI]: 'हमारे कारण का समर्थन करें',
    },
    donateDesc: {
        [Language.EN]: 'Your contribution can make a significant impact on the lives of many. Help us continue our work.',
        [Language.MR]: 'तुमचे योगदान अनेकांच्या जीवनात महत्त्वपूर्ण बदल घडवू शकते. आमचे कार्य चालू ठेवण्यासाठी आम्हाला मदत करा.',
        [Language.HI]: 'आपका योगदान कई लोगों के जीवन पर महत्वपूर्ण प्रभाव डाल सकता है। हमारे काम को जारी रखने में हमारी मदद करें।',
    },
    donateButton: {
        [Language.EN]: 'Donate Now',
        [Language.MR]: 'आता दान करा',
        [Language.HI]: 'अभी दान करें',
    }
  },
  aboutUs: {
    pageQuote: {
        text: {
            [Language.EN]: 'We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far.',
            [Language.MR]: 'आपले विचार जसे असतात, तसेच आपण बनतो; म्हणून तुम्ही काय विचार करता याकडे लक्ष द्या. शब्द दुय्यम आहेत. विचार जिवंत राहतात; ते दूरवर प्रवास करतात.',
            [Language.HI]: 'हम वो हैं जो हमारे विचारों ने हमें बनाया है; इसलिए इस बात का ध्यान रखें कि आप क्या सोचते हैं। शब्द गौण हैं। विचार रहते हैं; वे दूर तक यात्रा करते हैं।',
        },
        author: {
            [Language.EN]: 'Swami Vivekananda',
            [Language.MR]: 'स्वामी विवेकानंद',
            [Language.HI]: 'स्वामी विवेकानंद',
        }
    },
    title: {
      [Language.EN]: 'About Sarvangini Foundation',
      [Language.MR]: 'सर्वांगिणी फाउंडेशन बद्दल',
      [Language.HI]: 'सर्वांगिणी फाउंडेशन के बारे में',
    },
    vision: {
      [Language.EN]: 'Our Vision',
      [Language.MR]: 'आमची दृष्टी',
      [Language.HI]: 'हमारा नज़रिया',
    },
    mission: {
      [Language.EN]: 'Our Mission',
      [Language.MR]: 'आमचे ध्येय',
      [Language.HI]: 'हमारा मिशन',
    },
    history: {
      [Language.EN]: 'Our History',
      [Language.MR]: 'आमचा इतिहास',
      [Language.HI]: 'हमारा इतिहास',
    },
    teamTitle: {
      [Language.EN]: 'Meet Our Team',
      [Language.MR]: 'आमच्या टीमला भेटा',
      [Language.HI]: 'हमारी टीम से मिलें',
    },
    placeholders: {
      vision: {
        [Language.EN]: 'To create a society where every woman is empowered, respected, and self-reliant.',
        [Language.MR]: 'असा समाज निर्माण करणे जिथे प्रत्येक स्त्री सक्षम, आदरणीय आणि आत्मनिर्भर असेल.',
        [Language.HI]: 'एक ऐसे समाज का निर्माण करना जहां हर महिला सशक्त, सम्मानित और आत्मनिर्भर हो।',
      },
      mission: {
        [Language.EN]: 'To provide comprehensive support to women through matrimonial services, skill development, and social welfare programs.',
        [Language.MR]: 'वैवाहिक सेवा, कौशल्य विकास आणि समाजकल्याण कार्यक्रमांद्वारे महिलांना व्यापक सहाय्य प्रदान करणे.',
        [Language.HI]: 'वैवाहिक सेवाओं, कौशल विकास और समाज कल्याण कार्यक्रमों के माध्यम से महिलाओं को व्यापक सहायता प्रदान करना।',
      },
      history: {
        [Language.EN]: 'Founded in 2020 with a small team of passionate individuals, Sarvangini has grown into a trusted organization dedicated to women\'s welfare.',
        [Language.MR]: '२०२० मध्ये उत्साही व्यक्तींच्या एका छोट्या टीमसह स्थापित, सर्वांगिणी महिलांच्या कल्याणासाठी समर्पित एक विश्वसनीय संस्था बनली आहे.',
        [Language.HI]: '2020 में उत्साही व्यक्तियों की एक छोटी टीम के साथ स्थापित, सर्वांगिणी महिलाओं के कल्याण के लिए समर्पित एक विश्वसनीय संगठन बन गया है।',
      },
    },
    teamDetails: {
        phone: {
            [Language.EN]: 'Phone',
            [Language.MR]: 'फोन',
            [Language.HI]: 'फ़ोन',
        },
        email: {
            [Language.EN]: 'Email',
            [Language.MR]: 'ईमेल',
            [Language.HI]: 'ईमेल',
        }
    },
    team: [
        {
            id: 'nandini-gadakh',
            name: 'Nandini Gadakh',
            role: {
                [Language.EN]: 'Founder & President',
                [Language.MR]: 'संस्थापक आणि अध्यक्ष',
                [Language.HI]: 'संस्थापक और अध्यक्ष',
            },
            vision: {
                [Language.EN]: 'My vision is to uplift every woman in our community, providing them with the tools and opportunities to lead a dignified and successful life.',
                [Language.MR]: 'माझ्या समाजातील प्रत्येक महिलेला उन्नत करणे, त्यांना सन्माननीय आणि यशस्वी जीवन जगण्यासाठी साधने आणि संधी उपलब्ध करून देणे हे माझे ध्येय आहे.',
                [Language.HI]: 'मेरा दृष्टिकोण हमारे समुदाय की हर महिला को ऊपर उठाना है, उन्हें एक सम्मानित और सफल जीवन जीने के लिए उपकरण और अवसर प्रदान करना है।',
            },
            photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
            contact: '+91 7972461024',
            email: 'nandini@sarvangini.org'
        }
    ],
  },
  contactUs: {
    pageQuote: {
        text: {
            [Language.EN]: 'The single most important thing in a marriage is not communication, but respect.',
            [Language.MR]: 'लग्नातील सर्वात महत्त्वाची गोष्ट संवाद नसून आदर आहे.',
            [Language.HI]: 'विवाह में सबसे महत्वपूर्ण चीज संचार नहीं, बल्कि सम्मान है।',
        },
        author: {
            [Language.EN]: 'Aristotle',
            [Language.MR]: 'ऍरिस्टॉटल',
            [Language.HI]: 'अरस्तू',
        }
    },
    title: {
      [Language.EN]: 'Contact Us',
      [Language.MR]: 'आमच्याशी संपर्क साधा',
      [Language.HI]: 'हमसे संपर्क करें',
    },
    getInTouch: {
      [Language.EN]: 'Get In Touch',
      [Language.MR]: 'संपर्कात रहा',
      [Language.HI]: 'संपर्क में रहें',
    },
    phone: '+91 7972461024',
    email: 'contact@sarvangini.org',
    address: {
      [Language.EN]: '123 Sarvangini Bhavan, Main Road, Pune, Maharashtra - 411001',
      [Language.MR]: '१२३ सर्वांगिणी भवन, मुख्य रस्ता, पुणे, महाराष्ट्र - ४११००१',
      [Language.HI]: '१२३ सर्वांगिणी भवन, मुख्य सड़क, पुणे, महाराष्ट्र - ४११००१',
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.187243916781!2d73.85674371536255!3d18.52043038740929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0792e3a1f8b%3A0x2d1f8a8b1b1b1b1b!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1633026857102!5m2!1sen!2sin',
    labels: {
        phone: {
            [Language.EN]: 'Phone',
            [Language.MR]: 'फोन',
            [Language.HI]: 'फ़ोन',
        },
        email: {
            [Language.EN]: 'Email',
            [Language.MR]: 'ईमेल',
            [Language.HI]: 'ईमेल',
        },
        address: {
            [Language.EN]: 'Address',
            [Language.MR]: 'पत्ता',
            [Language.HI]: 'पता',
        },
    },
  },
  joinUsPage: {
    pageQuote: {
        text: {
            [Language.EN]: 'I alone cannot change the world, but I can cast a stone across the waters to create many ripples.',
            [Language.MR]: 'मी एकटी जग बदलू शकत नाही, पण मी पाण्यावर दगड फेकून अनेक तरंग निर्माण करू शकते.',
            [Language.HI]: 'मैं अकेले दुनिया नहीं बदल सकती, लेकिन मैं पानी में पत्थर फेंककर कई लहरें पैदा कर सकती हूं।',
        },
        author: {
            [Language.EN]: 'Mother Teresa',
            [Language.MR]: 'मदर तेरेसा',
            [Language.HI]: 'मदर टेरेसा',
        }
    },
    title: {
        [Language.EN]: 'Join Our Mission',
        [Language.MR]: 'आमच्या मिशनमध्ये सामील व्हा',
        [Language.HI]: 'हमारे मिशन में शामिल हों',
    },
    subtitle: {
        [Language.EN]: 'Become a part of the Sarvangini family and contribute to our cause. We welcome volunteers and members who share our vision.',
        [Language.MR]: 'सर्वांगिणी कुटुंबाचा एक भाग बना आणि आमच्या कार्यासाठी योगदान द्या. आमच्या दृष्टीकोनात सहभागी होणाऱ्या स्वयंसेवक आणि सदस्यांचे आम्ही स्वागत करतो.',
        [Language.HI]: 'सर्वांगिणी परिवार का हिस्सा बनें और हमारे उद्देश्य में योगदान दें। हम उन स्वयंसेवकों और सदस्यों का स्वागत करते हैं जो हमारी दृष्टि साझा करते हैं।',
    },
    form: {
        name: {
            [Language.EN]: 'Full Name',
            [Language.MR]: 'पूर्ण नाव',
            [Language.HI]: 'पूरा नाम',
        },
        phone: {
            [Language.EN]: 'Phone Number',
            [Language.MR]: 'फोन नंबर',
            [Language.HI]: 'फोन नंबर',
        },
        email: {
            [Language.EN]: 'Email Address',
            [Language.MR]: 'ईमेल पत्ता',
            [Language.HI]: 'ईमेल पता',
        },
        occupation: {
            [Language.EN]: 'Occupation',
            [Language.MR]: 'व्यवसाय',
            [Language.HI]: 'व्यवसाय',
        },
        education: {
            [Language.EN]: 'Education',
            [Language.MR]: 'शिक्षण',
            [Language.HI]: 'शिक्षा',
        },
        interestReason: {
            [Language.EN]: 'Why do you want to join us?',
            [Language.MR]: 'तुम्ही आमच्यात का सामील होऊ इच्छिता?',
            [Language.HI]: 'आप हमसे क्यों जुड़ना चाहते हैं?',
        },
        submit: {
            [Language.EN]: 'Submit Application',
            [Language.MR]: 'अर्ज सादर करा',
            [Language.HI]: 'आवेदन जमा करें',
        },
        success: {
            [Language.EN]: 'Thank you for your interest! We will get back to you soon.',
            [Language.MR]: 'तुमच्या स्वारस्याबद्दल धन्यवाद! आम्ही लवकरच तुमच्याशी संपर्क साधू.',
            [Language.HI]: 'आपकी रुचि के लिए धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।',
        },
        whatsappMessage: {
            [Language.EN]: 'New Volunteer Application:\n\nName: {name}\nPhone: {phone}\nEmail: {email}\nOccupation: {occupation}\nEducation: {education}\nReason: {interestReason}',
            [Language.MR]: 'नवीन स्वयंसेवक अर्ज:\n\nनाव: {name}\nफोन: {phone}\nईमेल: {email}\nव्यवसाय: {occupation}\nशिक्षण: {education}\nकारण: {interestReason}',
            [Language.HI]: 'नया स्वयंसेवक आवेदन:\n\nनाम: {name}\nफ़ोन: {phone}\nईमेल: {email}\nव्यवसाय: {occupation}\nशिक्षा: {education}\nकारण: {interestReason}',
        }
    }
  },
  donatePage: {
    pageQuote: {
        text: {
            [Language.EN]: 'The highest result of education is tolerance.',
            [Language.MR]: 'शिक्षणाचे सर्वोच्च फळ सहिष्णुता आहे.',
            [Language.HI]: 'शिक्षा का उच्चतम परिणाम सहिष्णुता है।',
        },
        author: {
            [Language.EN]: 'Helen Keller',
            [Language.MR]: 'हेलन केलर',
            [Language.HI]: 'हेलेन केलर',
        }
    },
    title: {
      [Language.EN]: 'Donate & Support',
      [Language.MR]: 'दान करा आणि समर्थन द्या',
      [Language.HI]: 'दान करें और समर्थन करें',
    },
    supportCause: {
      [Language.EN]: 'Your generosity helps us empower women and build a better future for our community.',
      [Language.MR]: 'तुमची उदारता आम्हाला महिलांना सक्षम करण्यास आणि आमच्या समाजासाठी एक चांगले भविष्य घडविण्यात मदत करते.',
      [Language.HI]: 'आपकी उदारता हमें महिलाओं को सशक्त बनाने और हमारे समुदाय के लिए एक बेहतर भविष्य बनाने में मदद करती है।',
    },
    scanToPay: {
      [Language.EN]: 'Scan QR to Pay',
      [Language.MR]: 'पेमेंट करण्यासाठी QR स्कॅन करा',
      [Language.HI]: 'भुगतान करने के लिए क्यूआर स्कैन करें',
    },
    directTransfer: {
      [Language.EN]: 'Direct Bank Transfer',
      [Language.MR]: 'थेट बँक हस्तांतरण',
      [Language.HI]: 'प्रत्यक्ष बैंक हस्तांतरण',
    },
    upiId: 'sarvangini@upi',
    bankAccount: '123456789012 (IFSC: SBIN0001234)',
    qrCode: 'https://via.placeholder.com/256x256/FFFFFF/000000?text=Scan+to+Donate',
    inquiryButton: {
        [Language.EN]: 'Inquire on WhatsApp',
        [Language.MR]: 'व्हॉट्सॲपवर चौकशी करा',
        [Language.HI]: 'व्हाट्सएप पर पूछताछ करें',
    },
    inquiryMessage: {
        [Language.EN]: 'Hello, I would like to inquire about making a donation.',
        [Language.MR]: 'नमस्कार, मला देणगी देण्याबद्दल चौकशी करायची आहे.',
        [Language.HI]: 'नमस्ते, मैं दान करने के बारे में पूछताछ करना चाहता हूं।',
    },
    inquiryHelpText: {
        [Language.EN]: 'For any questions or to get a donation receipt, please contact us.',
        [Language.MR]: 'कोणत्याही प्रश्नांसाठी किंवा देणगीची पावती मिळवण्यासाठी, कृपया आमच्याशी संपर्क साधा.',
        [Language.HI]: 'किसी भी प्रश्न के लिए या दान रसीद प्राप्त करने के लिए, कृपया हमसे संपर्क करें।',
    }
  },
  footer: {
    copyright: {
      [Language.EN]: `© ${new Date().getFullYear()} Sarvangini Foundation. All rights reserved.`,
      [Language.MR]: `© ${new Date().getFullYear()} सर्वांगिणी फाउंडेशन. सर्व हक्क राखीव.`,
      [Language.HI]: `© ${new Date().getFullYear()} सर्वांगिणी फाउंडेशन। सर्वाधिकार सुरक्षित।`,
    },
    quickLinks: {
      [Language.EN]: 'Quick Links',
      [Language.MR]: 'क्विक लिंक्स',
      [Language.HI]: 'क्विक लिंक्स',
    },
    followUs: {
      [Language.EN]: 'Follow Us',
      [Language.MR]: 'आम्हाला फॉलो करा',
      [Language.HI]: 'हमें फॉलो करें',
    },
    adminLogin: {
      [Language.EN]: 'Admin Login',
      [Language.MR]: 'प्रशासक लॉगिन',
      [Language.HI]: 'एडमिन लॉग इन',
    },
    socialLinks: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
        youtube: '#',
    },
    quote1: {
        text: {
            [Language.EN]: 'This life is short, the vanities of the world are transient, but they alone live who live for others, the rest are more dead than alive.',
            [Language.MR]: 'हे जीवन क्षणभंगुर आहे, जगाचे ऐहिक सुख क्षणिक आहे, परंतु तेच जगतात जे इतरांसाठी जगतात, बाकीचे तर जिवंत असूनही मृतासारखे आहेत.',
            [Language.HI]: 'यह जीवन छोटा है, संसार के सुख क्षणभँगुर हैं, परन्तु वे ही जीवित हैं जो दूसरों के लिये जीते हैं, बाकी तो जीवित से भी अधिक मृत हैं।',
        },
        author: {
            [Language.EN]: 'Swami Vivekananda',
            [Language.MR]: 'स्वामी विवेकानंद',
            [Language.HI]: 'स्वामी विवेकानंद',
        }
    },
    quote2: {
        text: {
            [Language.EN]: 'If you light a lamp for someone else, it will also brighten your path.',
            [Language.MR]: 'जर तुम्ही दुसऱ्यासाठी दिवा लावला, तर तो तुमचाही मार्ग उजळवेल.',
            [Language.HI]: 'यदि आप किसी और के लिए दीपक जलाते हैं, तो वह आपका मार्ग भी रोशन करेगा।',
        },
        author: {
            [Language.EN]: 'Gautam Buddha',
            [Language.MR]: 'गौतम बुद्ध',
            [Language.HI]: 'गौतम बुद्ध',
        }
    }
  },
  adminDashboard: {
    noPendingProfiles: {
      [Language.EN]: 'No new profiles are waiting for approval.',
      [Language.MR]: 'कोणतेही नवीन प्रोफाइल मंजुरीसाठी प्रलंबित नाहीत.',
      [Language.HI]: 'कोई नई प्रोफ़ाइल अनुमोदन की प्रतीक्षा नहीं कर रही है।',
    },
    noApprovedProfiles: {
      [Language.EN]: 'There are no approved profiles yet.',
      [Language.MR]: 'अद्याप कोणतेही मंजूर प्रोफाइल नाहीत.',
      [Language.HI]: 'अभी तक कोई स्वीकृत प्रोफ़ाइल नहीं है।',
    },
    confirmations: {
        logout: {
            [Language.EN]: 'Are you sure you want to logout?',
            [Language.MR]: 'तुम्हाला खात्री आहे की तुम्हाला लॉगआउट करायचे आहे?',
            [Language.HI]: 'क्या आप वाकई लॉगआउट करना चाहते हैं?',
        },
        resetContent: {
            [Language.EN]: 'Are you sure you want to reset all website content to default? This action cannot be undone.',
            [Language.MR]: 'तुम्हाला खात्री आहे की तुम्हाला सर्व वेबसाइट सामग्री डीफॉल्टवर रीसेट करायची आहे? ही क्रिया पूर्ववत केली जाऊ शकत नाही.',
            [Language.HI]: 'क्या आप वाकई सभी वेबसाइट सामग्री को डिफ़ॉल्ट पर रीसेट करना चाहते हैं? यह क्रिया पूर्ववत नहीं की जा सकती है।',
        },
        deleteProfile: {
            [Language.EN]: 'Are you sure you want to delete this profile permanently?',
            [Language.MR]: 'तुम्हाला खात्री आहे की तुम्हाला हे प्रोफाइल कायमचे हटवायचे आहे?',
            [Language.HI]: 'क्या आप वाकई इस प्रोफ़ाइल को स्थायी रूप से हटाना चाहते हैं?',
        },
        changeProfileStatus: {
            [Language.EN]: 'Are you sure you want to change the status of this profile?',
            [Language.MR]: 'तुम्हाला खात्री आहे की तुम्हाला या प्रोफाइलची स्थिती बदलायची आहे?',
            [Language.HI]: 'क्या आप वाकई इस प्रोफ़ाइल की स्थिति बदलना चाहते हैं?',
        },
    },
  },
  marriageProfiles: [],
};
