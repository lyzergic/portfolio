import { Speak } from "qwik-speak";

import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Footer from "../components/footer/footer";
import styles from "./styles.css?inline";

import Header from "~/components/header/header";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString()
  };
});

export const Layout = component$(() => {
  useStyles$(styles);

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

