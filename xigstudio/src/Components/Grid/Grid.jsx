import React from "react";
import styles from "./Grid.module.css";
import Grid from '@mui/material/Grid';
import GridImage1 from "../../Assets/GridImage1.png";
import GridImage2 from "../../Assets/GridImage2.png";
import GridImage3 from "../../Assets/GridImage3.png";
import GridImage4 from "../../Assets/GridImage4.png";
import GridImage5 from "../../Assets/GridImage5.png";
import GridImage6 from "../../Assets/GridImage6.png";



export default function GridSection(){
    return (
        <>
            <div className={styles.grid}>
                <Grid container spacing={3}>
                    <Grid item lg={8} className={styles.gridItem}>
                        <img src={GridImage1} alt="GridImage" />
                        <div className={styles.banner}>BUSINESS LAW</div>
                    </Grid>
                    <Grid item lg={4} className={styles.gridItem}>
                        <img src={GridImage2} alt="GridImage" />
                        <div className={styles.banner}>PARTNERSHIP LAW</div>
                    </Grid>
                    <Grid item lg={4} className={styles.gridItem}>
                        <img src={GridImage3} alt="GridImage" />
                        <div className={styles.banner}>REAL ESTATE LAW</div>
                    </Grid>
                    <Grid item lg={8} className={styles.gridItem}>
                        <img src={GridImage4} alt="GridImage" />
                        <div className={styles.banner}>LANDLORD DISPUTES LAW</div>
                    </Grid>
                    <Grid item lg={8} className={styles.gridItem}>
                        <img src={GridImage5} alt="GridImage" />
                        <div className={styles.banner}>BUSINESS LAW</div>
                    </Grid>
                    <Grid item lg={4} className={styles.gridItem}>
                        <img src={GridImage6} alt="GridImage" />
                        <div className={styles.banner}>ELDER LAW</div>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}