import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/main.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Land from './pages/Land'
import WB from './pages/WB'
import Checklist from './pages/Checklist'
import RFM from './pages/RFM'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='workplace'>
          <Switch>
            <Route exact path='/'>
              <Land />
            </Route>
            <Route exact path='/WB'>
              <WB />
            </Route>
            <Route exact path='/checklist'>
              <Checklist />
            </Route>
            <Route exact path='/rfm'>
              <RFM />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
