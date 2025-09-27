import React from 'react';
import styles from './LandingPage.module.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const LandingPage = () => {
    return (
        <div className={styles.LandingPage}>
           <Header />
            <div className={styles.banner} >
                <h2>Welcome to Riya's Little World</h2>
            </div>
        </div>
    );
};

export default LandingPage;
