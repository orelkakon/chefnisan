import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Privacy from './Components/Privacy';
import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

