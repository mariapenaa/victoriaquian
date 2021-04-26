import React from 'react';
import ReactDOM from 'react-dom';
import {PhotoGrid} from './Grid';
import './stylesheet/main.css';
import './stylesheet/Proyectos.css';
import img1 from '../img/bellahadid.jpg';
import img2 from '../img/fotoauto.jpeg';
import img3 from '../img/IMG_9238.jpg';
import img4 from '../img/IMG_9242.jpg';
import img5 from '../img/IMG_9237.jpg';

export function Proyectos() {


    return (
        <div class="container">
            <h1>Proyectos</h1>
            <div className="proyectos-carrousel">
                <div className="cuadrado"><img src={img1}/><div className="middle"><h2 className="vertical">Vida</h2></div></div>
                <div className="cuadrado"><img src={img2}/><div className="middle"><h2 className="vertical">Collage</h2></div></div>
                <div className="cuadrado"><img src={img3}/><div className="middle"><h2 className="vertical">Rollo</h2></div></div>
                <div className="cuadrado"><img src={img4}/><div className="middle"><h2 className="vertical">Rial</h2></div></div>
                <div className="cuadrado"><img src={img5}/><div className="middle"><h2 className="vertical">Vick</h2></div></div>
            </div>
            
        </div>
    );
}