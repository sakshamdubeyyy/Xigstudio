import React from "react";
import styles from "./Accordion.module.css";
import ExpandMoreButton from "../../Assets/ExpandMoreButton.png";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Line from "../../Assets/Line2.png";

export default function AccordionComponent({heading, content}){
    return(
        <>
            <div className={styles.container}>
                <Accordion elevation={0}>
                    <AccordionSummary expandIcon={<img src={ExpandMoreButton}></img>} aria-controls="panel1-content"
                    id="panel1-header" className={styles.header}>
                        {heading}
                    </AccordionSummary>
                    <AccordionDetails className={styles.content}>
                        {content}
                    </AccordionDetails>
                </Accordion>
                <img src={Line} alt="line" />
            </div>
        </>
    );
}