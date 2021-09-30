// add title
// add style for title

import React from 'react';


export default function ExerciceOne() {
    const title = "Exercicio 1"

    const styleOfTitle = {
        fontSize: "40px",
        color: "red",
    }
    return (
        <>
            <h4 style={styleOfTitle}>{title}</h4>
        </>
    )
}