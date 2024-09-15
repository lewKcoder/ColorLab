import styles from "./styles.module.scss";
import { Component } from "./types";

export const Button: Component = (props) => {
  const { isThreeColors, onClick } = props;

  return (
    <button onClick={onClick} className={styles.container}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter)">
          <rect
            width="32"
            height="32"
            rx="8"
            fill="url(#paint0_linear_1119_2205)"
          />
          <rect
            x="0.5"
            y="0.5"
            width="31"
            height="31"
            rx="7.5"
            stroke="url(#paint1_linear_1119_2205)"
          />
        </g>
        <rect
          x="6"
          y="17.5"
          width="3"
          height="20"
          transform="rotate(-90 6 17.5)"
          fill="#D9D9D9"
        />
        {!isThreeColors && (
          <rect x="14.5" y="6" width="3" height="20" fill="#D9D9D9" />
        )}
        <defs>
          <filter
            id="filter"
            x="-4"
            y="-4"
            width="40"
            height="40"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_1119_2205"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_1119_2205"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_1119_2205"
            x1="30"
            y1="30.5"
            x2="2.5"
            y2="2"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0.3" />
            <stop offset="1" stop-color="white" stop-opacity="0.1" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1119_2205"
            x1="3"
            y1="4"
            x2="30.5"
            y2="30"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0.5" />
            <stop offset="1" stop-color="white" stop-opacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
};
