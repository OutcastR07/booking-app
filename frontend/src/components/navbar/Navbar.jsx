import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar__container">
                <div className="navbar__logo">
                    BookingDotCom
                </div>
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