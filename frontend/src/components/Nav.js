import React from 'react';
import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './scss/nav.scss';
import logoNegro from '../img/fotosVi/logonegro.PNG';
import logoBlanco from '../img/fotosVi/logoblanco.PNG';
import logoVioletta from '../img/logovioletta.png'


import {Link} from 'react-router-dom';
import { render } from '@testing-library/react';


export function NavBar(props) {
    
/*     const [navbar, setNavbar] = useState(false);
    const [color, setColor] = useState(false);

    const changeBackground = () =>{
         if(window.scrollY>=800){
            setNavbar(true);
        }else{
            setNavbar(false);
        } 
    }
    window.addEventListener("scroll", changeBackground) */


    const [color,  setColor] = useState(true);
    
     const changeColor = (value) =>{
        setColor(value)
    } ;

        useEffect(() => {
          var path= window.location.pathname; // lets imaging that url is "/home/x"
          var pathArray = path.split( '/' );
          var loc= pathArray[2];//number of part of url that is changing, here it rerurns x
          if(loc !=null){ // if x be "product" it returns true
              setColor(false)
          }
        });
      

 


    return (
       <header className={color ?  'nav-bar-white': 'nav-bar'}>
       {/*  <header className='nav-bar'>  */}
             <Link to="/" onClick={() => changeColor(true)}><img className={"logo"} src={color ? logoBlanco : logoNegro} /></Link>
     {/* <Link to="/" onClick={() => changeColor(true)}><img className={"logo"} src={logoVioletta} /></Link>*/}
            <ul className='nav-list'> 
                <li><Link to="/proyectos" onClick={() => changeColor(true)}>Proyectos</Link></li>
                <li><Link to="/about" onClick={() => changeColor(false)}>Sobre mi</Link></li>
                <li><Link to="/contacto" onClick={() => changeColor(false)}>Contact</Link></li>
                <li>
                    <ul className='nav-list'>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-instagram"></i></li>
                        <li><i class="fab fa-spotify"></i> </li>
                    </ul>
                </li>
            </ul>
        </header>
    );
}
/* 
<header className={navbar ? 'nav-bar active' : 'nav-bar'}>
<Link to="/"><img className={"logo"} src={logoNegro} /></Link>
<ul className={navbar ? 'nav-list active' : 'nav-list'}>
    <li><Link to="/proyectos">Proyectos</Link></li>
    <li><Link to="/about">Sobre mi</Link></li>
    <li><Link to="/contacto">Contact</Link></li>
    <li>
        <ul className={navbar ? 'nav-list active' : 'nav-list'}>
            <li><i class="fab fa-twitter"></i></li>
            <li><i class="fab fa-instagram"></i></li>
            <li><i class="fab fa-spotify"></i> </li>
        </ul>
    </li>
</ul>
</header> */

