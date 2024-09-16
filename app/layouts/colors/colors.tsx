import { Button, ColorElement, Loading } from "@/app/components";
import styles from "./styles.module.scss";
import { Component } from "./types";
import { useEffect } from "react";
import { blendMultipleColors } from "@/app/utils";

export const LayoutColors: Component = (props) => {
  const {
    colors,
    isThreeColors,
    resultColor,
    setColors,
    setIsThreeColors,
    setResultColor,
  } = props;

  useEffect(() => {
    setResultColor(blendMultipleColors(colors));
  }, [colors]);

  if (!resultColor) {
    return <Loading />;
  }

  return (
    <div className={styles.color_scheme}>
      {colors.map((color, index) => (
        <ColorElement
          key={color}
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
  );
};
