import React from 'react'
import FamiliaMembro from './FamiliaMembro'


export default props => {

    return(
        <div>
            <FamiliaMembro nome="Maria" sobrenome={props.sobrenome}></FamiliaMembro>
            <FamiliaMembro nome= "João" {...props} ></FamiliaMembro>
            <FamiliaMembro nome= "Tassany" sobrenome="Onofre"></FamiliaMembro>
        </div>
    )
}