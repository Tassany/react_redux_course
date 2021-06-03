import React from 'react';

export default function Aleatorio(props){

    const minimo = props.min
    const maximo = props.max
    const valor = parseInt(Math.random() * (maximo - minimo)) + minimo
    return(
        <div>
            <p>Um valor entre {props.min} e {props.max} é {valor}</p>
        </div>
    )
}