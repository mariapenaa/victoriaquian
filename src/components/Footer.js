import React from 'react';
import ReactDOM from 'react-dom';
import './Footer.css';

export function Footer() {
    return (
        <div className="footer">
            <ul>
                <li className="left-footer">
                    <ul className="media-links">
                        <li>Ins</li>
                        <li>Twt</li>
                        <li>Wht</li>
                    </ul>
                    <li className="nombre">VictoriaQuian</li>
                </li>
                <li>Built by María Peña</li>
            </ul>
        </div>
    );
}