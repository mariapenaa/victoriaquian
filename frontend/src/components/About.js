import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/About.css';
import './scss/app.scss';
import fotoVicky from "../img/IMG_9239.jpg"


export function About() {



    return (
        <div className="container">
            <div className="about-wrapper">
                <div className="about-me">
                    <h1>Soy Victoria Quian</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and t
                        ypesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to 
                        make a type specimen book. It has survived not only f
                        ive centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 1
                        960s with the release of Letraset sheets containing Lorem 
                        Ipsum passages, and more recently with desktop publishing 
                        software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
                <img src={fotoVicky} className="foto-vicky" />
            </div>
        </div>
    );
}