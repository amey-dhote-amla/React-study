import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        /*
        // never modify state directly, always use setState
        this.setState(
            {
            count: this.state.count + 1
            }, 
            () => { 
                console.log(`Call back value ${this.state.count}`) 
            }
        )
        // Calls to setState are asynchronous and therefore, console.log() is called first before state is set hence we used call back function 
        // console.log(this.state.count)   // this is synchrnous 
        */

        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        }, () => { console.log(`Call back value ${this.state.count}`) })
    }

    incrementByFive(){
        // this.setState(
        //     {
        //         count: this.state.count + 5
        //     },

        //     () => {
        //         console.log(`Call back value ${this.state.count}`) 
        //     }
        // )

        // in such case all setState calls are executed at same time, and updated value dont carry over different calls
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div> Count = {this.state.count}</div>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.decrement()}>Decrement</button>
                <br/>
                <button onClick={() => this.incrementByFive()}>Increment by 5</button>
            </div>
        )
    }
}

export default Counter


/* NOTES:

1. Always make use of setState and never modify the state directly.
2. Code has to be executed after the state has been updated? Place that code in the call back function which is the second argument to the setState method. 
3. When you have to update state based on the previous state value, pass in a function as an argument instead of the regular object.

*/