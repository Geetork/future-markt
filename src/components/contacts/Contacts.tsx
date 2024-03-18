import React from "react";

import { ReactComponent as IconComponent } from "../../images/phone.svg";
import styles from './Contacts.module.scss';

const Contacts: React.FC = () => {
    return (
        <div className={styles.row}>
            <IconComponent className="icon" />
            <span className={`text__montserrat_t2 ${styles.hidden}`}>8-345-123-34-45</span>
        </div>
    )
}

export default Contacts;