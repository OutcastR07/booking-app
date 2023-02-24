import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar__container">
                <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
                    <span className="navbar__logo">
                        bookingDotCom
                    </span>
                </Link>
                <div className="navbar__items">
                    <button className="navbar__button">
                        Register
                    </button>
                    <button className="navbar__button">
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar