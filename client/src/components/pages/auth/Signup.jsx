import { useState } from "react";
import { useNavigate } from "react-router-dom"

import { createUser } from "../../../service/authService";
import './auth.css'

export default function Signup() {

    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState({});

    const navigate = useNavigate();

    function handleChange(e) {
        const newUser = { ...user }
        newUser[e.target.name] = e.target.value;
        setUser(newUser)
        console.log(newUser)
    }

    function handeSubmit(e) {
        e.preventDefault();
        createUser(user)
            .then(() => navigate('/'))
            .catch((err) => { try { setErrorMessage(err.response.data) } catch { console.log(err); navigate('/login') } })
    }

    function handleLinkClick(e) {
        e.preventDefault();
        navigate('/login');
    }

    return <div className="auth">
        <h1>Sign Up</h1>
        <form onSubmit={handeSubmit}>

            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" onChange={handleChange} />
            {errorMessage.email && <div className="error-message" id="email-error-message">* {errorMessage.email}</div>}

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={handleChange} />
            {errorMessage.password && <div className="error-message" id="password-error-message">* {errorMessage.password}</div>}

            <input type="submit" value="Create Account" />

            <a className="page-link" href="/login" onClick={handleLinkClick}>Already have an account? <span>Log In</span></a>
        </form>
    </div>
}

