// button click useState



import React, { useState } from 'react';


export default function ExerciseNine() {
    const [click, setClickState] = useState(false)
    return (
        <>
            <button onClick={() => setClickState(!click)}>
                mudar estado
            </button>

            {
                click ? 'botão ativado' : 'botão inativo'
            }
        </>
    )

}