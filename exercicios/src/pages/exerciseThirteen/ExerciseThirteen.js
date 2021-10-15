import React, { useEffect, useState } from 'react'


export default function ExerciseThirteen() {

    const [dados, setDados] = useState(null)

    useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto')
            .then((response) => response.json())
            .then((json) => setDados(json))
    }, [])

    return (
        <div>
            {dados && (
                <div>
                    <h1> {dados.nome}</h1>
                    <p>{dados.preco}</p>
                    <p>{dados.descricao}</p>

                </div>
            )}
        </div>
    )
}