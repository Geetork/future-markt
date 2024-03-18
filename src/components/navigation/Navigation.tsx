import React from "react";

import styles from "./Navigation.module.scss";
import { ReactComponent as MenuIcon } from "../../images/menu.svg";

/**
 * Navigation component representing the navigation menu of the application.
 * 
 * @returns The navigation menu with navigation items.
 */
const Navigation: React.FC = () => {
    const navigationItems = [
        'Обо мне',
        'Наставничество',
        'Мероприятия',
        'Кейсы',
        'Отзывы',
        'Контакты',
    ];
    return (
        <nav className={`text__montserrat_t3 ${styles.container}`}>
            {
                navigationItems.map((item, index) => (
                    <a key={index} href="/" className={styles.hidden}>{ item }</a>
                ))
            }
            <MenuIcon className={`icon ${styles.menu}`} />
        </nav>
    )
}

export default Navigation;