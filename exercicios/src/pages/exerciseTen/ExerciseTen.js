// count Number infinite using useState



import React, { useState } from 'react';


export default function ExerciseTen() {

   const [countNumber, setCountNumber] = useState(1)

    return (
        <>
            <button onClick={() => setCountNumber(countNumber + 1)}>
                {countNumber}
            </button>
        </>
    )

}