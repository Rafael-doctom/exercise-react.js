import React, {  useEffect, useState } from "react";

export default function ExerciseTwentyThree() {
   
    const [ counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter(counter + 1)
    }

    // loop infinito
    useEffect(() => {
        console.log('componentDidUpdate')
    })

    // executa 1x
    useEffect(() => {
        console.log('componentDidMount')
    }, [])

    useEffect(() => {
        console.log(`contador mudou para ${counter}`)
    }, [counter])

    // abaixo irá dar erro, pois é necessário passar uma dependência
    // useEffect(() => {
    //     console.log(`contador erro ${counter}`)
    // }, [])
    return (
        <>
            <h2>valor atual:   {counter}</h2>
            <button onClick={handleClick}>adicionar +1</button>
        </>
    )
}