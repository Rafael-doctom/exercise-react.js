// count Number infinite using useState



import React, { useState } from 'react';


export default function ExerciseEleven() {

    const [count, setCount] = useState(0)

    return (
        <>
           <button style={{backgroundColor:'Gray', height:'50px', width:'40px'}} onClick={() => setCount(count - 1)}>
               {count}
           </button>
        </>
    )

}