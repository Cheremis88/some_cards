import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';

const root = createRoot(document.querySelector('#root') as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);