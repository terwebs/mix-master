import Wrapper from "../assets/wrappers/CocktailList"
import CocktaiilCard from "./CocktailCard"

export default function CocktailList({ drinks }) {
  if (!drinks) {
    return <h4 style={{ textAlign: "center" }}>No matching drinks found...</h4>
  }
  const formattedDrinks = drinks.map((drink) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    }
  })
  return (
    <Wrapper>
      {formattedDrinks.map((item) => {
        return <CocktaiilCard key={item.id} {...item} />
      })}
    </Wrapper>
  )
}
