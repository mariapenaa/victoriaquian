import React from 'react';
import ReactDOM from 'react-dom';
import './scss/footer.scss';

export function Footer() {
    return (
        <div className="footer">
            <ul className="footer-ul">
                <li className="left-footer">
                    <ul className="media-links">
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-instagram"></i></li>
                        <li><i class="fab fa-spotify"></i> </li>
                    </ul>
                    <li className="nombre">Victoria Quian</li>
                </li>
                <li>Creado por María Peña</li>
            </ul>
        </div>
    );
}