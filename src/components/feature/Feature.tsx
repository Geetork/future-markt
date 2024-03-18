import React from "react";

import VerticalLine from "../vertical-line/VerticalLine";
import styles from "./Feature.module.scss";


const Feature: React.FC<{ title: string, text: string }> = ({ title, text }) => {
    return (
        <div className={styles.container}>
            <VerticalLine leftOffset={0} height={90}/>
            <span className="text__montserrat_t1">{title}</span>
            <span className={`text__montserrat_t3 ${styles.text}`}>{text}</span>
        </div>
    )
}

export default Feature;