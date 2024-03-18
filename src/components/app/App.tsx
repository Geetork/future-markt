import React, { useEffect, useState } from 'react';

import styles from './App.module.scss';
import Header from '../header/Header';
import Main from '../main/Main';
import Loader from '../loader/Loader';

/**
 * Functional component representing the root of the application
 * Manages the loading state and renders the main content once loaded
 */
const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className={styles.container}> 
      <div className={styles.background__container}></div>
      <div className={styles.content__container}>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
