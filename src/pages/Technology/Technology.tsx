import data from '@/data.json';
import { useMediaQuery } from '@/hooks';
import { useState } from 'react';
import styles from './Technology.module.css';
import { Stepper } from './Stepper';

export default function Technology() {
    const [index, setIndex] = useState(0);
    const active = data.technology[index];
    const matches = useMediaQuery('(min-width: 1024px)');

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Stepper index={index} setIndex={setIndex} />
                <div className={styles.text}>
                    <div>The terminology...</div>
                    <h3>{active.name}</h3>
                    <p>{active.description}</p>
                </div>
            </div>
            <img
                src={active.images[matches ? 'portrait' : 'landscape']}
                alt={active.name}
                className={styles.image}
            />
        </div>
    );
}
