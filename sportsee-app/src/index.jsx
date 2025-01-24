//sportsee - app\src\index.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="user/:userId}" element={<Dashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>
);