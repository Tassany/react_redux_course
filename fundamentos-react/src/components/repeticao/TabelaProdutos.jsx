
import './TabelaProdutos.css'
import React from 'react'
import produtos from '../../data/Produtos'

export default (props) => {
    const tabelaDeProdutos= produtos.map((produto,i) => {
        return( 

            <tr className={i % 2 == 0 ? 'Par' :'Impar'} key={produto.id}> 
                <td> {produto.nome}</td>
                <td> R$ {produto.preco}</td>   
            </tr>)
    })
    return(
        <div className="TabelaProduto">

            <table border="1">
                <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                </tr>
                {tabelaDeProdutos}
            </table>
        </div>
    )
}