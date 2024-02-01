import React from "react";
import styles from "./Clients.module.css";
import ButtonLeft from "../../Assets/ButtonLeft.svg";
import ButtonRight from "../../Assets/ButtonRight.png";
import ClientCard from "../ClientCard/ClientCard";
import Client1 from "../../Assets/Client1.png";
import Client2 from "../../Assets/Client2.png";
import Client3 from "../../Assets/Client3.png";



export default function Clients(){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <div className={styles.headingSection}>
                    <h1>What says our</h1>
                    <h1>happy Clients</h1>
                    </div>
                <div className={styles.buttons}>
                    <div className={styles.buttonLeft}>
                        <img src={ButtonLeft} alt="" />
                    </div>
                    <div className={styles.buttonRight}>
                        <img src={ButtonRight} alt="" />
                    </div>
                </div>
                    
                </div>
                
                <div className={styles.cards}>
                    <ClientCard image={Client1} name={"Jane Cooper"} position={"Ceo of Hunt"} content={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia"}/>
                    <ClientCard image={Client2} name={"Devon Lane"} position={"Ceo of Hunt"} content={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia"}/>
                    <ClientCard image={Client3} name={"Robert Fox"} position={"Ceo of Hunt"} content={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia"}/>
                </div>
            </div>
        </>
    );
}