"use client";

import { useEffect, useState } from "react";
import { Heading, Loading } from "./components";
import styles from "./styles.module.scss";
import { blendColorsFromTwo, getTextColor } from "./utils";
import { LayoutTwoColors } from "./layouts";

export default function Home() {
  const [color1, setColor1] = useState("#ffffff");
  const [color2, setColor2] = useState("#ff0000");
  const [resultColor, setResultColor] = useState("");
  const [isThreeColors, setIsThreeColors] = useState(false);

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

          {!isThreeColors && (
            <LayoutTwoColors
              color1={color1}
              setColor1={setColor1}
              color2={color2}
              setColor2={setColor2}
              resultColor={resultColor}
              isThreeColors={isThreeColors}
              setIsThreeColors={setIsThreeColors}
            />
          )}

          {isThreeColors && <div>fwjofiwej</div>}
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
