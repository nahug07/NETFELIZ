import React from 'react';
import {NavLink } from 'react-router-dom';
import Logo from '../../icon.png';

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div className='list1'>
                <img id="logo" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                <NavLink exact to="/" ><h1>NETFILM</h1></NavLink>
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >Inicio</NavLink>
                        <NavLink to="/favs" >Favoritas</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}