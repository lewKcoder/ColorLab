"use client";

import { Heading } from "./components";
import styles from "./styles.module.scss";

export default function Home() {
  const backgroundColor = "red";
  const color = "#F046CD";

  return (
    <div className={`${styles.container} container`}>
      <main className={styles.main}>
        <Heading />

        <div className={styles.content}>
          <h2 className={styles.color}>{color}</h2>

          <div className={styles.color_scheme}>
            <div className={styles.color1}>
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="100" cy="100" r="99.5" stroke="white" />
              </svg>
            </div>

            <div className={styles.color_result}>
              <svg
                width="100"
                height="174"
                viewBox="0 0 100 174"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1_1119_2202" fill="white">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50 173.244C79.8901 155.953 100 123.636 100 86.6218C100 49.6076 79.8901 17.2905 50 -1.46344e-05C20.1099 17.2905 0 49.6076 0 86.6218C0 123.636 20.1099 155.953 50 173.244Z"
                  />
                </mask>
                <path
                  d="M50 173.244L49.4993 174.109L50 174.399L50.5007 174.109L50 173.244ZM50 -1.46344e-05L50.5007 -0.86562L50 -1.15527L49.4993 -0.86562L50 -1.46344e-05ZM99 86.6218C99 123.264 79.0931 155.259 49.4993 172.378L50.5007 174.109C80.6871 156.647 101 124.007 101 86.6218H99ZM49.4993 0.865591C79.0931 17.9847 99 49.979 99 86.6218H101C101 49.2362 80.6871 16.5962 50.5007 -0.86562L49.4993 0.865591ZM1 86.6218C1 49.979 20.9069 17.9847 50.5007 0.865591L49.4993 -0.86562C19.3129 16.5962 -1 49.2362 -1 86.6218H1ZM50.5007 172.378C20.9069 155.259 1 123.264 1 86.6218H-1C-1 124.007 19.3129 156.647 49.4993 174.109L50.5007 172.378Z"
                  fill="white"
                  mask="url(#path-1-inside-1_1119_2202)"
                />
              </svg>
            </div>

            <div className={styles.color2}>
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="100" cy="100" r="99.5" stroke="white" />
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
          background-color: ${backgroundColor};
        }
      `}</style>
    </div>
  );
}
