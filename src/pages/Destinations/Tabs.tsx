import Tab from './Tab';
import data from '@/data.json';
import { TabsProps } from './types';
import styles from './Destinations.module.css';

const Tabs = ({ index, setIndex }: TabsProps) => {
    return (
        <ul className={styles.tabs}>
            {data.destinations.map((d, i) => (
                <Tab
                    key={d.name}
                    index={index}
                    setIndex={setIndex}
                    ownIndex={i}
                />
            ))}
        </ul>
    );
};

export default Tabs;
