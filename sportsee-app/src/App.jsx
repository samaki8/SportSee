//import { useState } from 'react'
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavTop from './components/navTop';
import NavLeft from './components/navLeft';
import './styles/index.css'
import './styles/App.css'
import './styles/Dashboard.css'


function App() {


  return (

    <div>
      {/*<NavTop />
      <NavLeft />
      <h1> Test</h1>*/}
      <Outlet />
    </div>

  )
}

export default App
