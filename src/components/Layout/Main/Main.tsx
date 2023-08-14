import { Outlet, useLocation } from 'react-router-dom';
import styles from './Main.module.css';
import data from '@/data.json';

const titles: Record<string, string> = {
    destinations: 'Pick your destination',
    crew: 'Meet your crew',
    technology: 'Space Launch 101',
};

export default function Main() {
    const location = useLocation();
    const key = location.pathname.slice(1);
    const title = titles[key];
    const order = Object.keys(data).indexOf(key) + 1;

    return (
        <main className={styles.container}>
            <h5
                style={{
                    width: '100%',
                    display: 'flex',
                    gap: '28px',
                    color: '#fff',
                }}
            >
                <span
                    style={{
                        fontWeight: 700,
                        opacity: 0.25,
                    }}
                >
                    0{order}
                </span>
                <span>{title}</span>
            </h5>
            <Outlet />
        </main>
    );
}
