import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Perhatikan ekstensi .jsx

// Membuat root React dan me-render aplikasi
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);