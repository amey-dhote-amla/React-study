import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
// class component
class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
        this.greetChild = this.greetChild.bind(this);

    }

    greetParent() {
        alert(`Hello ${this.state.parentName}`)
    }

    greetChild(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    render() {
        return (
            <div>
                {/* passing a reference of greetParent to prop greetHandler */}
                <ChildComponent 
                    greetParentHandler={this.greetParent} // Pass greetParent as a prop
                    greetChildHandler={this.greetChild} // Pass greetChild as a prop
                />

            </div>
        )
    }
}

export default ParentComponent