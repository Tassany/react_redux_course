import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import './App.css'

export default (props)=>{
    return(
        <div className="App" >
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="04 - Desafio valor aleatório">
                <Aleatorio min = {1} max= {60}></Aleatorio>
            </Card>

            <Card titulo="02 - Com parâmetro">
                <ComParametro 
                    titulo="Situação do aluno"
                    aluno="Tassany"
                    nota={10.0}
                ></ComParametro>
            </Card>

            <Card titulo="01 - Primeiro componente">
            <Primeiro></Primeiro>
            </Card>

        </div>


    </div>

    )
}