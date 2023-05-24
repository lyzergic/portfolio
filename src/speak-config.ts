import type { SpeakConfig } from "qwik-speak";

export const config: SpeakConfig = {
  defaultLocale: {
    lang: "en-GB",
    currency: "GBP",
    timeZone: "Europe/London"
  },
  supportedLocales: [
    { lang: "en-GB", currency: "GBP", timeZone: "Europe/London" },
    { lang: "ro-RO", currency: "RON", timeZone: "Europe/Bucharest" },
    { lang: "ru-RU", currency: "RUB", timeZone: "Europe/Moscow" },
    { lang: "it-IT", currency: "EUR", timeZone: "Europe/Rome" }
  ],
  assets: [
    "app" // Translations shared by the pages
  ],
  runtimeAssets: [
    "runtime" // Translations with dynamic keys or parameters
  ]
};
