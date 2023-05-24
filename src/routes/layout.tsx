import { Speak } from "qwik-speak";

import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Footer from "../components/footer/footer";

import Header from "~/components/header/header";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString()
  };
});

export const Layout = component$(() => {
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});

export default component$(() => {
  return (
    <Speak assets={["layout"]}>
      <Layout />
    </Speak>
  );
});

