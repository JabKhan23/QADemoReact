
import './App.css';
import React from 'react';
import { Switch, Route, BrowserRouter as Router, Link} from 'react-router-dom';
import './header.jsx';
import AboutMe2 from './New.jsx';
import Shopping from './shopping';
import Home from './home';
import About from './About';
import Shop from './Shop';
import Nav from './Nav';

 const App2 = () => {
  return (
    <><><AboutMe2 /><Shopping /></><Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
      </Switch>
    </Router></>
);
}
 

export default App2;


