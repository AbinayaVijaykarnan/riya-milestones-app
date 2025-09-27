import React from 'react';
import styles from './Header.module.css';
import { useHistory } from 'react-router-dom';
import { Button } from "antd";
import { APP_BASE_PATH } from '../../../App.config';

const Header = () => {
    const history = useHistory();

    const headersList = [
        {
            key: 'about-me',
            label: 'ABOUT ME',
        },
        {
            key: 'album',
            label: 'ALBUM',
        },
        {
            key: 'contact',
            label: 'CONTACT',
        },
    ];

    const handleHeaderClick = (key) => {
        console.log('key', key);
        history.push(`${APP_BASE_PATH}/${key}`)
    };

    return(
         <div className={styles.navbarHeader}>
            {
                headersList.map((header) => (
                    <Button key={header.key} onClick={() => handleHeaderClick(header.key)}>{header.label}</Button>
                    ))
            }
            </div>
    );
};

export default Header;
