// functional component

import React from 'react'

// function Greet(){
//     return <h1>Hello Amey</h1>
// }

const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1> Hello {props.name} you are a {props.heroName}!! </h1>
            {props.children}
        </div>
    )
}

export default Greet
