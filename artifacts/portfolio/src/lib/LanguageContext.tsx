import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "mr" | "hi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => prev === "en" ? "mr" : prev === "mr" ? "hi" : "en");
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About Me",
    "nav.plans": "Investment Plans",
    "nav.benefits": "Benefits",
    "nav.success": "Success Stories",
    "nav.referral": "Referral",
    "nav.contact": "Contact",
    "hero.welcome": "Welcome",
    "hero.name": "Mr. Narayan Paranjape",
    "hero.title": "Retired Class 1 Govt. Officer (FDCM) | Advisor & Expert Patron",
    "hero.org": "Tirumalla Tirupati Multistate Co-operative Credit Society Ltd. — Ballarpur Branch",
    "hero.invest": "Invest Now",
    "hero.whatsapp": "Contact on WhatsApp",
    "about.title": "About Me",
    "about.desc1": "With over 30 years of distinguished service as a Class 1 Gazetted Officer in the Forest Development Corporation of Maharashtra (FDCM), I have dedicated my career to integrity, structure, and public service.",
    "about.desc2": "Today, I apply decades of administrative and financial expertise as an Advisor and Expert Patron at TTMS Credit Society, helping the Ballarpur community secure their financial future with reliable, personalized guidance.",
    "about.highlight1": "Government Service",
    "about.highlight2": "Community Trust",
    "about.highlight3": "Financial Expertise",
    "about.highlight4": "Unwavering Integrity",
    "plans.title": "Investment Plans",
    "plans.subtitle": "Secure your future with our highly rewarding Fixed Deposit rates.",
    "plans.duration": "Duration",
    "plans.rate": "Interest Rate",
    "plans.months12": "12 Months",
    "plans.months24": "24 Months",
    "plans.months36": "36 Months",
    "plans.months60": "60 Months",
    "plans.best": "Best Returns",
    "plans.note": "Special Benefits for Women & Senior Citizens",
    "benefits.title": "Why Invest With Us?",
    "benefits.card1.title": "Safe & Reliable",
    "benefits.card1.desc": "RBI-monitored cooperative credit society ensuring your hard-earned money is secure.",
    "benefits.card2.title": "High Returns",
    "benefits.card2.desc": "Earn up to 12.50% per annum, significantly higher than standard bank rates.",
    "benefits.card3.title": "Personalized Advisory",
    "benefits.card3.desc": "Direct, one-on-one guidance from Mr. Paranjape to choose the right plan for you.",
    "benefits.card4.title": "Trusted Local Presence",
    "benefits.card4.desc": "Deeply rooted in the Ballarpur community, serving you personally and transparently.",
    "success.title": "Success Stories",
    "success.card1": "A retired teacher from Ballarpur invested ₹2 lakhs in a 36-month FD and earned significant returns beyond bank rates. She was guided personally by Mr. Paranjape.",
    "success.card2": "A local shop owner diversified savings into a 60-month FD after Mr. Paranjape explained the benefits clearly. Now planning to reinvest.",
    "success.card3": "A senior citizen received special benefits and personalized attention throughout the process. Trusts Mr. Paranjape completely for financial advice.",
    "referral.title": "Referral Program",
    "referral.desc": "Help your friends and family secure their financial future. Refer them to Mr. Paranjape and earn special benefits for every successful investment.",
    "referral.share": "Share on WhatsApp",
    "contact.title": "Get in Touch",
    "contact.desc": "Available for home visits and personal consultations in Ballarpur.",
    "contact.phone": "Call Now",
    "contact.whatsapp": "WhatsApp Message",
    "contact.address": "Tirumalla Tirupati Multistate Co-operative Credit Society Ltd., Ballarpur Branch, Chandrapur District, Maharashtra",
    "poetry.badge": "Published Author",
    "poetry.title": "Literary Works",
    "poetry.subtitle": "Beyond finance, Mr. Paranjape is a celebrated Marathi poet whose verses inspire and uplift communities.",
    "poetry.book": "Aavahan Marathi Kavya Sangrah",
    "poetry.bookdesc": "A collection of heartfelt Marathi poems that reflect Mr. Paranjape's deep love for his culture, language, and people. The book is a tribute to Maharashtra's rich literary tradition.",
    "poetry.video": "Watch the first poem from the book",
    "poetry.ecopy": "Request a Free E-Copy",
    "poetry.ecopy.desc": "The e-copy of this book is freely available on request. Connect on WhatsApp to receive your copy.",
    "footer.rights": "All rights reserved.",
  },
  mr: {
    "nav.home": "मुख्यपृष्ठ",
    "nav.about": "माझ्याबद्दल",
    "nav.plans": "गुंतवणूक योजना",
    "nav.benefits": "फायदे",
    "nav.success": "यशोगाथा",
    "nav.referral": "रेफरल प्रोग्राम",
    "nav.contact": "संपर्क",
    "hero.welcome": "स्वागत आहे",
    "hero.name": "श्री. नारायण परांजपे",
    "hero.title": "निवृत्त वर्ग 1 सरकारी अधिकारी (FDCM) | सल्लागार आणि तज्ञ आश्रयदाते",
    "hero.org": "तिरुमल्ला तिरुपती मल्टीस्टेट को-ऑपरेटिव्ह क्रेडिट सोसायटी लिमिटेड — बल्लारपूर शाखा",
    "hero.invest": "आत्ता गुंतवणूक करा",
    "hero.whatsapp": "WhatsApp वर संपर्क करा",
    "about.title": "माझ्याबद्दल",
    "about.desc1": "महाराष्ट्र वनविकास महामंडळ (FDCM) मध्ये वर्ग 1 राजपत्रित अधिकारी म्हणून ३० पेक्षा जास्त वर्षांच्या प्रदीर्घ सेवेसह, मी माझे जीवन प्रामाणिकपणा, शिस्त आणि जनसेवेसाठी समर्पित केले आहे.",
    "about.desc2": "आज, मी टीटीएमएस क्रेडिट सोसायटीमध्ये सल्लागार म्हणून माझ्या प्रशासकीय आणि आर्थिक अनुभवाचा वापर करत आहे, ज्यामुळे बल्लारपूरमधील नागरिकांना त्यांचे आर्थिक भविष्य सुरक्षित करण्यासाठी योग्य आणि वैयक्तिक मार्गदर्शन मिळते.",
    "about.highlight1": "सरकारी सेवा",
    "about.highlight2": "समाजाचा विश्वास",
    "about.highlight3": "आर्थिक तज्ञ",
    "about.highlight4": "अढळ प्रामाणिकता",
    "plans.title": "गुंतवणूक योजना",
    "plans.subtitle": "आमच्या सर्वोत्तम मुदत ठेव (FD) दरांसह तुमचे भविष्य सुरक्षित करा.",
    "plans.duration": "कालावधी",
    "plans.rate": "व्याजदर",
    "plans.months12": "१२ महिने",
    "plans.months24": "२४ महिने",
    "plans.months36": "३६ महिने",
    "plans.months60": "६० महिने",
    "plans.best": "सर्वोत्तम परतावा",
    "plans.note": "महिला आणि ज्येष्ठ नागरिकांसाठी विशेष फायदे",
    "benefits.title": "आमच्याकडे गुंतवणूक का करावी?",
    "benefits.card1.title": "सुरक्षित आणि विश्वसनीय",
    "benefits.card1.desc": "RBI-नियंत्रित सहकारी पतसंस्था, जेथे तुमचे कष्टाचे पैसे पूर्णपणे सुरक्षित आहेत.",
    "benefits.card2.title": "उच्च परतावा",
    "benefits.card2.desc": "प्रति वर्ष १२.५०% पर्यंत व्याज मिळवा, जे सामान्य बँक दरांपेक्षा लक्षणीयरीत्या जास्त आहे.",
    "benefits.card3.title": "वैयक्तिकृत मार्गदर्शन",
    "benefits.card3.desc": "श्री. परांजपे यांच्याकडून थेट मार्गदर्शन, जेणेकरून तुम्ही योग्य योजना निवडू शकाल.",
    "benefits.card4.title": "स्थानिक उपस्थिती आणि विश्वास",
    "benefits.card4.desc": "बल्लारपूर समाजात खोलवर रुजलेले, पारदर्शकतेने तुमची सेवा करण्यासाठी तत्पर.",
    "success.title": "यशोगाथा",
    "success.card1": "बल्लारपूरमधील एका निवृत्त शिक्षिकेने ३६ महिन्यांच्या FD मध्ये २ लाख रुपयांची गुंतवणूक केली आणि बँकेच्या दरापेक्षा खूप चांगला परतावा मिळवला. त्यांना श्री. परांजपे यांनी वैयक्तिकरित्या मार्गदर्शन केले.",
    "success.card2": "एका स्थानिक दुकानदाराने श्री. परांजपे यांच्या मार्गदर्शनाखाली ६० महिन्यांच्या FD मध्ये गुंतवणूक केली. आता ते पुन्हा गुंतवणूक करण्याचा विचार करत आहेत.",
    "success.card3": "एका ज्येष्ठ नागरिकाला प्रक्रियेदरम्यान विशेष फायदे आणि वैयक्तिक लक्ष दिले गेले. ते आर्थिक सल्ल्यासाठी श्री. परांजपे यांच्यावर पूर्ण विश्वास ठेवतात.",
    "referral.title": "रेफरल प्रोग्राम",
    "referral.desc": "तुमच्या मित्र आणि कुटुंबीयांचे आर्थिक भविष्य सुरक्षित करण्यात मदत करा. त्यांना श्री. परांजपे यांचा संदर्भ द्या आणि प्रत्येक यशस्वी गुंतवणुकीवर विशेष फायदे मिळवा.",
    "referral.share": "WhatsApp वर शेअर करा",
    "contact.title": "संपर्क साधा",
    "contact.desc": "बल्लारपूरमध्ये गृहभेटी आणि वैयक्तिक सल्लामसलतीसाठी उपलब्ध.",
    "contact.phone": "आता कॉल करा",
    "contact.whatsapp": "WhatsApp मेसेज",
    "contact.address": "तिरुमल्ला तिरुपती मल्टीस्टेट को-ऑपरेटिव्ह क्रेडिट सोसायटी लिमिटेड, बल्लारपूर शाखा, जिल्हा चंद्रपूर, महाराष्ट्र",
    "poetry.badge": "प्रकाशित लेखक",
    "poetry.title": "साहित्यिक कार्य",
    "poetry.subtitle": "वित्तीय क्षेत्राच्या पलीकडे, श्री. परांजपे एक प्रसिद्ध मराठी कवी आहेत ज्यांच्या कविता समाजाला प्रेरणा देतात.",
    "poetry.book": "आवाहन मराठी काव्य संग्रह",
    "poetry.bookdesc": "मराठी कवितांचा हा संग्रह श्री. परांजपे यांच्या संस्कृती, भाषा आणि लोकांवरील प्रेमाचे प्रतिबिंब आहे. हे पुस्तक महाराष्ट्राच्या समृद्ध साहित्यिक परंपरेला श्रद्धांजली आहे.",
    "poetry.video": "पुस्तकातील पहिली कविता पाहा",
    "poetry.ecopy": "मोफत ई-प्रत मागवा",
    "poetry.ecopy.desc": "या पुस्तकाची ई-प्रत विनंतीनुसार मोफत उपलब्ध आहे. आपली प्रत मिळवण्यासाठी WhatsApp वर संपर्क करा.",
    "footer.rights": "सर्व हक्क राखीव.",
  },
  hi: {
    "nav.home": "होम",
    "nav.about": "मेरे बारे में",
    "nav.plans": "निवेश योजनाएं",
    "nav.benefits": "लाभ",
    "nav.success": "सफलता की कहानियां",
    "nav.referral": "रेफरल प्रोग्राम",
    "nav.contact": "संपर्क",
    "hero.welcome": "स्वागत है",
    "hero.name": "श्री नारायण परांजपे",
    "hero.title": "सेवानिवृत्त वर्ग 1 सरकारी अधिकारी (FDCM) | सलाहकार एवं विशेषज्ञ संरक्षक",
    "hero.org": "तिरुमल्ला तिरुपति मल्टीस्टेट को-ऑपरेटिव क्रेडिट सोसाइटी लिमिटेड — बल्लारपुर शाखा",
    "hero.invest": "अभी निवेश करें",
    "hero.whatsapp": "WhatsApp पर संपर्क करें",
    "about.title": "मेरे बारे में",
    "about.desc1": "महाराष्ट्र वन विकास निगम (FDCM) में वर्ग 1 राजपत्रित अधिकारी के रूप में 30 से अधिक वर्षों की विशिष्ट सेवा के साथ, मैंने अपना जीवन ईमानदारी, अनुशासन और जनसेवा को समर्पित किया है।",
    "about.desc2": "आज, मैं TTMS क्रेडिट सोसाइटी में सलाहकार और विशेषज्ञ संरक्षक के रूप में अपने प्रशासनिक और वित्तीय अनुभव का उपयोग करते हुए बल्लारपुर समुदाय को उनके वित्तीय भविष्य को सुरक्षित करने में विश्वसनीय एवं व्यक्तिगत मार्गदर्शन प्रदान कर रहा हूं।",
    "about.highlight1": "सरकारी सेवा",
    "about.highlight2": "सामुदायिक विश्वास",
    "about.highlight3": "वित्तीय विशेषज्ञता",
    "about.highlight4": "अटल ईमानदारी",
    "plans.title": "निवेश योजनाएं",
    "plans.subtitle": "हमारी उच्च-लाभदायक सावधि जमा दरों के साथ अपना भविष्य सुरक्षित करें।",
    "plans.duration": "अवधि",
    "plans.rate": "ब्याज दर",
    "plans.months12": "12 महीने",
    "plans.months24": "24 महीने",
    "plans.months36": "36 महीने",
    "plans.months60": "60 महीने",
    "plans.best": "सर्वोत्तम रिटर्न",
    "plans.note": "महिलाओं और वरिष्ठ नागरिकों के लिए विशेष लाभ",
    "benefits.title": "हमारे साथ निवेश क्यों करें?",
    "benefits.card1.title": "सुरक्षित और विश्वसनीय",
    "benefits.card1.desc": "RBI-निगरानी सहकारी क्रेडिट सोसाइटी जो आपकी मेहनत की कमाई को सुरक्षित रखती है।",
    "benefits.card2.title": "उच्च रिटर्न",
    "benefits.card2.desc": "प्रति वर्ष 12.50% तक कमाएं, जो मानक बैंक दरों से काफी अधिक है।",
    "benefits.card3.title": "व्यक्तिगत सलाह",
    "benefits.card3.desc": "श्री परांजपे से सीधी, एक-एक सलाह जो आपके लिए सही योजना चुनने में मदद करे।",
    "benefits.card4.title": "विश्वसनीय स्थानीय उपस्थिति",
    "benefits.card4.desc": "बल्लारपुर समुदाय में गहरी जड़ें, व्यक्तिगत और पारदर्शी रूप से आपकी सेवा में।",
    "success.title": "सफलता की कहानियां",
    "success.card1": "बल्लारपुर की एक सेवानिवृत्त शिक्षिका ने 36 महीने की FD में ₹2 लाख निवेश किए और बैंक दरों से काफी अधिक रिटर्न अर्जित किया। उन्हें श्री परांजपे ने व्यक्तिगत रूप से मार्गदर्शन किया।",
    "success.card2": "एक स्थानीय दुकान मालिक ने श्री परांजपे के स्पष्ट विवरण के बाद 60 महीने की FD में बचत निवेश की। अब वे पुनः निवेश की योजना बना रहे हैं।",
    "success.card3": "एक वरिष्ठ नागरिक को पूरी प्रक्रिया में विशेष लाभ और व्यक्तिगत ध्यान मिला। वे वित्तीय सलाह के लिए श्री परांजपे पर पूरी तरह भरोसा करते हैं।",
    "referral.title": "रेफरल प्रोग्राम",
    "referral.desc": "अपने मित्रों और परिवार का वित्तीय भविष्य सुरक्षित करने में मदद करें। उन्हें श्री परांजपे से जोड़ें और हर सफल निवेश पर विशेष लाभ पाएं।",
    "referral.share": "WhatsApp पर शेयर करें",
    "contact.title": "संपर्क करें",
    "contact.desc": "बल्लारपुर में गृह भ्रमण और व्यक्तिगत परामर्श के लिए उपलब्ध।",
    "contact.phone": "अभी कॉल करें",
    "contact.whatsapp": "WhatsApp संदेश",
    "contact.address": "तिरुमल्ला तिरुपति मल्टीस्टेट को-ऑपरेटिव क्रेडिट सोसाइटी लिमिटेड, बल्लारपुर शाखा, चंद्रपुर जिला, महाराष्ट्र",
    "poetry.badge": "प्रकाशित लेखक",
    "poetry.title": "साहित्यिक कार्य",
    "poetry.subtitle": "वित्त से परे, श्री परांजपे एक प्रसिद्ध मराठी कवि हैं जिनकी कविताएं समुदायों को प्रेरित और उत्थान करती हैं।",
    "poetry.book": "आवाहन मराठी काव्य संग्रह",
    "poetry.bookdesc": "मराठी कविताओं का यह संग्रह श्री परांजपे की अपनी संस्कृति, भाषा और लोगों के प्रति गहरे प्रेम को दर्शाता है। यह पुस्तक महाराष्ट्र की समृद्ध साहित्यिक परंपरा को श्रद्धांजलि है।",
    "poetry.video": "पुस्तक की पहली कविता देखें",
    "poetry.ecopy": "मुफ़्त ई-प्रति मांगें",
    "poetry.ecopy.desc": "इस पुस्तक की ई-प्रति अनुरोध पर निःशुल्क उपलब्ध है। अपनी प्रति पाने के लिए WhatsApp पर संपर्क करें।",
    "footer.rights": "सभी अधिकार सुरक्षित।",
  }
};
