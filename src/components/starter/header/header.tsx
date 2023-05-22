import { component$ } from "@builder.io/qwik";

import { Logo } from "../icons/logo";

const logoHeight = 30;
const logoAspectRatio = 2.86;

export default component$(() => {
  return (
    <header class={"flex items-center w-full  px-10 py-3"}>
      <a href="/" title="logo">
        <Logo
          color="light"
          height={logoHeight}
          width={logoHeight * logoAspectRatio}
        />
      </a>
    </header>
  );
});

