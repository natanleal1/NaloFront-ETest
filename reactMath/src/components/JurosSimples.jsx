import { useState } from "react"

function JurosSimples() {
    const [capital, setCapital] = useState(0)
    const [taxaDeJuros, setTaxaDeJuros] = useState(0)
    const [tempo, setTempo] = useState(0)

    let resultadoJurosSimples = 0
    let resultadoMontante = 0

    resultadoJurosSimples = Number(capital) * Number(taxaDeJuros) * Number(tempo)
    resultadoMontante = Number(capital) + Number(resultadoJurosSimples)
    return (
    <>
        <label> Digite o capital </label>
        <input
        type="number"
        value={capital}
        onChange={(e) => setCapital(e.target.value)}
        />

        <label> Digite a taxa de Juros (ao mês) </label>
        <input
        type="number"
        value={taxaDeJuros}
        onChange={(e) => setTaxaDeJuros(e.target.value)}
        />

        <label> Digite o tempo (Em meses) </label>
        <input
        type="number"
        value={tempo}
        onChange={(e) => setTempo(e.target.value)}
        />
        
        <p>O seu juros simples será {resultadoJurosSimples}</p>
        <p>O seu montante será {resultadoMontante}</p>
    </>
    );
}

export default JurosSimples;
