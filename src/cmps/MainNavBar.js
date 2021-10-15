import React from 'react';
import { NavLink } from 'react-router-dom'

function mainNavBar() {
    return (
        <div className="main-nav flex space-between">
            <NavLink classname="main-nav-logo" to="/" exact>
                home (logo)</NavLink>
            <div classname="main-nav-links-container">
                <NavLink classname="main-nav-link" to="/" exact>
                    home</NavLink>
                <NavLink classname="main-nav-link" to="/about" exact>
                    about</NavLink>
            </div>
        </div>
    )
};

export default (mainNavBar)