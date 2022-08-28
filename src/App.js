
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
import Home from './HomePage';
import Users from './users';
import Contact from './contact';
import Notfound from './NotFound';

const App = () => {
return (
    <><><Login /><ComponentWithProps /><Clock /><Car />
        <Game /><Home /></>
    </>/* // <><Router>
    //         <div>
    //             <Routes>
    //                 <Route path="/">  //couldn't get router to work for some reason as it created a blank page, I will play around it later to see if I can make it work
    //                 element = {<Home />}
    //                 </Route>
    //                 <Route path="/users/:id">
    //                     <Users />
    //                 </Route>
    //                 <Route path="/users">
    //                     <Users />
    //                 </Route>
    //                 <Route path="/contact">
    //                     <Contact />
    //                 </Route>
    //                 </Routes>
    //         </div>
    //     </Router></> */
);
}

export default App;



