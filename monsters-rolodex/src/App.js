import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render() {
    // this allows us to copy the data from the state object into our own constant
    // the variable names will be the same as if we had referenced them from the state (monsters and searchField)
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
      <h1 class="hey"> Monsters Rolodex </h1>
      <SearchBox
        // passing these things in as props
        placeholder='search monsters'
        handleChange={e => this.setState({searchField: e.target.value})}
      />
      <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}
export default App;
