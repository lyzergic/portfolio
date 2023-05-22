export const Moon = ({
  width = 17,
  height = 17
}: {
  width?: number;
  height?: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 17 17"
    fill="none"
    class="fill-current"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.5 0a8.5 8.5 0 1 0 8.46 9.32.5.5 0 0 0-.812-.435A5 5 0 1 1 10.011.992a.5.5 0 0 0-.225-.895A8.563 8.563 0 0 0 8.5 0Z" />
  </svg>
);
