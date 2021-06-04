import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'


import './App.css'

export default (props)=>{
    return(
        <div className="App" >
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="05 - Componente com filho" color="#cbbe6d">
                <Familia sobrenome="Onofre"></Familia>
            </Card>


            <Card titulo="04 - Desafio valor aleatório" color="#cb6da9">
                <Aleatorio min = {1} max= {60}></Aleatorio>
            </Card>

            <Card titulo="02 - Com parâmetro" color="#8f6dcb">
                <ComParametro 
                    titulo="Situação do aluno"
                    aluno="Tassany"
                    nota={10.0}
                ></ComParametro>
            </Card>

            <Card titulo="01 - Primeiro componente" color="#3498db">
            <Primeiro></Primeiro>
            </Card>

        </div>


    </div>

    )
}