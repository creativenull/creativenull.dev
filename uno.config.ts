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
          "--at-apply":
            "border border-dashed border-gray-400 dark:border-gray-500",
        },
        "pre code": {
          "--at-apply": "font-jetbrains",
        },
        "ol code, ul code, p code": {
          "--at-apply": "font-jetbrains",
        },
        "ol code::before, ul code::before, p code::before": {
          content: "''",
        },
        "ol code::after, ul code::after, p code::after": {
          content: "''",
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
        jetbrains: [
          { name: "JetBrains Mono" },
          { name: "monospace", provider: "none" },
        ],
        righteous: [
          { name: "Righteous" },
          { name: "sans-serif", provider: "none" },
        ],
        roboto: [{ name: "Roboto" }, { name: "sans-serif", provider: "none" }],
      },
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
});
