// console name
//  data of purchase
// total purchase

import React from 'react';


export default function ExerciseThree() {

    const DataOfPurchase = {
        name: 'Rafael',
        age: 20,
        situation: 'ativa',
        purchaseOne: 100,
        purchaseTwo: 300,
        purchaseThree: 500,
    }

    const Values = [100, 100, 100]

    function totalValues(a, b) {
        return a + b
    }

    const resultValues = Values.reduce(totalValues)


    return (
        <>
            <div>
                <h6>ExerciceThree</h6>
                {DataOfPurchase.name}
                <br />
                {DataOfPurchase.age}
                <br />
                {DataOfPurchase.situation}
                <br />
                {DataOfPurchase.purchaseOne + DataOfPurchase.purchaseTwo + DataOfPurchase.purchaseThree}
                <br />
                {resultValues}
            </div>
        </>
    )
}