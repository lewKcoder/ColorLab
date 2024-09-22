"use client";

import { useState } from "react";
import { Heading } from "./components";
import styles from "./styles.module.scss";
import { getTextColor } from "./utils";
import { LayoutColors } from "./layouts";

export default function Home() {
  const [resultColor, setResultColor] = useState("");
  const [copiedText, setCopiedText] = useState<string>("copy");

  const textColor = getTextColor(resultColor);

  const copyResultColor = () => {
    navigator.clipboard
      .writeText(resultColor)
      .then(() => {
        setCopiedText("success!");
      })
      .catch(() => {
        setCopiedText("fail...");
      });

    setTimeout(() => {
      setCopiedText("copy");
    }, 2000);
  };

  return (
    <div className={`${styles.container} container`}>
      <main className={styles.main}>
        <Heading />

        <div className={styles.content}>
          <div className={styles.result_copy_content}>
            <button
              className={`${styles.result_color} result_color`}
              onClick={() => copyResultColor()}
            >
              {resultColor}
            </button>

            <span className={`${styles.copy_status} copy_status`}>
              {copiedText}
            </span>
          </div>

          <LayoutColors
            resultColor={resultColor}
            setResultColor={setResultColor}
          />
        </div>
      </main>

      <style jsx>{`
        .container {
          background-color: ${resultColor};
        }
        .result_color {
          color: ${textColor};
          background-color: ${resultColor};
        }
        .result_color:hover {
          outline: 3px solid ${textColor};
        }
        .result_color::before {
          outline: 3px solid ${textColor};
        }
        .copy_status {
          color: ${textColor};
        }
      `}</style>
    </div>
  );
}
