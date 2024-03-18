import React from "react";

import styles from "./VerticalLine.module.scss";
import "../../utils/variables.scss";

const VerticalLine: React.FC<{ color?: "primary" | "secondary",
    rightOffset?: number,
    leftOffset?: number,
    height?: number }> = ({ color, rightOffset, leftOffset, height }) => {
    const lineColor = color || "primary";

    return (
        <div style={{ color: lineColor === "primary" ? "$primary" : "$secondary",
                      right: `${rightOffset}%`, left: `${leftOffset}%`,
                      height: height ? `${height}%` : '100%',
                      top: height ? `${(100 - height) / 2}%` : 0 }}
            className={styles.vertical__line}>
        </div>
    )
}

export default VerticalLine;