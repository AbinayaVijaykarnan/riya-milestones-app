import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return(
         <div className={styles.navbarFooter}>
            <div>Copyright © 2025- Riya’s Little World</div>
            <div className={styles.version}>Version - 2025.9.1.0</div>
         </div>
    );
};

export default Footer;