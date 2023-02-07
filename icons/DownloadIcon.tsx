import { CSSProperties } from "styled-components";

interface Props {
  active: boolean;
  style?: CSSProperties;
}

export const DownloadIcon = ({ active, style }: Props) => {
  return (
    <svg
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none"></rect>
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke={active ? "#fff" : "#000000"}
        stroke-miterlimit="10"
        stroke-width="16"
      ></circle>
      <polyline
        points="94.1 134.1 128 168 161.9 134.1"
        fill="none"
        stroke={active ? "#fff" : "#000000"}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></polyline>
      <line
        x1="128"
        y1="88"
        x2="128"
        y2="168"
        fill="none"
        stroke={active ? "#fff" : "#000000"}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></line>
    </svg>
  );
};
