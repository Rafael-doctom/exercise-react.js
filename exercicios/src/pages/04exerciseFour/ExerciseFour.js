// add List of Names and Books

import React from 'react';


export default function ExerciseFour() {

    const names = ['Rafael', ' ', 'Luis', ' ', 'Kaio'];

    const nameObject = {
        nomeOne: 'Rafael',
        nomeTwo: 'Luis',
        nomeThree: 'Kaio',
    };


    const books = [
        { nameOfBook: 'Pai rico, pai pobre' },
        { nameOfBook: 'Senhor dos aneis' },
    ];


    return (
        <>
            <h6>ExerciseFour</h6>
            <div>
                {names}
                <br />
                {nameObject.nomeOne}{' '}
                {nameObject.nomeTwo}{' '}
                {nameObject.nomeThree}{' '}
            </div>

            <div>
                {
                    books.map(book => (<li>{book.nameOfBook}</li>))
                }
            </div>
        </>
    )
}