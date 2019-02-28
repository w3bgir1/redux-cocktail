import { combineReducers } from 'redux'
import cocktails from './cocktails'
import selectedCocktail from './selected-cocktail'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  cocktails,
  selectedCocktail,
  form: formReducer
})