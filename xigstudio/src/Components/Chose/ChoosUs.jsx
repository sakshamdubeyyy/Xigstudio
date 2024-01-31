import React from "react";
import styles from "./ChoosUs.module.css";
import CardComponent from "../Card/Card";


export default function ChoosUs() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Why Choose us?</h2>
      </div>
      <div className={styles.cards}>
       <CardComponent heading={"98% Success Rate"}/>
       <CardComponent heading={"100% Success Rate"}/>
       <CardComponent heading={"100% Success Rate"}/>
      </div>
    </div>
  );
}
