import React, { useEffect, useState } from "react";

export default function ExerciseTwentyOne() {

    const [input, setInput] = useState('')
    const[email, setEmail] = useState('')

    function mudarCorBody(e) {
        e.preventDefault()
        document.body.style.backgroundColor= "gray" 
    }

return (
    <>
        <form>
            <label>Input Search</label>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="pesquisar..." />

            <label>E-mail</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" />

            <button onClick={mudarCorBody}>
                Enviar
            </button>
        </form>
    </>
)
}