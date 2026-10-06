import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.ts'],
  theme: {
    extend: {
      colors: {
        'on-tertiary-fixed-variant': '#000ceb', 'primary-container': '#7c3aed', 'tertiary-container': '#404cff',
        tertiary: '#bec2ff', outline: '#958da1', 'surface-container-lowest': '#090d20', 'inverse-on-surface': '#2c2f44',
        'on-background': '#dfe0fd', 'primary-fixed-dim': '#d2bbff', 'inverse-primary': '#732ee4', 'inverse-surface': '#dfe0fd',
        'secondary-fixed-dim': '#faabff', 'on-error': '#690005', 'primary-fixed': '#eaddff', 'on-secondary-fixed-variant': '#7b008f',
        'on-primary-fixed': '#25005a', 'secondary-fixed': '#ffd6fe', 'surface-container-highest': '#303349',
        'secondary-container': '#bd06da', 'on-tertiary-fixed': '#00036b', 'surface-tint': '#d2bbff', 'surface-dim': '#0f1226',
        'on-surface': '#dfe0fd', 'on-surface-variant': '#ccc3d8', 'on-error-container': '#ffdad6', 'surface-container-low': '#171a2e',
        'tertiary-fixed-dim': '#bec2ff', 'on-tertiary-container': '#e4e4ff', 'on-secondary-fixed': '#35003f',
        'on-secondary-container': '#fff0fb', 'on-secondary': '#570066', surface: '#0f1226', 'on-primary-fixed-variant': '#5a00c6',
        'surface-container-high': '#26293e', error: '#ffb4ab', primary: '#d2bbff', secondary: '#faabff', background: '#0f1226',
        'tertiary-fixed': '#e0e0ff', 'error-container': '#93000a', 'surface-bright': '#35384e', 'surface-variant': '#303349',
        'on-primary': '#3f008e', 'surface-container': '#1b1e33', 'outline-variant': '#4a4455', 'on-primary-container': '#ede0ff',
        'on-tertiary': '#0006a9',
      },
      borderRadius: { DEFAULT: '0.25rem', lg: '0.5rem', xl: '0.75rem', full: '9999px' },
      spacing: {
        'gutter-lg': '2rem', 'gutter-sm': '1rem', 'space-xl': '2.5rem', 'margin-mobile': '1.25rem', 'space-lg': '1.5rem',
        'space-xs': '0.25rem', 'margin-desktop': '3.5rem', gutter: '1.5rem', margin: '2rem', 'space-sm': '0.5rem', 'space-md': '1rem',
      },
      fontFamily: {
        'headline-xl': ['Sora'], 'headline-md': ['Sora'], 'headline-lg': ['Sora'], 'display-hero': ['Sora'], 'headline-sm': ['Sora'],
        'headline-xl-mobile': ['Sora'], 'body-lg': ['Manrope'], 'label-tag': ['Sora'], 'body-md': ['Manrope'],
        'label-code-md': ['JetBrains Mono'], 'display-hero-mobile': ['Sora'], 'body-sm': ['Manrope'], 'label-code-sm': ['JetBrains Mono'],
      },
      fontSize: {
        'headline-xl': ['40px', { lineHeight: '48px', letterSpacing: '-0.02em', fontWeight: '600' }],
        'headline-md': ['22px', { lineHeight: '30px', letterSpacing: '-0.01em', fontWeight: '500' }],
        'headline-lg': ['28px', { lineHeight: '36px', letterSpacing: '-0.015em', fontWeight: '600' }],
        'display-hero': ['56px', { lineHeight: '68px', letterSpacing: '-0.03em', fontWeight: '700' }],
        'headline-sm': ['18px', { lineHeight: '26px', letterSpacing: '0em', fontWeight: '500' }],
        'headline-xl-mobile': ['28px', { lineHeight: '36px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', letterSpacing: '0.01em', fontWeight: '400' }],
        'label-tag': ['12px', { lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '600' }],
        'body-md': ['15px', { lineHeight: '24px', letterSpacing: '0.01em', fontWeight: '400' }],
        'label-code-md': ['13px', { lineHeight: '18px', letterSpacing: '0.04em', fontWeight: '500' }],
        'display-hero-mobile': ['36px', { lineHeight: '44px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'body-sm': ['13px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '400' }],
        'label-code-sm': ['11px', { lineHeight: '16px', letterSpacing: '0.06em', fontWeight: '400' }],
      },
    },
  },
} satisfies Config;
