
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './header.jsx';
import Header from './header.jsx';
import Hello from './Hello.jsx';
import './App.css';
import ComponentWithProps from './Hello';
import Clock from './Clock';
import Login from './Login';
import Car from './Car';

const App = () => {
return (
    <><Login /><ComponentWithProps /><Clock /><Car/></>
);
}

export default App;



