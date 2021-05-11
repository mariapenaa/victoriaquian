import React from 'react';
import ReactDOM from 'react-dom';
import {PhotoGrid} from './Grid';
import './scss/proyectos.scss';
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
        <div className="proyectos">
            <div className="proyectos-wrap">
                <div className="proyectos-carrousel">
                    {proyectos.map((proyecto, index)=>(        
                        <div className="cuadrado" id={`cuadrado${proyecto.id}`}>  
                                <Link to={{
                                    pathname: `/proyectos/${proyecto.nombre}`,
                                    color: false,
                                    }}>
                                    <h2 className="proyectos-name">{proyecto.nombre}</h2>
                                </Link>
                                <div className="middle"><p>{proyecto.descripcion}</p></div>     
                        </div>
                    ))}
                {/*  <div className="cuadrado"><img src={img1}/><div className="middle"><Link to={`/proyectos/${props.proyectoNombre}`}><h2 className="vertical">Vida</h2></Link></div></div> */}

                </div>
            </div>
        </div>
    );

   
}
