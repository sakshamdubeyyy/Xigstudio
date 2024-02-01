import React from "react";
import styles from "./ClientCard.module.css";

export default function ClientCard({image, name, position, content}){
    return(
        <>
            <div className={styles.container}>
                <img src={image} className={styles.clientImage} alt="" />
                <h2 className={styles.clientName}>{name}</h2>
                <h4 className={styles.clientPosition}>{position}</h4>
                <p className={styles.clientContent}>{content}</p>
            </div>
        </>
    );
}