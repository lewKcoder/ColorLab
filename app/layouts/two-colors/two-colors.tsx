import { Button, ColorElement, Loading } from "@/app/components";
import styles from "./styles.module.scss";
import { Component } from "./types";
import { useEffect } from "react";
import { blendColorsFromTwo } from "@/app/utils";

export const LayoutTwoColors: Component = (props) => {
  const {
    color1,
    color2,
    isThreeColors,
    resultColor,
    setColor1,
    setColor2,
    setIsThreeColors,
    setResultColor,
  } = props;

  useEffect(() => {
    setResultColor(blendColorsFromTwo(color1, color2));
  }, [color1, color2]);

  if (!resultColor) {
    return <Loading />;
  }

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

      <div className={styles.button}>
        <Button
          isThreeColors={isThreeColors}
          onClick={() => setIsThreeColors(!isThreeColors)}
        />
      </div>
    </div>
  );
};
