// update title count
// useState & useEffect



import React, { useEffect, useState } from 'react';


export default function ExerciseTwelve() {

   const [contador, setContador] = useState(0)

   useEffect(() => {
    document.title = `Você clicou ${contador} vezes`;
  });


    return (
        <>
           <p>{contador}</p>
           <button onClick={() => setContador(contador + 1)}>
               clique aqui
           </button>
        </>
    )

}