import React, { useEffect, useState } from 'react'


export default function ExerciseThirteen() {
    const [exemplo, setExemplo] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setExemplo(json))
    })

    return (
        <div>

            <h5>
                {exemplo.title}
            </h5>



        </div>
    )
}