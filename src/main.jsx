import React from 'react';
import ReactDOM from 'react-dom/client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import App from './App.jsx';

AOS.init({
  duration: 1200,
  once: true
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
