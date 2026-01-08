import './App.css'
import JurosSimples from './components/JurosSimples'
import JurosCompostos from './components/JurosCompostos'
import ValorPresente from './components/ValorPresente'
import { useState } from "react";

function App() {

  const [opcao, setOpcao] = useState(1)

  return (
    <div className='container'>

      <h1>-ReactMath-</h1>
      <div className="options-container">
        <button onClick={()=> setOpcao(1)}>Juros Simples</button>
        <button onClick={()=> setOpcao(2)}> Juros Compostos</button>
        <button onClick={()=> setOpcao(3)}>Valor Presente</button>
      </div>

      {opcao == 1 && <JurosSimples/>}
      {opcao == 2 && <JurosCompostos/>}
      {opcao == 3 && <ValorPresente/>}      
      
    </div>
  )
}

export default App
