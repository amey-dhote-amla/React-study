// functional component

import React from 'react'

// function Greet(){
//     return <h1>Hello Amey</h1>
// }

// props
// const Greet = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h1> Hello {props.name} you are a {props.heroName}!! </h1>
//             {props.children}
//         </div>
//     )
// }

// destructuring props in functional component- way 1

const Greet = props => {
    const {name, heroName} = props
    return (
        <div>
            <h1> Hello {name} you are a {heroName}!! </h1>
            {props.children}
        </div>
    )
}

// destructuring props in functional component - way 2
// const Greet = ({name, heroName}) => {
//     return (
//         <div>
//             <h1> Hello {name} you are a {heroName}!! </h1>
//         </div>
//     )
// }

export default Greet
