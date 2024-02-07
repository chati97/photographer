import React from 'react'
import '../css/navbar.css';
import logo from '../img/logo.png';

function Header() {
    return (
        <div>
            <div className="logo">
                <a href='/'>
                    <img src={logo}></img>
                </a>
            </div>
            <div id="navbar">
                <a href='/'>main</a>
                <a href='/info'>info</a>
                <a href='/gallery'>gallery</a>
                <a href='/contact'>contact</a>
            </div>
        </div>
    )
}

export default Header