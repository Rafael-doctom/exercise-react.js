// add List of Names and Books

import React from 'react';



export default function ExerciseSix() {

    function handleClick() {
        alert('você clicou')
    }

    return (
        <>
            <h6>ExerciseSix</h6>
            <button onClick={handleClick}>
                eventClick
            </button>
            <button onClick={() => alert('ok')}>
                clickInLine
            </button>
        </>
    )
}