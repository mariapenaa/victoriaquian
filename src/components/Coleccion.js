import React from 'react';
import ReactDOM from 'react-dom';
import {PhotoGrid} from './Grid';
import './stylesheet/main.css';

export function Coleccion(props) {
    const id = props.match.params.id;
   /*  const arrayMomemtos;
    const arrayRollo;
    const arraySaved; */
    /* switch(id){
        case "momentos":
            

    } */

    return (
        <div class="container">
            <div class="main-title-page">
                <h1 class="main-h1">{id}</h1>
            </div>
        <PhotoGrid />
        </div>
    );
}