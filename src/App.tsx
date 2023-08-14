import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Pages from './pages';

const router = createBrowserRouter([Pages]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
