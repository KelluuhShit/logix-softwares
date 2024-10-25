module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sen: ['Sen', 'sans-serif'],
      },
      colors: {
        gray: {
          850: '#4B5563',
        },
      },
      boxShadow: {
        'green-lg': '0 7px 30px rgba(34, 197, 94, 0.05)', // Green-400 color
      },
    },
  },
  plugins: [],
}
