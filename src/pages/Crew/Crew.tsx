import { useState } from 'react';
import data from '@/data.json';
import { Image } from '@/components';
import styles from './Crew.module.css';
import { useMediaQuery } from '@/hooks';
import { Paginator } from './Paginator';

export default function Crew() {
    const [index, setIndex] = useState(0);
    const { crew } = data;
    const member = crew[index];
    const { images, name, role, bio } = member;
    const imageSrc = images.png.replace('.png', '');
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div className={styles.container}>
            <section className={styles.content}>
                <section>
                    <h4 className={styles.role}>{role}</h4>
                    <h3 className={styles.name}>{name}</h3>
                    <p className={styles.bio}>{bio}</p>
                </section>
                <Paginator index={index} setIndex={setIndex} />
            </section>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    alignItems: 'center',
                }}
            >
                <Image imageSrc={imageSrc} className={styles.image} />
                {isMobile && <div className={styles.hr} />}
            </div>
        </div>
    );
}
