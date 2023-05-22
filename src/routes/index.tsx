import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <>and this</>;
});

export const head: DocumentHead = {
  title: "Welcome to Adrian Luca' website, take a look!",
  meta: [
    {
      name: "description",
      content:
        "This website was created to showcase Adrian Luca as a web develoepr"
    }
  ]
};

