import { useState } from 'react';
import data from '@/data.json';
import Tabs from './Tabs';
import styles from './Destinations.module.css';
import Infos from './Infos';
import { Image } from '@/components';

export default function Destinations() {
    const [index, setIndex] = useState(0);
    const destination = data.destinations[index];
    const imageSrc = destination.images.png.replace('.png', '');

    return (
        <div className={styles.container}>
            <Image imageSrc={imageSrc} className={styles.image} />
            <div className={styles.content}>
                <Tabs index={index} setIndex={setIndex} />
                <h2>{destination.name}</h2>
                <p>{destination.description}</p>
                <hr />
                <Infos destination={destination} />
            </div>
        </div>
    );
}
