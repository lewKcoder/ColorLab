import { Button, ColorElement, Loading } from "@/app/components";
import styles from "./styles.module.scss";
import { Component } from "./types";
import { useEffect, useState } from "react";
import { blendMultipleColors, getTextColor } from "@/app/utils";

export const LayoutColors: Component = (props) => {
  const { resultColor, setResultColor } = props;

  const [colors, setColors] = useState(["#f5b4b4", "#f85c5c"]);

  useEffect(() => {
    setResultColor(blendMultipleColors(colors));
  }, [colors]);

  if (!resultColor) {
    return <Loading />;
  }

  return (
    <div className={styles.color_scheme}>
      <div className={`${styles.colors} colors`}>
        {colors.map((color, index) => (
          <div key={index} className={styles.color}>
            <ColorElement
              id={`color-pick${index}`}
              onChange={(e) => {
                colors[index] = e.target.value;
                setColors([...colors]);
              }}
              color={color}
            />
          </div>
        ))}
      </div>

      <div className={styles.button}>
        <Button
          resultColor={resultColor}
          onClick={() => {
            const slicedColors = colors.slice(0, colors.length - 1);
            setColors([...slicedColors]);
          }}
          disabled={colors.length <= 2}
          isIncreasing={false}
        />

        <div className={`${styles.line} line`} />

        <Button
          resultColor={resultColor}
          onClick={() => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(
              16
            );
            setColors([...colors, `#${randomColor}`]);
          }}
          disabled={colors.length > 4}
        />
      </div>

      <style>{`
        .colors {
          grid-template-columns: repeat(${colors.length}, 80px);
          width: calc(${colors.length}* 80px + 120px);
        }
        .line {
          background-color: ${getTextColor(resultColor)};
        }
      `}</style>
    </div>
  );
};
