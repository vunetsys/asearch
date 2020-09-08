import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavLinks.css";
import "../../Typography/typography.css"


const NavLinks = () => {
    return (
        <ul className="nav-links pBody">
            <li>
            <NavLink to="/">Home</NavLink>  
            </li>
            <li>
            <NavLink to="/conferences">Conferences</NavLink>  
            </li>
            <li>
              <a href="http://localhost:3001/">Admin</a>  
            </li>
        </ul>
    );
};


export default NavLinks;