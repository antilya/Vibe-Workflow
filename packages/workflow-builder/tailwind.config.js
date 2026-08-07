let hostedTypography = null;
try {
  hostedTypography = require("../../../../lib/appearance/typography.cjs");
} catch {
  // Standalone consumers keep the package's native Tailwind scale. The shared
  // Open Generative registry is an optional host integration.
}

const hostedTypographyTheme = hostedTypography
  ? {
      fontSize: hostedTypography.createTailwindFontSize({ includeFallbacks: true }),
      lineHeight: hostedTypography.createTailwindLineHeight({ includeFallbacks: true }),
    }
  : {};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    ...hostedTypographyTheme,
    extend: {},
  },
  plugins: [],
}

