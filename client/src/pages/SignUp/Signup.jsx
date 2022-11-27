import { useRef, useState } from 'react'
import { useNavigation, Link } from 'react-router-dom'

import {supabase} from '../../supabase/supabase'

// import { useAuth } from '../../contexts/Auth'

const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordRefConfirmation = useRef();

  const [error, setError] = useState(null)

  // const { signUp } = useAuth()
  // const history = useNavigation()

  async function handleSubmit(e) {
    e.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value
    const passwordConfirmation = passwordRefConfirmation.current.value

    if (password === passwordConfirmation) {

      let {data, error} = await supabase.auth.signUp({
        email: email,
        password: password
      })

      if (error) {
        console.log(error)
        return setError(error)
      } else {
        console.log(data)
      }

    } else {
      console.log("Passwords do not match")
    }


    // const { error } = await signUp({ email, password })

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

        <label htmlFor="input-password">Password Conformation</label>
        <input id="input-password" type="password" ref={passwordRefConfirmation} />

        <br />

        <button type="submit">Sign up</button>
      </form>

      <br/>

      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </>
  )
}

export default Signup;
