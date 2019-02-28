import React, { Component } from 'react'
import './App.css'
import CocktailListContainer from './components/CocktailListContainer';
import CocktailDetailsContainer from './components/CocktailDetailsContainer'
import { Link, Route } from 'react-router-dom'
import AddCocktail from './components/AddCocktail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Cocktail Explorer</h1>
          <nav><Link to={'/'}>Go back to indexx</Link>
          <Link to={'/addCocktail/'}>Add a new cocktail</Link></nav>
        </header>
        <main>
        <Route exact path="/" component={CocktailListContainer} />
        
        <Route exact path="/cocktail/:id" component={CocktailDetailsContainer} />
        
        <Route exact path="/addCocktail/" component={AddCocktail} />
        </main>
      </div>
    );
  }
}

export default App;
