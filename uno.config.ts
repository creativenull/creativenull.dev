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
        strong: {
          "--at-apply": "font-bold",
        },
        pre: {
          "--at-apply": "border border-gray-700 dark:border-gray-700",
        },
        "pre code": {
          "--at-apply": "font-jetbrains",
        },
        "ol code, ul code, p code": {
          "--at-apply": "font-jetbrains px-2",
        },
        a: {
          "--at-apply": "transition duration-200 hover:text-sky-600",
        },
        "section[data-footnotes]": {
          "--at-apply": "text-xs",
        },
        "p sup": {
          "--at-apply": "pl-2",
        },
        "p sup::before": {
          content: '"\\005B"',
        },
        "p sup::after": {
          content: '"\\005D"',
        },
        "ul, ol": {
          "--at-apply": "ml-2",
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
