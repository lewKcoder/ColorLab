"use client";

import { useEffect, useState } from "react";
import { Heading, Loading } from "./components";
import styles from "./styles.module.scss";
import { blendColorsFromTwo, getTextColor } from "./utils";

export default function Home() {
  const [color1, setColor1] = useState("#ffffff");
  const [color2, setColor2] = useState("#ff0000");
  const [resultColor, setResultColor] = useState("");

  useEffect(() => {
    setResultColor(blendColorsFromTwo(color1, color2));
  }, [color1, color2]);

  if (!resultColor) {
    return <Loading />;
  }

  return (
    <div className={`${styles.container} container`}>
      <main className={styles.main}>
        <Heading />

        <div className={styles.content}>
          <h2 className={`${styles.result_color} result_color`}>
            {blendColorsFromTwo(color1, color2)}
          </h2>

          <div className={styles.color_scheme}>
            <input
              type="color"
              id="color-pick1"
              className={styles.color_pick1}
              onChange={(e) => {
                setColor1(e.target.value);
              }}
            />
            <div className={styles.color1}>
              <label htmlFor="color-pick1" className={styles.label}>
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill={color1}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="100" cy="100" r="99.5" stroke="white" />
                </svg>
              </label>
            </div>

            <input
              type="color"
              id="color-pick2"
              className={styles.color_pick2}
              onChange={(e) => {
                setColor2(e.target.value);
              }}
            />
            <div className={styles.color2}>
              <label htmlFor="color-pick2" className={styles.label}>
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill={color2}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="100" cy="100" r="99.5" stroke="white" />
                </svg>
              </label>
            </div>

            <div className={styles.color_result}>
              <svg
                width="100"
                height="174"
                viewBox="0 0 100 174"
                xmlns="http://www.w3.org/2000/svg"
                fill={resultColor}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M50 173.244C79.8901 155.953 100 123.636 100 86.6218C100 49.6076 79.8901 17.2905 50 -1.46344e-05C20.1099 17.2905 0 49.6076 0 86.6218C0 123.636 20.1099 155.953 50 173.244Z"
                  stroke="white"
                />
              </svg>
            </div>

            <div className={styles.add_color}>
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
                <rect x="14.5" y="6" width="3" height="20" fill="#D9D9D9" />
                <rect
                  x="6"
                  y="17.5"
                  width="3"
                  height="20"
                  transform="rotate(-90 6 17.5)"
                  fill="#D9D9D9"
                />
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
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .container {
          background-color: ${resultColor};
        }
        .result_color {
          color: ${getTextColor(resultColor)};
        }
      `}</style>
    </div>
  );
}
