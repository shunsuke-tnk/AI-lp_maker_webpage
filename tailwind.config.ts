import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    900: '#2D4059', // Primary Text / Accent
                    800: '#4A6C96', // Link / CTA
                },
                paper: '#FAFAFA', // Background Base
                accent: '#708198', // Secondary Accent
                highlight: '#F2F4F6', // Background Highlight
            },
            fontFamily: {
                sans: ['var(--font-noto-sans)', 'sans-serif'],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
