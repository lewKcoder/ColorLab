"use client";

import { Heading } from "./components";
import styles from "./styles.module.scss";

export default function Home() {
  const backgroundColor = "red";

  return (
    <div className={`${styles.container} container`}>
      <main className={styles.main}>
        <Heading />

        <h2 className={styles.color}>#F046CD</h2>
      </main>

      <style jsx>{`
        .container {
          background-color: ${backgroundColor};
        }
      `}</style>
    </div>
  );
}
