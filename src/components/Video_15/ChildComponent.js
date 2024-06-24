import React from 'react'
// functional component
function ChildComponent(props) {
  return (
    <div>
        <button onClick={props.greetParentHandler}>Greet Parent</button>

        {/* Passing parameters */}
        <button onClick={() => props.greetChildHandler('child')}>Greet Child</button>
    </div>
  )
}

export default ChildComponent