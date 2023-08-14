import data from '@/data.json';
import styles from './Technology.module.css';
import { StepperProps } from './types';
import { Step } from './Step';

export function Stepper({ index, setIndex }: StepperProps) {
    return (
        <div className={styles.stepper}>
            {data.technology.map((t, i) => (
                <Step
                    key={t.name}
                    index={i}
                    active={index}
                    setIndex={setIndex}
                />
            ))}
        </div>
    );
}
