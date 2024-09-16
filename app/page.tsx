"use client";

import { useState } from "react";
import { Heading } from "./components";
import styles from "./styles.module.scss";
import { getTextColor } from "./utils";
import { LayoutColors } from "./layouts";

export default function Home() {
  const [colors, setColors] = useState(["#f5b4b4", "#f85c5c"]);
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

          <LayoutColors
            colors={colors}
            isThreeColors={isThreeColors}
            resultColor={resultColor}
            setColors={setColors}
            setIsThreeColors={setIsThreeColors}
            setResultColor={setResultColor}
          />
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
