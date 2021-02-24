import React from 'react';
import ReactDOM from 'react-dom';
import './Nav.css';
import  Navbar from 'react-bootstrap/Navbar';


export function NavBar() {
    return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="nav-bar">
        <Navbar.Toggle sticky="top" aria-controls="responsive-navbar-nav" />
        <h1 className="nav-h1">VICTORIA QUIAN</h1>
        <Navbar.Collapse id="responsive-navbar-nav">
        <ul className="nav-items">
            <li>Rollo</li>
            <li>Momentos</li>
            <li>Arte</li>
            <li>ME</li>
        </ul>
        </Navbar.Collapse>
    </Navbar>
    );
}
