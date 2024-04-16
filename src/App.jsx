import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
// Import your component files
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Header from './components/Header';
import Footer from './components/Footer';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <nav className="navigation">
          <ul>
            <li><NavLink to="/" exact activeClassName="active">About Me</NavLink></li>
            <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;