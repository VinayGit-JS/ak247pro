/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        screens: {
            'xs': '480px',  // Extra small devices
            'sm': '640px',  // Small devices
            'md': '737px',  // Medium devices
            'lg': '1024px', // Large devices
            'xl': '1280px', // Extra large devices
            '2xl': '1536px', // 2X large devices
            '3xl': '1920px', // Custom breakpoint
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#ff0000",
                    100: "#00D455"
                },
            },
            backgroundImage: {
                'theme-gradient': "linear-gradient(180deg, #00D4AA 0%, #00D455 100%)",
                'theme-gradient-light': "linear-gradient(180deg, rgba(0, 212, 170, 0.1) 0%, rgba(0, 212, 85, 0.1) 100%)"
            },
            fontFamily: {
                inter: '"Inter", serif',
            }
        },
    },
    plugins: [],
}
