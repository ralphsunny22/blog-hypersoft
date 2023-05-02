import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/logo.png"
import { AuthContext } from '../context/authContext'

const Navbar = () => {
  const {currentUser, logout} = useContext(AuthContext)
  return (
    <div className="navbar">
      <div className="container">
        <div className='logo'>
          
          <Link>
            <img src={Logo} alt="Logo" />
          </Link>
          
        </div>
        <div className='links'>
          <Link className='link' to="/?cat=art"><h6>ART</h6></Link>
          <Link className='link' to="/?cat=food"><h6>FOOD</h6></Link>
          <Link className='link'><h6>ART3</h6></Link>
          <Link className='link'><h6>ART4</h6></Link>
          <span>{currentUser?.username}</span>
          {currentUser ? <span onClick={logout}>Logout</span> : <Link className='link' to="/login">Login</Link>}
          <span className='write'>
            <Link className='link' to="/write">Write</Link>
          </span>
        </div>
        
      </div>
    </div>
    
  )
}

export default Navbar