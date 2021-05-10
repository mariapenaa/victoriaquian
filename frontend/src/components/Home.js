import React from 'react';
import ReactDOM from 'react-dom';
import './scss/home.scss';
import {Link} from 'react-router-dom';



export function Home() {
    return (
        <div className="Home">
            <div className="main-app">
                <div className="main-app-wrap">
                    <div className="main-text">
                        <h1 className="title"><Link to="/proyectos">VICTORIA QUIAN</Link></h1>
                        <h2 className="subtitle">Fotografía y diseño</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

