import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: "Georgia",
          id: "aknfhv"
        },
        {
          name: "Kai",
          id: "a5555v"
        },
        {
          name: "münster boi",
          id: "a90beepboop"
        },
        {
          name: "huxley Anne",
          id: "poopypoopy!"
        }
      ]
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => <h1 key={monster.id}> {monster.name} </h1>)
        }
      </div>
    );
  }
}
export default App;
