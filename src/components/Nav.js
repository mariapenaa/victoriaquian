import React from 'react';
import ReactDOM from 'react-dom';
import './Nav.css';
//import  Navbar from 'react-bootstrap/Navbar';


export function NavBar() {
    return (
    <div className="nav-bar sticky">
        <img className="vq-logo" src="" />
        <ul className="nav-items">
            <li>Rollo</li>
            <li>Momentos</li>
            <li>Arte</li>
            <li>ME</li>
        </ul>
    </div>
    );
}
