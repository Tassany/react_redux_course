import React from 'react';

export default function Aleatorio(props){

    const minimo = props.min
    const maximo = props.max
    const valor = parseInt(Math.random() * (maximo - minimo)) + minimo
    return(
        <div>
            <h2>Valor aleatório</h2>
            <p>Valor mínimo: {props.min}</p>
            <p>Valor máximo: {props.max} </p>
            <p>Valor aleatorio entre eles: {valor}</p>
        </div>
    )
}