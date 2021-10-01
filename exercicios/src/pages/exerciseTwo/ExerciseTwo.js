// list of Data
// nothing style
// calculate average


import React from 'react';


export default function ExerciseTwo() {

    const Data = {
        notebook: 'Samsung',
        vehicle: 'Car',
    };


    const valueOne = 100;
    const valueTwo = 200;
    const valueThree = 300;
    const Total = (valueOne + valueTwo + valueThree) / 3



    return (
        <>
            <div>
                <h5>ExerciceTwo </h5>
                Modelo de notebook: {Data.notebook}
                <br />
                Tipo de Veículo: {Data.vehicle}
            </div>
            <div>
                <h6>Média de valores</h6>
                <p>
                    Média 1: {valueOne}
                    <br />
                    Média 2: {valueTwo}
                    <br />
                    Média 3: {valueThree}
                    <br />
                </p>
                <p>Total: {Total}</p>
            </div>


        </>
    )
}