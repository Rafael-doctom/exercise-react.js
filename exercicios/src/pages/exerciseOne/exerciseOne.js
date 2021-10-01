// add title
// add style for title

import React from 'react';


export default function ExerciseOne() {
    const title = "ExerciceOne"

    const styleOfTitle = {
        fontSize: "25px",
        color: "red",
    }

    return (
        <>
            <h4 style={styleOfTitle}>{title}</h4>
        </>
    )
}