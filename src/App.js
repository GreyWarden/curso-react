import React, { Component } from "react";
import "./App.css";
import Person from "./Components/Person/Person";

class App extends Component {
  RANDOM_NAMES = ['Herminio', 'Alonsa', 'María del Carmen', 'Pedro José'];
  state = {
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
  };

  switchNameOnButtonClickHandler = () => {
    const indexOfSelectedPerson = parseInt(
        Math.floor(
            Math.random() * this.state.persons.length
        )
    );

    const indexOfSelectedName = parseInt(
        Math.floor(
            Math.random() * this.RANDOM_NAMES.length
        )
    );

    const newName = this.RANDOM_NAMES[indexOfSelectedName];
    let persons = this.state.persons;
    persons[indexOfSelectedPerson].name = newName;

    this.setState({ persons })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello there!!</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} styles={this.state.persons[0].styles}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} styles={this.state.persons[1].styles}/>
        <button onClick={this.switchNameOnButtonClickHandler}> Name switcher! </button>
      </div>
    );
  }
}

export default App;
