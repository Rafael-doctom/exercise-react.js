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

    return (
        <>
            <div>
                <h6>ExerciceThree</h6>
                Nome: {DataOfPurchase.name}
                <br/>
                Idade: {DataOfPurchase.age}
                <br/>
                Situação: {DataOfPurchase.situation}
                <br/>
                Total gastos: {DataOfPurchase.purchaseOne + DataOfPurchase.purchaseTwo + DataOfPurchase.purchaseThree}
            </div>
        </>
    )
}