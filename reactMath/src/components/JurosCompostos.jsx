import { useState } from "react";

function JurosCompostos() {
    const [capital, setCapital] = useState(0)
    const [taxaDeJuros, setTaxaDeJuros] = useState(0)
    const [tempo, setTempo] = useState(0)

    let resultadoJurosCompostos = 0
    let resultadoMontanteFinal = 0

    resultadoMontanteFinal = Number(capital) * (1 + (Number(taxaDeJuros)/100))**Number(tempo) //como a taxa foi digitada em porcentagem será /100 para garantir decimais e para que o usuário não confunda
    resultadoJurosCompostos = resultadoMontanteFinal - capital

    return (
        <>
            <label> Digite o capital inicial </label>
            <input
            type="number"
            value={capital}
            onChange={(e) => setCapital(e.target.value)}
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

            <p>O seu Montante Final será {resultadoMontanteFinal}</p>
            <p>O seus Juros Compostos serão {resultadoJurosCompostos}</p>
        </>
    );
}

export default JurosCompostos;
