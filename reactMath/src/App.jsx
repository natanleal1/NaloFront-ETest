import './App.css'
import JurosSimples from './components/JurosSimples'
import JurosCompostos from './components/JurosCompostos'
import ValorPresente from './components/ValorPresente'

function App() {

  return (
    <div className='container'>
      <h1>ReactMath</h1>
      {/* <JurosSimples/> */}
      {/* <JurosCompostos/> */}
      <ValorPresente/>
      <br />
    </div>
  )
}

export default App
