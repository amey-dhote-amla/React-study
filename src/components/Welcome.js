import React, { Component } from 'react'

// Class component
// class Welcome extends Component {
//     render() {
//         return <h1>Hello {this.props.name} a.k.a {this.props.heroName}!!</h1>
//     }
// }

// destructuring props in class component 
class Welcome extends Component{
    render(){
        const {name, heroName} = this.props
        // const {state1, state2} = this.state
        return <h1>Hello {name} a.k.a {heroName}!!</h1>
    }
}

export default Welcome;