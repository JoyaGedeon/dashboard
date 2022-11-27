import { Link } from 'react-router-dom'
import { Navbar } from "../../components/LandingNav/navbar"
import './paymentplan.css'

const paymentplan = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <table className='table'>
                <thead>
                    <tr>
                        <th>Free Plan</th>
                        <th>Basic Plan</th>
                        <th>Pro Plan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Free</td>
                        <td>$10/month</td>
                        <td>$20/month</td>
                    </tr>
                </tbody>
            </table>
            <h3>Sign up right now!</h3>
            <Link to="/signup">sign up</Link>
        </div>
    )
}

export default paymentplan
