import * as React from 'react'
import { connect } from 'react-redux'
import CocktailDetails from './CocktailDetails'

class CocktailDetailsContainer extends React.Component {
    
  render() {
  
    if (!this.props) return null
    return <CocktailDetails props={this.props} />
  }
}

const mapStateToProps = (state) => {
  if (state.selectedCocktail !== null) {
    return { 
      cocktails: state.cocktails.find(cocktail => cocktail.id === state.selectedCocktail)
    }
  }
  return {}
}

export default connect(mapStateToProps)(CocktailDetailsContainer)