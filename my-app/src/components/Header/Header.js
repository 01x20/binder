import React from "react";
import {Link} from 'react-router-dom';

import styles from "../../asstes/styles/layout.module.css";

const Header = () => {
    return (
        <>
        <header className={`${styles.header}`}>
            <Link to="/" className={`${styles.logo}`}>Binder</Link>
        </header>
        </>
    );
};

export default Header;