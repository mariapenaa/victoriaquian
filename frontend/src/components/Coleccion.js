import React from 'react';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router';
import {PhotoGrid} from './Grid';
import {rutasFotos} from "../photos";


//import './stylesheet/Proyectos.css';




export function Coleccion() {
    const nombreColeccion = useParams().nombreProyecto;
    let resultado = []
    resultado = rutasFotos.filter(coleccion => coleccion.nombre == nombreColeccion)
    const imgBackground = resultado[0].fotos[5].img

    const bannerStyle = {
        backgroundImage: `url(${imgBackground})`
    }


    return (
        <div className="container">
            <div className="coleccion-banner" style={bannerStyle}>
            <div className="coleccion-banner-grey">
                <h1 className="coleccion-h1">{resultado[0].nombre}</h1>
            </div>
            </div>
            <PhotoGrid coleccion={resultado[0]}/>
        </div>
    );
}

export default Coleccion;


