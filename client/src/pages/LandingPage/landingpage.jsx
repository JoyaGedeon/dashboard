import { Navbar } from "../../components/LandingNav/navbar"
import { Link } from "react-router-dom"
import './landingpage.css'

const Landingpage = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <h1 className="text-3xl font-bold underline">landing page</h1>
            <Link className="button" to="/signup">click me</Link>
        </div>
    )
}

export default Landingpage
