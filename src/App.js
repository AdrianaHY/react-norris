import React, { Component } from 'react';
import ContainerJokes from './pages/ContainerJokes';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chuck Norris' Jokes :</h1>
        </header>
        <ContainerJokes />
      </div>
    );
  }
}

export default App;
