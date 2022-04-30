import React from 'react';
import './nav.css';

const Nav = () => {
    return (
        <div className="nav">
            <h3>Timóteo Bentes</h3>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contacts</a></li>
            </ul>
        </div>
    )
}

export default Nav;