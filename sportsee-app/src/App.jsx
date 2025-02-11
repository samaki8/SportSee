/**
 * @file Composant principal de l'application.
 * @module App
 */

import React from 'react';
import { Outlet } from 'react-router-dom';
import './styles/index.css'
import './styles/App.css'
import './styles/Dashboard.css'

/**
 * Composant App qui sert de conteneur principal pour l'application.
 * Utilise Outlet de React Router pour le rendu des routes enfants.
 * @returns {JSX.Element} Le composant App.
 */
function App() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default App


