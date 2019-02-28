import * as React from 'react'

export default function CocktailDetails(props) {
  const cocktail = props.props.cocktails
  return (
  <div>
    { cocktail && 
      <div><h2>{ cocktail.drink }</h2> 
      <img src={ cocktail.thumbnail} alt="drink"></img>
      <p>
        <i>{ cocktail.category }</i>
        <p>{cocktail.alcoholic }</p>
      </p>
      <p>{'Glass: '} {cocktail.glass}</p>
      <p>{'Instructions: '}</p>
      <p>{cocktail.instructions}</p>
      <ul>
        { cocktail.ingredients.map(ingredient =>
          <li key={ingredient.name}>{ ingredient.measure }{' '}{ingredient.name }</li>
        ) }
      </ul>
      <p>{'Last modified: '}<i>{cocktail.lastModified}</i></p>
      
      </div>
    }
  </div>)
}