/** @type {import('tailwindcss').Config} */

import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

function svgToDataUri(svg) {
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        marquee: 'marquee var(--duration, 30s) linear infinite'
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        marquee: {
          to: { transform: 'translateX(-50%)' }
        }
      },
    },
  },
  plugins: [function ({ matchUtilities, theme, addUtilities }: any) {
    matchUtilities(
      {
        dots: (value: any) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
          )}")`
        })
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )
  },
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`
          })
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      )
    },
    addVariablesForColors
  ],
}

function addVariablesForColors({ addBase, theme }) {
  const colors = theme("colors");
  let newVars = {};

  for (const color in colors) {
    if (typeof colors[color] === "string") {
      newVars[`--${color}`] = colors[color];
    } else {
      for (const shade in colors[color]) {
        newVars[`--${color}-${shade}`] = colors[color][shade];
      }
    }
  }

  addBase({
    ":root": newVars,
  });
}
