"use client";

import { Heading } from "./components";
import styles from "./styles.module.scss";
import { LayoutColors } from "./layouts";

export default function Home() {
  return (
    <main className={`${styles.container} container`}>
      <Heading />

      <LayoutColors />
    </main>
  );
}
