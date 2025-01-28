/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            screens: {
                'xs': '320px',
                'xsm': '375px',
                'sm': '475px',
                '2sm': '600px',
                'md': '768px',
                '2md': '980px',
                'lg': '1025px',
                '2lg': '1290px',
                '3lg': '1360px',
                'xl': '1442px',
                '2xl': '1560px',
                '3xl': '1650px',
                '4xl': '1750px'
            }
        }
    }
};