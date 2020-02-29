import React, { useState } from 'react'; //forma antigua -> const React=require('react')
import { render } from 'react-dom'; //modifica el DOM del app de una sola pagina

const Contador = (props) => {
    //const [name, setName] = useState('Jose') estructura: const [nombreVariable,FuncionAsociada]=useState(ValorInicial)
    const [contador, setContador] = useState(0)
    const { nameA, nameB } = props
    const sumar = () => {
        setContador(contador + 1)
        console.log(contador)
    }
    const restar = () => {
        setContador(contador - 1)
        console.log(contador)
    }
    return (
        //Div principal de componente
        <div>
            <div>
                <h1>{nameA} {nameB}</h1>
                <h1>{contador}</h1>
                <button onClick={sumar} className="sumaryrestar">SUMAR</button>
                <button onClick={restar} className="sumaryrestar"> RESTAR</button>
            </div>

        </div>
    )

}
export default Contador