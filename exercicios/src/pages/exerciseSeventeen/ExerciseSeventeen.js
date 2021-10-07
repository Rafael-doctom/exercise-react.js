import React, { useState } from 'react'


export default function ExerciseSeventeen() {

    const [input, setInput] = useState('teste')


    const nome = [
        { pessoa: 'rafael' },
        { pessoa: 'rafael' },
        { pessoa: 'rafael' }

    ]

    return (
        <>
            <input type="text" value={input} onChange={() => setInput()} />

            <div>
                <ul>
                    {
                        nome.map((lista) => (<li>{lista.pessoa} </li>))
                    }
                </ul>
            </div>
        </>
    )
}