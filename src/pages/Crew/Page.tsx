import styles from './Crew.module.css';

export function Page({
    handleClick,
    isActive,
}: {
    handleClick: () => void;
    isActive: boolean;
}) {
    return (
        <div
            onClick={handleClick}
            className={styles.page}
            style={
                isActive
                    ? {
                          backgroundColor: '#fff',
                      }
                    : {}
            }
        />
    );
}
