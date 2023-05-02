import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
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
      const res = await axios.post("http://localhost:5000/api/auth/register", inputs)
      navigate('/login')
      //console.log(res)
    } catch (error) {
      //console.log(error)
      setErr(error.response.data)
    }
    
  }

  //console.log(inputs)
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='username' name='username' onChange={handleChange} />
        <input required type="email" placeholder='email' name='email' onChange={handleChange} />
        <input required type="password" placeholder='password' name='password' onChange={handleChange} />
        { err && <p>{err}</p> }
        
        <span>Do you have an account? <Link to="/login">Login</Link></span>
        <button onClick={handleSubmit}>Register </button>
      </form>
    </div>
  )
}

export default Register