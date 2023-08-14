import styles from './Technology.module.css';
import { StepProps } from './types';

export function Step({ index, setIndex, active }: StepProps) {
    const handleClick = () => setIndex(index);

    return (
        <div
            onClick={handleClick}
            className={active === index ? styles.activeStep : styles.step}
        >
            {index + 1}
        </div>
    );
}
