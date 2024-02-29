import { Link, Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function HomeLayout() {
  const navigation = useNavigation()
  console.log(navigation)
  const ispageLoading = navigation.state === "loading"

  return (
    <div>
      {/* <Link to="/about">About</Link> */}
      <Navbar />
      <section className="page">
        {ispageLoading ? <div className="loading"></div> : Outlet}
        <Outlet />
      </section>
    </div>
  )
}
