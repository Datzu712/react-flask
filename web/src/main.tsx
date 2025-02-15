import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import App from './App.tsx';

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <BrowserRouter basename={import.meta.env.VITE_BASE_URL || ''}>
            <App />
        </BrowserRouter>
    </StrictMode>,
);
