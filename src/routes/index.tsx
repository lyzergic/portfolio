import { Speak, useTranslate } from "qwik-speak";

import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export const Home = component$(() => {
  const t = useTranslate();

  return <div class="mt-24">{t("home.number")}</div>;
});

export default component$(() => {
  return (
    /**
     * Add Home translations (only available in child components)
     */
    <Speak assets={["home"]}>
      <Home />
    </Speak>
  );
});

export const head: DocumentHead = {
  title: "runtime.home.head.title@@Home",
  meta: [
    {
      name: "description",
      content:
        "runtime.home.head.description@@This website was created to showcase Adrian Luca as a web develoepr"
    }
  ]
};

