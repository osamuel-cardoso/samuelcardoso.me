import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'selector',
    content: [
        './src/_components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            display: ['var(--font-display)'],
            text: ['var(--font-text)'],
        },
        colors: {
            neutral: {
                '25': '#fafafa',
                '50': '#f6f6f6',
                '60': '#f2f2f2',
                '75': '#eeeeee',
                '100': '#e7e7e7',
                '200': '#d1d1d1',
                '300': '#b0b0b0',
                '400': '#888888',
                '500': '#6d6d6d',
                '600': '#5d5d5d',
                '700': '#4f4f4f',
                '800': '#454545',
                '900': '#3d3d3d',
                '950': '#242424',
                '975': '#1a1a1a',
                '1000': '#141414',
            },
        },

        extend: {
            colors: {},
        },
    },
    plugins: [],
}
export default config
