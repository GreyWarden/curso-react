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

  render() {
    return (
        <div className="App">
          <h1>Hello there!!</h1>
          <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              styles={
                this.state.persons[0].styles}
          />
          <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              styles={this.state.persons[1].styles}
              onClickHandler={this.switchNameOnButtonClickHandler.bind(this, 'Hermin!')}
          />
          <button onClick={this.switchNameOnButtonClickHandler.bind(this, 'Herminio')}> Name switcher!</button>
        </div>
    );
  }
}

export default App;
