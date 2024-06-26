
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        nunito: ['nunito', 'sans-serif'],
      },

      colors: {
        'border-purple': '#CEBCFF',
      },
      
      keyframes: {
        gradient: {
          '0%, 100%': {
          'background-size': '200% 200%',
          'background-position': 'left center'
          },
          '50%': {
          'background-size': '200% 200%',
          'background-position': 'right center'
                }
             }
          },
          animation: {
            gradient: 'gradient 3s ease infinite'
          },
    },
  },
  plugins: [],
}
