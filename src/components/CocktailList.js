import * as React from 'react'

export default function CocktailList(props) {
  return (<div>
    <ul>
      { props.cocktails.map(cocktail =>
        <li key={cocktail.id} onClick={() => props.selectCocktail(cocktail.id)}>
          { cocktail.drink }
        </li>
      ) }
    </ul>
  </div>)
}