import './Header.modules.css';
import React from 'react';
// import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import logo from './gogad3.PNG'
import { Link, BrowserRouter as Router} from 'react-router-dom';


function Header() {
    return (
        <div class="header">
            
                <div id="acebook">
                    {/* <h1 className='heading'>GO <b className='gadgets'>GADGETS</b> <i class="fas fa-mobile"></i></h1> */}
                    <img className='logo' src={logo} />
                </div>

                {/* <div><b className='StoreTitleHeader'>GO GADGETS</b></div> */}

                <div id="hoshiyaar">
                    <Link className="guest" to='/'>Home</Link>
                    <Link className="guest" to='/About'>About</Link>
                    <Link className="guest" to='/Products'>Products</Link>
                    <Link className="guest" to='/Outlets'>Outlets</Link>
                    <Link className="guest" to='/Contact'>Contact</Link>
                </div>
            
        </div>
    );

}

export default Header;
