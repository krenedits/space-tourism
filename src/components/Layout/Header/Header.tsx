import styles from './Header.module.css';
import data from '@/data.json';
import ListItem from './ListItem';
import { useMediaQuery } from '@/hooks';
import MobileMenu from './MobileMenu';

export default function Header() {
    const keys = ['Home', ...Object.keys(data)];
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <>
            <header className={styles.header}>
                <img src='./assets/shared/logo.svg' alt='logo' id='logo' />
                <hr />
                {isMobile ? (
                    <MobileMenu keys={keys} />
                ) : (
                    <nav>
                        <ul>
                            {keys.map((key, index) => (
                                <ListItem key={key} label={key} index={index} />
                            ))}
                        </ul>
                    </nav>
                )}
            </header>
        </>
    );
}
