import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// import { BrowserRouter as Router } from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom';
import LoadingManager from './utils/LoadingManager';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
      <LoadingManager>
        <App />
      </LoadingManager>
    </Router>
);
