import React from "react";
import styles from "./Hero.module.css";
import Navbar from "../Navbar/Navbar";
import HeroImage from "../../Assets/HeroImage.png";

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h1>You don't have to</h1>
            <h1>Fight them Alone.</h1>
          </div>
          <div className={styles.para}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deleniti, consequatur. Voluptatibus voluptatum, laudantium quasi
              repellendus deserunt dignissimos, possimus rem qui esse, nam
              ratione illo reiciendis. Vitae iure minus at asperiores.d
            </p>
          </div>
          <div className={styles.emailInput}>
            <input type="text" placeholder="Enter your email address" className={styles.searchBar}/>
            <button className={styles.searchButton}>Let's Talk</button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src={HeroImage} alt="Hero" />
        </div>
      </div>
    </div>
  );
}
