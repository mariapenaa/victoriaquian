import React from 'react';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router';
import {PhotoGrid} from './Grid';


import './stylesheet/main.css';
import './stylesheet/Proyectos.css';



export function Coleccion() {
    const nombreColeccion = useParams().nombreProyecto;


    return (
        <div className="container">
            <div className="coleccion-banner" >
            <div className="coleccion-banner-grey">
                <h1 className="coleccion-h1">{nombreColeccion}</h1>
            </div>
            </div>
            <PhotoGrid />
        </div>
    );
}

export default Coleccion;


