import { useNavigate } from "react-router-dom"
import './NotFound.css'

export default function NotFound() {

    const navigate = useNavigate()

    function handeLinkClick(e) {
        e.preventDefault();
        navigate(-1);
    }

    return <div className="page-container">
        <div className="content">
            <h1>404</h1>
            <h2>Page not found!</h2>
            <a href="/" onClick={handeLinkClick}>← Go back</a>
        </div>
    </div>

}