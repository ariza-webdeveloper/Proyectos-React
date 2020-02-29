import React, { useState } from 'react'; //forma antigua -> const React=require('react')
import { render } from 'react-dom'; //modifica el DOM del app de una sola pagina
import logo from './logo.svg';
import './App.css';
import ContadorComponent from './Contador.js'
//creando un componente
//para importar una clase de CSS se utiliza el atributo "className"
//para añadir variables se usa {}
const App = () => {
    //const [name, setName] = useState('Jose') estructura: const [nombreVariable,FuncionAsociada]=useState(ValorInicial)
    const name="Jose"
    const lastname="Ariza"
    return (
        //Div principal de componente
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo"></img>
                <ContadorComponent nameA={name} nameB={lastname}/>
            </div>
        </div>
    )

}
export default App
/*
class App(){
constructor(){
    this.state:{
        name:'Jose'
    }
}
render(){
    <div>HOLA MUNDO</div>
}
}*/

