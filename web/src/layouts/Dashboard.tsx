import '@styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

import { Outlet, useLocation, useNavigate } from 'react-router';

export default function Dashboard() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const checkLoginStatus = async () => {
            const userData = localStorage.getItem('userData');
            if (!userData) {
                return navigate('/auth/login');
            }
        };

        checkLoginStatus();
    }, [location.pathname]);

    return (
        <div className="d-flex flex-column min-vh-100">
            <header className="bg-primary text-white p-3">
                <h1>Dashboard Header</h1>
            </header>

            <main className="flex-grow-1">
                <Outlet />{' '}
                {/* Aqui se va a renderear el contenido del dashboard (los childrens de la ruta) */}
            </main>

            <footer className="bg-dark text-white text-center p-3 mt-auto">
                <p>Dashboard Footer</p>
            </footer>
        </div>
    );
}
