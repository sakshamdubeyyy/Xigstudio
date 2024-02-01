import React from "react";
import styles from "./Team.module.css";
import TeamCard from "../TeamCard/TeamCard";
import Team1 from "../../Assets/Team1.png";
import Team2 from "../../Assets/Team2.png";
import Team3 from "../../Assets/Team3.png";
import Team4 from "../../Assets/Team4.png";
import Team5 from "../../Assets/Team5.png";
import Team6 from "../../Assets/Team6.png";


export default function Team(){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h2>Our Team</h2>
                </div>
                <div className={styles.cards}>
                    <TeamCard image={Team1} name={"Daniel Def"} cases={"301 Cases"}/>
                    <TeamCard image={Team2} name={"Stanfole"} cases={"850 Cases"}/>
                    <TeamCard image={Team3} name={"Cesforila"} cases={"470 Cases"}/>
                    <TeamCard image={Team4} name={"Colleen"} cases={"180 Cases"}/>
                    <TeamCard image={Team5} name={"Haldone"} cases={"212 Cases"}/>
                    <TeamCard image={Team6} name={"Nik Jeo"} cases={"350 Cases"}/>
                </div>
            </div>
        </>
    );
}