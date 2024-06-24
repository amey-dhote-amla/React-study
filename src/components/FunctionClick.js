import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("Function component Button Clicked")
    }
  return (
    // we are passing the function as event handler not calling it "no ()"
    <button onClick={clickHandler}>FunctionClickClick</button>
  )
}

export default FunctionClick