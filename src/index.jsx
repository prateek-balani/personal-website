import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Import Centra font assets so Vite bundles them
import bookFont from './assets/fonts/centra-font-family-1717166627-0/CentraNo1-Book-BF646c26921864d.ttf';
import mediumFont from './assets/fonts/centra-font-family-1717166627-0/CentraNo1-Medium-BF646c26904bcde.ttf';
import boldFont from './assets/fonts/centra-font-family-1717166627-0/CentraNo1-Bold-BF646c26907f100.ttf';

// Expose font URLs on window for CSS fallback debug (optional)
window.__CENTRA_FONTS__ = { bookFont, mediumFont, boldFont };
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
