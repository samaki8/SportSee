//sportsee - app\src\index.jsx
// sportsee-app/src/index.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Renommez App.jsx en App.js
import Dashboard from './pages/Dashboard'; // Renommez Dashboard.jsx en Dashboard.js

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} />
        <Route path="user/:userId" element={<Dashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
