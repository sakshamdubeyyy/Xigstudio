import React from "react";
import styles from "./Subscribe.module.css";

export default function Subscribe(){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h1>Subscribe Our Newsletter</h1>
                </div>
                <div className={styles.emailInput}>
                    <input type="text" placeholder="Name:" className={styles.nameInput} />
                    <input type="text" placeholder="Enter your Email" className={styles.emailInputbox} />
                    <button className={styles.sendButton}>SEND</button>
                </div>
            </div>
        </>
    );
}