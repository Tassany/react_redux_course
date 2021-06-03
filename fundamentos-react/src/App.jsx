import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'


export default (props)=>{
    return(
        <div id="App" >
        <h1>Fundamentos React</h1>

        <Card 
            titulo="Título do card"
        ></Card>

        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Situação do aluno"
            aluno="predo"
            nota={10.0}
        ></ComParametro>
        <Aleatorio
            min = {1}
            max= {10}
        ></Aleatorio>
    </div>

    )
}