import { useState } from "react";
import { loginUser } from "../../../service/authService";

export default function Login() {

    const [user, setUser] = useState({})

    function handleChange(e) {
        const newUser = { ...user }
        newUser[e.target.name] = e.target.value;
        setUser(newUser)
        console.log(newUser)
    }

    function handeSubmit(e) {
        e.preventDefault();
        loginUser(user)
    }

    return <div className="login">
        <form onSubmit={handeSubmit}>
            <input type="text" name="email" id="email" onChange={handleChange} />
            <input type="password" name="password" id="password" onChange={handleChange} />
            <input type="submit" value="Login" />
        </form>
    </div>
}