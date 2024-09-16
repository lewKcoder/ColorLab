import { Component } from "./types";
import styles from "./styles.module.scss";

export const ColorElement: Component = (props) => {
  const { id, onChange, color } = props;

  return (
    <>
      <input
        type="color"
        id={id}
        className={styles.input}
        onChange={onChange}
      />
      <label htmlFor={id} className={styles.label}>
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="99.5" />
        </svg>
      </label>
    </>
  );
};
