// add List of Names and Books

import React from 'react';



export default function ExerciseFive() {

    const identificador = [
        {
            color: ['#ffff00', '#ff00a6', '#00ffd5']
        }
    ]


    return (
        <>
            <h6>ExerciseFive</h6>
            <div>
                {identificador.map(({ number, color }) => <div>
                    <ul>
                        {color.map((cor) => (
                            <li key={cor} style={{ backgroundColor: cor }}>
                                {cor}
                            </li>
                        )
                        )}
                    </ul>
                </div>)}
            </div>
        </>
    )
}