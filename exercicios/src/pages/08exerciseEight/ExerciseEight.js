// object products list



import React from 'react';


export default function ExerciseEight() {

    const Products = [
        { product: 'notebook', value: '3k' },
        { product: 'Ps4', value: '2k' },
        { product: 'Pc Gamer', value: '5k' },
    ]

    return (
        <>
            <h6>Products</h6>
            <ul>
                {Products.map(item => (
                    <>
                        <li key={item.product}>
                            {item.product}{' / '}{item.value}
                        </li>
                    </>
                ))}
            </ul>
        </>
    )

}