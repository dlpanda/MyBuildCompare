import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                'mobile': {
                    max:'1023px'
                },
                'tablet': {
                    min:'1024px',
                    max:'1279px'
                },
                'desktop': '1280px',
            },
            backgroundColor:{
                'popup':'#666666'
            }
        },
    },
    plugins: [],
};
export default config;
