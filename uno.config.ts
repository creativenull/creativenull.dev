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
  },
  presets: [
    presetWind({ dark: "media" }),
    presetIcons(),
    presetTypography(),
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
