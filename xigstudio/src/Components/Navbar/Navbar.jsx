import React from "react";
import styles from "./Navbar.module.css";
import ContactUsButton from "../ContactUsButton/ContactUsButton";
import Logo from "../Logo/Logo";

export default function Navbar(){
    return (
        <>
            <nav className={styles.navbar}>
                <a href="/">
                    <Logo/>
                </a>
                <ul className={styles.navItems}>
                    <li>Home</li>
                    <li>Attorneys</li>
                    <li>Practice Areas</li>
                    <li>About Us</li>
                </ul>
                <ContactUsButton/>
            </nav>
        </>
    );
}