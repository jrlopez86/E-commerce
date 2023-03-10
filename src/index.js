import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/components/Estilos/app.css';
import App from './App';
import './components/Firebase/Config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


