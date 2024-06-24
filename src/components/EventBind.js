import React, { Component } from 'react'

// Binding Event Handlers
class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        // this.changeMessage = this.changeMessage.bind(this) // Approach 3: binding in class constructor
    }

    // need to bind 'this' manualy in the constrcutor for this method
    // changeMessage(){
    //     this.setState({  
    //         message: "Good Bye"
    //     })
    //     // console.log(this)
    // }

    // Approach 4 - 'this' is automatically binded
    changeMessage = () =>{
        this.setState({
            message: "Good Bye"
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* Approach 1 (Performance issues) */}
                {/* <button onClick={this.changeMessage.bind(this)}>Click</button> */}

                {/* Approach 2 */}
                {/* <button onClick={() => this.changeMessage()}>Click</button> */}

                {/* Approach 3 (preferred) */}
                {/* here reference of function is passed so its executed only when button is clicked */}
                <button onClick={this.changeMessage}>Click</button>

                
            </div>
        )
    }
}

export default EventBind

{/* NOTES
    "bind" method is used to pass the context (e.g. "this") to javascript function when it will trigger.

    In this case "this" of react component passed to "changeMessage" method,
    so when "changeMessage" will invoke, 
    if there is use of "this" inside it code, 
    "this" will get the value of parent component.
 */}