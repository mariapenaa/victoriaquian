import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/Nav.css';
import  Navbar from 'react-bootstrap/Navbar';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


import {Link} from 'react-router-dom';
import { render } from '@testing-library/react';


export function NavBar() {
  
    return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="nav-bar">
        <Navbar.Toggle sticky="top" aria-controls="responsive-navbar-nav" />
        <h1 className="nav-h1">VICTORIA QUIAN</h1>
        <Navbar.Collapse id="responsive-navbar-nav">
        <ul className="nav-items">
            <Link to='/'><li>Home</li></Link>
            <Link to='/'><li>About me</li></Link>
            <Link to='/coleccion/saved'><li>saved</li></Link>
            <Accordion>
                <Accordion.Toggle eventKey="0">
                    <li>Fotos</li>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <ul className="nav-items" >
                        <Link to='/coleccion/momentos'><li>Momentos</li></Link>
                        <Link to='/coleccion/rollo'><li>Rollo</li></Link>
                        <Link to='/coleccion/live'><li>Live</li></Link>
                        
                    </ul>
                </Accordion.Collapse>
            </Accordion>
        </ul>
        </Navbar.Collapse>
    </Navbar>
    );
}

