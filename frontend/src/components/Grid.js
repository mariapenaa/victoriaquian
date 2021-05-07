import React from 'react';


import ReactDOM from 'react-dom';
import './stylesheet/Grid.css';



export function PhotoGrid(props) {
    const {nombre, fotos} = props.coleccion;
    const arrayLength = fotos.length;
    const fotosPerColumn = Math.floor(arrayLength/4)
    const numCalculador = fotosPerColumn + 1




    return (
        <div className="row">
            <div className="column">
            {fotos.slice(0,fotosPerColumn).map((foto, index)=>(
                <img src={foto.img} alt={foto.alt}  />   
                ))}
            </div>
            <div class="column">
                {fotos.slice(numCalculador,numCalculador+ fotosPerColumn).map((foto, index)=>(
                    <img src={foto.img} alt={foto.alt}/>
                ))}
            </div>
            <div class="column">
            {fotos.slice(numCalculador+numCalculador,numCalculador+numCalculador+fotosPerColumn).map((foto, index)=>(
                    <img src={foto.img} alt={foto.alt}/>
                ))}
            </div>
            <div class="column">
            {fotos.slice(3*numCalculador,arrayLength).map((foto, index)=>(
                    <img src={foto.img} alt={foto.alt}/>
                ))}
            </div>
        </div>
    );
}
