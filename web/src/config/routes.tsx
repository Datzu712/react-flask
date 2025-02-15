import { type RouteObject } from 'react-router';
import { createElement, lazy } from 'react';

import DashboardLayout from '@layouts/Dashboard';
import AuthLayout from '@layouts/Auth';

/**
 * Las rutas tambien se pueden expresar como componentes:
 * ```tsx
 *  import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import { createElement, lazy } from 'react';

    import DashboardLayout from '@layouts/Dashboard';
    import AuthLayout from '@layouts/Auth';

    const Home = lazy(() => import('@pages/Home'));
    const Login = lazy(() => import('@pages/Login'));

    const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<DashboardLayout />}>
            <Route path="*" element={createElement(Home)} />
        </Route>
        <Route path="auth/*" element={<AuthLayout />}>
            <Route path="login" element={createElement(Login)} />
        </Route>
        </Routes>
    </BrowserRouter>
    );
 * ```
 */
const appRoutes: RouteObject[] = [
    {
        path: '*',
        element: <DashboardLayout />,
        children: [
            {
                path: '',
                element: createElement(lazy(() => import('@pages/Home'))),
            },
        ],
    },
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: createElement(lazy(() => import('@pages/Login'))),
            },
        ],
    },
];

export default appRoutes;
