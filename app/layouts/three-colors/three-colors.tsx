import { Button, ColorElement } from "@/app/components";
import styles from "./styles.module.scss";
import { Component } from "./types";
import { useEffect, useState } from "react";
import { blendColorsFromTwo } from "@/app/utils";
import { blendColorsFromThree } from "@/app/utils/blend-colors-from-two";

export const LayoutThreeColors: Component = (props) => {
  const {
    color1,
    color2,
    color3,
    isThreeColors,
    resultColor,
    setColor1,
    setColor2,
    setColor3,
    setIsThreeColors,
    setResultColor,
  } = props;

  const [resultColor1, setResultColor1] = useState(
    blendColorsFromTwo(color1, color2)
  );
  const [resultColor2, setResultColor2] = useState(
    blendColorsFromTwo(color2, color3)
  );
  const [resultColor3, setResultColor3] = useState(
    blendColorsFromTwo(color3, color1)
  );

  useEffect(() => {
    setResultColor1(blendColorsFromTwo(color1, color2));
  }, [color1, color2]);

  useEffect(() => {
    setResultColor2(blendColorsFromTwo(color2, color3));
  }, [color2, color3]);

  useEffect(() => {
    setResultColor3(blendColorsFromTwo(color3, color1));
  }, [color3, color1]);

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

      <div className={styles.color_result1}>
        <svg
          width="104"
          height="174"
          viewBox="0 0 102 175"
          xmlns="http://www.w3.org/2000/svg"
          fill={resultColor1}
        >
          <path
            d="M50 173.244C79.8901 155.953 100 123.636 100 86.6218C100 49.6076 79.8901 17.2905 50 -1.46344e-05C20.1099 17.2905 0 49.6076 0 86.6218C0 123.636 20.1099 155.953 50 173.244Z"
            stroke="white"
          />
        </svg>
      </div>

      <div className={styles.color_result2}>
        <svg
          width="150"
          height="100"
          viewBox="0 0 150 100"
          fill={resultColor2}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.825196 12.9061L0.332732 12.0358L-0.252545 12.367L-0.166604 13.0339L0.825196 12.9061ZM149.175 87.0939L149.667 87.9642L150.253 87.6331L150.167 86.9661L149.175 87.0939ZM1.31766 13.7765C15.6921 5.64293 32.3023 1 50 1V-1C31.9482 -1 14.9997 3.73672 0.332732 12.0358L1.31766 13.7765ZM50 1C100.346 1 141.916 38.5819 148.183 87.2217L150.167 86.9661C143.772 37.3416 101.365 -1 50 -1V1ZM148.682 86.2236C134.308 94.3571 117.698 99 100 99V101C118.052 101 135 96.2633 149.667 87.9642L148.682 86.2236ZM100 99C49.6542 99 8.08447 61.4181 1.817 12.7783L-0.166604 13.0339C6.22775 62.6584 48.6355 101 100 101V99Z"
            fill="white"
          />
        </svg>
      </div>

      <div className={styles.color_result3}>
        <svg
          width="150"
          height="100"
          viewBox="0 0 150 100"
          fill={resultColor3}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-1.36246e-06 87.0939L-0.991802 86.9661L-1.07774 87.633L-0.492465 87.9642L-1.36246e-06 87.0939ZM148.35 12.9061L149.341 13.0339L149.427 12.367L148.842 12.0358L148.35 12.9061ZM0.991799 87.2217C7.25927 38.5819 48.829 1 99.1748 1V-1C47.8103 -1 5.40255 37.3416 -0.991802 86.9661L0.991799 87.2217ZM99.1748 1C116.873 1 133.483 5.64293 147.857 13.7765L148.842 12.0358C134.175 3.73672 117.227 -1 99.1748 -1V1ZM147.358 12.7783C141.09 61.4181 99.5207 99 49.1748 99V101C100.539 101 142.947 62.6584 149.341 13.0339L147.358 12.7783ZM49.1748 99C31.4771 99 14.8669 94.3571 0.492463 86.2235L-0.492465 87.9642C14.1745 96.2633 31.123 101 49.1748 101V99Z"
            fill="white"
          />
        </svg>
      </div>

      <div className={styles.color_result}>
        <svg
          width="100"
          height="87"
          viewBox="0 0 100 87"
          fill={resultColor}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 86.6218L49.4993 87.4874L50 87.777L50.5008 87.4874L50 86.6218ZM99.1749 12.9061L100.167 13.0339L100.253 12.367L99.6673 12.0358L99.1749 12.9061ZM0.825196 12.9061L0.332732 12.0358L-0.252545 12.367L-0.166604 13.0339L0.825196 12.9061ZM50.5008 87.4874C77.1206 72.0886 96.0622 44.8872 100.167 13.0339L98.1831 12.7783C94.1607 43.9948 75.5964 70.6598 49.4993 85.7562L50.5008 87.4874ZM-0.166604 13.0339C3.93785 44.8872 22.8794 72.0886 49.4993 87.4874L50.5008 85.7562C24.4036 70.6598 5.83939 43.9948 1.817 12.7783L-0.166604 13.0339ZM1.31766 13.7765C15.6921 5.64293 32.3023 1 50 1V-1C31.9482 -1 14.9997 3.73672 0.332732 12.0358L1.31766 13.7765ZM50 1C67.6977 1 84.308 5.64293 98.6824 13.7765L99.6673 12.0358C85.0004 3.73672 68.0519 -1 50 -1V1Z"
            fill="white"
          />
        </svg>
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
