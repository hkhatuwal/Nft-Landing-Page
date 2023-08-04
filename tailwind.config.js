module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                lexend: ["'Lexend'", "'sans-serif'"],
            },
            colors: {
                "custom-white": "#fff",
                "custom-black": "#000",
                "custom-blue": "#0000F5",
                "custom-black-bg": "#010100",
                "card-bg": "#1F2122",
                "card-bg2": "#1A1B1C",
                "card-bg-light": "#EEF0F4",
            },
        },
    },
    plugins: [],
    mode: 'jit'
};
