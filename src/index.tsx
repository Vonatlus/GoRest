import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter as Router } from "react-router-dom";
import { GoRestProvider } from './GoRestContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <GoRestProvider>
        <App />
      </GoRestProvider>
    </Router>
  </React.StrictMode>
);
