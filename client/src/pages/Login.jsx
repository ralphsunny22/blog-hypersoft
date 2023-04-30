import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder='username' />
        <input type="password" placeholder='password' />
        <p>This is an error</p>
        <span>Don't have an account? <Link to="/register">Register</Link></span>
        <button>Login </button>
      </form>
    </div>
  )
}

export default Login