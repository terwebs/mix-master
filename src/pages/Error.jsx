import { Link, useRouteError } from "react-router-dom"
import Wrapper from "../assets/wrappers/ErrorPage"
import img from "../assets/not-found.svg"

export default function Error() {
  const error = useRouteError()
  console.log(error)
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="" />
          <h3>Ohh, page not found</h3>
          <Link to={"/"}>Go back home</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </Wrapper>
  )
}
