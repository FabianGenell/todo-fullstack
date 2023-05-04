import { useState } from "react";
import { useNavigate } from "react-router-dom"

import { loginUser } from "../../../service/authService";
import './auth.css'

export default function Login() {

    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState({});

    const navigate = useNavigate();

    function handleChange(e) {
        const newUser = { ...user }
        newUser[e.target.name] = e.target.value;
        setUser(newUser)
        console.log(newUser)
    }

    function handleSubmit(e) {
        e.preventDefault();
        loginUser(user)
            .then(() => navigate('/'))
            .catch((err) => /* setErrorMessage(err.response.data.error) */ console.log(err))
    }

    function handleLinkClick(e) {
        e.preventDefault();
        navigate('/signup');
    }

    return <div className="auth">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>

            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" onChange={handleChange} />
            {errorMessage.email && <div className="error-message" id="email-error-message">* {errorMessage.email}</div>}

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={handleChange} />
            {errorMessage.password && <div className="error-message" id="password-error-message">* {errorMessage.password}</div>}

            <input type="submit" value="Login" />

            <a className="page-link" href="/signup" onClick={handleLinkClick}>Don't have an account? <span>Sign Up</span></a>
        </form>
    </div>
}

