import { Link, useLoaderData } from "react-router-dom"
import axios from "axios"
import { useContext } from "react"
import CocktailList from "../components/CocktailList"
import SearchForm from "../components/SearchForm"

const drinksURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

export const loader = async ({ request }) => {
  const url = new URL(request.url)

  const searchTerm = url.searchParams.get("search") || ""
  const response = await axios.get(`${drinksURL}${searchTerm}`)
  // console.log(response)
  return { drinks: response.data.drinks, searchTerm }
}

export default function Landing() {
  const { drinks, searchTerm } = useLoaderData()
  // console.log(drinks)

  return (
    <div>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
      {/* pass down drinks we get from the loader to the cocktail list */}
    </div>
  )
}
