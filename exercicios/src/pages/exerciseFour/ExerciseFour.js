// add List of Names

import React from 'react';


export default function ExerciseFour() {

    const names = ['Rafael', ' ', 'Luis', ' ', 'Kaio']
    
    const nameObject = {
        nomeOne: 'Rafael',
        nomeTwo: 'Luis',
        nomeThree: 'Kaio',
    }


    return (
        <>
            <div>
                <h6>ExerciseFour</h6>
                {names}
                <br/>
                {nameObject.nomeOne}{' '}
                {nameObject.nomeTwo}{' '}
                {nameObject.nomeThree}{' '}
            </div>
        </>
    )
}