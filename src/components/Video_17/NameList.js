import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ["Eren", "Mikasa", "Armin"]
    // const nameList = names.map(name => <h2>{name}</h2>)
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]

    // key props are not accessible in child components
    const personList = persons.map(person => <Person key={person.id} person = {person}/>)
    if(person.id=2){
        
    }
    return <div>{personList}</div>
}

export default NameList

/*
NOTES:
A "key" is a special string attribute you need to include when creating lists of elements. 
Keys give the elements a stable identity. Keys help React identify which items have changed, are added, or are removed. Help in efficient update of the user interface.
*/