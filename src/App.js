import React, { useState } from "react";
import "./App.css";
// import Calculadora from './pages/Calculadora'

function App() {
  const [valorTela, setValorTela] = useState("");
  const [resultado, setResultado] = useState(0);
  const [acumulador, setAcumulador] = useState(0);
  const [operado, setOperado] = useState(false);

  // COMPONENTES
  //cria a tela da calculadora
  const tela = (valor, res) => {
    return (
      <div>
        <span>{valor}</span> {/*Operação*/}
        <span>{res}</span> {/*Resposta*/}
      </div>
    );
  };

  //cria os botoes
  const Btn = (label, onClick) => {
    return <button onClick={onClick}>{label}</button>;
  };

  //FUNÇÕES
  //função para adicionar o digito clicado na tela
  const addDigitoTela = (d) => {
    // && operado --> sig. e for true
    if (d === "+" || d === "-" || d === "*" || (d === "/" && operado)) {
      console.log("+-*/");
      setOperado(false);
      setValorTela(resultado + d);
      return;
    }

    if (operado) {
      setValorTela(d);
      setOperado(false);
      return;
    }

    const valorDigitadoTela = valorTela + d;
    setValorTela(valorDigitadoTela);
  };

  //função para limpar a memoria
  const limparMemoria = () => {
    setOperado(false);
    setValorTela("");
    setResultado(0);
    setAcumulador(0);
  };

  //função para as operaçoes
  const operacao = (oper) => {
    if (oper == "bs") {
      let vtela = valorTela;
      vtela = vtela.substring(0, vtela.length - 1);
      setValorTela(vtela);
      setOperado(false);
      return;
    }

    try {
      const r = eval(valorTela); //eval -> avalia uma espreção e retorna o valor dessa espreção. O eval é quem fará todos os calculos
      setAcumulador(r);
      setOperado(r);
      setOperado(true);
    } catch {
      setResultado("ERRO");
    }
  };

  return (
    <div className="App">
      <header className="App-header">CALCULADORA</header>
      {/* <Calculadora /> */}
    </div>
  );
}

export default App;
