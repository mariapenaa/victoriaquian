import React from 'react';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router';
import {PhotoGrid} from './Grid';
import {rutasFotos} from "../photos";
import {useState} from 'react';
import {Link} from 'react-router-dom';

import './scss/coleccion.scss';




export function Coleccion() {

    const nombreColeccion = useParams().nombreProyecto;
    let resultado = []
    resultado = rutasFotos.filter(coleccion => coleccion.nombre == nombreColeccion)
    const imgBackground = resultado[0].fotos[5].img


    return (
        <div className="coleccion">
            <div className="proyectos-nav">
                <ul>
                    {rutasFotos.map((proyecto)=>(
                        <li className={proyecto.nombre==nombreColeccion ? "current-link" : ""}><Link to={`/proyectos/${proyecto.nombre}`}>{proyecto.nombre}</Link></li>
                    ))}
                </ul>
            </div>
            <PhotoGrid coleccion={resultado[0]}/>
        </div>
    );
}

export default Coleccion;

