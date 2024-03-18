import React from "react";

import { ReactComponent as Logo } from "../../images/logo.svg";
import Navigation from "../navigation/Navigation";
import Contacts from "../contacts/Contacts";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
    return (
        <header className={styles.container}>
            <Logo className={styles.logo}/>
            <Navigation />
            <Contacts />
        </header>
    )
} 

export default Header;