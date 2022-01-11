import React from 'react';
import ReactDOM from 'react-dom';

import { AppProvider } from './context/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
