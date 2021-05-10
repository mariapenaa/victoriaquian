import React from 'react';
import ReactDOM from 'react-dom';
import {PhotoGrid} from './Grid';
import './stylesheet/Proyectos.css';
import img1 from '../img/bellahadid.jpg';
import img2 from '../img/fotoauto.jpeg';
import img3 from '../img/IMG_9238.jpg';
import img4 from '../img/IMG_9242.jpg';
import img5 from '../img/IMG_9237.jpg';
import {Link} from 'react-router-dom';

import {rutasFotos} from "../photos"

export function Proyectos() {

    const proyectos = rutasFotos;
    console.log(proyectos)



    return (
        <div class="container">
            <h1 className="proyectos-h1">Proyectos</h1>
            <div className="proyectos-carrousel">
                {proyectos.map((proyecto, index)=>(
                    <div className="cuadrado"><img src={proyecto.fotos[0].img}/><div className="middle"><Link to={`/proyectos/${proyecto.nombre}`}><h2 className="vertical">{proyecto.nombre}</h2></Link></div></div>     
                ))}
               {/*  <div className="cuadrado"><img src={img1}/><div className="middle"><Link to={`/proyectos/${props.proyectoNombre}`}><h2 className="vertical">Vida</h2></Link></div></div> */}

            </div>
            
        </div>
    );
}
