// Criar titulo 
// criar estilo para o titulo
// não usar libs de estilos
import React from 'react';


export default function ExerciceOne() {
    const titulo = "Exercicio 1"

    const estiloDoTitulo = {
        fontSize: "40px",
        color: "red",
    }
    return (
        <>
            <h4 style={estiloDoTitulo}>{titulo}</h4>
        </>
    )
}