import React from "react";

import styles from "./Loader.module.scss";

/**
 * Loader Component
 * 
 * A component for displaying a loading spinner.
 * 
 * @component
 * @returns {React.ReactElement} - Returns a React element representing the loader.
 * 
 */
const Loader = () => {
    return (
      <div className={styles.loader__container}>
        <div className={styles.spinner} />
      </div>
    );
};
  
export default Loader;