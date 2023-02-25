import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './Login.css'

const Login = () => {

    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })

    const { loading, error, dispatch } = useContext(AuthContext);

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async e => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post("/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate("/")
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    }

    const navigate = useNavigate()

    return (
        <div className='login'>
            <div className="login__container">
                <input
                    type="text" placeholder='username'
                    id='username'
                    onChange={handleChange}
                    className='login__input'
                />
                <input
                    type="password" placeholder='password'
                    id='password'
                    onChange={handleChange}
                    className='login__input'
                />
                <button
                    disabled={loading}
                    onClick={handleClick}
                    className='login__button'>Login</button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    )
}

export default Login