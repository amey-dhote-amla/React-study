import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>{person.name} is {person.age} years old and is profecient in {person.skill}</h2>
        </div>
    )
}

export default Person