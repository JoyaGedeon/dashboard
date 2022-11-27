import './login-signup.css';
import { Navbar } from "../../components/LandingNav/navbar"
const LoginSignup = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <h1>Login Signup</h1>
            <main style={{display:"flex"}}>
                <section class="login" style={{flex: "50%"}}>
                    <h2>Login</h2>
                    <form style={{display:"flex", flexDirection:"column"}}>
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" />
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" />
                        <button type="submit">Login</button>
                    </form>
                </section>

                <section class="signup" style={{flex: "50%"}}>
                    <h2>Signup</h2>
                    <form style={{display:"flex", flexDirection:"column"}}>
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" />
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" />
                        <button type="submit">signup</button>
                    </form>
                </section>
            </main>

        </div>

    )
}

export default LoginSignup
