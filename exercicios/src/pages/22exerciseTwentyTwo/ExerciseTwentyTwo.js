import React, {  useState } from "react";

export default function ExerciseTwentyOne() {
    const [count, setCount] = useState(0)

    
    const handleClick = (event) => {
        event.preventDefault();
        setCount(count + 1);
    };

    const sum = (event)=> {
        event.preventDefault()
        var n1 = Number(document.getElementById("numero1").value);
        var n2 = Number(document.getElementById("numero2").value);
        alert(n1 + n2);
    };

    return (
        <>
            <p>valor:{count}</p>
            <button onClick={handleClick}>SOMAR</button>
            <h5>somar 2 inputs </h5>
            <input type="number" id="numero1" /> +
            <input type="number" id="numero2" />
            <button onClick={sum}>somar</button>
        </>
    )
}