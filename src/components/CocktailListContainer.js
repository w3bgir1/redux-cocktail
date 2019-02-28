import * as React from 'react'
import CocktailList from './CocktailList'
import { connect } from 'react-redux'

class CocktailListContainer extends React.Component {

  selectCocktail = (id) => {
    this.props.dispatch({
      type: 'SELECT_COCKTAIL',
      payload: id
    })
}

  render() {
    return <CocktailList cocktails={this.props.cocktails} selectCocktail={this.selectCocktail}/>
  }
}

const mapStateToProps = (state) => {
  return {
    cocktails: state.cocktails
  }
}

export default connect(mapStateToProps)(CocktailListContainer)