"use client";

import { useEffect, useState } from "react";
import { Button, ColorElement, Heading, Loading } from "./components";
import styles from "./styles.module.scss";
import { blendColorsFromTwo, getTextColor } from "./utils";

export default function Home() {
  const [color1, setColor1] = useState("#ffffff");
  const [color2, setColor2] = useState("#ff0000");
  const [resultColor, setResultColor] = useState("");
  const [isCompactMode, setIsCompactMode] = useState(true);

  useEffect(() => {
    setResultColor(blendColorsFromTwo(color1, color2));
  }, [color1, color2]);

  if (!resultColor) {
    return <Loading />;
  }

  const resultColorText = blendColorsFromTwo(color1, color2);

  return (
    <div className={`${styles.container} container`}>
      <main className={styles.main}>
        <Heading />

        <div className={styles.content}>
          <h2 className={`${styles.result_color} result_color`}>
            {resultColorText}
          </h2>

          <div className={styles.color_scheme}>
            <div className={styles.color_picker1}>
              <ColorElement
                id="color-pick1"
                onChange={(e) => setColor1(e.target.value)}
                color={color1}
              />
            </div>

            <div className={styles.color_picker2}>
              <ColorElement
                id="color-pick2"
                onChange={(e) => setColor2(e.target.value)}
                color={color2}
              />
            </div>

            <div className={styles.color_result}>
              <svg
                width="104"
                height="174"
                viewBox="0 0 102 175"
                xmlns="http://www.w3.org/2000/svg"
                fill={resultColor}
              >
                <path
                  d="M50 173.244C79.8901 155.953 100 123.636 100 86.6218C100 49.6076 79.8901 17.2905 50 -1.46344e-05C20.1099 17.2905 0 49.6076 0 86.6218C0 123.636 20.1099 155.953 50 173.244Z"
                  stroke="white"
                />
              </svg>
            </div>

            <Button
              isCompactMode={isCompactMode}
              onClick={() => setIsCompactMode(!isCompactMode)}
            />
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
