import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

import './styles/app.css';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
