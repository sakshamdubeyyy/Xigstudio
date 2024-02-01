import React from "react";
import styles from "./TeamCard.module.css";

export default function TeamCard({image, name, cases}){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src={image} alt="" />
                </div>
                <div className={styles.nameAndCases}>
                    <h2 className={styles.name}>{name}</h2>
                    <h4 className={styles.cases}>{cases}</h4>
                </div>
            </div>
        </>
    );
}