import React from 'react'
import {Switch, Route} from 'react-router-dom'

// pages
import Header from './components/header-footer/Header'

import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div>
      <Header/>
      
      <About/>
  
    </div>
  );
}

export default App;
