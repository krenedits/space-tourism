import data from '@/data.json';
import styles from './Crew.module.css';
import { PaginatorProps } from './Crew';
import { Page } from './Page';

export function Paginator({ index, setIndex }: PaginatorProps) {
    const { crew } = data;

    return (
        <div className={styles.paginator}>
            {crew.map((member, i) => {
                return (
                    <Page
                        key={member.name}
                        handleClick={() => setIndex(i)}
                        isActive={index === i}
                    />
                );
            })}
        </div>
    );
}
