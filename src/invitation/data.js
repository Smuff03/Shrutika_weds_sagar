export const COUPLE = {
    groom: { name: "Sagar Telange", father: "Late Sakharam Telange", mother: "Sangeeta Telange" },
    bride: { name: "Shrutika Khade", father: "Ganesh Khade", mother: "Pooja Khade" },
};

export const WEDDING = {
    dateLabel: "Saturday, 02nd January 2027",
    shortDate: "02 · 01 · 2027",
    muhurat: "5:55 PM",
    venue: "River Trail Adventure Camp",
    address: "River Trail Adventure Camp, Ambole, Pali, Sudhagad, Raigad, Maharashtra 410205",
    eventAddress: "At - Ambole, Post - Pali Taluka, Pali, Maharashtra 410205",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=River+Trail+Adventure+Camp",
    muhuratISO: "2027-01-02T17:55:00+05:30",
};

export const MAPS_URL = WEDDING.mapsUrl;

export const EVENTS = [
    {
        id: "engagement",
        name: "Engagement",
        date: "Friday, 01st January 2027",
        time: "4:30 PM onwards",
        venue: WEDDING.venue,
        note: "Ring ceremony followed by dinner.",
        dressCode: "South Indian Traditional",
        colour: "#D98A94",
        img: "/images/ill_engagement.png",
    },
    {
        id: "sangeet",
        name: "Sangeet",
        date: "Friday, 01st January 2027",
        time: "8:00 PM – 10:00 PM",
        venue: WEDDING.venue,
        note: "Henna artists, music and games.",
        dressCode: "Western Wear",
        colour: "#6E1F2F",
        img: "/images/ill_sangeet.png",
    },
    {
        id: "haldi",
        name: "Haldi",
        date: "Saturday, 02nd January 2027",
        time: "10:00 AM – 1:00 PM",
        venue: WEDDING.venue,
        note: "Wear yellow & play with turmeric!",
        dressCode: "Yellow & Pastel shades",
        colour: "#E9B62F",
        img: "/images/ill_haldi.png",
    },
    {
        id: "wedding",
        name: "Wedding Ceremony",
        date: "Saturday, 02nd January 2027",
        time: "5:00 PM · Muhurat 5:55 PM",
        venue: WEDDING.venue,
        note: "Traditional Maharashtrian Vivah Vidhi. Muhurat 05:55 PM.",
        dressCode: "Traditional Maharashtrian",
        colour: "#B8860B",
        img: "/images/ill_wedding.png",
    },
    {
        id: "reception",
        name: "Reception",
        date: "Saturday, 02nd January 2027",
        time: "8:00 PM – 11:00 PM",
        venue: WEDDING.venue,
        note: "Dinner, dance and celebrations.",
        dressCode: "Formal & Indo-western",
        colour: "#E8CE9C",
        img: "/images/ill_reception.png",
    },
];

export const PHOTOS = [
    { src: "/images/photo-1.jpeg", caption: "Where every love story begins" },
    { src: "/images/photo-2.jpeg", caption: "Two hearts, one sunset" },
    { src: "/images/photo-3.jpeg", caption: "The promise of forever" },
    { src: "/images/photo-4.jpeg", caption: "Holding you, always" },
    { src: "/images/photo-5.jpeg", caption: "Under the same golden sky" },
    { src: "/images/photo-6.jpeg", caption: "Hand in hand, heart to heart" },
    { src: "/images/photo-7.jpeg", caption: "You are my today & all of my tomorrows" },
    { src: "/images/photo-8.jpeg", caption: "Written in the stars" },
    { src: "/images/photo-9.jpeg", caption: "And so, the adventure begins" },
];

export const reveal = {
    initial: { opacity: 0, y: 36 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.75, ease: "easeOut" },
};
