import React from 'react';
import { NavLink } from 'react-router-dom'


import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { RiMailSendLine } from 'react-icons/ri';
import { MdWorkOutline } from 'react-icons/md';

function mainNavBar() {
    return (
        <div className="main-nav flex space-between">
            <NavLink className="main-nav-logo" to="/" exact>
                <div className="main-nav-logo-image">
                </div></NavLink>
            <div className="main-nav-links letter-spacing flex">
                <NavLink className="main-nav-link flex justify-center align-center uppercase" to="/" exact>
                    <AiOutlineHome className="fill-height" /> home</NavLink>
                <NavLink className="main-nav-link flex justify-center align-center uppercase" to="/about" exact>
                    <AiOutlineInfoCircle />  about</NavLink>
                <NavLink className="main-nav-link flex justify-center align-center uppercase" to="/about" exact>
                    <RiMailSendLine /> contact</NavLink>
                <NavLink className="main-nav-link flex justify-center align-center uppercase" to="/about" exact>
                    <MdWorkOutline /> services</NavLink>
            </div>
        </div>
    )
};

export default (mainNavBar)