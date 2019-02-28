import React, { Component } from 'react'
import './App.css'
import CocktailListContainer from './components/CocktailListContainer';
import CocktailDetailsContainer from './components/CocktailDetailsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Cocktail Explorer</h1>
        </header>
        <main>
          <CocktailListContainer />
          <CocktailDetailsContainer />
        </main>
      </div>
    );
  }
}

export default App;
