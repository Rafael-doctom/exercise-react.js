// count Number infinite using useState



import React, { useState } from 'react';


export default function ExerciseTen() {

   const [countNumber, setCountNumber] = useState(1)

    return (
        <>
            <button style={{backgroundColor:'Gray', height:'50px', width:'40px'}} onClick={() => setCountNumber(countNumber + 1)}>
                {countNumber}
            </button>
        </>
    )

}