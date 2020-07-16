import React, {Component} from 'react';
import './App.css';
import Person from './Components/Person/Person';
import Button from "./Components/Base/Button/Button";

class App extends Component {
  state = {
    persons: [
      {
        id: 'sdaf23134',
        name: 'Raúl',
        age: 25,
        styles: {
          color: 'purple'
        }
      },
      {
        id: '213sd12sadfsd',
        name: 'Lau',
        age: 25,
        styles: {
          color: '#e2943a'
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

  changePersonNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(({id: personId}) => personId === id);
    const person = {
      ...this.state.persons[personIndex],
      name: event.target.value
    };
    const persons = [...this.state.persons];
    persons[personIndex] = person;
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
    const persons = this.state.showPersons &&
          (
              <div className='PersonsContainer'>
                {
                  this.state.persons.map(
                    ({id, name, age, styles}, index) => (
                      <Person
                          key={id}
                          name={name}
                          age={age}
                          styles={styles}
                          onClickHandler={() => this.deletePersonHandler(index)}
                          onChangeHandler={(event) => this.changePersonNameHandler(event, id)}
                      />
                    )
                  )
                }
              </div>
          )

    return (
        <div className='App'>
          <h1>Hello there!!</h1>
          <p>
            <Button
                onClick={this.togglePersonsHandler}
                text='Toggle Persons!'
            >
            </Button>
          </p>
          { persons }
        </div>
    );
  }
}

export default App;
