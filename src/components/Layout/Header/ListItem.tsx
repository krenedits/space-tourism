import { useLocation, Link } from 'react-router-dom';
import { useMemo } from 'react';
import { useMediaQuery } from '@/hooks';

interface ListItemProps {
    label: string;
    index: number;
}

export default function ListItem({ label, index }: ListItemProps) {
    const location = useLocation();
    const isActive = useMemo(
        () => location.pathname.split('/').slice(-1)[0] === label.toLowerCase(),
        [location.pathname, label]
    );
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <li>
            <Link
                to={`./${label.toLowerCase()}`}
                style={
                    isActive && !isMobile
                        ? {
                              borderBottom: '3px solid #fff',
                          }
                        : {}
                }
            >
                <strong>0{index}</strong> {label}
            </Link>
        </li>
    );
}
