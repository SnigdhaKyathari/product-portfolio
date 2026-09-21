/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FBFBF9',
        panel: '#FFFFFF',
        ink: '#0B0B0B',
        ink2: '#3F3F46',
        ink3: '#71717A',
        line: '#E7E7E3',
        line2: '#EFEFEB',
        sig: '#C8102E',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        display: ['Newsreader', 'Georgia', 'Times New Roman', 'serif'],
      },
      borderRadius: {
        md: '8px',
      },
    },
  },
  plugins: [],
};
