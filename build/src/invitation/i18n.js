import { createContext, useContext, useState } from "react";

export const translations = {
    en: {
        welcome: "Welcome",
        bookScript: "Wedding Invitation",
        tapHint: "Tap the Book to Open",
        together: "Together with Their Families",
        sonOf: "Son of",
        daughterOf: "Daughter of",
        requestMsg: [
            "request the honour of your presence",
            "as two souls unite in holy matrimony",
        ],
        weddingDate: "Saturday, 02nd January 2027",
        saveTitle: "Save",
        saveScript: "the Date",
        sealed: "A sacred secret is sealed within…",
        pullHint: "Pull the tassel",
        revealedToast: "The date is revealed!",
        scrollScript: "Save the Date",
        scrollDate: "Saturday, 02nd January 2027",
        muhuratLabel: "Muhurat · 5:55 PM",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
        addToCalendar: "Add to Calendar",
        icsBtn: "iPhone / Outlook (.ics)",
        icsToast: "Calendar file downloaded",
        functionsTitle: "Wedding",
        functionsScript: "Functions",
        swipeHint: "Swipe to explore each celebration",
        viewOnMap: "View on Map",
        storyTitle: "Our",
        storyScript: "Story",
        storySub: "Moments that led us to forever",
        receptionEyebrow: "And the celebration continues…",
        receptionTitle: "Grand",
        receptionScript: "Reception",
        receptionDate: "Saturday, 02nd January 2027",
        receptionTime: "8:00 PM onwards",
        receptionNote: "Dinner, dance and celebrations under the stars",
        locationTitle: "Wedding",
        locationScript: "Location",
        locationSub: "Come, celebrate with us by the river trail",
        tapMap: "Tap to open in Google Maps",
        getDirections: "Get Directions",
        copyAddress: "Copy Address",
        copied: "Copied!",
        copiedToast: "Address copied!",
        closingTitle: "We can't wait to",
        closingScript: "celebrate with you!",
        withLove: "With love,",
        families: { lead: "The", f1: "Telange", amp: "&", f2: "Khade", trail: "Families" },
        photoCaptions: [
            "Where every love story begins",
            "Two hearts, one sunset",
            "The promise of forever",
            "Holding you, always",
            "Under the same golden sky",
            "Hand in hand, heart to heart",
            "You are my today & all of my tomorrows",
            "Written in the stars",
            "And so, the adventure begins",
        ],
        events: {
            engagement: {
                name: "Engagement",
                date: "Friday, 01st January 2027",
                time: "4:30 PM onwards",
                dressCode: "Festive Ethnic",
                note: "Ring ceremony followed by dinner.",
            },
            sangeet: {
                name: "Sangeet",
                date: "Friday, 01st January 2027",
                time: "8:00 PM – 10:00 PM",
                dressCode: "Festive Indian Wear",
                note: "Henna artists, music and games.",
            },
            haldi: {
                name: "Haldi",
                date: "Saturday, 02nd January 2027",
                time: "10:00 AM – 1:00 PM",
                dressCode: "Yellow & Ivory",
                note: "Wear yellow & play with turmeric!",
            },
            wedding: {
                name: "Wedding Ceremony",
                date: "Saturday, 02nd January 2027",
                time: "5:00 PM · Muhurat 5:55 PM",
                dressCode: "Traditional Maharashtrian",
                note: "Traditional Maharashtrian Vivah Vidhi. Muhurat 05:55 PM.",
            },
            reception: {
                name: "Reception",
                date: "Saturday, 02nd January 2027",
                time: "8:00 PM – 11:00 PM",
                dressCode: "Formal & Cocktail",
                note: "Dinner, dance and celebrations.",
            },
        },
    },
    mr: {
        welcome: "स्वागत आहे",
        bookScript: "लग्न निमंत्रण",
        tapHint: "उघडण्यासाठी पुस्तकावर टॅप करा",
        together: "दोन्ही घरांच्या सहमतीने",
        sonOf: "यांचे चिरंजीव",
        daughterOf: "यांची चिरंजीवी",
        requestMsg: [
            "पवित्र लग्नबंधनाच्या शुभमुहूर्तीस आपण",
            "सहभागी व्हावे, हीच आमची नम्र विनंती",
        ],
        weddingDate: "शनिवार, ०२ जानेवारी २०२७",
        saveTitle: "शुभ",
        saveScript: "मुहूर्त",
        sealed: "या भव्य गुंफेत एक शुभ घडी दडली आहे…",
        pullHint: "गुंफा ओढा",
        revealedToast: "शुभ तारीख समोर आली!",
        scrollScript: "शुभ मुहूर्त",
        scrollDate: "शनिवार, ०२ जानेवारी २०२७",
        muhuratLabel: "शुभ मुहूर्त · सायं. ५:५५",
        days: "दिवस",
        hours: "तास",
        minutes: "मिनिटे",
        seconds: "सेकंद",
        addToCalendar: "कॅलेंडरमध्ये जोडा",
        icsBtn: "iPhone / Outlook (.ics)",
        icsToast: "कॅलेंडर फाईल डाउनलोड झाली",
        functionsTitle: "शुभ",
        functionsScript: "समारंभ",
        swipeHint: "प्रत्येक समारंभ पाहण्यासाठी स्वाइप करा",
        viewOnMap: "नकाशावर पहा",
        storyTitle: "आमची",
        storyScript: "गोष्ट",
        storySub: "जे क्षण आम्हाला सदासर्वदा एकत्र आणले",
        receptionEyebrow: "आनंदोत्सव असेच सुरू राहो…",
        receptionTitle: "स्नेह",
        receptionScript: "संमेलन",
        receptionDate: "शनिवार, ०२ जानेवारी २०२७",
        receptionTime: "रात्री ८:०० पासून",
        receptionNote: "भोजन, नृत्य आणि ताऱ्यांखाली आनंदोत्सव",
        locationTitle: "लग्नाचे",
        locationScript: "ठिकाण",
        locationSub: "नदीच्या काठावरील या सुंदर ठिकाणी आमच्या स्वागतास या",
        tapMap: "गूगल मॅप्सवर उघडा",
        getDirections: "मार्गदर्शन घ्या",
        copyAddress: "पत्ता कॉपी करा",
        copied: "कॉपी झाले!",
        copiedToast: "पत्ता कॉपी झाला!",
        closingTitle: "आनंदोत्सवास आम्ही",
        closingScript: "उत्सुक आहोत!",
        withLove: "आपले नम्र,",
        families: { lead: "", f1: "तेलंगे", amp: "व", f2: "खाडे", trail: "घरांतर्फे" },
        photoCaptions: [
            "जिथून सगळं सुरू झालं",
            "दोन मनं, एक सूर्यास्त",
            "सदासर्वदाचं वचन",
            "सदा तुझ्याच सोबतीने",
            "त्याच सोनेरी आकाशाखाली",
            "हातात हात, हृदयात हृदय",
            "तूच माझा आज आणि संपूर्ण उद्या",
            "ताऱ्यांमध्ये लिहिलेलं",
            "आणि असं, नवं प्रवास सुरू झालं",
        ],
        events: {
            engagement: {
                name: "एन्गेजमेंट",
                date: "शुक्रवार, ०१ जानेवारी २०२७",
                time: "दुपारी ४:३० पासून",
                dressCode: "उत्सवी पोशाख",
                note: "मुठ गळण्याचा शुभ समारंभ, त्याअनंतर भोजन.",
            },
            sangeet: {
                name: "संगीत समारंभ",
                date: "शुक्रवार, ०१ जानेवारी २०२७",
                time: "रात्री ८:०० – १०:००",
                dressCode: "पारंपरिक पोशाख",
                note: "मेहंदी, संगीत आणि खेळ.",
            },
            haldi: {
                name: "हळदी समारंभ",
                date: "शनिवार, ०२ जानेवारी २०२७",
                time: "सकाळी १०:०० – दुपारी १:००",
                dressCode: "पिवळा व पांढरा",
                note: "पिवळे पोशाख घाला आणि हळदीवर खेळा!",
            },
            wedding: {
                name: "लग्न सोहळा",
                date: "शनिवार, ०२ जानेवारी २०२७",
                time: "सायंकाळी ५:०० · मुहूर्त ५:५५",
                dressCode: "पारंपरिक मराठमोळा",
                note: "पारंपरिक महाराष्ट्रीय विवाह विधी. शुभ मुहूर्त ५:५५ PM.",
            },
            reception: {
                name: "स्नेहसंमेलन",
                date: "शनिवार, ०२ जानेवारी २०२७",
                time: "रात्री ८:०० – ११:००",
                dressCode: "फॉर्मल पोशाख",
                note: "भोजन, नृत्य आणि आनंदोत्सव.",
            },
        },
    },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(() => {
        try {
            return localStorage.getItem("inv-lang") === "mr" ? "mr" : "en";
        } catch {
            return "en";
        }
    });
    const toggle = () =>
        setLang((l) => {
            const next = l === "en" ? "mr" : "en";
            try {
                localStorage.setItem("inv-lang", next);
            } catch { }
            return next;
        });
    return (
        <LanguageContext.Provider value={{ lang, setLang, toggle, t: translations[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLang = () => useContext(LanguageContext);
