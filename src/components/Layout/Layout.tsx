import data from '@/data.json';
import { useMediaQuery } from '@/hooks';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Main } from './Main';

const keyMap: Record<string, string> = {
    destinations: 'destination',
};

export default function Layout() {
    const location = useLocation();
    const hasMainLayout = Object.keys(data).includes(
        location.pathname.slice(1)
    );
    const isMobile = useMediaQuery('(max-width: 768px)');
    const isTablet = useMediaQuery('(max-width: 1024px)');
    const key =
        keyMap[location.pathname.slice(1)] ?? location.pathname.slice(1);

    const getSize = () => {
        if (isMobile) return 'mobile';
        if (isTablet) return 'tablet';
        return 'desktop';
    };

    const src = `./assets/${key}/background-${key}-${getSize()}.jpg`;

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    height: '100%',
                    width: '100%',
                    top: 0,
                    zIndex: -1,
                    background: `url(${src}) lightgray 0px 0px / 100% 100% no-repeat`,
                }}
            />
            <Header />
            {hasMainLayout ? <Main /> : <Outlet />}
        </>
    );
}
