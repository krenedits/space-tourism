import data from '@/data.json';
import styles from './Destinations.module.css';

interface InfosProps {
    destination: (typeof data.destinations)[0];
}

interface InfoProps {
    title: string;
    value: string;
}

const Info = ({ title, value }: InfoProps) => {
    return (
        <div>
            <span>{title}</span>
            <h6>{value}</h6>
        </div>
    );
};

export default function Infos({ destination }: InfosProps) {
    return (
        <section className={styles.infos}>
            <Info title='Avg. distance' value={destination.distance} />
            <Info title='Est. travel time' value={destination.travel} />
        </section>
    );
}
