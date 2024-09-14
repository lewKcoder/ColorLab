"use client";

import styles from "./styles.module.scss";

export default function Home() {
  const backgroundColor = "red";

  return (
    <div className={`${styles.container} container`}>
      <main className={styles.main}></main>

      <style jsx>{`
        .container {
          background-color: ${backgroundColor};
        }
      `}</style>
    </div>
  );
}
