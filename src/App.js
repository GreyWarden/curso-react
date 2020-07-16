import React, {Component} from 'react';
import './App.css';
import Person from './Components/Person/Person';
import Radium from 'radium'

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
    const buttonStyles = {
      backgroundColor: !this.state.showPersons ? 'darkgreen' : 'darkred',
      border: '1px solid grey',
      borderRadius: '0.7em',
      padding: '0.5em',
      cursor: 'pointer',
      userSelect: 'none',
      ':hover': {
        textDecoration: 'underline',
        backgroundColor: !this.state.showPersons ? 'lightgreen' : 'salmon'
      }
    }
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

export default Radium(App);
