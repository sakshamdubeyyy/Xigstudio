import React from "react";
import styles from "./IntroSection.module.css";
import LineImage from "../../Assets/Line.png";

export default function InroSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h3>Let's Introduce</h3>
        <h3>Ourself</h3>
      </div>
      <div className={styles.LineImage}>
        <img src={LineImage} alt="" />
      </div>
      <div className={styles.right}>
        <h4>Criminal Lawyer</h4>
        <p>
          Amet minim mollit non deserunt ullamco est
          sit aliqua dolor do amet sint. Velit officia consequatduis
          enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
}
