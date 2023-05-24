import { type SpeakLocale, useSpeakConfig, useTranslate } from "qwik-speak";

import { $, component$ } from "@builder.io/qwik";

export const ChangeLocale = component$(() => {
  const t = useTranslate();
  const config = useSpeakConfig();

  const changeLocale$ = $((newLocale: SpeakLocale) => {
    // Store locale in a cookie
    document.cookie = `locale=${JSON.stringify(
      newLocale
    )};max-age=86400;path=/`;

    location.reload();
  });

  return (
    //can't use .map because it doesn't get translated
    <ul class="menu pl-0 bg-base-100 w-32">
      <li
        onClick$={async () => await changeLocale$(config.supportedLocales[0])}
      >
        <a>{t(`layout.english`)}</a>
      </li>
      <li
        onClick$={async () => await changeLocale$(config.supportedLocales[1])}
      >
        <a>{t(`layout.romanian`)}</a>
      </li>
      <li
        onClick$={async () => await changeLocale$(config.supportedLocales[2])}
      >
        <a>{t(`layout.russian`)}</a>
      </li>
      <li
        onClick$={async () => await changeLocale$(config.supportedLocales[3])}
      >
        <a>{t(`layout.italian`)}</a>
      </li>
    </ul>
  );
});
