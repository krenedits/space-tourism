import { Layout } from '@/components';
import Home from './Home';
import { Navigate } from 'react-router-dom';
import Destinations from './Destinations';
import Crew from './Crew';
import Technology from './Technology';

const Pages = {
    element: <Layout />,
    children: [
        Home,
        Destinations,
        Crew,
        Technology,
        {
            path: '*',
            element: <Navigate to='./home' />,
        },
    ],
};

export default Pages;
