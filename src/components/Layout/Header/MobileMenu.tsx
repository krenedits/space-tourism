import { useEffect, useState } from 'react';
import ListItem from './ListItem';
import { useLocation } from 'react-router-dom';

export default function MobileMenu({ keys }: { keys: string[] }) {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setOpen(false);
    }, [location]);

    return (
        <>
            <img
                src='./assets/shared/icon-hamburger.svg'
                alt='hamburger'
                id='hamburger'
                onClick={() => setOpen(true)}
                style={{
                    cursor: 'pointer',
                }}
            />
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: '250px',
                    zIndex: open ? 100 : -1,
                    right: 0,
                    transition: 'z-index 0.3s ease-in-out',
                }}
                onClick={() => setOpen(false)}
            >
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        width: '250px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        backdropFilter: 'blur(40px)',
                        transform: open ? 'translateX(0)' : 'translateX(100%)',
                        transition: 'transform 0.3s ease-in-out',
                        // on safari
                        WebkitBackdropFilter: 'blur(40px)',
                        zIndex: 200,
                        padding: '32px',
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '64px',
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div
                        style={{
                            textAlign: 'right',
                            userSelect: 'none',
                        }}
                    >
                        <img
                            src='./assets/shared/icon-close.svg'
                            alt='close'
                            id='close'
                            onClick={() => setOpen(false)}
                            style={{
                                cursor: 'pointer',
                                width: '19px',
                                height: '19px',
                            }}
                        />
                    </div>
                    <nav>
                        <ul>
                            {keys.map((key, index) => (
                                <ListItem key={key} label={key} index={index} />
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}
