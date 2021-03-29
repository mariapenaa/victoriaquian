import React from 'react';
import ReactDOM from 'react-dom';
import {PhotoGrid} from './components/Grid';

export function Coleccion(props) {
    return (
        <div class="container">
            <div class="main-title-page">
                <h1>{props.name}</h1>
            </div>
        <PhotoGrid />
        </div>
    );
}