import React, { Component } from 'react'

// STATE

class Message extends Component {

    constructor() {
        super()
        // state is an object privately maintained inside a component, state can be changed within the component
        this.state = {
            message: 'Welcome visitor'
        }
    }

    changeMessage(){
        // setState is called to change state of class component
        this.setState({
            message: 'Thank you for Subscribing'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message