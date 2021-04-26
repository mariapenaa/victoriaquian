import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/Home.css';
import {Link} from 'react-router-dom';



export function HomeScroll2() {


    return (
            <div className="homescroll-container2">
                <h1 className="homescroll-pregunta">¿Querés ver más?</h1>
                <Link to="/proyectos"><button className="homescroll-button">Proyectos</button></Link>
            </div>

    );
}

export default HomeScroll2 