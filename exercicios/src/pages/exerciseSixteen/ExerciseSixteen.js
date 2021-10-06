import React from 'react';


export default function ExerciseSixteen() {

    const eu = {
        nome: 'Rafael...',
        idade: 20,
        irmaos: '7 irmãos',
        casa: 'alugada',
        relacao: {
            namorado: 'Luis...'
        }
    }
    const nomePessoal = eu.nome

    return (
        <>
            <div>
                nome:{eu.nome}
                idade:{eu.idade}
                irmãos:{eu.irmaos}
                casa:{eu.casa}
            </div>
            <div>
                {eu.relacao.namorado}
            </div>
            <div>{nomePessoal}</div>
        </>
    )
}