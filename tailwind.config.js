module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'portfolio-bg': 'var(--bg-main)',
        'portfolio-sidebar': 'var(--bg-sidebar)',
        'portfolio-card': 'var(--bg-card)',
        'portfolio-border': 'var(--border-color)',
        'portfolio-text': 'var(--text-primary)',
        'portfolio-muted': 'var(--text-secondary)',
        'accent-main': 'var(--accent-main)',
        'accent-light': 'var(--accent-light)',
        'accent-dark': 'var(--accent-dark)',
        'accent-glow': 'var(--accent-glow)',
      }
    },
  },
  plugins: [],
};
