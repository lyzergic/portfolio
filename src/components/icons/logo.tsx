export const Logo = ({
  width = 26,
  height = 21,
  color
}: {
  color: "light" | "dark";
  width?: number;
  height?: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 26 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.175 20.25 13 1.5l10.825 18.75H2.175Zm4.825-8h12m-11.329.414 2.504 5.006"
      stroke={`${color === "dark" ? "#000" : "#fff"}`}
      stroke-width="1.5"
    />
  </svg>
);

