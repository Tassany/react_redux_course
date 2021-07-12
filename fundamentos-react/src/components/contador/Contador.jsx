import React from 'react'
import './Contador.css'
import Display from './Display'
import Botoes from './Botoes'
import PassosForms from './PassosForms'

export default class Contador extends React.Component{
    
    state = {
        numero: this.props.numeroInicial || 0 ,
        passo: this.props.passoInicial || 0 ,
    }

    // constructor(props){
    //     super(props)

    //     this.inc = this.inc.bind(this)
    // }
    inc = () =>{
        this.setState({
            numero: this.state.numero +  this.state.passo,
        })
    }
    dec = () =>{
        this.setState({
            numero: this.state.numero -  this.state.passo,
        })
    }
    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }
    render(){
        return(
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassosForms passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes incrementar={this.inc} decrementar={this.dec} />
            </div>
        )
    }
}