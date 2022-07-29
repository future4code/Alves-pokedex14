import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Base } from './Styles/Elements/Generic/Base';
import { Reset } from './Styles/Elements/Generic/Reset';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Reset />
    <Base />
    <App />
  </React.StrictMode>
);
