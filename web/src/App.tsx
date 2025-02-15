import { useRoutes } from 'react-router';
import appRoutes from '@config/routes';
import { Suspense } from 'react';

export default function App() {
    const routes = useRoutes(appRoutes);

    return <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>;
}
