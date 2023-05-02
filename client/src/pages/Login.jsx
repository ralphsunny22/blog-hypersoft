import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const [inputs, setInputs] = useState({
    username:"",
    password:"",
  })

  const [err, setErr] = useState(null)

  const navigate = useNavigate()

  const handleChange = e =>{
    setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
     const res = await axios.post("http://localhost:5000/api/auth/login", inputs)
    //  const res = await axios({
    //   withCredentials: true,                          // <=== Add this
    //   method: 'POST',
    //   url: 'http://localhost:5000/api/auth/login',
    //   data: inputs, 
    // });
      console.log(res)
      navigate('/')
    } catch (error) {
      setErr(error.response.data)
    }
    
  }
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder='username' name='username' onChange={handleChange} />
        <input type="password" placeholder='password' name='password' onChange={handleChange} />
        { err && <p>{err}</p> }
        <span>Don't have an account? <Link to="/register">Register</Link></span>
        <button onClick={handleSubmit}>Login </button>
      </form>
    </div>
  )
}

export default Login