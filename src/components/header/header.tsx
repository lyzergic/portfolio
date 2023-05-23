import {
  $,
  component$,
  type QwikChangeEvent,
  useSignal,
  useVisibleTask$
} from "@builder.io/qwik";

import { Logo } from "../icons/logo";
import { Moon } from "../icons/moon";
import { Sun } from "../icons/sun";

const logoHeight = 30;
const logoAspectRatio = 2.86;

export default component$(() => {
  const theme = useSignal<string>("");

  useVisibleTask$(() => {
    const localTheme = localStorage.getItem("theme") ?? "winter";

    theme.value = localTheme;
    document.querySelector("html")?.setAttribute("data-theme", localTheme);
    localStorage.setItem("theme", localTheme);
  });

  const onThemeChange = $((e: QwikChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      theme.value = "winter";
      document.querySelector("html")?.setAttribute("data-theme", "winter");
      localStorage.setItem("theme", "winter");

      return;
    }

    theme.value = "night";
    document.querySelector("html")?.setAttribute("data-theme", "night");
    localStorage.setItem("theme", "night");
  });

  return (
    <header
      class={
        "flex fixed justify-between left-0 items-center px-10 py-3 rounded-2xl mx-3 my-3 bg-[rgba(255, 255, 255, 0.25)]  w-[calc(100%-24px)] shadow-[0_8px_32px_0_rgba(_31,38,135,0.37_)] backdrop-blur-[_4px_] border  border-solid border-[rgba(_255,255,255,0.18_)]"
      }
    >
      <div>
        <a href="/" title="logo">
          <Logo height={logoHeight} width={logoHeight * logoAspectRatio} />
        </a>
      </div>
      <ul class="menu menu-horizontal w-2/4 justify-around">
        <li class="cursor-pointer">About</li>
        <li class="cursor-pointer">Read CV</li>
        <li class=" cursor-pointer">Contact</li>
        <li class=" cursor-pointer">
          Language
          <ul class=" bg-base-100">
            <li>
              <a>English</a>
            </li>
            <li>
              <a>Romanian</a>
            </li>
          </ul>
        </li>

        {theme.value !== "" && (
          <label class="swap swap-flip text-s mx-2">
            <input
              onChange$={onThemeChange}
              checked={theme.value === "winter" ? true : false}
              type="checkbox"
            />

            <div class="swap-on">
              <Moon width={24} height={24} />
            </div>
            <div class="swap-off">
              <Sun />
            </div>
          </label>
        )}
      </ul>
    </header>
  );
});

