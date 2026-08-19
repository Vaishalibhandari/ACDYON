module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f1724',
        accent: '#7c3aed'
      },
      boxShadow: {
        subtle: '0 6px 18px rgba(15,23,36,0.08)'
      }
    }
  },
  plugins: []
}
