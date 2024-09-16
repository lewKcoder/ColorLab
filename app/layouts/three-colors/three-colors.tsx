import { Button, ColorElement } from "@/app/components";
import styles from "./styles.module.scss";
import { Component } from "./types";
import { useEffect } from "react";
import { blendColorsFromThree } from "@/app/utils/blend-colors";

export const LayoutThreeColors: Component = (props) => {
  const {
    color1,
    color2,
    color3,
    isThreeColors,
    setColor1,
    setColor2,
    setColor3,
    setIsThreeColors,
    setResultColor,
  } = props;

  useEffect(() => {
    setResultColor(blendColorsFromThree(color1, color2, color3));
  }, [color1, color2, color3]);

  return (
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

      <div className={styles.color_picker3}>
        <ColorElement
          id="color-pick3"
          onChange={(e) => setColor3(e.target.value)}
          color={color3}
        />
      </div>

      <div className={styles.button}>
        <Button
          isThreeColors={isThreeColors}
          onClick={() => setIsThreeColors(!isThreeColors)}
        />
      </div>
    </div>
  );
};
