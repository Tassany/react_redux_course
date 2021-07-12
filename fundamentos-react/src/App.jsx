/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './comunicacao/DiretaPai';
import IndiretaPai from './comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

import './App.css'

export default (props)=>{
    return(
    <div className="App" >
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="13 - MegaSena" color="#B5F92E">
                <Mega qtde={7}></Mega>
            </Card> 

            <Card titulo="12 - Contador" color="#FF90B0">
                <Contador numeroInicial={10} ></Contador>
            </Card> 

            <Card titulo="11 - Componente Controlado" color="#F1C40F">
                <Input></Input>
            </Card> 
            <Card titulo="10 - Comunicação Indireta" color="#FF7F50">
                <IndiretaPai></IndiretaPai>
            </Card> 
            <Card titulo="09 - Comunicação Direta" color=" #CCCCFF">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="08 - Renderização Condicional" color=" #F34F41">
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Fernando'}}></UsuarioInfo>
                {/* <UsuarioInfo usuario={{email: 'Fernando@email.com'}}></UsuarioInfo> */}
            </Card>

            <Card titulo="07 - Repetição desafio" color="#008b8b">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="06 - Repetição" color="#83E69A">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="05 - Componente com filho" color="#F08D35">
                <Familia sobrenome="Onofre">
                    <FamiliaMembro nome="Maria"></FamiliaMembro>
                    <FamiliaMembro nome= "João" ></FamiliaMembro>
                    <FamiliaMembro nome= "Tassany"></FamiliaMembro>
                </Familia>
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