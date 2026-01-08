import { useState } from "react"

function ValorPresente(){
    // VP = VF / (1 + i)t
    const [valorFuturo, setValorFuturo] = useState("")
    const [taxaDeJuros, setTaxaDeJuros] = useState("")
    const [tempo, setTempo] = useState("")
    let valorPresente = 0

    valorPresente = Number(valorFuturo) / (1 + (Number(taxaDeJuros)/100))**tempo

    return (
        <>
            <label> Digite o valor futuro </label>
            <input
            type="number"
            value={valorFuturo}
            onChange={(e) => setValorFuturo(e.target.value)}
            />

            <label> Digite a taxa de Juros em porcentagem (ao mês) </label>
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

            <p>O valor presente será {valorPresente}</p>
        </>
    )
}

export default ValorPresente;