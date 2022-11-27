import { useRef, useState } from 'react'
import { useNavigation, Link } from 'react-router-dom'

import {supabase} from '../../supabase/supabase'

// import { useAuth } from '../../contexts/Auth'

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const [error, setError] = useState(null)

//   const { login } = useAuth()
//   const history = useNavigation()

  async function handleSubmit(e) {
    e.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    let {data, error} = await supabase.auth.signIn({
        email: email,
        password: password
    })

    if (error) {
        console.log(error)
        return setError(error)
    } else {
        console.log(data)
    }

    // const { error } = await login({ email, password })

    if (error) return setError(error)

    // history.push('/')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>{error && JSON.stringify(error)}</div>

        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="email" ref={emailRef} />

        <label htmlFor="input-password">Password</label>
        <input id="input-password" type="password" ref={passwordRef} />

        <br />

        <button type="submit">Login</button>
      </form>
      <br />
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </>
  )
}

export default Login;
