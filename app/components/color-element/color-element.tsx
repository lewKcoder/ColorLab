import { Component } from "./types";
import styles from "./styles.module.scss";

export const ColorElement: Component = (props) => {
  const { id, onChange, color } = props;

  return (
    <label
      htmlFor={id}
      className={styles.label}
      style={{ backgroundColor: color }}
    >
      <input
        type="color"
        id={id}
        className={styles.input}
        onChange={onChange}
      />
    </label>
  );
};
