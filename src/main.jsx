import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.scss';
import App from './App.jsx';

const container = document.getElementById('root');

if (!container) {
  console.error('Root element not found: <div id="root"></div> missing in index.html');
} else {
  createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
