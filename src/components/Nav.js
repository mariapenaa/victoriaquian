import React from 'react';
import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/Nav.css';
import logo from '../img/logoVQ.png';


import {Link} from 'react-router-dom';
import { render } from '@testing-library/react';


export function NavBar() {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () =>{

         if(window.scrollY>=800){
            setNavbar(true);
        }else{
            setNavbar(false);
        } 
    }
    
    window.addEventListener("scroll", changeBackground)

    return (
        <header className={navbar ? 'nav-bar active' : 'nav-bar'}>
            <Link to="/"><img className={"logo"} src={logo} /></Link>
            <ul className={navbar ? 'nav-list active' : 'nav-list'}>
                <li><Link to="/proyectos">Proyectos</Link></li>
                <li><Link to="/about">Sobre mi</Link></li>
                <li>Contacto</li>
                <li>
                    <ul className={navbar ? 'nav-list active' : 'nav-list'}>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-instagram"></i></li>
                        <li><i class="fab fa-spotify"></i> </li>
                    </ul>
                </li>
            </ul>
        </header>
    );
}

