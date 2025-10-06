
import React from 'react';
import { CameraOutlined, StarOutlined, HeartFilled,LineOutlined  } from '@ant-design/icons';
import styles from './AboutMe.module.css';

const COLLECTIONS = [
    {
        label: 'Baby shower joys',
        key: 'collection_1'
    },
    {
        label: 'My very first newborn photoshoot',
        key: 'collection_2'
    },
    {
        label: 'My 6-month giggles and milestones',
        key: 'collection_3'
    },
    {
        label: 'My magical 1st birthday',
        key: 'collection_4'
    },
    {
        label: 'My travel tales and mini adventures',
        key: 'collection_5'
    },
    {
        label: 'And the everyday wonders of just being me',
        key: 'collection_6'
    }
];

const AboutMe = () => {
    return <div className={styles.aboutMeCover}>
        <div className={styles.aboutMeContent}>
            <h3 className={styles.title}> So, who am I ?</h3>
            <p className={styles.quote}><em>"Hi! I’m Rithanya, but everyone calls me Riya —- I arrived on February 22nd 2024 (Wednesday)… and I’ve been keeping everyone busy (and smiling!) ever since!"</em></p>
            <div className={styles.actualContent}>
                <p>Hello! I'm <strong>Riya</strong>, the tiny star of this little universe <StarOutlined /></p>
                <p>Born into a world filled with love, hugs, and cameras <CameraOutlined /> , I’ve been collecting memories since before I could even open my eyes</p>
                <p>This website is my digital memory book, a celebration of my journey, from the very beginning — the first flutter in mom’s tummy to my first birthday bash, and every precious moment in between.</p>
                <h3 style={{fontWeight: 500}}><CameraOutlined /> What You'll Find in My Memory Book:</h3>
                <div>
                    {
                        COLLECTIONS.map((collection) => (
                            <div key={collection.key}><LineOutlined /> {collection.label}</div>
                        ))
                    }
                </div>
                <p>So go ahead — take a peek into my tiny, wonderful world. I may be small, but my love is big. And I’m growing fast… so stay tuned!</p>
            </div>
            <div className={styles.footer}>
                <span>With tiny love,</span>
                <span><strong>Riya </strong><HeartFilled style={{ fontSize: '16px', color: 'rgba(204, 0, 0, 1)' }} /></span>
            </div>
        </div>

    </div>;
};

export default AboutMe;
