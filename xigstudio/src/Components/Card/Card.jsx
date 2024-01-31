import React from "react";
import styles from "./Card.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CardImage from "../../Assets/CardImage.png"

export default function CardComponent({ heading, para }){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.card}>
                    <img src={CardImage} className={styles.cardImage} alt="" />
                    <h2 className={styles.heading}>{heading}</h2>
                    <p className={styles.para}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </>
    );
}