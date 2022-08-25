
import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter as Router, Link} from 'react-router-dom';
import './header.jsx';
import './App.css';
import ComponentWithProps from './Hello';
import Clock from './Clock';
import Login from './Login';
import Car from './Car';
import Game from './Game';
import LessText from './LessText';
import Home from './home';
import Users from './users';
import Contact from './contact';
import Notfound from './NotFound';

const App = () => {
return (
    <><><Login /><ComponentWithProps /><Clock /><Car />
        <Game /></><Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <Routes>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/users/:id">
                        <Users />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    </Routes>
            </div>
        </Router></>
);
}

export default App;



