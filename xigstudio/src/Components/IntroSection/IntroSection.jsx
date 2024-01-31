import React from "react";
import styles from "./IntroSection.module.css";

export default function InroSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h3>Let's Introduce</h3>
        <h3>Ourself</h3>
      </div>
      <hr />
      <div className={styles.right}>
        <h4>Criminal Lawyer</h4>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            aspernatur dignissimos at cumque harum repudiandae natus aliquid
            provident voluptatibus recusandae.
        </p>
      </div>
    </div>
  );
}
