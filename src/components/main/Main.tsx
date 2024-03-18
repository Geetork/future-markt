import React, { useState, useEffect, useMemo } from "react";

import styles from "./Main.module.scss";
import VerticalLine from "../vertical-line/VerticalLine";
import Button from "../button/Button";
import Feature from "../feature/Feature";
import DrawerComponent from "../drawer/Drawer";
import RequestForm from "../request-form/RequestForm";
import Response from "../response/Response";
import { ReactComponent as Mentor } from "../../images/mentor.svg";
import { getJSON } from "../../utils/api";
import { clearLocalStorageAfter24Hours } from "../../utils/localStorage";

const getDateStringFromDate = (date: Date): string => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}${month}${year}`;
}

/**
 * Main component representing the main content section of the application.
 * Manages state related to drawer, request form, and window width.
 * 
 * @returns The main content section of the application.
 */
const Main: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isRequestSent, setIsRequestSent] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [gbp, setGBP] = useState(100);

    const serviceDescription = `Когда ваше время и энергия лучше сфокусированы,
                                стремление к новым возможностям становится реальностью, 
                                ваш успех зависит от ваших действий`;

    const toggleDrawer = (isOpen: boolean) => {
        setIsDrawerOpen(isOpen);
        return isDrawerOpen;
    }

    const sendRequest = () => {
        setIsRequestSent(true);
    }

    const getSumOfDigitsInDate: number = useMemo(() => {
        const str = getDateStringFromDate(new Date());
        return str.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }, []);

    // Sets data from localStorage or fetches data
    const setData = () => {
        clearLocalStorageAfter24Hours();

        const isRequestSentItem = localStorage.getItem('isRequestSent');
        if (isRequestSentItem) {
            setIsRequestSent(true);
        };

        const gbpItem = localStorage.getItem('gbp');
        if (gbpItem) {
            setGBP(JSON.parse(gbpItem).value);
        } else {
            getJSON()
            .then((res) => {
                if (res?.Valute?.GBP) {
                    const value = Math.floor(res?.Valute?.GBP.Value);
                    setGBP(value);
                    localStorage.setItem('gbp', JSON.stringify({ 
                        timestamp: new Date().getTime(),
                        value: value,
                    }));
                }
            }).catch(e => console.log(e));
        };
    }

    // useEffect to set data and handle window resize
    useEffect(() => {
        setData();

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return (
        <main id="main" className={styles.container}>
            <section className={styles.section__container}>
                <div className={styles.services__container}>
                    <p className={`text__raleway_h1 ${styles.title} ${styles.animated__title}`}>
                        СОЗДАЮ УСЛОВИЯ ДЛЯ ВАШЕГО УСПЕХА
                    </p>
                    <div className={styles.description__container}>
                        <VerticalLine leftOffset={0} color="primary" height={80}/>
                        <p className={`text__raleway_t2 ${styles.transparent} ${styles.p}`}>
                            { 
                                windowWidth < 600 ?
                                    "Ваш успех зависит от Ваших действий" :
                                    serviceDescription 
                            }
                        </p>
                    </div>
                    <div className={styles.row_40}>
                        <Button onClick={() => toggleDrawer(true)} style="primary">
                            {
                                windowWidth < 600 ? 'Записаться' : 'Записаться на консультацию'
                            }
                        </Button>
                        <Button onClick={() => toggleDrawer(true)} style="secondary">
                            {
                                windowWidth < 600 ? 'Заказать звонок' : 'Бесплатная консультация'
                            }
                        </Button>
                    </div>
                </div>
                
                <div className={styles.features__container}>
                    <Feature title={`${getSumOfDigitsInDate}+`}
                        text={windowWidth < 600 ?
                                "техники" :
                                "техник для достижения целей"}/>
                    <Feature title={`${gbp}%`} text={windowWidth < 600 ? 
                        "продуктивности" : 
                        "увеличение личной продуктивности"}/>
                </div>                
            </section>

            <Mentor className={styles.mentor}/>
            
            <DrawerComponent isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer}>
                {
                    isRequestSent ? <Response /> : <RequestForm sendRequest={sendRequest} />
                }
            </DrawerComponent>
        </main>
    )
}

export default Main;