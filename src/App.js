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
      <Switch>

        <Route exact path='/'>
          <About/>
        </Route>
        
        <Route path='/portfolio'>
          <Portfolio/>
        </Route>

        <Route path='/resume'>
          <Resume/>
        </Route>

        <Route path='/contact'>
          <Contact/>
        </Route>

      </Switch>
  
    </div>
  );
}

export default App;
