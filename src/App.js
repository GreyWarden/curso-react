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
    ]
  };

  switchNameOnButtonClickHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
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
    })
  }

  nameChangedHandler = (event) => {
    const newName = event.target.value;
    this.setState({
      persons: [
        {
          name: 'Raúl',
          age: 25,
          styles: {
            color: "purple"
          }
        },
        {
          name: newName,
          age: 25,
          styles: {
            color: "#e2943a"
          }
        }
      ]
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

    return (
        <div className="App">
          <h1>Hello there!!</h1>
          <div className="PersonsContainer">
            <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                styles={
                  this.state.persons[0].styles}
                onClickHandler={this.switchNameOnButtonClickHandler.bind(this, 'Hermin!')}
            />
            <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                styles={this.state.persons[1].styles}
                onChangeHandler={this.nameChangedHandler}
            />
          </div>
          <p>
            <button
                onClick={this.switchNameOnButtonClickHandler.bind(this, 'Herminio')}
                style={buttonStyles}
            >
              Name switcher!
            </button>
          </p>
        </div>
    );
  }
}

export default App;
