
import Home from './home';
import About from './About';
import Shop from './Shop';
import {Link} from 'react-router-dom';

const Nav = () => {
    <><Link to="/">Home</Link><Link to="/about">About Us</Link><Link to="/shop">Shop Now</Link></>
}
export default Nav;