import React from "react";

import { ReactComponent as Logo } from "../../images/logo.svg";
import styles from "./Response.module.scss";

const Response: React.FC = () => {
    return (
        <div className={`column ${styles.container}`}>
            <p className="text__raleway_h2">Спасибо за заявку</p>
            <p className="text__raleway_h3">
                Я обязательно свяжусь с Вами в ближайшее время
            </p>
            <div className={styles.logo}>
                <Logo />
            </div>
        </div>
    )
}

export default Response;