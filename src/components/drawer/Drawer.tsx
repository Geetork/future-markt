import React, { ReactNode } from "react";
import { Drawer } from "@mui/material";

import styles from "./Drawer.module.scss";
import { ReactComponent as CrossIcon } from "../../images/cross.svg";


/**
 * Drawer component that can be opened or closed.
 * 
 * @param isDrawerOpen Indicates whether the drawer is open.
 * @param toggleDrawer Function to toggle the state of the drawer.
 * @param children The content of the drawer.
 * @returns A drawer component with header and content.
 */
const DrawerComponent: React.FC<{
    isDrawerOpen: boolean,
    toggleDrawer: (isOpen: boolean) => void,
    children: ReactNode,
}> = ({ isDrawerOpen, toggleDrawer, children }) => {
    return (
        <Drawer open={isDrawerOpen} onClose={() => toggleDrawer(false)}>
            <div className={styles.container}>
                <div className={styles.drawer__header}>
                    <CrossIcon className="icon" onClick={() => toggleDrawer(false)}/>
                </div>
                <div className={styles.drawer__content}>
                    {children}
                </div>
            </div>
        </Drawer>
    )
}

export default DrawerComponent;