// MORAX - Tailwind CSS Configuration

tailwind.config = {
    theme: {
        extend: {
            colors: {
                'obsidian': '#050505',
                'charcoal': '#121212',
                'chrome-light': '#ffffff',
                'chrome-mid': '#a1a1aa',
                'chrome-dark': '#52525b',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Syncopate', 'sans-serif'],
            },
            backgroundImage: {
                'chrome-gradient': 'linear-gradient(135deg, #ffffff 0%, #a1a1aa 50%, #52525b 100%)',
                'chrome-text': 'linear-gradient(to bottom, #ffffff 30%, #a1a1aa 100%)',
            },
            letterSpacing: {
                'widest-premium': '0.25em',
            }
        }
    }
}
