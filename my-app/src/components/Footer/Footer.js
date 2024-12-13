import React from "react";

import styles from "../../asstes/styles/layout.module.css";

//icons
import { GoHomeFill } from "react-icons/go";
import { PiNotepadFill } from "react-icons/pi";
import { IoLibrarySharp } from "react-icons/io5";

const Footer = () => {
    return (
        <>
        <footer className={`${styles.footer}`}>
            <ul>
                <li>
                    <button type="button" className={`${styles.footer_btn}`}>
                        <span className={`${styles.icon}`}><GoHomeFill/></span>
                        <span className={`${styles.text}`}>홈</span>
                    </button>
                </li>
                <li>
                    <button type="button" className={`${styles.footer_btn}`}>
                        <span className={`${styles.icon}`}><PiNotepadFill/></span>
                        <span className={`${styles.text}`}>공연 기록</span>
                    </button>
                </li>
                <li>
                    <button type="button" className={`${styles.footer_btn}`}>
                        <span className={`${styles.icon}`}><IoLibrarySharp/></span>
                        <span className={`${styles.text}`}>나의 바인더</span>
                    </button>
                </li>
            </ul>
        </footer>
        </>
    );
};

export default Footer;