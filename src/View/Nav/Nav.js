import './Nav.scss'
import {NavLink} from 'react-router-dom'
function Nav() {
    return (
        <div className="topnav" id="myTopnav">
            <a to="/" className="active" >
                Home
            </a>
            <a to="/news " className="" >News</a>
            <a to="/contact " className="" >Contact</a>
            <a to="/about " className="" >About</a>
        </div>
    );
}

export default Nav;
