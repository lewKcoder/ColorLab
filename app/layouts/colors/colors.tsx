import { Button, ColorElement, Loading } from "@/app/components";
import styles from "./styles.module.scss";
import { FunctionComponent, useEffect, useState } from "react";
import { blendMultipleColors, getTextColor } from "@/app/utils";

export const LayoutColors: FunctionComponent = () => {
  const [colors, setColors] = useState(["#f5b4b4", "#f85c5c"]);
  const [isThreeColors, setIsThreeColors] = useState(false);
  const [resultColor, setResultColor] = useState("");

  useEffect(() => {
    setResultColor(blendMultipleColors(colors));
  }, [colors]);

  if (!resultColor) {
    return <Loading />;
  }

  return (
    <div className={styles.content}>
      <h2 className={`${styles.result_color} result_color`}>{resultColor}</h2>

      <div className={styles.color_scheme}>
        {colors.map((color, index) => (
          <ColorElement
            key={index}
            id={`color-pick${index}`}
            onChange={(e) => {
              colors[index] = e.target.value;
              setColors([...colors]);
            }}
            color={color}
          />
        ))}

        <div className={styles.button}>
          <Button
            isThreeColors={isThreeColors}
            onClick={() => setIsThreeColors(!isThreeColors)}
          />
        </div>
      </div>

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
};
