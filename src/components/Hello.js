import React from "react";

// JSX way   (JSX translates into React.createElement which uses React library)
// const Hello = () => {
//     return(
//         <div className = 'dummyClass'> 
//             <h1>Hello Amey</h1>
//         </div>
//     )
// }

// Without JSX
const Hello = () => {
    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello Amey')
    )
}

export default Hello;

