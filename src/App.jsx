import { RouterProvider, createBrowserRouter } from "react-router-dom"

import {
  About,
  HomeLayout,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SingleError,
} from "./pages"

import { loader as landingLoeader } from "./pages/Landing"
import { loader as singleCocktailLoader } from "./pages/Cocktail"
import { action as newsLetterAction } from "./pages/Newsletter"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        // path: "landing",
        index: true,
        element: <Landing />,
        errorElement: <SingleError />,
        loader: landingLoeader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cocktail/:id",
        errorElement: <SingleError />,
        loader: singleCocktailLoader,
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsLetterAction,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
