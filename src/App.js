import React, {useState} from 'react';
import './App.css';
// import Calculadora from './pages/Calculadora'

function App() {

  const [ valorTela, setValorTela ] = useState('')
  const [resultado, setResultado] = useState(0)
  const [acumulador, setAcumulador] = useState(0)
  const [operador, setOperador] = useState(false)

  //cria a tela da calculadora
  const tela = (valor, res) => {
    return(
      
    )
  }




  return (
    <div className="App">
      <header className="App-header">
        CALCULADORA
      </header>
      {/* <Calculadora /> */}
    </div>
  );
}

export default App;
