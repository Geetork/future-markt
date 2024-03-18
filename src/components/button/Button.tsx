import React, { ReactNode } from "react";

import VerticalLine from "../vertical-line/VerticalLine";
import { ReactComponent as ArrowIcon } from "../../images/vector.svg";
import "../../utils/variables.scss";
import styles from "./Button.module.scss";


/**
 * Button component that can be styled as primary or secondary
 * 
 * @param style The style of the button: "primary" or "secondary". Default is "primary"
 * @param children The content of the button
 * @param onClick The click event handler for the button
 * @param buttonType The type of the button: "button", "submit", or "reset". Default is "button"
 * @returns A styled button element
 */
const Button: React.FC<{ 
    style?: "primary" | "secondary",
    children: ReactNode,
    onClick?: () => void,
    buttonType?: "button" |"submit" | "reset"}> = ({ 
        style, 
        children, 
        onClick, 
        buttonType }) => {
    const buttonStyle = style || "primary";

    return (
        <button type={buttonType || "button"}
                onClick={onClick} 
                className={`icon text__raleway_t1 row
                    ${buttonStyle === "primary" ? 'button__primary' : 'button__secondary'}
                    ${styles.animated__button} ${styles.animated__button_white}`}>
            <div className={styles.label}>
                { children }
            </div>
            <VerticalLine rightOffset={20}
                color={buttonStyle === "primary" ? "secondary" : "primary"}/>
            <ArrowIcon className={styles.arrow}/>
        </button>
    )
}

export default Button;