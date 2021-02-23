import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import ReactDOM from 'react-dom';
import './Grid.css';
import img1 from '../img/bellahadid.jpg';
import img2 from '../img/fotoauto.jpeg';
import img3 from '../img/IMG_9235.jpg';
import img4 from '../img/IMG_9237.jpg';
import img5 from '../img/IMG_9238.jpg';
import img6 from '../img/IMG_9239.jpg';
import img7 from '../img/IMG_9240.jpg';
import img8 from '../img/IMG_9241.jpg';
import img9 from '../img/IMG_9242.jpg';
import img10 from '../img/IMG_9243.jpg';



export function PhotoGrid() {
    return (
        <div class="row">
            <div class="column">
                <img src={img2}/>
                <img src={img7} />
                <img src={img4} />
                <img src={img1} />
                <img src={img5} />
                <img src={img6} />
                <img src={img10} />
                <img src={img8} />
                <img src={img9} />
                <img src={img3} />
            </div>
            <div class="column">
                <img src={img3} />
                <img src={img1} />
                <img src={img2} />
                <img src={img9} />
                <img src={img5} />
                <img src={img6} />
                <img src={img7} />
                <img src={img10} />
                <img src={img4} />
                <img src={img8} />
            </div>
            <div class="column">
                <img src={img3} />
                <img src={img4} />
                <img src={img8} />
                <img src={img5} />
                <img src={img2} />
                <img src={img1} />
                <img src={img10} />
                <img src={img6} />
                <img src={img7} />
                <img src={img9} />
            </div>
            <div class="column">
                <img src={img4} />
                <img src={img5} />
                <img src={img1} />
                <img src={img2} />
                <img src={img10} />
                <img src={img6} />
                <img src={img7} />
                <img src={img8} />
                <img src={img3} />
                <img src={img9} />
            </div>
        </div>
    );
}