import {
  defineConfig,
  presetTypography,
  presetWind,
  presetWebFonts,
  presetIcons,
  transformerVariantGroup,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  rules: [["font-departure", { "font-family": "'Departure Mono', monospace" }]],
  shortcuts: {
    "text-defaults": "text-gray-700 dark:text-white",
    "bg-defaults": "bg-gray-200 dark:bg-gray-900",
  },
  presets: [
    presetWind({ dark: "media" }),
    presetIcons(),
    presetTypography({
      cssExtend: {
        strong: { "font-weight": "bold" },
        "pre code": { "font-family": "JetBrains Mono, monospace" },
        "code::before, code::after": {
          content: "''",
        },
        "p code": {
          "font-family": "JetBrains Mono, monospace",
          padding: "0 5px",
        },
        "ol code": {
          "font-family": "JetBrains Mono, monospace",
          padding: "0 5px",
        },
        "ul code": {
          "font-family": "JetBrains Mono, monospace",
          padding: "0 5px",
        },
        "a[href^=https]::after": {
          "font-size": "10px",
          content: '"\\f08e"',
          "font-family": "FontAwesome",
          display: "inline-block",
          "padding-left": "5px",
        },
        "section[data-footnotes]": {
          "font-size": "0.75rem",
        },
        "p sup": {
          "padding-left": "0.1rem",
        },
        "p sup::before": {
          content: '"\\005B"',
        },
        "p sup::after": {
          content: '"\\005D"',
        },
      },
    }),
    presetWebFonts({
      provider: "bunny",
      fonts: {
        jetbrains: "JetBrains Mono",
        righteous: "Righteous",
        roboto: "Roboto",
      },
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
});
