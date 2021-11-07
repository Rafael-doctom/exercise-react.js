import { useEffect, useState } from "react"

export const ExerciseTwentyFive = () => {

    const [count, setCount] = useState(20);

    useEffect(() => {
        setCount(() => {
            alert(`valor atual é: ${count}`)
        })
    }, [count]);



    const somarValores = () => {
        var number1 = Number(document.getElementById('n1').value)
        var number2 = Number(document.getElementById("n2").value)
        var count = number1 + number2
        alert(count)
    }


    return (
        <>
            <h1>ExerciseTwentyFive</h1>
            <input type="number" id="n1" /> +
            <input type="number" id="n2" />
            <button onClick={somarValores}>somar</button>
        </>
    )
}