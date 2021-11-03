import React from 'react'


export default function ExerciseSeventeen() {


    const phrase = [
        { text: 'dsafaga' },
        { text: 'dsafaga' },
        { text: 'dsafaga' },
        { text: 'dsafaga' },
        { text: 'dsafaga' },
        { text: 'dsafaga' },

    ]

    return (
        <>

            <div>
                <ul>
                    {
                        phrase.map((item) => (
                            <li key={item}>
                                {item.text}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

