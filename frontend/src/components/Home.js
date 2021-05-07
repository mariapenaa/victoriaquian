import React from 'react';
import ReactDOM from 'react-dom';
import {PhotoGrid} from './Grid';
import {HomeScroll} from './HomeScroll';
import {HomeScroll2} from './HomeScroll2';
import './stylesheet/Home.css';



export function Home() {
    return (
        <div className="Home">
            <div className="main-app">
                <div className="main-app-wrap">
                    <div className="main-text">
                        <h1 className="title">VICTORIA QUIAN</h1>
                        <h2 className="subtitle">Fotografía y diseño</h2>
                    </div>
                        <div class="box">
                        <span></span>
                        <span></span>
                        <span></span>
                        </div>
                </div>
            </div>
           {/*  <PhotoGrid /> */}
            <HomeScroll2 />
            </div>
    );
}
