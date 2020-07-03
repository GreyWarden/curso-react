import React, {useState} from "react";
import "./App.css";
import Person from "./Components/Person/Person";

const app = _ => {
  const RANDOM_NAMES = ['Herminio', 'Alonsa', 'María del Carmen', 'Pedro José'];

  const [personsState, setPersons] = useState(
      {
        persons: [
          {
            name: 'Raúl',
            age: 25,
            styles: {
              color: "purple"
            }
          },
          {
            name: 'Lau',
            age: 25,
            styles: {
              color: "#e2943a"
            }
          }
        ]
      }
  )

  const switchNameOnButtonClickHandler = () => {
    const indexOfSelectedPerson = parseInt(
        Math.floor(
            Math.random() * personsState.persons.length
        )
    );

    const indexOfSelectedName = parseInt(
        Math.floor(
            Math.random() * RANDOM_NAMES.length
        )
    );

    const newName = RANDOM_NAMES[indexOfSelectedName];
    let persons = personsState.persons;
    persons[indexOfSelectedPerson].name = newName;

    setPersons({persons})
  }

  return (<div className="App">
    <h1>Hello there!!</h1>
    <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
        styles={personsState.persons[0].styles}
    />
    <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        styles={personsState.persons[1].styles}
    />
    <button onClick={switchNameOnButtonClickHandler}> Name switcher!</button>
  </div>)
}

export default app;