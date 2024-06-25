import React, { Component } from 'react'

// CONDITIONAL RENDERING

class UerGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        // APPROACH 1
        // if (this.state.isLoggedIn) {
        //     return <div> Welcome Amey </div>  // If Logged in then this message should be displayed    
        // } else {
        //     return <div> Welcome Guest  </div> // If not Logged in then this message should be displayed 
        // }

        // APPROACH 2 - element variable
        // let message; // stores element to be rendered
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Amey</div>
        // } else {
        //     message = <div>Welcome guest</div>
        // }
        // return <div>{message}</div>

        // APPROACH 3 - ternary operator
        // return(
        //     this.state.isLoggedIn? <div>Welcome Amey</div> : <div>Welcome guest</div>
        // )

        // APPROACH 4 - Short circuit operator
        return this.state.isLoggedIn && <div>Welcome Amey</div>
    }
}

export default UerGreeting