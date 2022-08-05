import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Main } from './pages'
import { BackToTop, About, Certification, Experience, Contacts } from './components'
import ScrollToTop from './utils/ScrollToTop'

import './App.css'

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" exact component={About} />
          <Route path="/experience" exact component={Experience} />
          <Route path="/certifications" exact component={Certification} />
          <Route path="/contact" exact component={Contacts} />
          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
