"use client";

import { useState } from "react";
import { Heading } from "./components";
import styles from "./styles.module.scss";
import { getTextColor } from "./utils";
import { LayoutThreeColors, LayoutTwoColors } from "./layouts";

export default function Home() {
  const [color1, setColor1] = useState("#ffffff");
  const [color2, setColor2] = useState("#ff0000");
  const [color3, setColor3] = useState("#ff00ff");
  const [resultColor, setResultColor] = useState("");
  const [isThreeColors, setIsThreeColors] = useState(false);

  return (
    <div className={`${styles.container} container`}>
      <main className={styles.main}>
        <Heading />

        <div className={styles.content}>
          <h2 className={`${styles.result_color} result_color`}>
            {resultColor}
          </h2>

          {!isThreeColors && (
            <LayoutTwoColors
              color1={color1}
              color2={color2}
              isThreeColors={isThreeColors}
              resultColor={resultColor}
              setColor1={setColor1}
              setColor2={setColor2}
              setIsThreeColors={setIsThreeColors}
              setResultColor={setResultColor}
            />
          )}

          {isThreeColors && (
            <LayoutThreeColors
              color1={color1}
              color2={color2}
              color3={color3}
              resultColor={resultColor}
              isThreeColors={isThreeColors}
              setColor1={setColor1}
              setColor2={setColor2}
              setColor3={setColor3}
              setIsThreeColors={setIsThreeColors}
              setResultColor={setResultColor}
            />
          )}
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
