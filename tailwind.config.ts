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
                // Isometric Design System - "The Rule of 3 + 1 Highlight"
                'pure-white': '#FFFFFF',
                'pure-offwhite': '#F9F9F9',
                'charcoal-black': '#222222',
                'structure-grid': '#E5E5E5',
                'neon-yellow': '#FFFF00',
                // Legacy colors
                navy: {
                    900: '#222222',
                    800: '#222222',
                },
                paper: '#FFFFFF',
                accent: '#222222',
                highlight: '#F9F9F9',
            },
            fontFamily: {
                sans: ['var(--font-noto-sans)', 'sans-serif'],
            },
            backgroundImage: {
                // Minimal system - avoid gradients
                "grid-pattern": "linear-gradient(#E5E5E5 1px, transparent 1px), linear-gradient(90deg, #E5E5E5 1px, transparent 1px)",
            },
            backgroundSize: {
                "grid": "20px 20px",
            },
        },
    },
    plugins: [],
};
export default config;
