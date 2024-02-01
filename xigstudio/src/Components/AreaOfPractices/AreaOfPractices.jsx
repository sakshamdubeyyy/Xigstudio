import React from "react";
import styles from "./AreaOfPractices.module.css";
import GridSection from "../Grid/Grid";

export default function AreaOfPractices(){
    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h2>Area Of Practices</h2>
                </div>
                <div className={styles.Grid}>
                    <GridSection/>
                </div>
            </div>
        </>
    );
}