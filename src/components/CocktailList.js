import * as React from 'react'
import { Link } from 'react-router-dom'


export default function CocktailList(props) {
  return (<div>
    <ul>
      { props.cocktails.map(cocktail =>
        <Link to={`/cocktail/${cocktail.id}`}><li key={cocktail.id} onClick={() => props.selectCocktail(cocktail.id)}>
        { cocktail.drink }
      </li></Link>
      ) }
    </ul>
  </div>)
}