import React, { useEffect, useState } from 'react'


export default function ExerciseFifteen() {

    const [dadosNotebook, setDadosNotebook] = useState(null)


    useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
            .then(response => response.json())
            .then(json => setDadosNotebook(json))
    }, [])


    return (
        <>

            {
                dadosNotebook ?
                    <h5>{dadosNotebook.nome}</h5>

                    : null
            }

        </>
    )
}