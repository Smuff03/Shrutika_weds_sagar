const withOpacity = (hex, alpha) => hex;

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                ivory: "#FFF9F1",
                cream: "#FBF3E8",
                blush: "#F7E3DE",
                blushdeep: "#EFC9C4",
                wine: "#6E1F2F",
                winedeep: "#4A1220",
                gold: "#D4AF37",
                golddeep: "#B98A2F",
                champagne: "#E8CE9C",
            },
            fontFamily: {
                display: ['"Playfair Display"', "Georgia", "serif"],
                body: ['"Montserrat"', "sans-serif"],
                script: ['"Great Vibes"', "cursive"],
            },
            boxShadow: {
                gold: "0 0 0 1px rgba(212,175,55,0.55), 0 0 24px rgba(212,175,55,0.18)",
                card: "0 18px 40px -18px rgba(74,18,32,0.45)",
            },
        },
    },
    plugins: [],
};
