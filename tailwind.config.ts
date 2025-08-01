import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./apps/**/*.{html,ts,css,scss}', './libs/**/*.{html,ts,css,scss}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
