import React from "react";
import styles from "./Faq.module.css";
import AccordionComponent from "../Accordion/Accordion";



export default function Faq(){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.headingLeft}>
                        <h1>FAQ</h1>
                    </div>
                    <div className={styles.contentLeft}>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.accordion}>
                        <AccordionComponent heading={"Do I need a personal injury report?"} content={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."}/>
                        <AccordionComponent heading={"How is my case worth?"} content={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."}/>
                        <AccordionComponent heading={"What should I do after car accident?"} content={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."}/>
                        <AccordionComponent heading={"What should I do after I kill someone?"} content={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."}/>
                    </div>
                </div>
            </div>
        </>
    );
}