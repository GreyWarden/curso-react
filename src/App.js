import React, {Component} from "react";
import "./App.css";
import Person from "./Components/Person/Person";

class App extends Component {
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
    ],
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({
      persons
    })
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    const buttonStyles = {
      backgroundColor: 'darkred',
      border: '1px solid grey',
      borderRadius: '0.7em',
      padding: '0.5em',
      cursor: 'pointer',
      userSelect: 'none'
    }
    const persons = this.state.showPersons &&
          (
              <div className="PersonsContainer">
                {this.state.persons.map(({name, age, styles}, index) => (
                    <Person
                        name={name}
                        age={age}
                        styles={styles}
                        onClickHandler={() => this.deletePersonHandler(index)}
                    />
                ))}
              </div>
          )

    return (
        <div className="App">
          <h1>Hello there!!</h1>
          <p>
            <button
                onClick={this.togglePersonsHandler}
                style={buttonStyles}
            >
              Toggle Persons!
            </button>
          </p>
          { persons }
        </div>
    );
  }
}

export default App;
