import React from "react";
import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";
import Icon from "../../Assets/Icon.png";
import Icon2 from "../../Assets/Icon2.png";
import Icon3 from "../../Assets/Icon3.png";
import Icon4 from "../../Assets/Icon4.png";


export default function Footer(){
    return(
        <>
            <div className={styles.container}>
                <nav className={styles.navbar}>
                    <div className={styles.logoSection}> 
                    <a href="/">
                        <Logo/>
                    </a>
                    </div>
                    <ul className={styles.navItems}>
                        <li>Home</li>
                        <li>Attorneys</li>
                        <li>Practice Areas</li>
                        <li>About Us</li>
                    </ul>
                    <div className={styles.links}>
                        <img src={Icon} alt="Ig" />
                        <img src={Icon2} alt="Ig" />
                        <img src={Icon3} alt="Ig" />
                        <img src={Icon4} alt="Ig" />
                    </div>
                </nav>
                <div className={styles.footerContent}>
                    <p>© 2020 Acme. All right reserved.</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
        </>
    );
}