/* eslint-disable import/no-anonymous-default-export */
import React, { cloneElement } from 'react'



export default props => {
    return(
        <div>
            {
                props.children.map((child,i) =>{
                    return cloneElement(child,{...props,key:i});
                })
            }
            {/* <FamiliaMembro nome="Maria" sobrenome={props.sobrenome}></FamiliaMembro>
            <FamiliaMembro nome= "João" {...props} ></FamiliaMembro>
            <FamiliaMembro nome= "Tassany" sobrenome="Onofre"></FamiliaMembro> */}

            {/* {React.cloneElement(props.children, {...props})} */}
        </div>
    )
}