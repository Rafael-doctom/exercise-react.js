import React, { useContext } from "react";
import UserContext from "../../UserContext";

export default function ExerciseTwenty() {
    const dados = useContext(UserContext)
    console.log(dados)
    return (
        <>
            <div>{dados.nome}</div>
        </>
    )
}