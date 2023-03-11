import React, { useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className='navbar'>
            <div className="navbar__container">
                <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
                    <span className="navbar__logo">
                        bookingDotCom
                    </span>
                </Link>
                {user ? (
                    <div>
                        {(user.username)}
                        <button className="navbar__button">
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="navbar__items">
                        <button className="navbar__button">
                            Register
                        </button>
                        <button className="navbar__button">
                            Login
                        </button>
                    </div>)}
            </div>
        </div>
    )
}

export default Navbar