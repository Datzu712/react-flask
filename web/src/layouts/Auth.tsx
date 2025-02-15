import { Outlet } from 'react-router';
import { useEffect } from 'react';

export default function AuthLayout() {
    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', 'light');
    }, []);

    return (
        <div className="container-fluid vh-100 bg-light d-flex align-items-center">
            <Outlet />
        </div>
    );
}
