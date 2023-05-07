import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/logo.png"
import { BsFill0CircleFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className='mb-3'>
        <nav className="navbar navbar-expand-lg border-bottom shadow-sm bg-white">
            <div className="container-fluid">
                <div className='logo'>
                    <Link>
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home12 <BsFill0CircleFill/></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Technology</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled">Science </a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar