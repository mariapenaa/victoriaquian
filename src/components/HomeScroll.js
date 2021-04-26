import React from 'react';
import ReactDOM from 'react-dom';
import {PhotoGrid} from './Grid';
import './stylesheet/Home.css';
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


export function HomeScroll() {


    return (
            <div className="homescroll-container">
            <div class="row">
                <div class="column">
                    <div className="div-wide">"Pasión"</div>
                    <div className="div-high"><img src={img3} /></div>
                    <div className="div-wide">"Arte"</div>
        
                </div>
                <div class="column">
                    <div className="div-high"></div>
                    <div className="div-wide"></div>
                    <div className="div-wide"></div>

        
                </div>
                <div class="column">
                    <div className="div-wide"></div>
                    <div className="div-wide"></div>
                    <div className="div-high"></div>

                </div>
                <div class="column">
                    <div className="div-high"></div>
                    <div className="div-wide"></div>
                    <div className="div-wide"></div>

                </div>
            </div>
            </div>
    );
}
