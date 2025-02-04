// sportsee-app/src/main.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import Dashboard from './pages/Dashboard';
import './styles/index.css'
import './styles/App.css'
import './styles/Dashboard.css'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Redirection par défaut vers /user/18 */}
          <Route index element={<Navigate to="/user/18" />} />
          {/*Route pour afficher le dashboard avec un userId */}
          <Route path="user/:userId" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


