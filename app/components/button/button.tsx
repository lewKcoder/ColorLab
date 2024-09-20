import { getTextColor } from "@/app/utils";
import styles from "./styles.module.scss";
import { Component } from "./types";

export const Button: Component = (props) => {
  const { onClick, disabled, isIncreasing = true, resultColor } = props;

  const textColor = getTextColor(resultColor);

  return (
    <button onClick={onClick} disabled={disabled} className={styles.container}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="6"
          y="17.5"
          width="3"
          height="20"
          transform="rotate(-90 6 17.5)"
          fill={textColor}
        />
        {isIncreasing && (
          <rect x="14.5" y="6" width="3" height="20" fill={textColor} />
        )}
      </svg>
    </button>
  );
};
