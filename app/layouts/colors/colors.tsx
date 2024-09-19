import { Button, ColorElement, Loading } from "@/app/components";
import styles from "./styles.module.scss";
import { Component } from "./types";
import { useEffect, useState } from "react";
import { blendMultipleColors } from "@/app/utils";

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
      </div>

      <div className={styles.button}>
        <Button
          onClick={() => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(
              16
            );
            console.log(randomColor);
            setColors([...colors, `#${randomColor}`]);
          }}
        />
      </div>

      <style>{`
      .colors {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: repeat(${colors.length}, 80px);
        width: calc(${colors.length}* 80px + 120px);
      }
      `}</style>
    </div>
  );
};
